// Wallet Travel — Goal-Based Travel Wallet (specific destination + date)
// Main + catalog of destinations.

function WalletTravelScreen({ dark = false, noYield = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const subtle = dark ? 'rgba(255,255,255,0.42)' : C.ink300;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  const saved = 1156;
  const goal = 3400;
  const pct = Math.round(saved / goal * 100);

  const milestones = [
    { i: 'plane', t: 'Vuelos asegurados', s: 'Reservados al 50%', done: true },
    { i: 'bed', t: 'Hotel asegurado', s: 'Bungalow Veligandu', done: true },
    { i: 'umbrella', t: 'Tours y experiencias', s: 'Snorkel + cena privada', done: false, pct: 0.4 },
    { i: 'check', t: 'Viaje confirmado', s: 'Al alcanzar $3,400', done: false },
  ];

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>WALLET AVENTURIA</div>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="more-horizontal" size={18} color={fg}/>
          </div>
        </div>

        {/* Hero — destination photo */}
        <div style={{
          borderRadius: 24, overflow: 'hidden', position: 'relative', marginBottom: 16,
          height: 280, color: '#fff',
          backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.1) 0%, rgba(0,37,87,0.35) 50%, rgba(0,37,87,0.95) 100%), url(${RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=80')})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          boxShadow: '0 16px 40px rgba(0,37,87,0.3)',
        }}>
          {/* Top row: badge */}
          <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{
              padding: '5px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
              background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
              color: '#fff', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)',
            }}>Maldivas · 15 sep 2026</div>
            <div style={{
              padding: '5px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
              background: 'rgba(61,255,223,0.92)', color: C.mediterraneo, textTransform: 'uppercase',
            }}>{pct}%</div>
          </div>

          {/* Bottom content */}
          <div style={{ position: 'absolute', left: 20, right: 20, bottom: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', opacity: 0.85, textTransform: 'uppercase' }}>BILLETERA</div>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.015, marginTop: 2, lineHeight: 1.05 }}>Maldivas 2026</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 14 }}>
              <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: -0.025, lineHeight: 1 }}>${saved.toLocaleString()}</div>
              <div style={{ fontSize: 13, opacity: 0.7 }}>/ ${goal.toLocaleString()}</div>
            </div>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.22)', borderRadius: 999, marginTop: 10, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: `linear-gradient(90deg,${C.waikiki},#fff)`, borderRadius: 999 }}/>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
          <button style={{ flex: 1, padding: '12px', borderRadius: 12, border: 0, background: dark ? '#fff' : C.mediterraneo, color: dark ? C.mediterraneo : '#fff', fontWeight: 700, fontSize: 14, fontFamily: FONT, cursor: 'pointer' }}>Aportar $50</button>
          <button style={{ flex: 1, padding: '12px', borderRadius: 12, border: `1px solid ${border}`, background: 'transparent', color: fg, fontWeight: 600, fontSize: 14, fontFamily: FONT, cursor: 'pointer' }}>Editar meta</button>
        </div>

        {/* Yield row + insurance row */}
        {!noYield && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 14, padding: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>RENDIMIENTO</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4 }}>11<span style={{ fontSize: 12 }}>%</span></div>
            <div style={{ fontSize: 10, color: sub, marginTop: 1 }}>anual · ya activo</div>
          </div>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 14, padding: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>SEGURO</div>
            <div style={{ fontSize: 14, fontWeight: 800, marginTop: 4 }}>Incluido</div>
            <div style={{ fontSize: 10, color: sub, marginTop: 1 }}>cancelación + médico</div>
          </div>
        </div>
        )}

        {/* Milestones */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 10 }}>HITOS DE TU VIAJE</div>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, padding: 16, marginBottom: 14 }}>
          {milestones.map((m, i) => (
            <div key={m.i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
              borderBottom: i < milestones.length - 1 ? `1px solid ${border}` : 'none',
              opacity: m.done || m.pct ? 1 : 0.5,
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: 999, flexShrink: 0,
                background: m.done ? '#12B886' : (m.pct ? GRADIENT_IA : dark ? 'rgba(255,255,255,0.08)' : C.ink100),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
              }}>
                {m.done ? <Ic name="check" size={14} color="#fff"/> : <Ic name={m.i} size={14} color={m.pct ? '#fff' : sub}/>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{m.t}</div>
                <div style={{ fontSize: 11, color: sub, marginTop: 1 }}>{m.s}</div>
              </div>
              {m.done && <div style={{ fontSize: 10, fontWeight: 700, color: '#12B886', letterSpacing: '0.1em' }}>✓ HECHO</div>}
              {m.pct && <div style={{ fontSize: 11, fontWeight: 700, color: dark ? C.waikiki : C.maldivas }}>{Math.round(m.pct * 100)}%</div>}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 13, fontWeight: 600, color: dark ? C.waikiki : C.maldivas,
          fontStyle: 'italic', textAlign: 'center', marginBottom: 8, letterSpacing: -0.005,
        }}>
          "Tu viaje empieza antes de volar."
        </div>

        <div style={{ fontSize: 9, color: subtle, fontWeight: 500, lineHeight: 1.5, textAlign: 'center', marginTop: 14 }}>
          Fondos resguardados para asegurar servicios de viaje · Aventuria S.A. de C.V.
        </div>
      </div>
    </div>
  );
}

function WalletTravelCatalog({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>ELIGE TU DESTINO</div>
        </div>

        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.015, lineHeight: 1.1 }}>Construye tu viaje<br/>mientras ahorras.</div>
        <div style={{ fontSize: 12, color: sub, marginTop: 6, marginBottom: 18 }}>4 destinos curados · ahorra a tu ritmo, viaja seguro.</div>

        {/* Search */}
        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 14,
          padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
        }}>
          <Ic name="search" size={16} color={sub}/>
          <div style={{ flex: 1, fontSize: 13, color: sub }}>Buscar destino o fecha</div>
          <Ic name="sliders-horizontal" size={16} color={sub}/>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 16, paddingBottom: 2 }}>
          {['Todos', 'Playa', 'Ciudad', 'Aventura', 'Cultura'].map((f, i) => (
            <div key={f} style={{
              padding: '7px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, flexShrink: 0,
              background: i === 0 ? (dark ? C.waikiki : C.mediterraneo) : (dark ? 'transparent' : '#fff'),
              color: i === 0 ? (dark ? C.mediterraneo : '#fff') : fg,
              border: i === 0 ? 'none' : `1px solid ${border}`,
            }}>{f}</div>
          ))}
        </div>

        {/* Destination cards — full-width, photo-driven */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {DESTINOS.map(d => (
            <DestCard key={d.id} d={d} height={170}
              badge={
                <div style={{
                  padding: '5px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                  background: 'rgba(255,255,255,0.22)', color: '#fff', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.25)', textTransform: 'uppercase',
                }}>{d.season}</div>
              }
              footer={
                <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>DESDE</div>
                    <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.01, marginTop: 1, color: fg }}>${d.price.toLocaleString()}</div>
                  </div>
                  <button style={{
                    padding: '10px 14px', borderRadius: 12, border: 0,
                    background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 12,
                    fontFamily: FONT, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    Crear wallet <Ic name="arrow-right" size={13} color="#fff"/>
                  </button>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WalletTravelScreen, WalletTravelCatalog });
