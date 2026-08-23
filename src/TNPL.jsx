// Travel Now, Pay Later — Financing product, catalog-first.

function TNPLCatalog({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const subtle = dark ? 'rgba(255,255,255,0.42)' : C.ink300;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  const credit = 3200;
  const used = 0;

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>TRAVEL NOW · PAY LATER</div>
        </div>

        {/* Tagline + credit pill — aspiration first */}
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.02, lineHeight: 1.1 }}>
          Viaja hoy.<br/>Paga al volver.
        </div>
        <div style={{ fontSize: 12, color: sub, marginTop: 6, marginBottom: 14 }}>
          Tu ahorro respalda mejores tasas — no un colchón ocioso.
        </div>

        {/* Compact credit indicator */}
        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 16, padding: 14,
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, background: GRADIENT_IA,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Ic name="zap" size={18} color="#fff"/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>LÍNEA APROBADA</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.01 }}>${credit.toLocaleString()}</div>
              <div style={{ fontSize: 11, color: sub }}>· tasa 38% anual</div>
            </div>
          </div>
          <Ic name="info" size={16} color={sub}/>
        </div>

        {/* Big destination hero */}
        <div style={{ position: 'relative', marginBottom: 14 }}>
          <div style={{
            borderRadius: 22, overflow: 'hidden', height: 230, position: 'relative',
            backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(0,37,87,0.95) 100%), url(${DESTINOS[3].img})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: '0 16px 36px rgba(0,37,87,0.28)',
          }}>
            <div style={{ position: 'absolute', top: 14, left: 14 }}>
              <div style={{
                padding: '5px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                background: GRADIENT_IA, color: '#fff', textTransform: 'uppercase',
              }}>iA recomienda</div>
            </div>
            <div style={{ position: 'absolute', top: 14, right: 14 }}>
              <div style={{
                padding: '5px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)',
                color: '#fff', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)',
              }}>{DESTINOS[3].season}</div>
            </div>
            <div style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: '#fff' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', opacity: 0.9, textTransform: 'uppercase' }}>{DESTINOS[3].country}</div>
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.015, marginTop: 2, lineHeight: 1.05 }}>{DESTINOS[3].name}</div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{DESTINOS[3].sub}</div>
              <div style={{
                marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.14)',
                backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', opacity: 0.85 }}>12 PAGOS DE</div>
                  <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.01, marginTop: 1 }}>$389<span style={{ fontSize: 11, opacity: 0.7 }}>/mes</span></div>
                </div>
                <button style={{
                  padding: '10px 14px', borderRadius: 12, border: 0,
                  background: '#fff', color: C.mediterraneo, fontWeight: 700, fontSize: 12,
                  fontFamily: FONT, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  Reservar <Ic name="arrow-right" size={13} color={C.mediterraneo}/>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other destinations grid */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 10 }}>OTROS DESTINOS</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          {DESTINOS.slice(0, 3).map(d => (
            <div key={d.id} style={{
              borderRadius: 16, overflow: 'hidden', background: card, border: `1px solid ${border}`,
            }}>
              <div style={{
                height: 110, position: 'relative',
                backgroundImage: `linear-gradient(180deg, transparent 40%, rgba(0,37,87,0.85) 100%), url(${d.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }}>
                <div style={{ position: 'absolute', left: 10, right: 10, bottom: 8, color: '#fff' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', opacity: 0.85 }}>{d.country.toUpperCase()}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.01, lineHeight: 1.05 }}>{d.name}</div>
                </div>
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: sub }}>desde</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.01 }}>${Math.round(d.price/12)}</div>
                  <div style={{ fontSize: 10, color: sub, fontWeight: 600 }}>/mes</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust footnote */}
        <div style={{
          padding: '12px 14px', background: card, border: `1px solid ${border}`, borderRadius: 12,
          display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12,
        }}>
          <Ic name="shield-check" size={14} color={dark ? C.waikiki : C.maldivas}/>
          <div style={{ fontSize: 11, color: sub, lineHeight: 1.5, fontWeight: 500 }}>
            Tu ahorro respalda el crédito · pago directo al proveedor de viaje · sin comisiones ocultas.
          </div>
        </div>

        <div style={{ fontSize: 9, color: subtle, fontWeight: 500, lineHeight: 1.5, textAlign: 'center', marginTop: 8 }}>
          CAT 38% anual · sujeto a aprobación · Aventuria S.A. de C.V., regulada.
        </div>
      </div>
    </div>
  );
}

// TNPL — credit terms / repayment screen
function TNPLTerms({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const subtle = dark ? 'rgba(255,255,255,0.42)' : C.ink300;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  const total = 4180;
  const months = 12;
  const monthly = 389;
  const interest = monthly * months - total;

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>TÉRMINOS · SAFARI KENIA</div>
        </div>

        {/* Hero strip with image */}
        <div style={{
          borderRadius: 18, overflow: 'hidden', height: 130, position: 'relative', marginBottom: 18,
          backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.2) 0%, rgba(0,37,87,0.92) 100%), url(${DESTINOS[3].img})`,
          backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff',
        }}>
          <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', opacity: 0.85 }}>SAFARI KENIA · 8 NOCHES</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
              <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.02, lineHeight: 1 }}>${total.toLocaleString()}</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>total del viaje</div>
            </div>
          </div>
        </div>

        {/* Repayment headline */}
        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 20, padding: 20, marginBottom: 12,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 6 }}>PAGAS POR MES</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: -0.025, lineHeight: 1 }}>${monthly}</div>
            <div style={{ fontSize: 14, color: sub }}>× {months} meses</div>
          </div>

          {/* Visual breakdown bar */}
          <div style={{ marginTop: 18 }}>
            <div style={{ display: 'flex', height: 8, borderRadius: 999, overflow: 'hidden', marginBottom: 10 }}>
              <div style={{ flex: total, background: C.mediterraneo }}/>
              <div style={{ flex: interest, background: C.maldivas }}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: C.mediterraneo }}/>
                <span style={{ color: sub, fontWeight: 600 }}>Capital ${total.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: C.maldivas }}/>
                <span style={{ color: sub, fontWeight: 600 }}>Interés ${Math.round(interest)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vs typical */}
        <div style={{
          background: dark ? 'rgba(61,255,223,0.08)' : 'rgba(61,255,223,0.16)',
          border: `1px solid ${dark ? 'rgba(61,255,223,0.2)' : 'rgba(1,121,226,0.2)'}`,
          borderRadius: 14, padding: 12,
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
        }}>
          <Ic name="trending-down" size={16} color="#0A8F68"/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: dark ? '#fff' : C.mediterraneo }}>Ahorras $812 vs. tasa típica</div>
            <div style={{ fontSize: 10, color: sub, marginTop: 1 }}>Tu wallet de ahorro reduce el riesgo, baja la tasa.</div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 10 }}>CALENDARIO DE PAGOS</div>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 16, overflow: 'hidden', marginBottom: 18 }}>
          {[
            { d: '15 may 2026', n: 'Pago 1', a: 389, st: 'next' },
            { d: '15 jun 2026', n: 'Pago 2', a: 389, st: 'pending' },
            { d: '15 jul 2026', n: 'Pago 3', a: 389, st: 'pending' },
            { d: '...', n: '+9 pagos', a: null, st: 'more' },
          ].map((p, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
              borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none',
              opacity: p.st === 'more' ? 0.5 : 1,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 999,
                background: p.st === 'next' ? GRADIENT_IA : (dark ? 'rgba(255,255,255,0.08)' : C.ink50),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: p.st === 'next' ? '#fff' : sub,
                fontSize: 11, fontWeight: 800,
              }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{p.n}</div>
                <div style={{ fontSize: 11, color: sub, marginTop: 1 }}>{p.d}</div>
              </div>
              {p.a && <div style={{ fontSize: 14, fontWeight: 700 }}>${p.a}</div>}
            </div>
          ))}
        </div>

        <button style={{
          width: '100%', padding: 16, borderRadius: 14, border: 0,
          background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 15,
          fontFamily: FONT, cursor: 'pointer', boxShadow: '0 10px 24px rgba(1,121,226,0.36)',
          marginBottom: 10,
        }}>Aceptar y reservar</button>

        <div style={{ fontSize: 9, color: subtle, fontWeight: 500, lineHeight: 1.5, textAlign: 'center' }}>
          Crédito pagado directamente al proveedor de viaje · CAT 38% anual · Aventuria S.A. de C.V.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TNPLCatalog, TNPLTerms });
