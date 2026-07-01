'use client'

import { useState } from 'react'
import {
  Button,
  Flash,
  FormControl,
  Heading,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@primer/react'
import { useI18n } from './i18n'

export function Contact() {
  const { t } = useI18n()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Request failed')

      setSent(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      style={{
        maxWidth: 1080,
        margin: '0 auto',
        padding: '64px 24px 96px',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 48,
          alignItems: 'start',
        }}
      >
        <Stack direction="vertical" gap="condensed">
          <Heading as="h2" variant="medium" style={{ fontSize: 36 }}>
            {t.contact.title}
          </Heading>
          <Text
            size="large"
            style={{ color: 'var(--fgColor-muted)', maxWidth: 420 }}
          >
            {t.contact.subtitle}
          </Text>
        </Stack>

        <div
          style={{
            backgroundColor: 'var(--bgColor-default)',
            border: 'var(--borderWidth-thin) solid var(--borderColor-default)',
            borderRadius: 'var(--borderRadius-large, 12px)',
            boxShadow: 'var(--shadow-resting-medium)',
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack direction="vertical" gap="normal" padding="normal">
              {sent ? (
                <Flash variant="success">{t.contact.success}</Flash>
              ) : null}
              {error ? (
                <Flash variant="danger">{t.contact.error}</Flash>
              ) : null}

              <FormControl required>
                <FormControl.Label>{t.contact.name}</FormControl.Label>
                <TextInput
                  block
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl required>
                <FormControl.Label>{t.contact.email}</FormControl.Label>
                <TextInput
                  block
                  type="email"
                  placeholder="hola@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl required>
                <FormControl.Label>{t.contact.message}</FormControl.Label>
                <Textarea
                  block
                  rows={4}
                  resize="vertical"
                  placeholder={t.contact.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                variant="primary"
                block
                size="large"
                disabled={sending}
              >
                {sending ? t.contact.sending : t.contact.send}
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </section>
  )
}
