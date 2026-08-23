// Productos Hub — entry point with 3 product cards.

function ProductosHub({ dark = false, onPick = () => {} }) {
  const surface = dark ? '#0A1426' : '#F5F8FC';
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;

  const products = [
    {
      id: 'libre',
      eyebrow: 'WALLET LIBRE',
      title: 'Ahorra con propósito',
      tag: 'Viaja cuando estés listo, retíralo cuando quieras',
      yield: '11%',
      img: RES('https://images.unsplash.com/photo-1552432552-06c0b0a94dda?w=800&q=80'),
      tint: C.maldivas,
      icon: 'piggy-bank',
    },
    {
      id: 'travel',
      eyebrow: 'WALLET AVENTURIA',
      title: 'Elige tu viaje y ahorra',
      tag: 'Destino y fechas definidos, ahorro para un viaje con Aventuria',
      yield: '11%',
      img: RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80'),
      tint: C.caribe,
      icon: 'map-pin',
      badge: 'Seguro incluido',
    },
    {
      id: 'tnpl',
      eyebrow: 'TRAVEL NOW · PAY LATER',
      title: 'Viaja hoy, paga después',
      tag: 'Tasa anual 38%',
      yield: '38%',
      yieldLabel: 'tasa',
      img: RES('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'),
      tint: C.waikiki,
      icon: 'plane-takeoff',
    },
  ];

  return (
    <div style={{ background: surface, height: '100%', overflow: 'auto' }}>
      <div style={{ padding: '8px 20px 100px', color: fg }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: dark ? C.waikiki : C.maldivas, textTransform: 'uppercase' }}>Tus ahorros</div>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.015, marginTop: 4, lineHeight: 1.1 }}>
              Tu dinero trabaja para que tú viajes.
            </div>
          </div>
          <div style={{
            width: 38, height: 38, borderRadius: 12, background: dark ? 'rgba(255,255,255,0.08)' : C.ink50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Ic name="x" size={18} color={fg}/>
          </div>
        </div>

        {/* Tagline strip */}
        <div style={{
          fontSize: 12, fontWeight: 500, color: sub, lineHeight: 1.5, marginBottom: 22,
          maxWidth: 280,
        }}>
          Tres formas de llegar a tu próximo destino. Elige cómo quieres empezar.
        </div>

        {/* Product cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {products.map(p => (
            <div key={p.id} onClick={() => onPick(p.id)} style={{
              borderRadius: 22, overflow: 'hidden', cursor: 'pointer',
              background: card, border: `1px solid ${border}`,
              boxShadow: dark ? '0 8px 24px rgba(0,0,0,0.35)' : '0 6px 18px rgba(0,37,87,0.08)',
              position: 'relative',
            }}>
              {/* Image header */}
              <div style={{
                height: 172, position: 'relative',
                backgroundImage: `linear-gradient(180deg, rgba(0,37,87,0.15) 0%, rgba(0,37,87,0.85) 100%), url(${p.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }}>
                <div style={{
                  position: 'absolute', top: 12, left: 14,
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                  color: '#fff', opacity: 0.92, textTransform: 'uppercase',
                }}>{p.eyebrow}</div>
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '6px 10px', borderRadius: 999,
                  fontSize: 11, fontWeight: 700, color: '#fff',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}>
                  <span style={{ color: C.waikiki }}>{p.yield}</span> {p.yieldLabel || 'anual'}
                </div>
                <div style={{
                  position: 'absolute', left: 14, right: 14, bottom: 12,
                  color: '#fff', fontSize: 18, fontWeight: 800, letterSpacing: -0.01, lineHeight: 1.15,
                }}>{p.title}</div>
              </div>
              {/* Body row */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 16px',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `linear-gradient(135deg, ${p.tint}, ${C.waikiki})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Ic name={p.icon} size={18} color="#fff"/>
                </div>
                <div style={{ flex: 1, fontSize: 12, fontWeight: 600, color: sub }}>{p.tag}</div>
                <Ic name="arrow-right" size={16} color={dark ? '#fff' : C.caribe}/>
              </div>
            </div>
          ))}
        </div>

        {/* Trust footnote */}
        <div style={{
          marginTop: 22, paddingTop: 14, borderTop: `1px dashed ${border}`,
          display: 'flex', alignItems: 'flex-start', gap: 8,
          fontSize: 10, fontWeight: 500, color: sub, lineHeight: 1.5,
        }}>
          <Ic name="shield-check" size={12} color={sub}/>
          <span>Fondos protegidos por Institución Financiera regulada. Inversión administrada por Kuspit Casa de Bolsa. Términos y condiciones: XXXXXX</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProductosHub });
