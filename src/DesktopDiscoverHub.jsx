// Desktop Discover + Productos Hub — grid layouts inside DesktopShell.

function DesktopDiscover({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  const regions = [
    { id: 'europa', name: 'Europa', subtitle: 'París · Roma · Lisboa', count: '24 destinos', img: RES('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=80'), hint: 'Capital · 5 noches', featured: 'París', flag: '🇫🇷' },
    { id: 'africa', name: 'África', subtitle: 'Kenia · Tanzania · Marruecos', count: '12 destinos', img: RES('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&q=80'), hint: 'Safari · 8 noches', featured: 'Masai Mara', flag: '🇰🇪' },
  ];

  return (
    <DesktopShell dark={dark} active="explore" title="Explora" subtitle="Empieza por una región — luego elegimos juntos el viaje perfecto.">
      <div style={{
        background: fieldBg, border: `1px solid ${border}`, borderRadius: 14,
        padding: '15px 18px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, maxWidth: 480,
      }}>
        <Ic name="search" size={18} color={sub}/>
        <div style={{ flex: 1, fontSize: 14, color: sub, fontWeight: 500 }}>Buscar país, ciudad o experiencia</div>
        <div style={{ padding: '4px 8px', borderRadius: 6, background: dark ? 'rgba(255,255,255,0.1)' : C.ink50, fontSize: 10, fontWeight: 700, color: sub }}>⌘K</div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
        {['Todos', 'Playa', 'Ciudad', 'Aventura', 'Cultura'].map((f, i) => (
          <div key={f} style={{
            padding: '9px 18px', borderRadius: 999, fontSize: 13, fontWeight: 700,
            background: i === 0 ? (dark ? C.waikiki : C.mediterraneo) : 'transparent',
            color: i === 0 ? (dark ? C.mediterraneo : '#fff') : sub,
            border: i === 0 ? 'none' : `1px solid ${border}`, cursor: 'pointer',
          }}>{f}</div>
        ))}
      </div>

      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 16 }}>POR REGIÓN</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {regions.map(r => (
          <div key={r.id} style={{
            borderRadius: 24, overflow: 'hidden', position: 'relative', cursor: 'pointer', height: 340,
            backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.05) 0%, rgba(0,37,87,0.35) 50%, rgba(0,37,87,0.95) 100%), url(${r.img})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: dark ? '0 16px 40px rgba(0,0,0,0.45)' : '0 16px 40px rgba(0,37,87,0.18)',
          }}>
            <div style={{ position: 'absolute', top: 18, left: 18, right: 18, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ padding: '6px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>{r.count}</div>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.25)' }}>
                <Ic name="arrow-up-right" size={16} color="#fff"/>
              </div>
            </div>
            <div style={{ position: 'absolute', left: 24, right: 24, bottom: 22, color: '#fff' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', opacity: 0.9, textTransform: 'uppercase', display: 'flex', gap: 6 }}>
                <span>{r.flag}</span><span>DESTACADO · {r.featured.toUpperCase()}</span>
              </div>
              <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: -0.02, marginTop: 6 }}>{r.name}</div>
              <div style={{ fontSize: 14, opacity: 0.85, marginTop: 8, fontWeight: 500 }}>{r.subtitle}</div>
              <div style={{ marginTop: 18, padding: '12px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Ic name="compass" size={15} color="#fff"/><span style={{ fontSize: 13, fontWeight: 600 }}>{r.hint}</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85 }}>EXPLORAR →</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DesktopShell>
  );
}

function DesktopHub({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  const products = [
    { id: 'libre', eyebrow: 'WALLET LIBRE', title: 'Ahorra con propósito', tag: 'Viaja cuando estés listo, retíralo cuando quieras', yield: '11%', img: RES('https://images.unsplash.com/photo-1552432552-06c0b0a94dda?w=800&q=80'), tint: C.maldivas, icon: 'piggy-bank' },
    { id: 'travel', eyebrow: 'WALLET AVENTURIA', title: 'Elige tu viaje y ahorra', tag: 'Destino y fechas definidos, ahorro para un viaje con Aventuria', yield: '11%', img: RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80'), tint: C.caribe, icon: 'map-pin', badge: 'Seguro incluido' },
    { id: 'tnpl', eyebrow: 'TRAVEL NOW · PAY LATER', title: 'Viaja hoy, paga después', tag: 'Tasa anual 38% · colateral: tu ahorro', yield: '38%', yieldLabel: 'tasa', img: RES('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'), tint: C.waikiki, icon: 'plane-takeoff' },
  ];

  return (
    <DesktopShell dark={dark} active="wallet" title="Tus ahorros" subtitle="Tres formas de llegar a tu próximo destino. Elige cómo quieres empezar.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {products.map(p => (
          <div key={p.id} style={{
            borderRadius: 24, overflow: 'hidden', cursor: 'pointer', background: card, border: `1px solid ${border}`,
            boxShadow: dark ? '0 12px 32px rgba(0,0,0,0.35)' : '0 8px 24px rgba(0,37,87,0.08)',
          }}>
            <div style={{
              height: 200, position: 'relative',
              backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.15) 0%, rgba(0,37,87,0.85) 100%), url(${p.img})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}>
              <div style={{ position: 'absolute', top: 16, left: 18, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#fff', opacity: 0.92, textTransform: 'uppercase' }}>{p.eyebrow}</div>
              <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', padding: '7px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>
                <span style={{ color: C.waikiki }}>{p.yield}</span> {p.yieldLabel || 'anual'}
              </div>
              <div style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: '#fff', fontSize: 22, fontWeight: 800, letterSpacing: -0.01, lineHeight: 1.15 }}>{p.title}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 20px' }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg, ${p.tint}, ${C.waikiki})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Ic name={p.icon} size={19} color="#fff"/>
              </div>
              <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: sub }}>{p.tag}</div>
              <Ic name="arrow-right" size={17} color={dark ? '#fff' : C.caribe}/>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 32, paddingTop: 20, borderTop: `1px dashed ${border}`,
        display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 500, color: sub,
      }}>
        <Ic name="shield-check" size={14} color={sub}/>
        <span>Fondos protegidos por institución financiera regulada · Aventuria S.A. de C.V.</span>
      </div>
    </DesktopShell>
  );
}

Object.assign(window, { DesktopDiscover, DesktopHub });
