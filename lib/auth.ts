import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'

const JWT_SECRET =
  process.env.ADMIN_JWT_SECRET ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'om-sunbuild-secret-jwt-key-2026'

export const COOKIE_NAME = 'admin_session'

export interface SessionPayload {
  username: string
  name: string
  role: string
  exp: number
}

/**
 * Hashes a plain password using bcrypt (10 rounds)
 */
export async function hashPassword(plainText: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(plainText, salt)
}

/**
 * Verifies a plain password against the stored bcrypt hash
 */
export async function verifyPassword(plainText: string, hash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(plainText, hash)
  } catch (err) {
    console.error('[Auth] Password compare error:', err)
    return false
  }
}

/**
 * Creates a tamper-proof cryptographically signed session token
 */
export function createSessionToken(user: { username: string; name?: string; role?: string }): string {
  const payload: SessionPayload = {
    username: user.username,
    name: user.name || 'Admin',
    role: user.role || 'admin',
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  }

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url')
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(payloadB64)
    .digest('base64url')

  return `${payloadB64}.${signature}`
}

/**
 * Verifies and decodes a signed session token
 */
export function verifySessionToken(token: string | undefined | null): SessionPayload | null {
  if (!token) return null

  try {
    const parts = token.split('.')
    if (parts.length !== 2) return null

    const [payloadB64, signature] = parts

    const expectedSignature = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(payloadB64)
      .digest('base64url')

    // Constant-time comparison to prevent timing attacks
    const sigA = Buffer.from(signature)
    const sigB = Buffer.from(expectedSignature)
    if (sigA.length !== sigB.length || !crypto.timingSafeEqual(sigA, sigB)) {
      return null
    }

    const payloadJson = Buffer.from(payloadB64, 'base64url').toString('utf8')
    const payload: SessionPayload = JSON.parse(payloadJson)

    // Check expiration
    if (Date.now() > payload.exp) {
      return null
    }

    return payload
  } catch {
    return null
  }
}
