// Solicitud de financiamiento (Peso a Peso) — mobile + desktop.
// Lenguaje visual: frosted glass sobre gradiente Aventuria, Montserrat, sin look bancario.

const RATE_ANUAL = 38;
const PLAZOS = [3, 6, 12];

function fmtMXN(n) { return Math.round(n).toLocaleString('es-MX'); }

function monthlyPayment(amount, months, annualRate = RATE_ANUAL) {
  const i = annualRate / 100 / 12;
  return amount * i / (1 - Math.pow(1 + i, -months));
}

function finTokens(dark) {
  return {
    fg: dark ? '#fff' : C.mediterraneo,
    sub: dark ? 'rgba(255,255,255,0.62)' : C.ink400,
    faint: dark ? 'rgba(255,255,255,0.42)' : C.ink300,
    glass: dark ? 'rgba(20,37,64,0.80)' : 'rgba(255,255,255,0.80)',
    solid: dark ? 'rgba(20,37,64,0.94)' : 'rgba(255,255,255,0.93)',
    glassBorder: dark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.75)',
    inner: dark ? 'rgba(255,255,255,0.05)' : 'rgba(245,248,252,0.72)',
    innerBorder: dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,37,87,0.07)',
    accent: dark ? C.waikiki : C.maldivas,
    surface: dark ? '#07101F' : '#EFF4FA',
  };
}

// Motivos de viaje detrás del glass — imagen estática, sin churn de DOM.
const MOTIF_IMG = RES('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80');

function FinBackdrop({ dark }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: -140, left: -90, width: 420, height: 420, borderRadius: '50%',
        background: `radial-gradient(circle, ${dark ? 'rgba(1,121,226,0.55)' : 'rgba(1,121,226,0.30)'} 0%, transparent 70%)` }}/>
      <div style={{ position: 'absolute', top: 120, right: -160, width: 380, height: 380, borderRadius: '50%',
        background: `radial-gradient(circle, ${dark ? 'rgba(61,255,223,0.28)' : 'rgba(61,255,223,0.34)'} 0%, transparent 70%)` }}/>
      <div style={{ position: 'absolute', bottom: -180, left: '20%', width: 460, height: 460, borderRadius: '50%',
        background: `radial-gradient(circle, ${dark ? 'rgba(0,49,212,0.42)' : 'rgba(0,49,212,0.16)'} 0%, transparent 72%)` }}/>
      <div style={{
        position: 'absolute', inset: 0, opacity: dark ? 0.42 : 0.34,
        backgroundImage: `linear-gradient(180deg, ${dark ? 'rgba(7,16,31,0)' : 'rgba(239,244,250,0)'} 0%, ${dark ? 'rgba(7,16,31,0.35)' : 'rgba(239,244,250,0.45)'} 50%, ${dark ? '#07101F' : '#EFF4FA'} 100%), url(${MOTIF_IMG})`,
        backgroundSize: 'auto, cover', backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'center, center top',
      }}/>
    </div>
  );
}

function GlassCard({ children, dark, style = {}, radius = 22, pad = 18, blur = false }) {
  const t = finTokens(dark);
  return (
    <div style={{
      background: blur ? t.glass : t.solid, border: `1px solid ${t.glassBorder}`, borderRadius: radius, padding: pad,
      boxShadow: dark ? '0 14px 40px rgba(0,0,0,0.38)' : '0 14px 36px rgba(0,37,87,0.10)',
      color: t.fg, ...style,
    }}>{children}</div>
  );
}

function FinLabel({ children, dark, style = {} }) {
  const t = finTokens(dark);
  return <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: t.sub, textTransform: 'uppercase', ...style }}>{children}</div>;
}

function FinInput({ label, placeholder, value, onChange, dark, type = 'text' }) {
  const t = finTokens(dark);
  const [focus, setFocus] = React.useState(false);
  return (
    <div>
      <FinLabel dark={dark} style={{ marginBottom: 7 }}>{label}</FinLabel>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} type={type}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', boxSizing: 'border-box', background: t.inner, color: t.fg, fontFamily: FONT,
          border: `1px solid ${focus ? t.accent : t.innerBorder}`, borderRadius: 14, padding: '14px 16px',
          fontSize: 14, fontWeight: 600, outline: 'none', transition: 'border-color 140ms',
        }}/>
    </div>
  );
}

function PlazoSelector({ plazo, setPlazo, dark, big = false }) {
  const t = finTokens(dark);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
      {PLAZOS.map(p => {
        const on = p === plazo;
        return (
          <button key={p} onClick={() => setPlazo(p)} style={{
            fontFamily: FONT, cursor: 'pointer', borderRadius: 14, padding: big ? '16px 0' : '13px 0',
            border: `1px solid ${on ? 'transparent' : t.innerBorder}`,
            background: on ? GRADIENT_IA : t.inner,
            color: on ? '#fff' : t.fg, fontWeight: on ? 800 : 600, fontSize: big ? 15 : 13.5,
            boxShadow: on ? '0 8px 20px rgba(1,121,226,0.30)' : 'none', transition: 'all 160ms',
          }}>{p} meses</button>
        );
      })}
    </div>
  );
}

function UploadArea({ file, setFile, dark, big = false }) {
  const t = finTokens(dark);
  if (file) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, background: dark ? 'rgba(18,184,134,0.12)' : 'rgba(18,184,134,0.10)',
        border: '1px solid rgba(18,184,134,0.34)', borderRadius: 16, padding: big ? '16px 18px' : '14px 15px',
      }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(18,184,134,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Ic name="file-check-2" size={18} color="#0A8F68"/>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#0A8F68', marginTop: 2 }}>Carga exitosa · documento válido</div>
        </div>
        <span onClick={() => setFile(null)} style={{ fontSize: 11.5, fontWeight: 700, color: t.sub, cursor: 'pointer' }}>Cambiar</span>
      </div>
    );
  }
  return (
    <div onClick={() => setFile('constancia-situacion-fiscal.pdf')} style={{
      borderRadius: 18, border: `1.5px dashed ${dark ? 'rgba(61,255,223,0.42)' : 'rgba(1,121,226,0.35)'}`,
      background: t.inner, padding: big ? '26px 22px' : '20px 16px', textAlign: 'center', cursor: 'pointer',
    }}>
      <div style={{ width: 44, height: 44, borderRadius: 14, margin: '0 auto 10px', background: dark ? 'rgba(61,255,223,0.12)' : 'rgba(1,121,226,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Ic name="upload-cloud" size={21} color={t.accent}/>
      </div>
      <div style={{ fontSize: big ? 15 : 13.5, fontWeight: 700 }}>Sube tu Constancia de Situación Fiscal</div>
      <div style={{ fontSize: 11.5, color: t.sub, marginTop: 4, fontWeight: 500 }}>PDF · Vigencia máxima de 2 meses</div>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 14, padding: '10px 18px', borderRadius: 999,
        background: dark ? 'rgba(255,255,255,0.10)' : '#fff', border: `1px solid ${dark ? 'rgba(255,255,255,0.16)' : t.innerBorder}`,
        fontSize: 12.5, fontWeight: 700, color: t.fg,
      }}>
        <Ic name="paperclip" size={14} color={t.accent}/> Seleccionar archivo
      </div>
    </div>
  );
}

function AuthCheck({ checked, setChecked, dark, onTerms, big = false }) {
  const t = finTokens(dark);
  return (
    <div>
      <div onClick={() => setChecked(!checked)} style={{ display: 'flex', gap: 12, cursor: 'pointer', alignItems: 'flex-start' }}>
        <div style={{
          width: 22, height: 22, borderRadius: 7, flexShrink: 0, marginTop: 1,
          background: checked ? GRADIENT_IA : t.inner,
          border: `1.5px solid ${checked ? 'transparent' : t.innerBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 140ms',
        }}>{checked && <Ic name="check" size={14} color="#fff" stroke={3}/>}</div>
        <div style={{ fontSize: big ? 13.5 : 12.5, lineHeight: 1.5, fontWeight: 600, color: t.fg }}>
          Autorizo a Peso a Peso a consultar mi historial crediticio para evaluar esta solicitud.
        </div>
      </div>
      <div onClick={onTerms} style={{
        fontSize: 11.5, fontWeight: 700, color: t.accent, marginTop: 10, marginLeft: 34,
        cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3,
      }}>Consulta los términos y condiciones de la autorización.</div>
    </div>
  );
}

const TERMS_BLOCKS = [
  { t: 'Sobre la autorización', b: 'Al marcar la casilla autorizas a Peso a Peso, en su calidad de otorgante del financiamiento, a solicitar tu reporte de crédito ante las sociedades de información crediticia con el único fin de evaluar esta solicitud.' },
  { t: 'Tasa y costo', b: `La tasa de interés anual es de ${RATE_ANUAL}% fija sobre saldos insolutos. El pago mensual mostrado es una estimación calculada con el monto y plazo que elegiste; el monto final se confirma al aprobar la solicitud.` },
  { t: 'Documentación', b: 'La Constancia de Situación Fiscal debe tener una antigüedad no mayor a 2 meses. Podemos solicitar información adicional para completar la evaluación.' },
  { t: 'Resolución', b: 'Enviar tu solicitud no garantiza la aprobación del financiamiento. Recibirás la resolución por correo electrónico en un máximo de 72 horas.' },
];

function TermsSheet({ open, onClose, dark, desktop = false }) {
  const t = finTokens(dark);
  if (!open) return null;
  const panel = {
    background: dark ? 'rgba(12,24,44,0.97)' : 'rgba(255,255,255,0.97)',
    border: `1px solid ${t.glassBorder}`, color: t.fg, fontFamily: FONT,
    boxShadow: '0 -20px 60px rgba(0,20,45,0.35)',
  };
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 60, background: 'rgba(0,20,45,0.42)',
      display: 'flex', alignItems: desktop ? 'center' : 'flex-end', justifyContent: 'center',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        ...panel,
        width: desktop ? 620 : '100%',
        maxHeight: desktop ? '78%' : '84%',
        borderRadius: desktop ? 26 : '26px 26px 0 0',
        padding: desktop ? '30px 34px' : '10px 20px 24px', overflow: 'auto',
      }}>
        {!desktop && <div style={{ width: 44, height: 4, borderRadius: 999, background: t.innerBorder, margin: '6px auto 16px' }}/>}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 6 }}>
          <div>
            <FinLabel dark={dark}>PESO A PESO</FinLabel>
            <div style={{ fontSize: desktop ? 24 : 19, fontWeight: 800, letterSpacing: -0.015, marginTop: 5 }}>Términos y condiciones</div>
          </div>
          <div onClick={onClose} style={{
            width: 34, height: 34, borderRadius: 11, flexShrink: 0, cursor: 'pointer',
            background: t.inner, border: `1px solid ${t.innerBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><Ic name="x" size={16} color={t.sub}/></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 18 }}>
          {TERMS_BLOCKS.map(x => (
            <div key={x.t}>
              <div style={{ fontSize: desktop ? 14 : 13, fontWeight: 800, marginBottom: 5 }}>{x.t}</div>
              <div style={{ fontSize: desktop ? 13 : 12, color: t.sub, lineHeight: 1.6, fontWeight: 500 }}>{x.b}</div>
            </div>
          ))}
        </div>
        <button onClick={onClose} style={{
          width: '100%', marginTop: 22, padding: 15, borderRadius: 14, border: 0, background: GRADIENT_IA,
          color: '#fff', fontWeight: 700, fontSize: 14.5, fontFamily: FONT, cursor: 'pointer',
          boxShadow: '0 10px 24px rgba(1,121,226,0.32)',
        }}>Entendido</button>
      </div>
    </div>
  );
}

function useSolicitud() {
  const [amount, setAmount] = React.useState(25000);
  const [plazo, setPlazo] = React.useState(6);
  const [nombre, setNombre] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [curp, setCurp] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const [terms, setTerms] = React.useState(false);
  const monthly = monthlyPayment(amount, plazo);
  return { amount, setAmount, plazo, setPlazo, nombre, setNombre, correo, setCorreo, curp, setCurp, file, setFile, checked, setChecked, terms, setTerms, monthly };
}

/* ───────── Mobile ───────── */
function FinanciamientoSolicitud({ dark = false }) {
  const t = finTokens(dark);
  const s = useSolicitud();

  return (
    <div style={{ background: t.surface, height: '100%', position: 'relative', color: t.fg, fontFamily: FONT, overflow: 'hidden' }}>
      <FinBackdrop dark={dark}/>
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
        <div style={{ padding: '10px 18px 132px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div style={{ width: 36, height: 36, borderRadius: 11, background: t.solid, border: `1px solid ${t.glassBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ic name="arrow-left" size={18} color={t.fg}/>
            </div>
            <FinLabel dark={dark} style={{ flex: 1, fontSize: 11 }}>PESO A PESO</FinLabel>
          </div>

          <div style={{ fontSize: 25, fontWeight: 800, letterSpacing: -0.018, lineHeight: 1.12 }}>Financia tu<br/>próximo viaje</div>
          <div style={{ fontSize: 12.5, color: t.sub, lineHeight: 1.55, marginTop: 8, marginBottom: 18, fontWeight: 500, maxWidth: 300 }}>
            Viaja ahora y paga poco a poco. Elige cuánto necesitas y el plazo que mejor se adapte a ti.
          </div>

          {/* Simulador */}
          <GlassCard dark={dark} blur={true} style={{ marginBottom: 14 }}>
            <FinLabel dark={dark}>¿CUÁNTO NECESITAS?</FinLabel>
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 10, padding: '12px 15px',
              background: t.inner, border: `1px solid ${t.innerBorder}`, borderRadius: 14,
            }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: t.sub }}>$</span>
              <input value={fmtMXN(s.amount)} onChange={e => {
                const v = parseInt(e.target.value.replace(/\D/g, '') || '0', 10);
                s.setAmount(Math.min(v, 200000));
              }} style={{
                flex: 1, minWidth: 0, background: 'transparent', border: 0, outline: 'none', fontFamily: FONT,
                fontSize: 30, fontWeight: 900, letterSpacing: -0.02, color: t.fg, padding: 0,
              }}/>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.sub }}>MXN</span>
            </div>
            <input type="range" min={3000} max={120000} step={1000} value={s.amount}
              onChange={e => s.setAmount(parseInt(e.target.value, 10))}
              style={{ width: '100%', margin: '14px 0 0', boxSizing: 'border-box', accentColor: C.maldivas }}/>

            <div style={{ height: 1, background: t.innerBorder, margin: '16px 0' }}/>

            <FinLabel dark={dark} style={{ marginBottom: 9 }}>¿EN CUÁNTO TIEMPO QUIERES PAGARLO?</FinLabel>
            <PlazoSelector plazo={s.plazo} setPlazo={s.setPlazo} dark={dark}/>

            <div style={{
              marginTop: 16, display: 'flex', alignItems: 'center', gap: 9, padding: '11px 13px', borderRadius: 13,
              background: dark ? 'rgba(61,255,223,0.09)' : 'rgba(1,121,226,0.07)',
            }}>
              <Ic name="percent" size={15} color={t.accent}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12.5, fontWeight: 800 }}>Tasa de interés anual: {RATE_ANUAL}%</div>
                <div style={{ fontSize: 10.5, color: t.sub, marginTop: 2, fontWeight: 500 }}>Tu pago final dependerá del monto y plazo seleccionados.</div>
              </div>
            </div>
          </GlassCard>

          {/* Pago mensual — jerarquía máxima */}
          <div style={{
            borderRadius: 22, padding: 20, marginBottom: 16, color: '#fff',
            background: 'linear-gradient(140deg,#002557 0%,#0179E2 88%)',
            boxShadow: '0 16px 36px rgba(1,121,226,0.32)',
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', opacity: 0.85, textTransform: 'uppercase' }}>PAGO MENSUAL ESTIMADO</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginTop: 6 }}>
              <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -0.03, lineHeight: 1, color: C.waikiki }}>${fmtMXN(s.monthly)}</div>
              <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.8 }}>MXN</div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.85, marginTop: 7 }}>Durante {s.plazo} meses</div>
          </div>

          {/* Tus datos */}
          <GlassCard dark={dark} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.01 }}>Cuéntanos un poco sobre ti</div>
            <div style={{ fontSize: 11.5, color: t.sub, marginTop: 4, marginBottom: 16, fontWeight: 500 }}>Necesitamos algunos datos para evaluar tu solicitud.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <FinInput dark={dark} label="NOMBRE COMPLETO" placeholder="Como aparece en tu identificación oficial" value={s.nombre} onChange={s.setNombre}/>
              <FinInput dark={dark} label="CORREO ELECTRÓNICO" placeholder="nombre@correo.com" value={s.correo} onChange={s.setCorreo}/>
              <FinInput dark={dark} label="CURP" placeholder="Ingresa tu CURP" value={s.curp} onChange={s.setCurp}/>
            </div>
          </GlassCard>

          {/* Documentación */}
          <GlassCard dark={dark} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.01 }}>Documentación</div>
            <div style={{ fontSize: 11.5, color: t.sub, marginTop: 4, marginBottom: 14, fontWeight: 500, lineHeight: 1.5 }}>
              Carga una Constancia de Situación Fiscal con una antigüedad no mayor a 2 meses.
            </div>
            <UploadArea file={s.file} setFile={s.setFile} dark={dark}/>
          </GlassCard>

          {/* Autorización */}
          <GlassCard dark={dark} style={{ marginBottom: 14 }}>
            <AuthCheck checked={s.checked} setChecked={s.setChecked} dark={dark} onTerms={() => s.setTerms(true)}/>
          </GlassCard>

          <div onClick={() => s.setTerms(true)} style={{
            textAlign: 'center', fontSize: 12, fontWeight: 700, color: t.sub, cursor: 'pointer',
            textDecoration: 'underline', textUnderlineOffset: 3,
          }}>Ver términos y condiciones</div>
        </div>
      </div>

      {/* CTA fijo */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, padding: '14px 18px 22px',
        background: dark ? 'linear-gradient(180deg, rgba(7,16,31,0) 0%, rgba(7,16,31,0.96) 42%)' : 'linear-gradient(180deg, rgba(239,244,250,0) 0%, rgba(239,244,250,0.98) 42%)',
      }}>
        <button style={{
          width: '100%', padding: 16, borderRadius: 15, border: 0, background: GRADIENT_IA, color: '#fff',
          fontWeight: 800, fontSize: 15, fontFamily: FONT, cursor: 'pointer',
          boxShadow: '0 12px 28px rgba(1,121,226,0.38)', opacity: s.checked ? 1 : 0.55,
        }}>Solicitar financiamiento</button>
        <div style={{ fontSize: 10, color: t.faint, fontWeight: 500, textAlign: 'center', marginTop: 9, lineHeight: 1.45 }}>
          Enviar tu solicitud no garantiza la aprobación del financiamiento.
        </div>
      </div>

      <TermsSheet open={s.terms} onClose={() => s.setTerms(false)} dark={dark}/>
    </div>
  );
}

/* ───────── Desktop ───────── */
function FinanciamientoSolicitudDesktop({ dark = false }) {
  const t = finTokens(dark);
  const s = useSolicitud();

  return (
    <div style={{ position: 'relative', width: 1440, height: 900, overflow: 'hidden' }}>
      <DesktopShell dark={dark} active="wallet" title="Financia tu próximo viaje" subtitle="Peso a Peso · solicitud de financiamiento">
        <div style={{ position: 'relative' }}>
          <FinBackdrop dark={dark}/>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 372px', gap: 26, alignItems: 'start' }}>
            <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Simulador */}
              <GlassCard dark={dark} radius={26} pad={30} blur={true}>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.02, lineHeight: 1.12 }}>Financia tu próximo viaje</div>
                <div style={{ fontSize: 14, color: t.sub, lineHeight: 1.55, marginTop: 8, marginBottom: 24, fontWeight: 500, maxWidth: 520 }}>
                  Viaja ahora y paga poco a poco. Elige cuánto necesitas y el plazo que mejor se adapte a ti.
                </div>

                <div>
                  <div>
                    <FinLabel dark={dark}>¿CUÁNTO NECESITAS?</FinLabel>
                    <div style={{
                      display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 10, padding: '14px 18px',
                      background: t.inner, border: `1px solid ${t.innerBorder}`, borderRadius: 16,
                    }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: t.sub }}>$</span>
                      <input value={fmtMXN(s.amount)} onChange={e => {
                        const v = parseInt(e.target.value.replace(/\D/g, '') || '0', 10);
                        s.setAmount(Math.min(v, 200000));
                      }} style={{
                        flex: 1, minWidth: 0, background: 'transparent', border: 0, outline: 'none', fontFamily: FONT,
                        fontSize: 34, fontWeight: 900, letterSpacing: -0.025, color: t.fg, padding: 0,
                      }}/>
                      <span style={{ fontSize: 13, fontWeight: 700, color: t.sub }}>MXN</span>
                    </div>
                    <input type="range" min={3000} max={120000} step={1000} value={s.amount}
                      onChange={e => s.setAmount(parseInt(e.target.value, 10))}
                      style={{ width: '100%', margin: '16px 0 0', boxSizing: 'border-box', accentColor: C.maldivas }}/>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <FinLabel dark={dark} style={{ marginBottom: 10 }}>¿EN CUÁNTO TIEMPO QUIERES PAGARLO?</FinLabel>
                    <PlazoSelector plazo={s.plazo} setPlazo={s.setPlazo} dark={dark} big={true}/>
                    <div style={{
                      marginTop: 16, display: 'flex', alignItems: 'center', gap: 11, padding: '14px 16px', borderRadius: 14,
                      background: dark ? 'rgba(61,255,223,0.09)' : 'rgba(1,121,226,0.07)',
                    }}>
                      <Ic name="percent" size={17} color={t.accent}/>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 800 }}>Tasa de interés anual: {RATE_ANUAL}%</div>
                        <div style={{ fontSize: 11.5, color: t.sub, marginTop: 2, fontWeight: 500 }}>Tu pago final dependerá del monto y plazo seleccionados.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Tus datos */}
              <GlassCard dark={dark} radius={26} pad={30}>
                <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.012 }}>Cuéntanos un poco sobre ti</div>
                <div style={{ fontSize: 13, color: t.sub, marginTop: 5, marginBottom: 20, fontWeight: 500 }}>Necesitamos algunos datos para evaluar tu solicitud.</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 18 }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <FinInput dark={dark} label="NOMBRE COMPLETO" placeholder="Como aparece en tu identificación oficial" value={s.nombre} onChange={s.setNombre}/>
                  </div>
                  <FinInput dark={dark} label="CORREO ELECTRÓNICO" placeholder="nombre@correo.com" value={s.correo} onChange={s.setCorreo}/>
                  <FinInput dark={dark} label="CURP" placeholder="Ingresa tu CURP" value={s.curp} onChange={s.setCurp}/>
                </div>
              </GlassCard>

              {/* Documentación */}
              <GlassCard dark={dark} radius={26} pad={30}>
                <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.012 }}>Documentación</div>
                <div style={{ fontSize: 13, color: t.sub, marginTop: 5, marginBottom: 18, fontWeight: 500 }}>
                  Carga una Constancia de Situación Fiscal con una antigüedad no mayor a 2 meses.
                </div>
                <UploadArea file={s.file} setFile={s.setFile} dark={dark} big={true}/>
              </GlassCard>
            </div>

            {/* Columna derecha — resumen + autorización + CTA */}
            <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18, position: 'sticky', top: 0 }}>
              <div style={{
                borderRadius: 26, padding: 28, color: '#fff',
                background: 'linear-gradient(140deg,#002557 0%,#0179E2 88%)',
                boxShadow: '0 20px 46px rgba(1,121,226,0.32)',
              }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', opacity: 0.85, textTransform: 'uppercase' }}>PAGO MENSUAL ESTIMADO</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
                  <div style={{ fontSize: 46, fontWeight: 900, letterSpacing: -0.035, lineHeight: 1, color: C.waikiki }}>${fmtMXN(s.monthly)}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, opacity: 0.8 }}>MXN</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.85, marginTop: 8 }}>Durante {s.plazo} meses</div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.18)', margin: '20px 0' }}/>
                {[
                  { l: 'Monto solicitado', v: `$${fmtMXN(s.amount)} MXN` },
                  { l: 'Plazo', v: `${s.plazo} meses` },
                  { l: 'Tasa de interés anual', v: `${RATE_ANUAL}%`, hi: true },
                ].map((r, i, arr) => (
                  <div key={r.l} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.14)' : 'none',
                  }}>
                    <span style={{ fontSize: 12.5, fontWeight: 600, opacity: 0.8 }}>{r.l}</span>
                    <span style={{ fontSize: 13.5, fontWeight: 800, color: r.hi ? C.waikiki : '#fff' }}>{r.v}</span>
                  </div>
                ))}
              </div>

              <GlassCard dark={dark} radius={22} pad={22}>
                <AuthCheck checked={s.checked} setChecked={s.setChecked} dark={dark} onTerms={() => s.setTerms(true)} big={true}/>
              </GlassCard>

              <div>
                <button style={{
                  width: '100%', padding: 17, borderRadius: 16, border: 0, background: GRADIENT_IA, color: '#fff',
                  fontWeight: 800, fontSize: 16, fontFamily: FONT, cursor: 'pointer',
                  boxShadow: '0 14px 32px rgba(1,121,226,0.38)', opacity: s.checked ? 1 : 0.55,
                }}>Solicitar financiamiento</button>
                <div style={{ fontSize: 11, color: t.faint, fontWeight: 500, textAlign: 'center', marginTop: 11, lineHeight: 1.5 }}>
                  Enviar tu solicitud no garantiza la aprobación del financiamiento.
                </div>
                <div onClick={() => s.setTerms(true)} style={{
                  textAlign: 'center', fontSize: 12.5, fontWeight: 700, color: t.sub, cursor: 'pointer', marginTop: 14,
                  textDecoration: 'underline', textUnderlineOffset: 3,
                }}>Ver términos y condiciones</div>
              </div>
            </div>
          </div>
        </div>
      </DesktopShell>
      <TermsSheet open={s.terms} onClose={() => s.setTerms(false)} dark={dark} desktop={true}/>
    </div>
  );
}

Object.assign(window, { RATE_ANUAL, FinanciamientoSolicitud, FinanciamientoSolicitudDesktop, TermsSheet, monthlyPayment });
