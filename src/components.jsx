// Reusable Aventuria app components — all Montserrat, brand colors, no emoji.

const C = {
  mediterraneo: '#002557',
  caribe: '#0031D4',
  maldivas: '#0179E2',
  waikiki: '#3DFFDF',
  ink0: '#FFFFFF',
  ink50: '#F5F8FC',
  ink100: '#E8EEF6',
  ink200: '#CCD7E6',
  ink300: '#94A5BE',
  ink400: '#667A96',
  ink500: '#3D4F6B',
  ink700: '#1A2A44',
};
const GRADIENT_IA = 'linear-gradient(135deg,#0031D4 0%,#0179E2 55%,#3DFFDF 100%)';
const GRADIENT_HERO = 'linear-gradient(160deg,#002557 0%,#0031D4 55%,#0179E2 100%)';
const FONT = '"Montserrat", system-ui, sans-serif';

function AvLogo({ w = 24, white = false }) {
  return (
    <img
      src={white ? '../../assets/logo-aventuria-white.png' : '../../assets/logo-aventuria.png'}
      alt="Aventuria"
      style={{ height: w, width: 'auto', display: 'block' }}
    />
  );
}

function AvIso({ size = 36 }) {
  return (
    <img src="../../assets/isotipo-aventuria.png" alt="iA"
      style={{ width: size, height: size, objectFit: 'contain' }}/>
  );
}

function AvButton({ children, variant = 'primary', onClick, full = false, icon }) {
  const base = {
    fontFamily: FONT, fontWeight: 600, fontSize: 15, letterSpacing: -0.005,
    border: 0, borderRadius: 12, padding: '14px 20px', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    width: full ? '100%' : 'auto', transition: 'all 140ms cubic-bezier(0.22,1,0.36,1)',
  };
  const styles = {
    primary: { background: C.caribe, color: '#fff', boxShadow: '0 2px 6px rgba(0,49,212,0.28)' },
    ia: { background: GRADIENT_IA, color: '#fff', boxShadow: '0 8px 20px rgba(1,121,226,0.3)' },
    secondary: { background: C.ink50, color: C.mediterraneo, border: `1px solid ${C.ink100}` },
    ghost: { background: 'transparent', color: C.caribe, padding: '10px 12px' },
    dark: { background: C.mediterraneo, color: '#fff' },
  };
  return (
    <button style={{ ...base, ...styles[variant] }} onClick={onClick}>
      {icon}{children}
    </button>
  );
}

function AvBadge({ children, variant = 'soft' }) {
  const s = {
    fontFamily: FONT, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', padding: '5px 9px', borderRadius: 999,
    display: 'inline-flex', alignItems: 'center', gap: 4,
  };
  const v = {
    ia: { background: GRADIENT_IA, color: '#fff' },
    new: { background: C.waikiki, color: C.mediterraneo },
    premium: { background: C.mediterraneo, color: '#fff' },
    soft: { background: 'rgba(1,121,226,0.12)', color: C.maldivas },
    success: { background: 'rgba(18,184,134,0.14)', color: '#0A8F68' },
  };
  return <span style={{ ...s, ...v[variant] }}>{children}</span>;
}

function AvProgress({ value = 0, tint = 'ia' }) {
  const bar = tint === 'ia' ? GRADIENT_IA : C.caribe;
  return (
    <div style={{ height: 6, background: C.ink100, borderRadius: 999, overflow: 'hidden' }}>
      <div style={{ width: `${value}%`, height: '100%', background: bar, borderRadius: 999, transition: 'width 400ms cubic-bezier(0.22,1,0.36,1)' }}/>
    </div>
  );
}

function AvCard({ children, dark = false, onClick, style = {} }) {
  const base = {
    borderRadius: 20, padding: 20,
    background: dark ? C.mediterraneo : '#fff',
    border: dark ? 'none' : `1px solid ${C.ink100}`,
    boxShadow: '0 2px 6px rgba(0,37,87,0.06)',
    color: dark ? '#fff' : C.mediterraneo,
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  };
  return <div style={base} onClick={onClick}>{children}</div>;
}

function AvRow({ icon, title, subtitle, trailing, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
      cursor: onClick ? 'pointer' : 'default', borderBottom: `1px solid ${C.ink100}`,
    }}>
      {icon && <div style={{
        width: 40, height: 40, borderRadius: 12, background: C.ink50,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: C.maldivas, flexShrink: 0,
      }}>{icon}</div>}
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 15, color: C.mediterraneo }}>{title}</div>
        {subtitle && <div style={{ fontFamily: FONT, fontSize: 13, color: C.ink400, marginTop: 2 }}>{subtitle}</div>}
      </div>
      {trailing}
    </div>
  );
}

// Simple Lucide icon bridge — expects global lucide.
// createIcons() re-scans the WHOLE document, so per-icon calls are O(n²) on a
// canvas with hundreds of icons: batch them into one debounced pass.
let __icTimer = null, __icStroke = 1.75, __icPasses = 0;
function scheduleLucide(stroke) {
  __icStroke = stroke;
  if (__icTimer || __icPasses > 300) return;
  __icTimer = setTimeout(() => {
    __icTimer = null; __icPasses++;
    window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': __icStroke } });
  }, 200);
}
function Ic({ name, size = 20, color = 'currentColor', stroke = 1.75 }) {
  return (
    <i data-lucide={name} style={{ width: size, height: size, color }}
       ref={el => { if (el) scheduleLucide(stroke); }} />
  );
}

function AvTabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Inicio', icon: 'home' },
    { id: 'explore', label: 'Explorar', icon: 'compass' },
    { id: 'chat', label: 'iA', icon: 'sparkles', ia: true },
    { id: 'wallet', label: 'Wallet', icon: 'wallet' },
    { id: 'profile', label: 'Perfil', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 40,
      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: `0.5px solid ${C.ink100}`,
      padding: '10px 8px 28px', display: 'flex',
    }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <div key={t.id} onClick={() => onChange(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 4, cursor: 'pointer', padding: '4px 0',
          }}>
            {t.ia ? (
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: GRADIENT_IA,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: on ? '0 6px 16px rgba(1,121,226,0.4)' : '0 2px 6px rgba(1,121,226,0.22)',
                transform: on ? 'translateY(-4px)' : 'none', transition: 'all 180ms',
              }}>
                <Ic name="sparkles" size={20} color="#fff" />
              </div>
            ) : (
              <Ic name={t.icon} size={22} color={on ? C.caribe : C.ink400} stroke={on ? 2 : 1.75}/>
            )}
            <div style={{
              fontFamily: FONT, fontSize: 10, fontWeight: on ? 700 : 500,
              color: on ? C.caribe : C.ink400, letterSpacing: 0.02,
            }}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { C, GRADIENT_IA, GRADIENT_HERO, FONT, AvLogo, AvIso, AvButton, AvBadge, AvProgress, AvCard, AvRow, AvTabBar, Ic });
