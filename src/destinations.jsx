// Destination data + photo card component.
// Photo placeholders use Unsplash; gradient fallback gradient overlays for legibility.

const DESTINOS = [
  {
    id: 'maldivas',
    name: 'Maldivas',
    sub: 'Atolones · 7 noches',
    flag: '🇲🇻',
    country: 'Maldivas',
    price: 2890,
    season: 'Mar – Abr',
    img: RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80'),
    grad: 'linear-gradient(135deg,#0179E2,#3DFFDF)',
    perks: ['Bungalow sobre el mar', 'Snorkel guiado', 'Traslados privados'],
  },
  {
    id: 'paris',
    name: 'París',
    sub: 'Capital · 5 noches',
    flag: '🇫🇷',
    country: 'Francia',
    price: 1640,
    season: 'May – Jun',
    img: RES('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80'),
    grad: 'linear-gradient(135deg,#0031D4,#0179E2)',
    perks: ['Boutique en Le Marais', 'Tour Louvre', 'Crucero por el Sena'],
  },
  {
    id: 'newyork',
    name: 'Nueva York',
    sub: 'Manhattan · 6 noches',
    flag: '🇺🇸',
    country: 'EE.UU.',
    price: 2240,
    season: 'Sep – Oct',
    img: RES('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'),
    grad: 'linear-gradient(135deg,#002557,#0031D4)',
    perks: ['Hotel en Midtown', 'Pase a museos', 'Broadway show'],
  },
  {
    id: 'safari',
    name: 'Safari Kenia',
    sub: 'Masai Mara · 8 noches',
    flag: '🇰🇪',
    country: 'Kenia',
    price: 4180,
    season: 'Jul – Ago',
    img: RES('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80'),
    grad: 'linear-gradient(135deg,#3DFFDF,#0179E2)',
    perks: ['Lodge boutique', '4 game drives', 'Vuelo en globo'],
  },
];

// Card with real photo, dark gradient bottom for legible title.
function DestCard({ d, onClick, badge, footer, height = 200 }) {
  return (
    <div onClick={onClick} style={{
      borderRadius: 18, overflow: 'hidden', position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      background: '#fff', border: `1px solid ${C.ink100}`,
      boxShadow: '0 2px 6px rgba(0,37,87,0.06)',
    }}>
      <div style={{
        height, position: 'relative',
        backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(0,37,87,0.92) 100%), url(${d.img})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        {badge && <div style={{ position: 'absolute', top: 12, left: 12 }}>{badge}</div>}
        <div style={{
          position: 'absolute', left: 14, right: 14, bottom: 12, color: '#fff',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', opacity: 0.85, textTransform: 'uppercase' }}>{d.country}</div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.01, marginTop: 2, lineHeight: 1.1 }}>{d.name}</div>
          <div style={{ fontSize: 11, opacity: 0.85, marginTop: 3 }}>{d.sub}</div>
        </div>
      </div>
      {footer}
    </div>
  );
}

// Compact horizontal mini-card with image thumbnail.
function DestRow({ d, onClick, trailing }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: 10,
      background: '#fff', borderRadius: 16, border: `1px solid ${C.ink100}`,
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: '0 1px 2px rgba(0,37,87,0.04)',
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 12, flexShrink: 0,
        backgroundImage: `url(${d.img})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: C.ink400, textTransform: 'uppercase' }}>{d.country}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: C.mediterraneo, marginTop: 1 }}>{d.name}</div>
        <div style={{ fontSize: 11, color: C.ink400, marginTop: 1 }}>{d.sub}</div>
      </div>
      {trailing}
    </div>
  );
}

Object.assign(window, { DESTINOS, DestCard, DestRow });
