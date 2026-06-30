'use client'

import { Heading, Stack, Text } from '@primer/react'
import {
  DeviceCameraVideoIcon,
  MegaphoneIcon,
  SparkleIcon,
  RocketIcon,
} from '@primer/octicons-react'
import { useI18n } from './i18n'

const icons = [DeviceCameraVideoIcon, MegaphoneIcon, SparkleIcon, RocketIcon]

export function Services() {
  const { t } = useI18n()

  return (
    <section
      id="services"
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
            {t.services.title}
          </Heading>
          <Text size="large" style={{ color: 'var(--fgColor-muted)', maxWidth: 600 }}>
            {t.services.subtitle}
          </Text>
        </Stack>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'var(--bgColor-muted)',
                  border:
                    'var(--borderWidth-thin) solid var(--borderColor-default)',
                  borderRadius: 'var(--borderRadius-large, 12px)',
                  padding: 24,
                }}
              >
                <Stack direction="vertical" gap="normal">
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--borderRadius-medium, 10px)',
                      backgroundColor: 'var(--bgColor-default)',
                      border:
                        'var(--borderWidth-thin) solid var(--borderColor-default)',
                      color: 'var(--fgColor-accent, #0969da)',
                    }}
                  >
                    <Icon size={22} />
                  </span>
                  <Heading as="h3" variant="small">
                    {item.title}
                  </Heading>
                  <Text size="medium" style={{ color: 'var(--fgColor-muted)' }}>
                    {item.body}
                  </Text>
                </Stack>
              </div>
            )
          })}
        </div>
      </Stack>
    </section>
  )
}
