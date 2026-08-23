// Lightweight phone shell with status bar — used inside design canvas artboards.
// We DON'T use the IOSDevice's bezel here because the design canvas already gives
// each artboard a frame; we want a clean phone surface (no rounded bezel) for review.

function PhoneShell({ children, dark = false, label, time = '9:41', height = 720 }) {
  const bg = dark ? '#0A1426' : '#F5F8FC';
  const fg = dark ? '#fff' : '#000';
  return (
    <div data-screen-label={label} style={{
      width: 360, height, background: bg, position: 'relative', overflow: 'hidden',
      fontFamily: '"Montserrat", system-ui, sans-serif',
      boxShadow: 'inset 0 0 0 1px rgba(0,37,87,0.08)',
    }}>
      {/* Status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 22px 6px', height: 44, boxSizing: 'border-box',
        pointerEvents: 'none',
      }}>
        <span style={{ fontFamily: '-apple-system, "SF Pro", system-ui', fontSize: 15, fontWeight: 600, color: fg }}>{time}</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="17" height="11" viewBox="0 0 19 12">
            <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={fg}/>
            <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={fg}/>
            <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={fg}/>
            <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={fg}/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 17 12">
            <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={fg}/>
            <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={fg}/>
            <circle cx="8.5" cy="10.5" r="1.4" fill={fg}/>
          </svg>
          <svg width="24" height="11" viewBox="0 0 27 13">
            <rect x="0.5" y="0.5" width="23" height="12" rx="3" stroke={fg} strokeOpacity="0.4" fill="none"/>
            <rect x="2" y="2" width="18" height="9" rx="1.5" fill={fg}/>
            <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={fg} fillOpacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* Content area */}
      <div style={{ position: 'absolute', inset: 0, paddingTop: 50, overflow: 'hidden' }}>
        {children}
      </div>

      {/* Home indicator */}
      <div style={{
        position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
        width: 110, height: 4, borderRadius: 999,
        background: dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.25)',
      }}/>
    </div>
  );
}

Object.assign(window, { PhoneShell });
