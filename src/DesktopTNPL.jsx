// Desktop TNPL — catalog (hero + grid) and terms (repayment breakdown).

function TNPLDesktopCatalog({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const credit = 3200;

  return (
    <DesktopShell dark={dark} active="wallet" title="Travel Now · Pay Later" subtitle="Viaja hoy. Paga al volver.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24 }}>
        <div>
          <div style={{
            borderRadius: 26, overflow: 'hidden', height: 400, position: 'relative',
            backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(0,37,87,0.95) 100%), url(${DESTINOS[3].img})`,
            backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 20px 48px rgba(0,37,87,0.28)', marginBottom: 24,
          }}>
            <div style={{ position: 'absolute', top: 20, left: 20 }}>
              <div style={{ padding: '7px 14px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', background: GRADIENT_IA, color: '#fff', textTransform: 'uppercase' }}>iA recomienda</div>
            </div>
            <div style={{ position: 'absolute', top: 20, right: 20 }}>
              <div style={{ padding: '7px 14px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#fff', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)' }}>{DESTINOS[3].season}</div>
            </div>
            <div style={{ position: 'absolute', left: 28, right: 28, bottom: 24, color: '#fff' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', opacity: 0.9, textTransform: 'uppercase' }}>{DESTINOS[3].country}</div>
              <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: -0.015, marginTop: 4 }}>{DESTINOS[3].name}</div>
              <div style={{ fontSize: 14, opacity: 0.85, marginTop: 6 }}>{DESTINOS[3].sub}</div>
              <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderRadius: 14, background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', opacity: 0.85 }}>12 PAGOS DE</div>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.01, marginTop: 2 }}>$389<span style={{ fontSize: 13, opacity: 0.7 }}>/mes</span></div>
                </div>
                <button style={{ padding: '13px 18px', borderRadius: 12, border: 0, background: '#fff', color: C.mediterraneo, fontWeight: 700, fontSize: 13, fontFamily: FONT, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Reservar <Ic name="arrow-right" size={14} color={C.mediterraneo}/>
                </button>
              </div>
            </div>
          </div>

          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 14 }}>OTROS DESTINOS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {DESTINOS.slice(0, 3).map(d => (
              <div key={d.id} style={{ borderRadius: 18, overflow: 'hidden', background: card, border: `1px solid ${border}` }}>
                <div style={{ height: 140, position: 'relative', backgroundImage: `linear-gradient(180deg, transparent 40%, rgba(0,37,87,0.85) 100%), url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div style={{ position: 'absolute', left: 12, right: 12, bottom: 10, color: '#fff' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', opacity: 0.85 }}>{d.country.toUpperCase()}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.01 }}>{d.name}</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: sub }}>desde</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.01, color: fg }}>${Math.round(d.price/12)}</div>
                    <div style={{ fontSize: 11, color: sub, fontWeight: 600 }}>/mes</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, padding: 18, display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, color: fg }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: GRADIENT_IA, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Ic name="zap" size={20} color="#fff"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>LÍNEA APROBADA</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 3 }}>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.01 }}>${credit.toLocaleString()}</div>
                <div style={{ fontSize: 12, color: sub }}>· tasa 38% anual</div>
              </div>
            </div>
          </div>
          <div style={{ padding: '16px 18px', background: card, border: `1px solid ${border}`, borderRadius: 14, display: 'flex', alignItems: 'flex-start', gap: 12, color: fg }}>
            <Ic name="shield-check" size={16} color={dark ? C.waikiki : C.maldivas}/>
            <div style={{ fontSize: 13, color: sub, lineHeight: 1.5, fontWeight: 500 }}>
              Tu ahorro respalda el crédito · pago directo al proveedor de viaje · sin comisiones ocultas.
            </div>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

function TNPLDesktopTerms({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const total = 4180, months = 12, monthly = 389;
  const interest = monthly * months - total;

  return (
    <DesktopShell dark={dark} active="wallet" title="Términos · Safari Kenia" subtitle="Confirma el plan de pagos antes de reservar">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24 }}>
        <div>
          <div style={{
            borderRadius: 22, overflow: 'hidden', height: 200, position: 'relative', marginBottom: 24,
            backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.2) 0%, rgba(0,37,87,0.92) 100%), url(${DESTINOS[3].img})`,
            backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff',
          }}>
            <div style={{ position: 'absolute', left: 24, right: 24, bottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', opacity: 0.85 }}>SAFARI KENIA · 8 NOCHES</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
                <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -0.02 }}>${total.toLocaleString()}</div>
                <div style={{ fontSize: 14, opacity: 0.7 }}>total del viaje</div>
              </div>
            </div>
          </div>

          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 22, padding: 26, color: fg, marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>PAGAS POR MES</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: -0.025 }}>${monthly}</div>
              <div style={{ fontSize: 16, color: sub }}>× {months} meses</div>
            </div>
            <div style={{ marginTop: 22 }}>
              <div style={{ display: 'flex', height: 10, borderRadius: 999, overflow: 'hidden', marginBottom: 12 }}>
                <div style={{ flex: total, background: C.mediterraneo }}/>
                <div style={{ flex: interest, background: C.maldivas }}/>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: C.mediterraneo }}/><span style={{ color: sub, fontWeight: 600 }}>Capital ${total.toLocaleString()}</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: C.maldivas }}/><span style={{ color: sub, fontWeight: 600 }}>Interés ${Math.round(interest)}</span></div>
              </div>
            </div>
          </div>

          <div style={{ background: dark ? 'rgba(61,255,223,0.08)' : 'rgba(61,255,223,0.16)', border: `1px solid ${dark ? 'rgba(61,255,223,0.2)' : 'rgba(1,121,226,0.2)'}`, borderRadius: 16, padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Ic name="trending-down" size={18} color="#0A8F68"/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: dark ? '#fff' : C.mediterraneo }}>Ahorras $812 vs. tasa típica</div>
              <div style={{ fontSize: 12, color: sub, marginTop: 2 }}>Tu wallet de ahorro reduce el riesgo, baja la tasa.</div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 12 }}>CALENDARIO DE PAGOS</div>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, overflow: 'hidden', marginBottom: 20 }}>
            {[
              { d: '15 may 2026', n: 'Pago 1', a: 389, st: 'next' },
              { d: '15 jun 2026', n: 'Pago 2', a: 389, st: 'pending' },
              { d: '15 jul 2026', n: 'Pago 3', a: 389, st: 'pending' },
              { d: '...', n: '+9 pagos', a: null, st: 'more' },
            ].map((p, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none', opacity: p.st === 'more' ? 0.5 : 1, color: fg }}>
                <div style={{ width: 30, height: 30, borderRadius: 999, background: p.st === 'next' ? GRADIENT_IA : (dark ? 'rgba(255,255,255,0.08)' : C.ink50), display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.st === 'next' ? '#fff' : sub, fontSize: 12, fontWeight: 800 }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{p.n}</div>
                  <div style={{ fontSize: 12, color: sub, marginTop: 1 }}>{p.d}</div>
                </div>
                {p.a && <div style={{ fontSize: 15, fontWeight: 700 }}>${p.a}</div>}
              </div>
            ))}
          </div>
          <button style={{ width: '100%', padding: 16, borderRadius: 14, border: 0, background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: FONT, cursor: 'pointer', boxShadow: '0 10px 24px rgba(1,121,226,0.36)' }}>Aceptar y reservar</button>
        </div>
      </div>
    </DesktopShell>
  );
}

Object.assign(window, { TNPLDesktopCatalog, TNPLDesktopTerms });
