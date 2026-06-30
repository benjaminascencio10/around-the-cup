'use client'

import { Button, Heading, Label, Stack, Text } from '@primer/react'
import { useI18n } from './i18n'

const images = [
  '/images/product-beans.png',
  '/images/product-mug.png',
  '/images/product-dripper.png',
  '/images/product-kit.png',
]

export function Shop() {
  const { t } = useI18n()

  return (
    <section
      id="shop"
      style={{
        backgroundColor: 'var(--bgColor-muted)',
        borderTop: 'var(--borderWidth-thin) solid var(--borderColor-default)',
        borderBottom:
          'var(--borderWidth-thin) solid var(--borderColor-default)',
      }}
    >
      <div
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
              {t.shop.title}
            </Heading>
            <Text
              size="large"
              style={{ color: 'var(--fgColor-muted)', maxWidth: 600 }}
            >
              {t.shop.subtitle}
            </Text>
          </Stack>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
            }}
          >
            {t.shop.products.map((product, i) => (
              <div
                key={product.name}
                style={{
                  backgroundColor: 'var(--bgColor-default)',
                  border:
                    'var(--borderWidth-thin) solid var(--borderColor-default)',
                  borderRadius: 'var(--borderRadius-large, 12px)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    backgroundColor: 'var(--bgColor-muted)',
                  }}
                >
                  <img
                    src={images[i] || '/placeholder.svg'}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {product.tag ? (
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                      }}
                    >
                      <Label variant="success">{product.tag}</Label>
                    </span>
                  ) : null}
                </div>
                <Stack
                  direction="vertical"
                  gap="condensed"
                  padding="normal"
                  style={{ flex: 1 }}
                >
                  <Stack
                    direction="horizontal"
                    align="center"
                    justify="space-between"
                  >
                    <Heading as="h3" variant="small">
                      {product.name}
                    </Heading>
                    <Text weight="semibold" style={{ fontSize: 18 }}>
                      {product.price}
                    </Text>
                  </Stack>
                  <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                    {product.desc}
                  </Text>
                  <div style={{ marginTop: 'auto', paddingTop: 12 }}>
                    <Button variant="default" block>
                      {t.shop.buy}
                    </Button>
                  </div>
                </Stack>
              </div>
            ))}
          </div>
        </Stack>
      </div>
    </section>
  )
}
