import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import type { NextAuthOptions } from 'next-auth'
import { env } from '@/utils/env'

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
