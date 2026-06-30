'use client'

import { Button, Heading, Stack, Text } from '@primer/react'
import { useI18n } from './i18n'

export function SiteHeader() {
  const { t, lang, setLang } = useI18n()

  const navItems = [
    { href: '#services', label: t.nav.services },
    { href: '#shop', label: t.nav.shop },
    { href: '#social', label: t.nav.social },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: 'var(--bgColor-default)',
        borderBottom:
          'var(--borderWidth-thin) solid var(--borderColor-default)',
        backdropFilter: 'saturate(180%) blur(8px)',
      }}
    >
      <Stack
        direction="horizontal"
        align="center"
        justify="space-between"
        padding="condensed"
        style={{ maxWidth: 1080, margin: '0 auto', width: '100%' }}
      >
        <Stack direction="horizontal" gap="condensed" align="center">
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: 'var(--bgColor-emphasis, #1f2328)',
              color: 'var(--fgColor-onEmphasis, #ffffff)',
              fontSize: 16,
            }}
          >
            ☕
          </span>
          <span style={{ fontSize: 18, fontWeight: 600 }}>
            Around the Cup
          </span>
        </Stack>

        <Stack
          direction="horizontal"
          gap="normal"
          align="center"
          style={{ display: 'flex' }}
        >
          <nav aria-label="Primary">
            <Stack
              direction="horizontal"
              gap="normal"
              align="center"
              wrap="wrap"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    color: 'var(--fgColor-muted)',
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </Stack>
          </nav>

          <Stack direction="horizontal" gap="none" align="center">
            <LangButton
              active={lang === 'es'}
              onClick={() => setLang('es')}
              label="ES"
            />
            <Text style={{ color: 'var(--fgColor-muted)' }}>/</Text>
            <LangButton
              active={lang === 'en'}
              onClick={() => setLang('en')}
              label="EN"
            />
          </Stack>

          <Button variant="primary" as="a" href="#contact">
            {t.cta.work}
          </Button>
        </Stack>
      </Stack>
    </header>
  )
}

function LangButton({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 6px',
        fontSize: 13,
        fontWeight: 600,
        color: active ? 'var(--fgColor-default)' : 'var(--fgColor-muted)',
      }}
    >
      {label}
    </button>
  )
}
