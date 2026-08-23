// Wallet Libre — nuevo flujo "Tu sueño" (crear + confirmar) y menú principal de wallets.
// Mobile + desktop.

const DREAM = {
  title: 'Luna de miel en Maldivas',
  img: RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80'),
  imgL: RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=80'),
  goal: 4800,
  dateLabel: '15 marzo 2027',
  months: 19,
  monthly: 221,
  interest: 412,
  rate: '11%',
};

function LibreField({ label, children, sub, dark, border, subC, fg, card }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: subC, textTransform: 'uppercase', marginBottom: 7 }}>{label}</div>
      <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 14, padding: '14px 16px', color: fg }}>{children}</div>
      {sub && <div style={{ fontSize: 10.5, color: subC, marginTop: 6, fontWeight: 500 }}>{sub}</div>}
    </div>
  );
}

/* ───────── 1 · Crear "Tu sueño" (mobile) ───────── */
function LibreCrearSueno({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>NUEVA WALLET LIBRE</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: sub }}>1 / 2</div>
        </div>

        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: dark ? C.waikiki : C.maldivas, textTransform: 'uppercase', marginBottom: 6 }}>TU SUEÑO</div>
        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.015, lineHeight: 1.15, marginBottom: 6 }}>Ponle nombre<br/>a tu próximo viaje.</div>
        <div style={{ fontSize: 12, color: sub, lineHeight: 1.5, marginBottom: 18, maxWidth: 290 }}>
          Tú decides el destino, el monto y la fecha. Nosotros hacemos crecer tu ahorro al {DREAM.rate} anual.
        </div>

        {/* Photo of the dream */}
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 7 }}>FOTO DE TU SUEÑO</div>
        <div style={{
          height: 158, borderRadius: 18, overflow: 'hidden', position: 'relative', marginBottom: 14,
          backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.05) 40%, rgba(0,37,87,0.72) 100%), url(${DREAM.img})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          border: `1px solid ${border}`,
        }}>
          <div style={{
            position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)', padding: '7px 11px', borderRadius: 999,
            fontSize: 11, fontWeight: 700, color: '#fff',
          }}>
            <Ic name="camera" size={13} color="#fff"/> Cambiar foto
          </div>
          <div style={{ position: 'absolute', left: 14, bottom: 12, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
            maldivas-atardecer.jpg
          </div>
        </div>

        <LibreField label="TÍTULO DEL VIAJE" dark={dark} border={border} subC={sub} fg={fg} card={card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>{DREAM.title}</span>
            <span style={{ width: 1.5, height: 19, background: dark ? C.waikiki : C.caribe, borderRadius: 2 }}/>
          </div>
        </LibreField>

        <LibreField label="MONTO A AHORRAR" dark={dark} border={border} subC={sub} fg={fg} card={card}
          sub="Puedes cambiarlo después sin costo.">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: sub }}>$</span>
            <span style={{ fontSize: 30, fontWeight: 900, letterSpacing: -0.02 }}>{DREAM.goal.toLocaleString()}</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: sub }}>.00</span>
            <span style={{ flex: 1 }}/>
            <span style={{ fontSize: 11, fontWeight: 700, color: sub }}>USD</span>
          </div>
        </LibreField>

        <LibreField label="FECHA OBJETIVO" dark={dark} border={border} subC={sub} fg={fg} card={card}
          sub={`${DREAM.months} meses desde hoy · aporte sugerido $${DREAM.monthly}/mes`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Ic name="calendar" size={17} color={dark ? C.waikiki : C.maldivas}/>
            <span style={{ fontSize: 15, fontWeight: 700, flex: 1 }}>{DREAM.dateLabel}</span>
            <Ic name="chevron-down" size={16} color={sub}/>
          </div>
        </LibreField>

        <button style={{
          width: '100%', padding: 16, borderRadius: 14, border: 0, marginTop: 8,
          background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 15,
          fontFamily: FONT, cursor: 'pointer', boxShadow: '0 10px 24px rgba(1,121,226,0.36)',
        }}>Continuar</button>
      </div>
    </div>
  );
}

/* ───────── 2 · Confirmación (mobile) ───────── */
function LibreConfirmacion({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const rows = [
    { l: 'Monto a ahorrar', v: `$${DREAM.goal.toLocaleString()}.00` },
    { l: 'Fecha objetivo', v: DREAM.dateLabel },
    { l: 'Plazo', v: `${DREAM.months} meses` },
    { l: 'Aporte sugerido', v: `$${DREAM.monthly} / mes` },
  ];

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="arrow-left" size={18} color={fg}/>
          </div>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>CONFIRMA TU SUEÑO</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: sub }}>2 / 2</div>
        </div>

        {/* Dream hero */}
        <div style={{
          height: 172, borderRadius: 22, overflow: 'hidden', position: 'relative', marginBottom: 14,
          backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.1) 30%, rgba(0,37,87,0.88) 100%), url(${DREAM.img})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          boxShadow: '0 14px 34px rgba(0,37,87,0.28)',
        }}>
          <div style={{ position: 'absolute', top: 12, left: 14, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: C.waikiki, textTransform: 'uppercase' }}>WALLET LIBRE</div>
          <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14 }}>
            <div style={{ fontSize: 21, fontWeight: 800, color: '#fff', letterSpacing: -0.012, lineHeight: 1.15 }}>{DREAM.title}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 7, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.86)' }}>
              <Ic name="target" size={13} color={C.waikiki}/> ${DREAM.goal.toLocaleString()}
              <span style={{ opacity: 0.5 }}>·</span>
              <Ic name="calendar" size={13} color={C.waikiki}/> {DREAM.dateLabel}
            </div>
          </div>
        </div>

        {/* Interest highlight */}
        <div style={{
          borderRadius: 18, padding: 18, marginBottom: 14, color: '#fff',
          background: 'linear-gradient(140deg,#002557 0%,#0179E2 85%)',
          boxShadow: '0 12px 28px rgba(1,121,226,0.28)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
            <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: -0.03, lineHeight: 1, color: C.waikiki }}>{DREAM.rate}</div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', paddingBottom: 5, opacity: 0.9 }}>de interés anual</div>
          </div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.18)', margin: '14px 0' }}/>
          <div style={{ display: 'flex', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', opacity: 0.75, textTransform: 'uppercase' }}>GANARÁS APROX.</div>
              <div style={{ fontSize: 20, fontWeight: 800, marginTop: 3 }}>+${DREAM.interest}</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.18)' }}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', opacity: 0.75, textTransform: 'uppercase' }}>TÚ APORTAS</div>
              <div style={{ fontSize: 20, fontWeight: 800, marginTop: 3 }}>${(DREAM.goal - DREAM.interest).toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Summary rows */}
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>RESUMEN</div>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 16, padding: '2px 16px', marginBottom: 14 }}>
          {rows.map((r, i, arr) => (
            <div key={r.l} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 0',
              borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none',
            }}>
              <span style={{ fontSize: 12.5, color: sub, fontWeight: 600 }}>{r.l}</span>
              <span style={{ fontSize: 13.5, fontWeight: 700 }}>{r.v}</span>
            </div>
          ))}
        </div>

        <div style={{
          background: card, border: `1px dashed ${dark ? 'rgba(61,255,223,0.4)' : 'rgba(1,121,226,0.35)'}`,
          borderRadius: 16, padding: 14, display: 'flex', gap: 10, marginBottom: 18,
        }}>
          <Ic name="unlock" size={16} color={dark ? C.waikiki : C.maldivas}/>
          <div style={{ fontSize: 11, color: sub, lineHeight: 1.5 }}>
            Sin penalización: puedes retirar, cambiar la fecha o subir el monto en cualquier momento.
          </div>
        </div>

        <button style={{
          width: '100%', padding: 16, borderRadius: 14, border: 0,
          background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 15,
          fontFamily: FONT, cursor: 'pointer', boxShadow: '0 10px 24px rgba(1,121,226,0.36)',
        }}>Crear mi wallet</button>
        <div style={{ textAlign: 'center', fontSize: 12.5, fontWeight: 700, color: sub, marginTop: 12, cursor: 'pointer' }}>Editar mi sueño</div>
        <div style={{ fontSize: 9, color: dark ? 'rgba(255,255,255,0.42)' : C.ink300, fontWeight: 500, lineHeight: 1.5, textAlign: 'center', marginTop: 14 }}>
          Rendimiento variable estimado a tasa {DREAM.rate} anual. Aventuria S.A. de C.V., regulada.
        </div>
      </div>
    </div>
  );
}

/* ───────── 3 · Menú principal de wallets (mobile) ───────── */
const WALLET_MENU = [
  {
    n: '1', id: 'travel', icon: 'map-pin',
    title: 'Wallets para viajes con Aventuria',
    desc: 'Ahorra para un paquete con destino y fecha · seguro incluido.',
    meta: '2 wallets activas · $3,120 ahorrado',
    tint: C.caribe,
  },
  {
    n: '2', id: 'libre', icon: 'piggy-bank',
    title: 'Wallets Libres',
    desc: 'Tu sueño, tu monto, tu fecha. Retira cuando quieras.',
    meta: `1 wallet · ${DREAM.title}`,
    tint: C.maldivas,
  },
  {
    n: '3', id: 'tnpl', icon: 'plane-takeoff',
    title: 'Solicitar préstamo',
    desc: 'Viaja hoy y paga después con tasa 38% anual.',
    meta: 'Línea preaprobada · hasta $6,500',
    tint: '#0A8F68',
  },
];

function WalletsMenu({ dark = false }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto', color: fg, fontFamily: FONT }}>
      <div style={{ padding: '8px 20px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: dark ? C.waikiki : C.maldivas, textTransform: 'uppercase' }}>MIS WALLETS</div>
            <div style={{ fontSize: 25, fontWeight: 800, letterSpacing: -0.015, marginTop: 4, lineHeight: 1.1 }}>Elige cómo<br/>quieres avanzar.</div>
          </div>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ic name="bell" size={17} color={fg}/>
          </div>
        </div>

        {/* Total balance strip */}
        <div style={{
          borderRadius: 20, padding: '18px 20px', marginBottom: 20, color: '#fff',
          background: 'linear-gradient(150deg,#002557 0%,#0179E2 90%)',
          boxShadow: '0 14px 32px rgba(0,37,87,0.28)',
          display: 'flex', alignItems: 'center',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', opacity: 0.82, textTransform: 'uppercase' }}>BALANCE TOTAL</div>
            <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: -0.025, marginTop: 3, lineHeight: 1 }}>$4,962<span style={{ fontSize: 17, fontWeight: 700, opacity: 0.7 }}>.50</span></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', opacity: 0.82, textTransform: 'uppercase' }}>RENDIMIENTO</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: C.waikiki, marginTop: 4 }}>+$146.80</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {WALLET_MENU.map(m => (
            <div key={m.id} style={{
              background: card, border: `1px solid ${border}`, borderRadius: 20, padding: 16,
              display: 'flex', gap: 13, cursor: 'pointer',
              boxShadow: dark ? '0 8px 22px rgba(0,0,0,0.3)' : '0 5px 16px rgba(0,37,87,0.07)',
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 13, flexShrink: 0,
                background: `linear-gradient(135deg, ${m.tint}, ${C.waikiki})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Ic name={m.icon} size={20} color="#fff"/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: dark ? C.waikiki : C.maldivas, letterSpacing: '0.1em' }}>{m.n}</span>
                  <span style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: -0.01, lineHeight: 1.2 }}>{m.title}</span>
                </div>
                <div style={{ fontSize: 11.5, color: sub, lineHeight: 1.45, marginTop: 5 }}>{m.desc}</div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 9,
                  fontSize: 10.5, fontWeight: 700, color: dark ? C.waikiki : C.maldivas,
                  background: dark ? 'rgba(61,255,223,0.1)' : 'rgba(1,121,226,0.08)',
                  padding: '5px 9px', borderRadius: 999,
                }}>{m.meta}</div>
              </div>
              <Ic name="chevron-right" size={17} color={sub}/>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 20, paddingTop: 14, borderTop: `1px dashed ${border}`,
          display: 'flex', alignItems: 'flex-start', gap: 8,
          fontSize: 10, fontWeight: 500, color: sub, lineHeight: 1.5,
        }}>
          <Ic name="shield-check" size={12} color={sub}/>
          <span>Fondos protegidos por institución financiera regulada · Aventuria S.A. de C.V.</span>
        </div>
      </div>
    </div>
  );
}

/* ───────── Desktop · Crear "Tu sueño" ───────── */
function LibreCrearSuenoDesktop({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  return (
    <DesktopShell dark={dark} active="wallet" title="Nueva Wallet Libre" subtitle="Paso 1 de 2 · define tu sueño">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: 28, alignItems: 'start' }}>
        <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 24, padding: 32, color: fg }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: dark ? C.waikiki : C.maldivas, textTransform: 'uppercase', marginBottom: 8 }}>TU SUEÑO</div>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.02, lineHeight: 1.1, marginBottom: 8 }}>Ponle nombre a tu próximo viaje.</div>
          <div style={{ fontSize: 14, color: sub, lineHeight: 1.55, marginBottom: 26, maxWidth: 520 }}>
            Tú decides el destino, el monto y la fecha. Nosotros hacemos crecer tu ahorro al {DREAM.rate} anual, sin comisiones ni penalización por retirar.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>TÍTULO DEL VIAJE</div>
              <div style={{ border: `1.5px solid ${dark ? C.waikiki : C.caribe}`, borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>{DREAM.title}</span>
                <span style={{ width: 2, height: 22, background: dark ? C.waikiki : C.caribe, borderRadius: 2 }}/>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>MONTO A AHORRAR</div>
              <div style={{ border: `1px solid ${border}`, borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: sub }}>$</span>
                <span style={{ fontSize: 30, fontWeight: 900, letterSpacing: -0.02 }}>{DREAM.goal.toLocaleString()}</span>
                <span style={{ flex: 1 }}/>
                <span style={{ fontSize: 12, fontWeight: 700, color: sub }}>USD</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>FECHA OBJETIVO</div>
              <div style={{ border: `1px solid ${border}`, borderRadius: 14, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <Ic name="calendar" size={18} color={dark ? C.waikiki : C.maldivas}/>
                <span style={{ fontSize: 17, fontWeight: 700, flex: 1 }}>{DREAM.dateLabel}</span>
                <Ic name="chevron-down" size={17} color={sub}/>
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>FOTO DE TU SUEÑO</div>
              <div style={{ display: 'flex', gap: 14 }}>
                <div style={{
                  width: 190, height: 118, borderRadius: 16,
                  backgroundImage: `url(${DREAM.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                  border: `1px solid ${border}`, flexShrink: 0,
                }}/>
                <div style={{
                  flex: 1, borderRadius: 16, border: `1.5px dashed ${dark ? 'rgba(61,255,223,0.4)' : 'rgba(1,121,226,0.35)'}`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}>
                  <Ic name="image-plus" size={22} color={dark ? C.waikiki : C.maldivas}/>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>Arrastra una foto o elige del catálogo</div>
                  <div style={{ fontSize: 11, color: sub }}>JPG o PNG · hasta 8 MB</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 30 }}>
            <button style={{
              padding: '15px 36px', borderRadius: 14, border: 0, background: GRADIENT_IA, color: '#fff',
              fontWeight: 700, fontSize: 15, fontFamily: FONT, cursor: 'pointer', boxShadow: '0 10px 24px rgba(1,121,226,0.34)',
            }}>Continuar</button>
            <span style={{ fontSize: 13, fontWeight: 600, color: sub, cursor: 'pointer' }}>Cancelar</span>
          </div>
        </div>

        {/* Live preview */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 10 }}>VISTA PREVIA DE TU WALLET</div>
          <div style={{
            borderRadius: 24, overflow: 'hidden', position: 'relative', height: 250,
            backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.12) 30%, rgba(0,37,87,0.9) 100%), url(${DREAM.imgL})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: '0 20px 44px rgba(0,37,87,0.3)',
          }}>
            <div style={{ position: 'absolute', top: 16, left: 18, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: C.waikiki, textTransform: 'uppercase' }}>WALLET LIBRE</div>
            <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: -0.015, lineHeight: 1.15 }}>{DREAM.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginTop: 9, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.88)' }}>
                <Ic name="target" size={14} color={C.waikiki}/> ${DREAM.goal.toLocaleString()}
                <span style={{ opacity: 0.5 }}>·</span>
                <Ic name="calendar" size={14} color={C.waikiki}/> {DREAM.dateLabel}
              </div>
            </div>
          </div>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 20, padding: 20, marginTop: 16, color: fg }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Con {DREAM.rate} anual</div>
            {[
              { l: 'Aporte sugerido', v: `$${DREAM.monthly} / mes` },
              { l: 'Plazo', v: `${DREAM.months} meses` },
              { l: 'Rendimiento estimado', v: `+$${DREAM.interest}`, hi: true },
            ].map((r, i, arr) => (
              <div key={r.l} style={{
                display: 'flex', justifyContent: 'space-between', padding: '11px 0',
                borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none',
              }}>
                <span style={{ fontSize: 12.5, color: sub, fontWeight: 600 }}>{r.l}</span>
                <span style={{ fontSize: 13.5, fontWeight: 800, color: r.hi ? '#12B886' : fg }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ───────── Desktop · Confirmación ───────── */
function LibreConfirmacionDesktop({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const rows = [
    { l: 'Título del viaje', v: DREAM.title },
    { l: 'Monto a ahorrar', v: `$${DREAM.goal.toLocaleString()}.00` },
    { l: 'Fecha objetivo', v: DREAM.dateLabel },
    { l: 'Plazo', v: `${DREAM.months} meses` },
    { l: 'Aporte sugerido', v: `$${DREAM.monthly} / mes` },
    { l: 'Comisión de apertura', v: 'Sin comisión' },
  ];

  return (
    <DesktopShell dark={dark} active="wallet" title="Confirma tu sueño" subtitle="Paso 2 de 2 · revisa y crea tu wallet">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 28, alignItems: 'start' }}>
        <div>
          <div style={{
            borderRadius: 26, overflow: 'hidden', position: 'relative', height: 268, marginBottom: 22,
            backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.1) 30%, rgba(0,37,87,0.9) 100%), url(${DREAM.imgL})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: '0 22px 50px rgba(0,37,87,0.32)',
          }}>
            <div style={{ position: 'absolute', top: 18, left: 22, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: C.waikiki, textTransform: 'uppercase' }}>WALLET LIBRE</div>
            <div style={{ position: 'absolute', left: 22, right: 22, bottom: 22, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: -0.02, lineHeight: 1.1 }}>{DREAM.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10, fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.88)' }}>
                  <Ic name="target" size={15} color={C.waikiki}/> ${DREAM.goal.toLocaleString()}
                  <span style={{ opacity: 0.5 }}>·</span>
                  <Ic name="calendar" size={15} color={C.waikiki}/> {DREAM.dateLabel}
                </div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.28)', borderRadius: 999, padding: '9px 15px',
                fontSize: 13, fontWeight: 700, color: '#fff',
              }}><span style={{ color: C.waikiki }}>{DREAM.rate}</span> anual</div>
            </div>
          </div>

          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 22, padding: '8px 24px', color: fg }}>
            {rows.map((r, i, arr) => (
              <div key={r.l} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0',
                borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none',
              }}>
                <span style={{ fontSize: 13.5, color: sub, fontWeight: 600 }}>{r.l}</span>
                <span style={{ fontSize: 15, fontWeight: 700 }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{
            borderRadius: 24, padding: 26, color: '#fff', marginBottom: 18,
            background: 'linear-gradient(140deg,#002557 0%,#0179E2 85%)',
            boxShadow: '0 18px 40px rgba(1,121,226,0.3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
              <div style={{ fontSize: 58, fontWeight: 900, letterSpacing: -0.035, lineHeight: 1, color: C.waikiki }}>{DREAM.rate}</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', paddingBottom: 8, opacity: 0.9 }}>de interés<br/>anual</div>
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.18)', margin: '20px 0' }}/>
            <div style={{ display: 'flex', gap: 18 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', opacity: 0.75, textTransform: 'uppercase' }}>GANARÁS APROX.</div>
                <div style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>+${DREAM.interest}</div>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.18)' }}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', opacity: 0.75, textTransform: 'uppercase' }}>TÚ APORTAS</div>
                <div style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>${(DREAM.goal - DREAM.interest).toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div style={{
            background: card, border: `1px dashed ${dark ? 'rgba(61,255,223,0.4)' : 'rgba(1,121,226,0.35)'}`,
            borderRadius: 18, padding: 18, display: 'flex', gap: 11, marginBottom: 20, color: fg,
          }}>
            <Ic name="unlock" size={17} color={dark ? C.waikiki : C.maldivas}/>
            <div style={{ fontSize: 12, color: sub, lineHeight: 1.55 }}>
              Sin penalización: puedes retirar, mover la fecha o subir el monto en cualquier momento.
            </div>
          </div>

          <button style={{
            width: '100%', padding: 17, borderRadius: 15, border: 0,
            background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 16,
            fontFamily: FONT, cursor: 'pointer', boxShadow: '0 12px 28px rgba(1,121,226,0.36)',
          }}>Crear mi wallet</button>
          <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: sub, marginTop: 14, cursor: 'pointer' }}>Editar mi sueño</div>
          <div style={{ fontSize: 10, color: dark ? 'rgba(255,255,255,0.42)' : C.ink300, fontWeight: 500, lineHeight: 1.5, textAlign: 'center', marginTop: 16 }}>
            Rendimiento variable estimado a tasa {DREAM.rate} anual. Aventuria S.A. de C.V., regulada.
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ───────── Desktop · Menú principal de wallets ───────── */
function WalletsMenuDesktop({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  return (
    <DesktopShell dark={dark} active="wallet" title="Mis wallets" subtitle="Elige cómo quieres avanzar hacia tu próximo viaje">
      <div style={{
        borderRadius: 26, padding: '26px 32px', marginBottom: 26, color: '#fff',
        background: 'linear-gradient(150deg,#002557 0%,#0179E2 90%)',
        boxShadow: '0 18px 44px rgba(0,37,87,0.3)', display: 'flex', alignItems: 'center', gap: 40,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', opacity: 0.82, textTransform: 'uppercase' }}>BALANCE TOTAL</div>
          <div style={{ fontSize: 46, fontWeight: 900, letterSpacing: -0.03, marginTop: 6, lineHeight: 1 }}>$4,962<span style={{ fontSize: 24, fontWeight: 700, opacity: 0.7 }}>.50</span></div>
        </div>
        {[
          { l: 'RENDIMIENTO GANADO', v: '+$146.80', hi: true },
          { l: 'WALLETS ACTIVAS', v: '3' },
          { l: 'LÍNEA DISPONIBLE', v: '$6,500' },
        ].map(s => (
          <div key={s.l}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', opacity: 0.8, textTransform: 'uppercase' }}>{s.l}</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6, color: s.hi ? C.waikiki : '#fff' }}>{s.v}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {WALLET_MENU.map(m => (
          <div key={m.id} style={{
            background: card, border: `1px solid ${border}`, borderRadius: 24, padding: 26, color: fg,
            display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer', minHeight: 250,
            boxShadow: dark ? '0 10px 28px rgba(0,0,0,0.32)' : '0 8px 22px rgba(0,37,87,0.07)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 15,
                background: `linear-gradient(135deg, ${m.tint}, ${C.waikiki})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Ic name={m.icon} size={23} color="#fff"/>
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: dark ? 'rgba(255,255,255,0.16)' : C.ink100 }}>{m.n}</div>
            </div>
            <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.015, lineHeight: 1.2, marginTop: 4 }}>{m.title}</div>
            <div style={{ fontSize: 13, color: sub, lineHeight: 1.55 }}>{m.desc}</div>
            <div style={{ flex: 1 }}/>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start',
              fontSize: 11.5, fontWeight: 700, color: dark ? C.waikiki : C.maldivas,
              background: dark ? 'rgba(61,255,223,0.1)' : 'rgba(1,121,226,0.08)',
              padding: '7px 12px', borderRadius: 999,
            }}>{m.meta}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13.5, fontWeight: 700, color: dark ? '#fff' : C.caribe, marginTop: 4 }}>
              Entrar <Ic name="arrow-right" size={16} color={dark ? '#fff' : C.caribe}/>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 26, paddingTop: 18, borderTop: `1px dashed ${border}`,
        display: 'flex', alignItems: 'center', gap: 9,
        fontSize: 11.5, fontWeight: 500, color: sub,
      }}>
        <Ic name="shield-check" size={14} color={sub}/>
        <span>Fondos protegidos por institución financiera regulada · Aventuria S.A. de C.V.</span>
      </div>
    </DesktopShell>
  );
}

Object.assign(window, {
  DREAM, LibreCrearSueno, LibreConfirmacion, WalletsMenu,
  LibreCrearSuenoDesktop, LibreConfirmacionDesktop, WalletsMenuDesktop,
});
