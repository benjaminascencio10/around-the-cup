'use client'

import { Button, Heading, Label, Stack, Text } from '@primer/react'
import { ArrowRightIcon } from '@primer/octicons-react'
import { useI18n } from './i18n'

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      style={{
        maxWidth: 1080,
        margin: '0 auto',
        padding: '64px 24px',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 48,
          alignItems: 'center',
        }}
      >
        <Stack direction="vertical" gap="normal">
          <div>
            <Label variant="accent">{t.hero.badge}</Label>
          </div>
          <Heading
            as="h1"
            variant="large"
            style={{ fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            {t.hero.title}
          </Heading>
          <Text
            size="large"
            style={{ color: 'var(--fgColor-muted)', maxWidth: 480 }}
          >
            {t.hero.subtitle}
          </Text>
          <Stack direction="horizontal" gap="condensed" wrap="wrap">
            <Button
              variant="primary"
              size="large"
              as="a"
              href="#shop"
              trailingVisual={ArrowRightIcon}
            >
              {t.hero.primary}
            </Button>
            <Button size="large" as="a" href="#services">
              {t.hero.secondary}
            </Button>
          </Stack>
        </Stack>

        <div
          style={{
            borderRadius: 'var(--borderRadius-large, 16px)',
            overflow: 'hidden',
            border: 'var(--borderWidth-thin) solid var(--borderColor-default)',
            boxShadow: 'var(--shadow-resting-medium)',
            aspectRatio: '4 / 3',
          }}
        >
          <img
            src="/images/hero-coffee.png"
            alt="Latte con arte de barista sobre una mesa de madera"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}
