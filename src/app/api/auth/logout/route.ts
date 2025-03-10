import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('admin-auth')
  return response
}
