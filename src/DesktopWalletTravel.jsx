// Desktop Wallet Travel — hero photo + progress (left) with milestones/insurance (right).

function WalletTravelDesktopMain({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const saved = 1156, goal = 3400;
  const pct = Math.round(saved / goal * 100);

  const milestones = [
    { i: 'plane', t: 'Vuelos asegurados', s: 'Reservados al 50%', done: true },
    { i: 'bed', t: 'Hotel asegurado', s: 'Bungalow Veligandu', done: true },
    { i: 'umbrella', t: 'Tours y experiencias', s: 'Snorkel + cena privada', done: false, pct: 0.4 },
    { i: 'check', t: 'Viaje confirmado', s: 'Al alcanzar $3,400', done: false },
  ];

  return (
    <DesktopShell dark={dark} active="wallet" title="Wallet Aventuria" subtitle="Maldivas 2026 · 15 sep · ahorro con destino y fecha">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24 }}>
        <div>
          <div style={{
            borderRadius: 28, overflow: 'hidden', position: 'relative', height: 360, color: '#fff',
            backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.1) 0%, rgba(0,37,87,0.35) 50%, rgba(0,37,87,0.95) 100%), url(${RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=80')})`,
            backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 20px 48px rgba(0,37,87,0.3)', marginBottom: 24,
          }}>
            <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ padding: '7px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', color: '#fff', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)' }}>Maldivas · 15 sep 2026</div>
              <div style={{ padding: '7px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', background: 'rgba(61,255,223,0.92)', color: C.mediterraneo, textTransform: 'uppercase' }}>{pct}%</div>
            </div>
            <div style={{ position: 'absolute', left: 28, right: 28, bottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', opacity: 0.85, textTransform: 'uppercase' }}>BILLETERA</div>
              <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: -0.015, marginTop: 4 }}>Maldivas 2026</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 16 }}>
                <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: -0.025 }}>${saved.toLocaleString()}</div>
                <div style={{ fontSize: 16, opacity: 0.7 }}>/ ${goal.toLocaleString()}</div>
              </div>
              <div style={{ height: 8, background: 'rgba(255,255,255,0.22)', borderRadius: 999, marginTop: 14, overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: `linear-gradient(90deg,${C.waikiki},#fff)`, borderRadius: 999 }}/>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            <button style={{ flex: 1, padding: 15, borderRadius: 14, border: 0, background: dark ? '#fff' : C.mediterraneo, color: dark ? C.mediterraneo : '#fff', fontWeight: 700, fontSize: 15, fontFamily: FONT, cursor: 'pointer' }}>Aportar $50</button>
            <button style={{ flex: 1, padding: 15, borderRadius: 14, border: `1px solid ${border}`, background: 'transparent', color: fg, fontWeight: 600, fontSize: 15, fontFamily: FONT, cursor: 'pointer' }}>Editar meta</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, padding: 18, color: fg }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>RENDIMIENTO</div>
              <div style={{ fontSize: 24, fontWeight: 800, marginTop: 6 }}>11<span style={{ fontSize: 14 }}>%</span></div>
              <div style={{ fontSize: 11, color: sub, marginTop: 2 }}>anual · ya activo</div>
            </div>
            <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, padding: 18, color: fg }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>SEGURO</div>
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6 }}>Incluido</div>
              <div style={{ fontSize: 11, color: sub, marginTop: 2 }}>cancelación + médico</div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 12 }}>HITOS DE TU VIAJE</div>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 20, padding: '4px 20px', color: fg, marginBottom: 20 }}>
            {milestones.map((m, i) => (
              <div key={m.i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 0', borderBottom: i < milestones.length - 1 ? `1px solid ${border}` : 'none', opacity: m.done || m.pct ? 1 : 0.5 }}>
                <div style={{ width: 34, height: 34, borderRadius: 999, flexShrink: 0, background: m.done ? '#12B886' : (m.pct ? GRADIENT_IA : dark ? 'rgba(255,255,255,0.08)' : C.ink100), display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  {m.done ? <Ic name="check" size={15} color="#fff"/> : <Ic name={m.i} size={15} color={m.pct ? '#fff' : sub}/>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{m.t}</div>
                  <div style={{ fontSize: 12, color: sub, marginTop: 1 }}>{m.s}</div>
                </div>
                {m.done && <div style={{ fontSize: 11, fontWeight: 700, color: '#12B886', letterSpacing: '0.1em' }}>HECHO</div>}
                {m.pct && <div style={{ fontSize: 12, fontWeight: 700, color: dark ? C.waikiki : C.maldivas }}>{Math.round(m.pct * 100)}%</div>}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 12 }}>FECHAS IMPORTANTES</div>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 20, padding: '4px 20px', color: fg }}>
            {[
              { t: 'Último aporte para asegurar tarifa', d: '30 jun 2026' },
              { t: 'Pago final del viaje', d: '15 ago 2026' },
              { t: 'Fecha de salida', d: '15 sep 2026' },
            ].map((r, i, arr) => (
              <div key={r.t} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{r.t}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: sub }}>{r.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

function WalletTravelDesktopCatalog({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  return (
    <DesktopShell dark={dark} active="wallet" title="Elige tu destino" subtitle="4 destinos curados · ahorra a tu ritmo, viaja seguro.">
      <div style={{ background: fieldBg, border: `1px solid ${border}`, borderRadius: 14, padding: '15px 18px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, maxWidth: 480 }}>
        <Ic name="search" size={17} color={sub}/>
        <div style={{ flex: 1, fontSize: 14, color: sub, fontWeight: 500 }}>Buscar destino o fecha</div>
        <Ic name="sliders-horizontal" size={17} color={sub}/>
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
        {['Todos', 'Playa', 'Ciudad', 'Aventura', 'Cultura'].map((f, i) => (
          <div key={f} style={{ padding: '9px 18px', borderRadius: 999, fontSize: 13, fontWeight: 700, background: i === 0 ? (dark ? C.waikiki : C.mediterraneo) : (dark ? 'transparent' : '#fff'), color: i === 0 ? (dark ? C.mediterraneo : '#fff') : fg, border: i === 0 ? 'none' : `1px solid ${border}` }}>{f}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {DESTINOS.map(d => (
          <DestCard key={d.id} d={d} height={220}
            badge={<div style={{ padding: '6px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', background: 'rgba(255,255,255,0.22)', color: '#fff', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>{d.season}</div>}
            footer={
              <div style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>DESDE</div>
                  <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.01, marginTop: 2, color: fg }}>${d.price.toLocaleString()}</div>
                </div>
                <button style={{ padding: '12px 18px', borderRadius: 12, border: 0, background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: FONT, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Crear wallet <Ic name="arrow-right" size={14} color="#fff"/>
                </button>
              </div>
            }
          />
        ))}
      </div>
    </DesktopShell>
  );
}

Object.assign(window, { WalletTravelDesktopMain, WalletTravelDesktopCatalog });
