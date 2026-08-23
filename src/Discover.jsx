// Discovery — "Elige tu próximo destino"
// Search bar + region cards (Europa, África). Photo-driven, no clutter.

function DiscoverScreen({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.1)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  const regions = [
    {
      id: 'europa',
      name: 'Europa',
      subtitle: 'París · Roma · Lisboa',
      count: '24 destinos',
      img: RES('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=80'),
      hint: 'Capital · 5 noches',
      featured: 'París',
      countryFlag: '🇫🇷',
    },
    {
      id: 'africa',
      name: 'África',
      subtitle: 'Kenia · Tanzania · Marruecos',
      count: '12 destinos',
      img: RES('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&q=80'),
      hint: 'Safari · 8 noches',
      featured: 'Masai Mara',
      countryFlag: '🇰🇪',
    },
  ];

  return (
    <div style={{
      width: '100%', height: '100%', overflow: 'auto', position: 'relative',
      background: surface, color: fg, fontFamily: FONT,
    }}>
      <div style={{ padding: '8px 20px 100px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: dark ? 'rgba(255,255,255,0.08)' : C.ink50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>EXPLORA</div>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: dark ? 'rgba(255,255,255,0.08)' : C.ink50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Ic name="sliders-horizontal" size={18} color={fg}/>
          </div>
        </div>

        {/* Title */}
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
          color: dark ? C.waikiki : C.maldivas, textTransform: 'uppercase', marginBottom: 8,
        }}>Descubre</div>
        <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.02, lineHeight: 1.05 }}>
          Elige tu próximo<br/>destino.
        </div>
        <div style={{ fontSize: 12, color: sub, marginTop: 8, marginBottom: 22, lineHeight: 1.5, fontWeight: 500 }}>
          Empieza por una región — luego elegimos juntos el viaje perfecto.
        </div>

        {/* Search bar */}
        <div style={{
          background: fieldBg, border: `1px solid ${border}`, borderRadius: 14,
          padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10,
          boxShadow: dark ? 'none' : '0 2px 8px rgba(0,37,87,0.05)',
        }}>
          <Ic name="search" size={18} color={sub}/>
          <div style={{ flex: 1, fontSize: 14, color: sub, fontWeight: 500 }}>Buscar país, ciudad o experiencia</div>
          <div style={{
            padding: '4px 8px', borderRadius: 6, background: dark ? 'rgba(255,255,255,0.1)' : C.ink50,
            fontSize: 10, fontWeight: 700, color: sub, letterSpacing: 0.05,
          }}>⌘K</div>
        </div>

        {/* Quick filter chips */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 22, paddingBottom: 2 }}>
          {[
            { l: 'Todos', active: true },
            { l: 'Playa', active: false },
            { l: 'Ciudad', active: false },
            { l: 'Aventura', active: false },
            { l: 'Cultura', active: false },
          ].map(f => (
            <div key={f.l} style={{
              padding: '7px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, flexShrink: 0,
              background: f.active ? (dark ? C.waikiki : C.mediterraneo) : 'transparent',
              color: f.active ? (dark ? C.mediterraneo : '#fff') : sub,
              border: f.active ? 'none' : `1px solid ${border}`,
              cursor: 'pointer',
            }}>{f.l}</div>
          ))}
        </div>

        {/* Section eyebrow */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>POR REGIÓN</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: dark ? C.waikiki : C.caribe, cursor: 'pointer' }}>Ver todas</div>
        </div>

        {/* Region cards — large, photo-driven */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {regions.map(r => (
            <div key={r.id} style={{
              borderRadius: 22, overflow: 'hidden', position: 'relative',
              cursor: 'pointer', height: 220,
              backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.05) 0%, rgba(0,37,87,0.35) 50%, rgba(0,37,87,0.95) 100%), url(${r.img})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              boxShadow: dark ? '0 12px 32px rgba(0,0,0,0.45)' : '0 12px 32px rgba(0,37,87,0.18)',
              border: dark ? `1px solid ${border}` : 'none',
            }}>
              {/* Top: count badge */}
              <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between' }}>
                <div style={{
                  padding: '5px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                  background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)', color: '#fff',
                  textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)',
                }}>{r.count}</div>
                <div style={{
                  width: 32, height: 32, borderRadius: 999,
                  background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}>
                  <Ic name="arrow-up-right" size={14} color="#fff"/>
                </div>
              </div>

              {/* Bottom content */}
              <div style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: '#fff' }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', opacity: 0.9, textTransform: 'uppercase',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span>{r.countryFlag}</span>
                  <span>DESTACADO · {r.featured.toUpperCase()}</span>
                </div>
                <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: -0.02, marginTop: 4, lineHeight: 1 }}>
                  {r.name}
                </div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 6, fontWeight: 500 }}>
                  {r.subtitle}
                </div>
                {/* Compact CTA strip */}
                <div style={{
                  marginTop: 14, padding: '10px 14px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Ic name="compass" size={14} color="#fff"/>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{r.hint}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.85, letterSpacing: 0.04 }}>EXPLORAR →</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div style={{ fontSize: 10, color: sub, fontWeight: 500, lineHeight: 1.5, textAlign: 'center', marginTop: 22 }}>
          Más regiones próximamente · Asia, Oceanía, América Latina
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DiscoverScreen });
