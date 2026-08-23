// Desktop Auth — split-screen brand panel + form. Loading is full-bleed brand splash.

function DesktopLoading({ dark = true }) {
  return (
    <div style={{
      width: 1440, height: 900, position: 'relative', overflow: 'hidden', fontFamily: FONT,
      background: 'linear-gradient(160deg,#002557 0%,#0031D4 55%,#0179E2 100%)', color: '#fff',
    }}>
      <div style={{
        position: 'absolute', left: '50%', top: '42%', transform: 'translate(-50%,-50%)',
        width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(61,255,223,0.32) 0%, transparent 70%)', filter: 'blur(30px)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 32,
      }}>
        <div style={{
          width: 168, height: 168, borderRadius: 42, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 42, background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.18)',
          }}/>
          <img src={RES('assets/isotipo-cropped.png')} alt="iA" style={{ width: 124, height: 124, objectFit: 'contain', position: 'relative', zIndex: 1 }}/>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.24em', color: C.waikiki, textTransform: 'uppercase' }}>Preparando tu próxima</div>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.015, marginTop: 8 }}>aventura.</div>
        </div>
        <div style={{ width: 260, height: 5, borderRadius: 999, overflow: 'hidden', background: 'rgba(255,255,255,0.18)' }}>
          <div style={{ width: '40%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg,#3DFFDF,#fff)' }}/>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 48, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <img src={RES('assets/logo-aventuria-white-cropped.png')} alt="Aventuria" style={{ height: 32, opacity: 0.92 }}/>
      </div>
    </div>
  );
}

function AuthBrandPanel({ headline, sub }) {
  return (
    <div style={{
      width: 560, flexShrink: 0, position: 'relative', overflow: 'hidden', color: '#fff',
      background: 'linear-gradient(160deg,#002557 0%,#0031D4 55%,#0179E2 100%)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 56,
    }}>
      <div style={{ position: 'absolute', right: -100, top: -100, width: 360, height: 360,
        background: 'radial-gradient(circle,#3DFFDF 0%,transparent 65%)', opacity: 0.4 }}/>
      <div style={{ position: 'absolute', left: -60, bottom: -60, width: 260, height: 260,
        background: 'radial-gradient(circle,#0179E2 0%,transparent 70%)', opacity: 0.5 }}/>

      <img src={RES('assets/logo-aventuria-white-cropped.png')} alt="Aventuria" style={{ height: 93, width: 549, position: 'relative', zIndex: 1 }}/>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', color: C.waikiki, textTransform: 'uppercase', marginBottom: 12 }}>Bienvenido</div>
        <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -0.02, lineHeight: 1.12 }}>{headline}</div>
        <div style={{ fontSize: 15, opacity: 0.78, marginTop: 14, lineHeight: 1.55, maxWidth: 380, fontWeight: 500 }}>{sub}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, fontSize: 12, opacity: 0.6, fontWeight: 500 }}>
        Aventuria S.A. de C.V. · institución financiera regulada
      </div>
    </div>
  );
}

const AUTH_GALLERY = [
  { name: 'Madrid', country: 'España', img: RES('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80') },
  { name: 'Nueva York', country: 'Estados Unidos', img: RES('https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=900&q=80') },
  { name: 'Río de Janeiro', country: 'Brasil', img: RES('https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900&q=80') },
  { name: 'Giza', country: 'Egipto', img: RES('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=900&q=80') },
];

function AuthGalleryPanel({ headline, sub }) {
  return (
    <div style={{
      width: 560, flexShrink: 0, position: 'relative', overflow: 'hidden', color: '#fff', fontFamily: FONT,
    }}>
      {AUTH_GALLERY.map((d, i) => (
        <div key={d.name} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0, animation: `authGalleryFade 16s infinite ${i * 4}s`,
        }}/>
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,37,87,0.15) 0%, rgba(0,20,45,0.35) 55%, rgba(0,13,31,0.86) 100%)' }}/>
      <style>{`@keyframes authGalleryFade{0%{opacity:0}4%{opacity:1}21%{opacity:1}25%{opacity:0}100%{opacity:0}}`}</style>

      <div style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 56, boxSizing: 'border-box' }}>
        <img src={RES('assets/logo-aventuria-white-cropped.png')} alt="Aventuria" style={{ height: 74, width: 440 }}/>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', color: C.waikiki, textTransform: 'uppercase', marginBottom: 12 }}>Bienvenido</div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -0.02, lineHeight: 1.12 }}>{headline}</div>
          <div style={{ fontSize: 15, opacity: 0.82, marginTop: 14, lineHeight: 1.55, maxWidth: 380, fontWeight: 500 }}>{sub}</div>
        </div>

        <div style={{ fontSize: 12, opacity: 0.65, fontWeight: 500 }}>
          Aventuria S.A. de C.V. · institución financiera regulada
        </div>
      </div>
    </div>
  );
}

function DesktopLoginGallery({ dark = false }) {
  const bg = dark ? '#0A1426' : '#F5F8FC';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.1)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  return (
    <div style={{ width: 1440, height: 900, display: 'flex', fontFamily: FONT, overflow: 'hidden' }}>
      <AuthGalleryPanel headline={<>Tu viaje, finalmente al alcance.</>} sub="Ahorra, planea y financia tu próximo destino desde un solo lugar." />
      <div style={{ flex: 1, background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 380 }}>
          <div style={{ display: 'flex', background: dark ? 'rgba(255,255,255,0.05)' : C.ink50, borderRadius: 12, padding: 4, marginBottom: 28 }}>
            <div style={{ flex: 1, padding: '11px 0', textAlign: 'center', borderRadius: 9, background: dark ? C.maldivas : C.mediterraneo, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Iniciar sesión</div>
            <div style={{ flex: 1, padding: '11px 0', textAlign: 'center', borderRadius: 9, color: sub, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Crear cuenta</div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 7 }}>EMAIL</div>
            <div style={{ background: fieldBg, border: `1px solid ${border}`, borderRadius: 12, padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Ic name="mail" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500 }}>camila@aventuria.app</div>
            </div>
          </div>

          <div style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase' }}>CONTRASEÑA</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: dark ? C.waikiki : C.caribe, cursor: 'pointer' }}>¿La olvidaste?</div>
            </div>
            <div style={{
              background: fieldBg, border: `1px solid ${dark ? C.waikiki : C.maldivas}`, borderRadius: 12,
              padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: dark ? '0 0 0 3px rgba(61,255,223,0.18)' : '0 0 0 3px rgba(1,121,226,0.18)',
            }}>
              <Ic name="lock" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500, letterSpacing: 4 }}>••••••••</div>
              <Ic name="eye-off" size={16} color={sub}/>
            </div>
          </div>

          <button style={{
            width: '100%', padding: 15, borderRadius: 12, border: 0, background: GRADIENT_IA, color: '#fff',
            fontWeight: 700, fontSize: 15, fontFamily: FONT, cursor: 'pointer', marginTop: 20,
            boxShadow: '0 10px 24px rgba(1,121,226,0.36)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>Entrar <Ic name="arrow-right" size={16} color="#fff"/></button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '24px 0 16px' }}>
            <div style={{ flex: 1, height: 1, background: border }}/>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>O CONTINÚA CON</div>
            <div style={{ flex: 1, height: 1, background: border }}/>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ padding: '12px 0', borderRadius: 12, border: `1px solid ${border}`, background: fieldBg, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <Ic name="apple" size={16} color={fg}/><span>Apple</span>
            </div>
            <div style={{ padding: '12px 0', borderRadius: 12, border: `1px solid ${border}`, background: fieldBg, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.5 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C41.4 35.4 44 30.1 44 24c0-1.2-.1-2.4-.4-3.5z"/></svg>
              <span>Google</span>
            </div>
          </div>

          <div style={{ marginTop: 26, textAlign: 'center', fontSize: 11, color: dark ? sub : C.ink500, fontWeight: 500, lineHeight: 1.6 }}>
            Al continuar aceptas los <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Términos</span> y la <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Privacidad</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopLogin({ dark = false }) {
  const bg = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.1)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  return (
    <div style={{ width: 1440, height: 900, display: 'flex', fontFamily: FONT, overflow: 'hidden' }}>
      <AuthBrandPanel headline={<>Tu viaje, finalmente al alcance.</>} sub="Ahorra, planea y financia tu próximo destino desde un solo lugar." />
      <div style={{ flex: 1, background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 380 }}>
          <div style={{ display: 'flex', background: dark ? 'rgba(255,255,255,0.05)' : C.ink50, borderRadius: 12, padding: 4, marginBottom: 28 }}>
            <div style={{ flex: 1, padding: '11px 0', textAlign: 'center', borderRadius: 9, background: dark ? C.maldivas : C.mediterraneo, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Iniciar sesión</div>
            <div style={{ flex: 1, padding: '11px 0', textAlign: 'center', borderRadius: 9, color: sub, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Crear cuenta</div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 7 }}>EMAIL</div>
            <div style={{ background: fieldBg, border: `1px solid ${border}`, borderRadius: 12, padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Ic name="mail" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500 }}>camila@aventuria.app</div>
            </div>
          </div>

          <div style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase' }}>CONTRASEÑA</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: dark ? C.waikiki : C.caribe, cursor: 'pointer' }}>¿La olvidaste?</div>
            </div>
            <div style={{
              background: fieldBg, border: `1px solid ${dark ? C.waikiki : C.maldivas}`, borderRadius: 12,
              padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: dark ? '0 0 0 3px rgba(61,255,223,0.18)' : '0 0 0 3px rgba(1,121,226,0.18)',
            }}>
              <Ic name="lock" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500, letterSpacing: 4 }}>••••••••</div>
              <Ic name="eye-off" size={16} color={sub}/>
            </div>
          </div>

          <button style={{
            width: '100%', padding: 15, borderRadius: 12, border: 0, background: GRADIENT_IA, color: '#fff',
            fontWeight: 700, fontSize: 15, fontFamily: FONT, cursor: 'pointer', marginTop: 20,
            boxShadow: '0 10px 24px rgba(1,121,226,0.36)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>Entrar <Ic name="arrow-right" size={16} color="#fff"/></button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '24px 0 16px' }}>
            <div style={{ flex: 1, height: 1, background: border }}/>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>O CONTINÚA CON</div>
            <div style={{ flex: 1, height: 1, background: border }}/>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ padding: '12px 0', borderRadius: 12, border: `1px solid ${border}`, background: fieldBg, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <Ic name="apple" size={16} color={fg}/><span>Apple</span>
            </div>
            <div style={{ padding: '12px 0', borderRadius: 12, border: `1px solid ${border}`, background: fieldBg, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.5 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C41.4 35.4 44 30.1 44 24c0-1.2-.1-2.4-.4-3.5z"/></svg>
              <span>Google</span>
            </div>
          </div>

          <div style={{ marginTop: 26, textAlign: 'center', fontSize: 11, color: dark ? sub : C.ink500, fontWeight: 500, lineHeight: 1.6 }}>
            Al continuar aceptas los <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Términos</span> y la <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Privacidad</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopSignup({ dark = false }) {
  const bg = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.1)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  return (
    <div style={{ width: 1440, height: 900, display: 'flex', fontFamily: FONT, overflow: 'hidden' }}>
      <AuthBrandPanel headline={<>Empieza a ahorrar para tu aventura.</>} sub="Crea tu cuenta en minutos y elige cómo quieres llegar a tu próximo destino." />
      <div style={{ flex: 1, background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
        <div style={{ width: 380, padding: '40px 0' }}>
          <div style={{ display: 'flex', background: dark ? 'rgba(255,255,255,0.05)' : C.ink50, borderRadius: 12, padding: 4, marginBottom: 24 }}>
            <div style={{ flex: 1, padding: '11px 0', textAlign: 'center', borderRadius: 9, color: sub, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Iniciar sesión</div>
            <div style={{ flex: 1, padding: '11px 0', textAlign: 'center', borderRadius: 9, background: dark ? C.maldivas : C.mediterraneo, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Crear cuenta</div>
          </div>

          {[
            { l: 'NOMBRE', v: 'Camila Mendoza', icon: 'user' },
            { l: 'EMAIL', v: 'camila@aventuria.app', icon: 'mail' },
          ].map(f => (
            <div key={f.l} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 7 }}>{f.l}</div>
              <div style={{ background: fieldBg, border: `1px solid ${border}`, borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <Ic name={f.icon} size={16} color={sub}/>
                <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500 }}>{f.v}</div>
              </div>
            </div>
          ))}

          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 7 }}>CREA CONTRASEÑA</div>
            <div style={{ background: fieldBg, border: `1px solid ${border}`, borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Ic name="lock" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500, letterSpacing: 4 }}>••••••••</div>
              <Ic name="eye" size={16} color={sub}/>
            </div>
            <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: '#12B886' }}/>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: '#12B886' }}/>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: '#12B886' }}/>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: border }}/>
            </div>
            <div style={{ fontSize: 10, color: '#0A8F68', fontWeight: 700, marginTop: 6 }}>Contraseña fuerte</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 0 16px' }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, flexShrink: 0, background: GRADIENT_IA, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
              <Ic name="check" size={12} color="#fff" stroke={3}/>
            </div>
            <div style={{ fontSize: 11, color: sub, lineHeight: 1.5, fontWeight: 500 }}>
              Acepto los <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Términos</span> y autorizo el tratamiento de mis datos.
            </div>
          </div>

          <button style={{
            width: '100%', padding: 15, borderRadius: 12, border: 0, background: GRADIENT_IA, color: '#fff',
            fontWeight: 700, fontSize: 15, fontFamily: FONT, cursor: 'pointer',
            boxShadow: '0 10px 24px rgba(1,121,226,0.36)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>Crear cuenta <Ic name="arrow-right" size={16} color="#fff"/></button>

          <div style={{ marginTop: 20, textAlign: 'center', fontSize: 11, color: dark ? sub : C.ink500, fontWeight: 500 }}>
            ¿Ya tienes cuenta? <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Inicia sesión</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DesktopLoading, DesktopLogin, DesktopLoginGallery, DesktopSignup });
