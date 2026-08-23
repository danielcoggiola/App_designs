// Wallet Libre — Flexible Savings Wallet
// Main screen + contribute sheet variant.

function WalletLibreScreen({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const subtle = dark ? 'rgba(255,255,255,0.42)' : C.ink300;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  const saved = 1842.50;
  const yieldEarned = 84.30;

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>WALLET LIBRE</div>
            <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.012, marginTop: 2, lineHeight: 1.2 }}>Luna de miel en Maldivas</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="more-horizontal" size={18} color={fg}/>
          </div>
        </div>

        {/* Hero — gradient with airy "freedom" feel */}
        <div style={{
          borderRadius: 24, padding: 22, color: '#fff', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(155deg,#002557 0%,#0179E2 70%,#3DFFDF 130%)',
          boxShadow: '0 16px 40px rgba(0,37,87,0.32)', marginBottom: 16,
        }}>
          <div style={{ position: 'absolute', right: -50, top: -50, width: 180, height: 180,
            background: 'radial-gradient(circle,#3DFFDF 0%,transparent 65%)', opacity: 0.4 }}/>
          <div style={{ position: 'absolute', right: 14, top: 14, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <span style={{ background: 'rgba(255,255,255,0.18)', padding: '5px 9px', borderRadius: 999, backdropFilter: 'blur(6px)' }}>
              <span style={{ color: C.waikiki }}>11%</span> anual
            </span>
          </div>

          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', opacity: 0.85, textTransform: 'uppercase' }}>AHORRADO</div>
          <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: -0.025, marginTop: 4, lineHeight: 1 }}>
            ${Math.floor(saved).toLocaleString()}
            <span style={{ fontSize: 22, fontWeight: 700, opacity: 0.7 }}>.{(saved%1).toFixed(2).slice(2)}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 12, fontWeight: 600 }}>
            <Ic name="trending-up" size={13} color={C.waikiki}/>
            <span style={{ color: C.waikiki }}>+${yieldEarned.toFixed(2)} ganado por rendimiento</span>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
            <button style={{ flex: 1, padding: '12px', borderRadius: 12, border: 0, background: '#fff', color: C.mediterraneo, fontWeight: 700, fontSize: 14, fontFamily: FONT, cursor: 'pointer' }}>Aportar</button>
            <button style={{ flex: 1, padding: '12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', fontWeight: 600, fontSize: 14, fontFamily: FONT, cursor: 'pointer' }}>Retirar</button>
          </div>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 13, fontWeight: 600, color: dark ? C.waikiki : C.maldivas,
          fontStyle: 'italic', marginBottom: 16, letterSpacing: -0.005,
        }}>
          "Ahorra con propósito, viaja cuando estés listo, retíralo cuando quieras."
        </div>

        {/* Growth visual — sparkline */}
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, padding: 16, marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>CRECIMIENTO · 6 MESES</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 3 }}>+$284<span style={{ color: '#12B886' }}> ▲</span></div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {['1M','6M','1Y'].map((t, i) => (
                <div key={t} style={{
                  padding: '5px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700,
                  background: i === 1 ? (dark ? C.maldivas : C.mediterraneo) : 'transparent',
                  color: i === 1 ? '#fff' : sub,
                }}>{t}</div>
              ))}
            </div>
          </div>
          {/* Sparkline */}
          <svg viewBox="0 0 300 80" width="100%" height="70" preserveAspectRatio="none">
            <defs>
              <linearGradient id="spG" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#0179E2" stopOpacity="0.35"/>
                <stop offset="100%" stopColor="#0179E2" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,68 L40,62 L75,58 L110,52 L145,46 L180,38 L215,34 L250,24 L300,12 L300,80 L0,80 Z" fill="url(#spG)"/>
            <path d="M0,68 L40,62 L75,58 L110,52 L145,46 L180,38 L215,34 L250,24 L300,12" stroke="#0179E2" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <circle cx="300" cy="12" r="4" fill="#3DFFDF" stroke="#fff" strokeWidth="2"/>
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: subtle, fontWeight: 600, marginTop: 4 }}>
            <span>NOV</span><span>DIC</span><span>ENE</span><span>FEB</span><span>MAR</span><span>ABR</span>
          </div>
        </div>

        {/* Convert to trip nudge */}
        <div style={{
          background: card, border: `1px dashed ${dark ? 'rgba(61,255,223,0.4)' : 'rgba(1,121,226,0.35)'}`,
          borderRadius: 18, padding: 14, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
          cursor: 'pointer',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, background: GRADIENT_IA,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Ic name="plane-takeoff" size={20} color="#fff"/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>¿Listo para tu aventura?</div>
            <div style={{ fontSize: 11, color: sub, marginTop: 2, lineHeight: 1.4 }}>Convierte tu ahorro en un viaje con destino y fechas.</div>
          </div>
          <Ic name="arrow-right" size={16} color={dark ? C.waikiki : C.caribe}/>
        </div>

        {/* Features */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>BENEFICIOS</div>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 16, padding: '4px 14px', marginBottom: 14 }}>
          {[
            { i: 'infinity', t: 'Sin monto mínimo', s: 'Aporta lo que quieras, cuando quieras' },
            { i: 'percent', t: 'Sin comisiones', s: 'Ni por aportar ni por retirar' },
            { i: 'shield-check', t: 'Fondos protegidos', s: 'Resguardados por institución regulada' },
          ].map((f, i, arr) => (
            <div key={f.i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0',
              borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: dark ? 'rgba(1,121,226,0.18)' : 'rgba(1,121,226,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Ic name={f.i} size={16} color={dark ? C.waikiki : C.maldivas}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{f.t}</div>
                <div style={{ fontSize: 11, color: sub, marginTop: 1 }}>{f.s}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust footer */}
        <div style={{ fontSize: 9, color: subtle, fontWeight: 500, lineHeight: 1.5, textAlign: 'center', marginTop: 18 }}>
          Rendimiento variable. Aventuria S.A. de C.V., regulada.
        </div>
      </div>
    </div>
  );
}

// Contribute flow — secondary screen
function WalletLibreContribute({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const presets = [50, 100, 250, 500];

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>APORTAR</div>
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: dark ? C.waikiki : C.maldivas, textTransform: 'uppercase', marginBottom: 3 }}>WALLET LIBRE</div>
        <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.012, marginBottom: 14 }}>Luna de miel en Maldivas</div>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.01, marginBottom: 22, lineHeight: 1.15 }}>
          ¿Cuánto quieres aportar hoy?
        </div>

        {/* Big amount */}
        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 22,
          padding: '28px 20px', textAlign: 'center', marginBottom: 14,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>MONTO</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4, marginTop: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: sub }}>$</span>
            <span style={{ fontSize: 56, fontWeight: 900, letterSpacing: -0.03, lineHeight: 1 }}>250</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: sub }}>.00</span>
          </div>
          <div style={{ fontSize: 11, color: sub, marginTop: 8, fontWeight: 600 }}>
            ≈ <span style={{ color: '#12B886' }}>+$2.30</span> al mes en rendimiento
          </div>
        </div>

        {/* Presets */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8, marginBottom: 18 }}>
          {presets.map(p => (
            <div key={p} style={{
              padding: '12px 0', textAlign: 'center', borderRadius: 12,
              background: p === 250 ? (dark ? C.maldivas : C.mediterraneo) : card,
              color: p === 250 ? '#fff' : fg,
              border: p === 250 ? 'none' : `1px solid ${border}`,
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}>${p}</div>
          ))}
        </div>

        {/* Source */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>DESDE</div>
        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 14, padding: 14,
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16,
        }}>
          <div style={{ width: 38, height: 28, borderRadius: 6, background: 'linear-gradient(135deg,#1A1F71,#0031D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: '#fff', letterSpacing: 0.5 }}>VISA</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Visa · 4421</div>
            <div style={{ fontSize: 11, color: sub, marginTop: 1 }}>Cuenta principal</div>
          </div>
          <Ic name="chevron-right" size={16} color={sub}/>
        </div>

        {/* Recurring toggle */}
        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 14, padding: 14,
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: dark ? 'rgba(61,255,223,0.15)' : 'rgba(1,121,226,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Ic name="repeat" size={16} color={dark ? C.waikiki : C.maldivas}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Aporte recurrente</div>
            <div style={{ fontSize: 11, color: sub, marginTop: 1 }}>Cada lunes · automático</div>
          </div>
          <div style={{ width: 40, height: 24, borderRadius: 999, background: dark ? C.waikiki : C.caribe, position: 'relative' }}>
            <div style={{ width: 20, height: 20, borderRadius: 999, background: '#fff', position: 'absolute', top: 2, left: 18 }}/>
          </div>
        </div>

        <button style={{
          width: '100%', padding: 16, borderRadius: 14, border: 0,
          background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 15,
          fontFamily: FONT, cursor: 'pointer', boxShadow: '0 10px 24px rgba(1,121,226,0.36)',
        }}>Confirmar aporte de $250</button>
      </div>
    </div>
  );
}

Object.assign(window, { WalletLibreScreen, WalletLibreContribute });
