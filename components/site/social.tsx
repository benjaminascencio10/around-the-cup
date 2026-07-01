'use client'

import { Button, Heading, Stack, Text } from '@primer/react'
import { LinkExternalIcon } from '@primer/octicons-react'
import { InstagramIcon, TikTokIcon } from './brand-icons'
import { useI18n } from './i18n'

const INSTAGRAM_URL = 'https://instagram.com/Around_thecup'
const TIKTOK_URL = 'https://tiktok.com/@aroundthecup'

export function Social() {
  const { t } = useI18n()

  return (
    <section
      id="social"
      style={{
        maxWidth: 1080,
        margin: '0 auto',
        padding: '64px 24px',
        width: '100%',
      }}
    >
      <Stack direction="vertical" gap="spacious">
        <Stack direction="vertical" gap="condensed">
          <Heading as="h2" variant="medium" style={{ fontSize: 36 }}>
            {t.social.title}
          </Heading>
          <Text
            size="large"
            style={{ color: 'var(--fgColor-muted)', maxWidth: 600 }}
          >
            {t.social.subtitle}
          </Text>
        </Stack>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          <SocialCard
            label="Instagram"
            handle="@Around_thecup"
            href={INSTAGRAM_URL}
            cta={t.social.instagram}
            icon={<InstagramIcon size={26} />}
            gradient="linear-gradient(135deg, #feda75, #d62976, #4f5bd5)"
          />
          <SocialCard
            label="TikTok"
            handle="@aroundthecup"
            href={TIKTOK_URL}
            cta={t.social.tiktok}
            icon={<TikTokIcon size={26} />}
            gradient="linear-gradient(135deg, #25F4EE, #000000, #FE2C55)"
          />
        </div>
      </Stack>
    </section>
  )
}

function SocialCard({
  label,
  handle,
  href,
  cta,
  icon,
  gradient,
}: {
  label: string
  handle: string
  href: string
  cta: string
  icon: React.ReactNode
  gradient: string
}) {
  return (
    <div
      style={{
        border: 'var(--borderWidth-thin) solid var(--borderColor-default)',
        borderRadius: 'var(--borderRadius-large, 12px)',
        overflow: 'hidden',
        backgroundColor: 'var(--bgColor-default)',
      }}
    >
      <div
        style={{
          background: gradient,
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
        }}
      >
        {icon}
      </div>
      <Stack direction="vertical" gap="normal" padding="normal">
        <Stack direction="horizontal" align="center" justify="space-between">
          <Stack direction="vertical" gap="none">
            <Heading as="h3" variant="small">
              {label}
            </Heading>
            <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
              {handle}
            </Text>
          </Stack>
        </Stack>
        <Button
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          block
          trailingVisual={LinkExternalIcon}
        >
          {cta}
        </Button>
      </Stack>
    </div>
  )
}
