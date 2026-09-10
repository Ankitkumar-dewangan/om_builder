import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifySessionToken, COOKIE_NAME } from '@/lib/auth'
import { AdminShell } from '@/components/admin-shell'

export const metadata = {
  title: 'OM SUNBUILD Admin Portal',
  description: 'Manage Solar Enquiries & Lead Pipeline',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  const session = verifySessionToken(token)

  if (!session) {
    redirect('/login')
  }

  return (
    <AdminShell
      user={{
        username: session.username,
        name: session.name,
        role: session.role,
      }}
    >
      {children}
    </AdminShell>
  )
}
