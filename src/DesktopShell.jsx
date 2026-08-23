// Desktop app shell — sidebar nav + topbar + content area.
// Used to wrap post-auth desktop screens (Discover, Hub, Wallets, TNPL).

function DesktopShell({ dark = false, active = 'wallet', title, subtitle, children, width = 1440, height = 900 }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const sideBg = dark ? '#0A1426' : '#fff';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  const nav = [
    { id: 'home', label: 'Inicio', icon: 'home' },
    { id: 'explore', label: 'Explorar', icon: 'compass' },
    { id: 'chat', label: 'Asistente iA', icon: 'sparkles', ia: true },
    { id: 'wallet', label: 'Wallet', icon: 'wallet' },
    { id: 'profile', label: 'Perfil', icon: 'user' },
  ];

  return (
    <div style={{
      width, height, display: 'flex', background: surface, color: fg,
      fontFamily: FONT, overflow: 'hidden', position: 'relative',
    }}>
      {/* Sidebar */}
      <div style={{
        width: 248, flexShrink: 0, background: sideBg,
        borderRight: `1px solid ${border}`, display: 'flex', flexDirection: 'column',
        padding: '24px 16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 10px 28px' }}>
          <img src={RES(dark ? 'assets/logo-aventuria-white-cropped.png' : 'assets/logo-aventuria-cropped.png')}
            alt="Aventuria" style={{ height: 26 }}/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {nav.map(n => {
            const on = active === n.id;
            return (
              <div key={n.id} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
                borderRadius: 12, cursor: 'pointer',
                background: on ? (n.ia ? GRADIENT_IA : (dark ? 'rgba(255,255,255,0.08)' : C.ink50)) : 'transparent',
              }}>
                <Ic name={n.icon} size={18} color={on ? (n.ia ? '#fff' : (dark ? C.waikiki : C.caribe)) : sub}/>
                <span style={{
                  fontSize: 14, fontWeight: on ? 700 : 500,
                  color: on ? (n.ia ? '#fff' : fg) : sub,
                }}>{n.label}</span>
              </div>
            );
          })}
        </div>

        <div style={{ flex: 1 }}/>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: 10,
          borderRadius: 14, background: dark ? 'rgba(255,255,255,0.05)' : C.ink50,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 999, background: GRADIENT_IA,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 800, color: '#fff', flexShrink: 0,
          }}>CM</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700 }}>Camila Mendoza</div>
            <div style={{ fontSize: 11, color: sub }}>camila@aventuria.app</div>
          </div>
          <Ic name="chevron-right" size={14} color={sub}/>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
        {/* Topbar */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10, background: surface,
          borderBottom: `1px solid ${border}`, padding: '22px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.015 }}>{title}</div>
            {subtitle && <div style={{ fontSize: 13, color: sub, marginTop: 3, fontWeight: 500 }}>{subtitle}</div>}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, background: card, border: `1px solid ${border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              <Ic name="bell" size={17} color={sub}/>
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: 12, background: card, border: `1px solid ${border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              <Ic name="search" size={17} color={sub}/>
            </div>
          </div>
        </div>

        <div style={{ padding: '32px 40px 60px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DesktopShell });
