// src/types/next-server.d.ts
declare module 'next/server' {
  import type {
    NextRequest as Req,
    NextResponse as Res,
  } from 'next/dist/server/web/spec-extension/adapters'
  export type NextRequest = Req
  export const NextResponse: typeof Res
}
