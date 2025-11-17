/* ====================== Preview (CSS Blood Bag) ====================== */
function setFluidColor(kind){
  const body = document.querySelector('.blood-bag-body');
  const ports = document.querySelectorAll('.port-center-left, .port-center-right');
  const color = kind === 'yellow' ? getComputedStyle(document.documentElement).getPropertyValue('--plasma-yellow') || '#d6a500' : getComputedStyle(document.documentElement).getPropertyValue('--blood-red') || '#8a0e0e';
  if(body) body.style.backgroundColor = color.trim();
  ports.forEach(p => p.style.backgroundColor = color.trim());
}

/* Place a single barcode + caption in a fixed zone inside CSS label */
function placeBarcode(zoneId, payload, label, labelBelow = false, outline = false) {
  const BASE = { w: 370, h: 260 };
  const zones = {
    donation: { x: 5,   y: 25,  w: 210, h: 80 },
    blood:    { x: 225, y: 25,  w: 140, h: 80 },
    product:  { x: 5,   y: 135, w: 210, h: 100 },
    expiry:   { x: 225, y: 135, w: 140, h: 100 }
  };
  const cfg = zones[zoneId];
  if (!cfg) return;

  const labelEl = $("cssLabel");
  const g = $("zone" + zoneId[0].toUpperCase() + zoneId.slice(1));
  if (!labelEl || !g) return;
  while (g.firstChild) g.removeChild(g.firstChild);
  if (!payload && !label) return;

  const scaleX = labelEl.clientWidth / BASE.w;
  const scaleY = labelEl.clientHeight / BASE.h;
  const X = Math.round(cfg.x * scaleX);
  const Y = Math.round(cfg.y * scaleY);
  const W = Math.round(cfg.w * scaleX);
  const H = Math.round(cfg.h * scaleY);

  g.style.left = X + 'px';
  g.style.top = Y + 'px';
  g.style.width = W + 'px';
  g.style.height = H + 'px';

  const labelBand = 20;
  const gap = 4;
  let barsH = Math.max(24, H - (labelBand + gap));
  let barsTop = labelBelow ? 0 : (labelBand + gap);

  // Compute shared inner padding so bars and caption align exactly
  const innerLeft = Math.round(W * 0.025);
  const innerWidth = Math.floor(W * 0.95);
  // If caption is outlined, its stroke visually extends left. Nudge right by stroke px.
  const outlineStrokePx = outline ? 2 : 0; // keep in sync with .labelText.outline

if (payload) {
    const canvas = document.createElement('canvas');
    const pw = Math.max(0, innerWidth - outlineStrokePx); // <-- CHANGED
    const ph = Math.floor(barsH);
    canvas.width = pw;
    canvas.height = ph;
    canvas.style.position = 'absolute';
    canvas.style.left = (innerLeft + outlineStrokePx) + 'px'; // <-- CHANGED
    canvas.style.top = Math.round(barsTop) + 'px';
    const ctx = canvas.getContext('2d');
    drawCode128ToCanvas(ctx, payload, pw, ph);
    g.appendChild(canvas);
  } else {
    barsH = 0;
    barsTop = labelBelow ? 0 : 14;
  }

  if (label) {
    const cap = document.createElement('div');
    cap.className = 'caption labelText' + (outline ? ' outline' : '');
    let fs = 12;
    if (label.length > 30) fs = 10; else if (label.length > 25) fs = 11;
    cap.style.fontSize = fs + 'px';
    cap.style.position = 'absolute';
    // Align caption start and width with barcode canvas
    cap.style.left = (innerLeft + outlineStrokePx) + 'px';
    cap.style.width = Math.max(0, innerWidth - outlineStrokePx) + 'px';
    cap.style.boxSizing = 'border-box';
    cap.style.textAlign = 'left';
    cap.style.top = labelBelow ? (barsTop + barsH + 4) + 'px' : '0px';
    cap.textContent = label;
    g.appendChild(cap);
  }
}
