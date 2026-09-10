import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline'
import bcrypt from 'bcryptjs'

// 1. Read environment variables from .env.local or app/.env
function loadEnv() {
  const envPaths = [
    path.resolve(process.cwd(), '.env.local'),
    path.resolve(process.cwd(), 'app', '.env'),
    path.resolve(process.cwd(), '.env'),
  ]

  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8')
      content.split('\n').forEach((line) => {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) return
        const idx = trimmed.indexOf('=')
        if (idx !== -1) {
          const key = trimmed.slice(0, idx).trim()
          const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
          if (!process.env[key]) {
            process.env[key] = val
          }
        }
      })
    }
  }
}

loadEnv()

const rawUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  'https://ufkdpkpukwutoqmhrvdb.supabase.co'

const rawKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.VITE_SUPABASE_ANON ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVma2Rwa3B1a3d1dG9xbWhydmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4NzI4ODcsImV4cCI6MjEwNDQ0ODg4N30.BApdIYky3nK0HvULCLp5P8z_J_5zRFo77hVsNUU-dVk'

const SUPABASE_URL = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '')
const SUPABASE_ANON_KEY = rawKey.trim()

async function ask(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close()
      resolve(ans)
    })
  )
}

async function main() {
  console.log('\n======================================================')
  console.log('⚡ OM SUNBUILD - Admin Account Setup & Password Hasher')
  console.log('======================================================\n')

  let username = process.argv[2]
  let password = process.argv[3]
  let name = process.argv[4] || 'Admin'

  if (!username) {
    username = await ask('Enter desired Admin Username: ')
  }
  if (!password) {
    password = await ask('Enter desired Admin Password: ')
  }

  username = String(username || '').trim()
  password = String(password || '').trim()

  if (!username || !password) {
    console.error('❌ Error: Username and password cannot be empty!')
    process.exit(1)
  }

  console.log(`\n🔒 Hashing password for user "${username}" with bcrypt (10 rounds)...`)
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  console.log('✅ Password hash generated successfully!\n')
  console.log('------------------------------------------------------')
  console.log('SQL Query for Supabase SQL Editor (if inserting manually):')
  console.log(`
INSERT INTO admin_users (username, password_hash, name, role)
VALUES ('${username.replace(/'/g, "''")}', '${passwordHash}', '${name.replace(/'/g, "''")}', 'admin')
ON CONFLICT (username) DO UPDATE
SET password_hash = EXCLUDED.password_hash, updated_at = NOW();
`)
  console.log('------------------------------------------------------\n')

  console.log(`Connecting to Supabase at: ${SUPABASE_URL}...`)

  try {
    const endpoint = `${SUPABASE_URL}/rest/v1/admin_users`
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify({
        username,
        password_hash: passwordHash,
        name,
        role: 'admin',
        updated_at: new Date().toISOString(),
      }),
    })

    if (res.ok) {
      console.log('🎉 SUCCESS: Admin account created/updated directly in Supabase table!')
      console.log(`   Username: ${username}`)
      console.log(`   Password: [Hidden - Hashed in DB]`)
      console.log('   You can now open http://localhost:3000/login and log in!')
    } else {
      const errText = await res.text()
      console.warn('⚠️ Direct Supabase REST insert status:', res.status)
      console.warn('Response:', errText)
      console.log('\n💡 Note: If you haven\'t run "supabase-schema.sql" yet in your Supabase SQL editor, please run it first!')
      console.log('   Dashboard -> SQL Editor -> Run the SQL script from supabase-schema.sql')
    }
  } catch (err) {
    console.error('❌ Network error connecting to Supabase:', err.message)
  }

  console.log('\n======================================================\n')
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
