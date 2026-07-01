import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const CONTACT_EMAIL = 'aroundthecuprgv@gmail.com'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields.' },
      { status: 400 },
    )
  }

  const user = process.env.CONTACT_EMAIL_USER
  const pass = process.env.CONTACT_EMAIL_APP_PASSWORD

  if (!user || !pass) {
    console.error(
      'Contact form is not configured: missing CONTACT_EMAIL_USER or CONTACT_EMAIL_APP_PASSWORD.',
    )
    return NextResponse.json(
      { error: 'Contact form is not configured.' },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: user,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
    })
  } catch (err) {
    console.error('Failed to send contact email', err)
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
