// Auth screens — Loading, Login, Sign up. Use logo + isotipo with brand gradient.

function LoadingScreen({ dark = true }) {
  // Loading uses the gradient hero background + isotipo pulsing.
  const bg = dark
    ? 'linear-gradient(180deg,#002557 0%,#0031D4 60%,#0179E2 100%)'
    : '#F5F8FC';
  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: bg, fontFamily: FONT, color: dark ? '#fff' : C.mediterraneo,
    }}>
      {/* Soft glow */}
      <div style={{
        position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%,-50%)',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(61,255,223,0.35) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }}/>

      {/* Center content */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 28,
      }}>
        <div style={{
          width: 144, height: 144, borderRadius: 36, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'avPulse 2.4s ease-in-out infinite',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 36,
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.18)',
          }}/>
          <img src={RES('assets/isotipo-cropped.png')} alt="iA"
            style={{ width: 108, height: 108, objectFit: 'contain', position: 'relative', zIndex: 1 }}/>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            color: dark ? C.waikiki : C.maldivas, textTransform: 'uppercase',
          }}>Preparando tu próxima</div>
          <div style={{
            fontSize: 26, fontWeight: 800, letterSpacing: -0.015,
            marginTop: 6, color: dark ? '#fff' : C.mediterraneo,
          }}>aventura.</div>
        </div>

        {/* Progress bar */}
        <div style={{
          width: 200, height: 4, borderRadius: 999, overflow: 'hidden',
          background: dark ? 'rgba(255,255,255,0.18)' : C.ink100,
        }}>
          <div style={{
            width: '40%', height: '100%', borderRadius: 999,
            background: dark
              ? 'linear-gradient(90deg, #3DFFDF, #fff)'
              : GRADIENT_IA,
            animation: 'avShimmer 1.6s ease-in-out infinite',
          }}/>
        </div>
      </div>

      {/* Bottom wordmark */}
      <div style={{
        position: 'absolute', bottom: 36, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
      }}>
        <img src={dark ? RES('assets/logo-aventuria-white-cropped.png') : RES('assets/logo-aventuria-cropped.png')}
          alt="Aventuria" style={{ height: 28, opacity: 0.92 }}/>
      </div>

      <style>{`
        @keyframes avPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.04); opacity: 0.92; }
        }
        @keyframes avShimmer {
          0% { transform: translateX(-100%); width: 30%; }
          50% { width: 70%; }
          100% { transform: translateX(280%); width: 30%; }
        }
      `}</style>
    </div>
  );
}

function LoginScreen({ dark = false }) {
  const bg = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.1)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  return (
    <div style={{
      width: '100%', height: '100%', overflow: 'auto', position: 'relative',
      background: bg, color: fg, fontFamily: FONT,
    }}>
      {/* Hero gradient top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 280,
        background: 'linear-gradient(180deg,#002557 0%,#0031D4 60%,#0179E2 100%)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -60, top: -60, width: 240, height: 240,
          background: 'radial-gradient(circle,#3DFFDF 0%,transparent 65%)', opacity: 0.45,
        }}/>
        <div style={{
          position: 'absolute', left: -40, bottom: -40, width: 180, height: 180,
          background: 'radial-gradient(circle,#0179E2 0%,transparent 70%)', opacity: 0.6,
        }}/>
      </div>

      <div style={{ position: 'relative', padding: '40px 24px 40px' }}>
        {/* Wordmark */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
          <img src={RES('assets/logo-aventuria-white-cropped.png')} alt="Aventuria" style={{ height: 36 }}/>
        </div>

        {/* Hero copy */}
        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 28 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: C.waikiki, marginBottom: 8,
          }}>Bienvenido</div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.015, lineHeight: 1.15 }}>
            Tu viaje, finalmente<br/>al alcance.
          </div>
        </div>

        {/* Card */}
        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 22,
          padding: 22, boxShadow: '0 20px 48px rgba(0,37,87,0.28)',
        }}>
          {/* Tab toggle */}
          <div style={{
            display: 'flex', background: dark ? 'rgba(255,255,255,0.05)' : C.ink50,
            borderRadius: 12, padding: 4, marginBottom: 20,
          }}>
            <div style={{
              flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 9,
              background: dark ? C.maldivas : C.mediterraneo, color: '#fff',
              fontSize: 13, fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,37,87,0.18)',
            }}>Iniciar sesión</div>
            <div style={{
              flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 9,
              color: sub, fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}>Crear cuenta</div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 6 }}>EMAIL</div>
            <div style={{
              background: fieldBg, border: `1px solid ${border}`, borderRadius: 12,
              padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <Ic name="mail" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500 }}>camila@aventuria.app</div>
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase' }}>CONTRASEÑA</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: dark ? C.waikiki : C.caribe, cursor: 'pointer' }}>¿La olvidaste?</div>
            </div>
            <div style={{
              background: fieldBg, border: `1px solid ${dark ? C.waikiki : C.maldivas}`,
              borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: dark ? '0 0 0 3px rgba(61,255,223,0.18)' : '0 0 0 3px rgba(1,121,226,0.18)',
            }}>
              <Ic name="lock" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500, letterSpacing: 4 }}>••••••••</div>
              <Ic name="eye-off" size={16} color={sub}/>
            </div>
          </div>

          {/* Submit */}
          <button style={{
            width: '100%', padding: 14, borderRadius: 12, border: 0,
            background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 15,
            fontFamily: FONT, cursor: 'pointer', marginTop: 16,
            boxShadow: '0 10px 24px rgba(1,121,226,0.36)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            Entrar <Ic name="arrow-right" size={16} color="#fff"/>
          </button>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0 14px' }}>
            <div style={{ flex: 1, height: 1, background: border }}/>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase' }}>O CONTINÚA CON</div>
            <div style={{ flex: 1, height: 1, background: border }}/>
          </div>

          {/* Social */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <div style={{
              padding: '11px 0', borderRadius: 12, border: `1px solid ${border}`,
              background: fieldBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}>
              <Ic name="apple" size={16} color={fg}/>
              <span>Apple</span>
            </div>
            <div style={{
              padding: '11px 0', borderRadius: 12, border: `1px solid ${border}`,
              background: fieldBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}>
              <svg width="16" height="16" viewBox="0 0 48 48" aria-label="Google">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.5 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C41.4 35.4 44 30.1 44 24c0-1.2-.1-2.4-.4-3.5z"/>
              </svg>
              <span>Google</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 22, textAlign: 'center', fontSize: 11, color: dark ? sub : C.ink500, fontWeight: 500, lineHeight: 1.6,
        }}>
          Al continuar aceptas los <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Términos</span> y la <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Privacidad</span>.
        </div>
      </div>
    </div>
  );
}

function SignupScreen({ dark = false }) {
  const bg = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.1)' : C.ink100;
  const fieldBg = dark ? 'rgba(255,255,255,0.05)' : '#fff';

  return (
    <div style={{
      width: '100%', height: '100%', overflow: 'auto', position: 'relative',
      background: bg, color: fg, fontFamily: FONT,
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 220,
        background: 'linear-gradient(180deg,#002557 0%,#0031D4 70%,#0179E2 130%)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -50, top: -40, width: 200, height: 200,
          background: 'radial-gradient(circle,#3DFFDF 0%,transparent 65%)', opacity: 0.4,
        }}/>
      </div>

      <div style={{ position: 'relative', padding: '36px 24px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <img src={RES('assets/logo-aventuria-white-cropped.png')} alt="Aventuria" style={{ height: 32 }}/>
        </div>

        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 22 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: C.waikiki, marginBottom: 6,
          }}>Crear cuenta</div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.015, lineHeight: 1.15 }}>
            Empieza a ahorrar<br/>para tu aventura.
          </div>
        </div>

        <div style={{
          background: card, border: `1px solid ${border}`, borderRadius: 22,
          padding: 20, boxShadow: '0 16px 40px rgba(0,37,87,0.24)',
        }}>
          {/* Tab toggle */}
          <div style={{
            display: 'flex', background: dark ? 'rgba(255,255,255,0.05)' : C.ink50,
            borderRadius: 12, padding: 4, marginBottom: 18,
          }}>
            <div style={{
              flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 9,
              color: sub, fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}>Iniciar sesión</div>
            <div style={{
              flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 9,
              background: dark ? C.maldivas : C.mediterraneo, color: '#fff',
              fontSize: 13, fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,37,87,0.18)',
            }}>Crear cuenta</div>
          </div>

          {/* Name */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 6 }}>NOMBRE</div>
            <div style={{
              background: fieldBg, border: `1px solid ${border}`, borderRadius: 12,
              padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <Ic name="user" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500 }}>Camila Mendoza</div>
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 6 }}>EMAIL</div>
            <div style={{
              background: fieldBg, border: `1px solid ${border}`, borderRadius: 12,
              padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <Ic name="mail" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500 }}>camila@aventuria.app</div>
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: sub, textTransform: 'uppercase', marginBottom: 6 }}>CREA CONTRASEÑA</div>
            <div style={{
              background: fieldBg, border: `1px solid ${border}`, borderRadius: 12,
              padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <Ic name="lock" size={16} color={sub}/>
              <div style={{ flex: 1, fontSize: 14, color: fg, fontWeight: 500, letterSpacing: 4 }}>••••••••</div>
              <Ic name="eye" size={16} color={sub}/>
            </div>
            {/* Strength meter */}
            <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: '#12B886' }}/>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: '#12B886' }}/>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: '#12B886' }}/>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background: border }}/>
            </div>
            <div style={{ fontSize: 10, color: '#0A8F68', fontWeight: 700, marginTop: 6, letterSpacing: 0.05 }}>Contraseña fuerte</div>
          </div>

          {/* Terms checkbox */}
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            padding: '10px 0 14px',
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: 5, flexShrink: 0,
              background: GRADIENT_IA, display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginTop: 1,
            }}>
              <Ic name="check" size={12} color="#fff" stroke={3}/>
            </div>
            <div style={{ fontSize: 11, color: sub, lineHeight: 1.5, fontWeight: 500 }}>
              Acepto los <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Términos</span> y autorizo el tratamiento de mis datos.
            </div>
          </div>

          <button style={{
            width: '100%', padding: 14, borderRadius: 12, border: 0,
            background: GRADIENT_IA, color: '#fff', fontWeight: 700, fontSize: 15,
            fontFamily: FONT, cursor: 'pointer',
            boxShadow: '0 10px 24px rgba(1,121,226,0.36)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            Crear cuenta <Ic name="arrow-right" size={16} color="#fff"/>
          </button>
        </div>

        <div style={{
          marginTop: 18, textAlign: 'center', fontSize: 11,
          color: dark ? sub : C.ink500, fontWeight: 500,
        }}>
          ¿Ya tienes cuenta? <span style={{ color: dark ? C.waikiki : C.caribe, fontWeight: 700 }}>Inicia sesión</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LoadingScreen, LoginScreen, SignupScreen });
