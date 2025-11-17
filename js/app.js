/* ====================== Compose + Wire-up ====================== */
function populateProducts(){
  const sel = $("product");
  sel.innerHTML = "";
  for(const p of CATALOGUE_FULL){
    const opt = document.createElement("option");
    opt.value = p.barcode;
    opt.textContent = p.name;
    opt.dataset.barcode = p.barcode;
    opt.dataset.fluid = p.fluid;
    sel.appendChild(opt);
  }
}

function generate(){
  // Product
  const opt = $("product").selectedOptions[0];
  if(!opt) return;
  const prodBarcode = opt.dataset.barcode;
  const prodName = opt.textContent;
  setFluidColor(opt.dataset.fluid === "yellow" ? "yellow" : "red");

  // Donation number & ISO 7064 MOD 37-2
  const raw = ($("donation").value || "").trim().toUpperCase();
  if(!raw || !/^[A-Z0-9]+$/.test(raw)){
    $("donation-error").textContent = "Enter a donation number using only A–Z and 0–9.";
    return;
  }

  let base = raw;
  if(raw.length >= 2){
    const prefix = raw.slice(0, -1);
    const last   = raw.slice(-1);
    const chk1 = iso7064(prefix);
    if(chk1.ok && chk1.chk === last){
      base = prefix;        // user typed the check char; strip it for recalculation
    }
  }

  const chk = iso7064(base);
  if(!chk.ok){
    $("donation-error").textContent = chk.err;
    return;
  }
  $("donation-error").textContent = "";
  $("donationChk").textContent = chk.chk;

  // IMPORTANT: barcode payload uses lowercase 'g...' convention
  const donationPayload = "=" + base.toLowerCase() + flagDigits(chk.chk);

  // Blood group
  const bSel   = $("blood");
  const bText  = bSel.selectedOptions[0].dataset.text;
  const bStyle = bSel.selectedOptions[0].dataset.style;
  const bloodPayload = "=%" + bSel.value;

  // Expiry
  let d = null;
  const pp = $("expiry").value;
  if(pp){
    d = new Date(pp + "T00:00:00");
  }
  if(!d || isNaN(d.getTime())){
    $("expiry-error").textContent = "Enter a valid date (dd-mm-yyyy).";
    return;
  }
  $("expiry-error").textContent = "";
  const expiryPayload = "a2" + last3(d.getFullYear()) + julian(d) + "4a";

  // Draw the barcodes
  placeBarcode("donation", donationPayload, base + chk.chk, false);
  placeBarcode("product",  prodBarcode,    prodName,       false);
  // Keep all captions above bars for consistency
  placeBarcode("blood",    bloodPayload,   bText,          false, bStyle === "outline");

  const dd = String(d.getDate()).padStart(2,"0");
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const yyyy = d.getFullYear();
  placeBarcode("expiry",   expiryPayload,  `Expiry ${dd}/${mm}/${yyyy}`, false);
}

function downloadSVG(){
  alert('SVG export is not available with the CSS preview. Use PNG export.');
}

async function downloadPNG(){
  const wrapper = document.getElementById('bagPreview');
  if (!wrapper) return;
  await ensureHtml2Canvas();
  const canvas = await window.html2canvas(wrapper, {
    backgroundColor: null,
    scale: 2
  });
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = 'blood-label.png';
  a.click();
}

function ensureHtml2Canvas(){
  return new Promise((resolve,reject)=>{
    if(window.html2canvas) return resolve();
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
    s.onload=()=>resolve();
    s.onerror=()=>reject(new Error('Failed to load html2canvas'));
    document.head.appendChild(s);
  });
}

// Initial setup once DOM is ready
(function init(){
  populateProducts();
  // Pre-fill example inputs
  $("donation").value = "G072425123456";
  const today = new Date();
  $("expiry").value = today.toISOString().slice(0,10);

  // Wire events
  $("generate").onclick = generate;
  $("dlSvg").onclick = downloadSVG;
  $("dlPng").onclick = downloadPNG;
  // Native date picker triggers
  $("expiry").addEventListener("focus", e => e.target.showPicker && e.target.showPicker());
  $("expiry").addEventListener("click",  e => e.target.showPicker && e.target.showPicker());

  // First render
  generate();
})();
