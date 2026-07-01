'use client'

import { Stack, Text } from '@primer/react'
import { InstagramIcon, TikTokIcon } from './brand-icons'
import { useI18n } from './i18n'

export function SiteFooter() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: 'var(--borderWidth-thin) solid var(--borderColor-default)',
        backgroundColor: 'var(--bgColor-muted)',
      }}
    >
      <Stack
        direction="horizontal"
        align="center"
        justify="space-between"
        padding="normal"
        wrap="wrap"
        gap="normal"
        style={{ maxWidth: 1080, margin: '0 auto', width: '100%' }}
      >
        <Stack direction="vertical" gap="none">
          <Text weight="semibold">Around the Cup</Text>
          <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
            © {year} Around the Cup. {t.footer.rights}
          </Text>
        </Stack>

        <Stack direction="horizontal" gap="normal" align="center">
          <a
            href="https://instagram.com/Around_thecup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: 'var(--fgColor-muted)', display: 'inline-flex' }}
          >
            <InstagramIcon size={22} />
          </a>
          <a
            href="https://tiktok.com/@aroundthecup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            style={{ color: 'var(--fgColor-muted)', display: 'inline-flex' }}
          >
            <TikTokIcon size={22} />
          </a>
        </Stack>
      </Stack>
    </footer>
  )
}
