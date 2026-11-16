import { ImageResponse } from 'next/og';
import en from '@/messages/en/common.json';
import es from '@/messages/es/common.json';

export const alt = 'Javier Chi · mk2.javierchiortiz.dev';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const DOMAIN = 'mk2.javierchiortiz.dev';

// 2025 palette, from the dark theme in globals.css.
const colors = {
  primary: '#1a1a2e',
  surface: '#23234a',
  default: '#ffffff',
  muted: '#bfc8e6',
  secondary: '#1e90ff',
  secondaryLight: '#98ccff',
};

// Inter (the sans loaded by the root layout), fetched only for the glyphs on the card.
// Falls back to the built-in font if Google Fonts is unreachable.
async function loadInter(weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(
      text
    )}`;
    const css = await (await fetch(url)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const subtitle = (locale === 'es' ? es : en).hero_subtitle;
  const name = 'Javier Chi';

  const [bold, regular] = await Promise.all([
    loadInter(800, name),
    loadInter(500, `${subtitle}${DOMAIN}`),
  ]);
  const fonts: { name: string; data: ArrayBuffer; weight: 500 | 800; style: 'normal' }[] = [];
  if (bold) fonts.push({ name: 'Inter', data: bold, weight: 800, style: 'normal' });
  if (regular) fonts.push({ name: 'Inter', data: regular, weight: 500, style: 'normal' });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 88px',
          background: `radial-gradient(circle at 85% 20%, ${colors.surface} 0%, ${colors.primary} 60%)`,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 72,
            height: 72,
            borderRadius: 16,
            background: colors.surface,
            border: `2px solid ${colors.secondary}`,
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.default,
            fontSize: 40,
            fontWeight: 800,
          }}
        >
          J
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 132,
              fontWeight: 800,
              color: colors.default,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: 'flex',
              width: 120,
              height: 8,
              marginTop: 36,
              borderRadius: 4,
              background: colors.secondary,
            }}
          />
          <div
            style={{
              display: 'flex',
              marginTop: 32,
              fontSize: 56,
              fontWeight: 500,
              color: colors.muted,
              lineHeight: 1.15,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{ display: 'flex', fontSize: 32, fontWeight: 500, color: colors.secondaryLight }}
        >
          {DOMAIN}
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
