/* ====================== Date helpers ====================== */
function parseDDMMYY(t){
  const m = String(t||"").trim().match(/^(\d{2})\/(\d{2})\/(\d{2})$/);
  if (!m) return null;
  const dd = +m[1], mm = +m[2], yy = +m[3];
  const y = yy <= 79 ? 2000 + yy : 1900 + yy;
  const d = new Date(y, mm-1, dd);
  return (d.getFullYear()===y && d.getMonth()+1===mm && d.getDate()===dd) ? d : null;
}
function last3(y){ return String(y % 1000).padStart(3,"0"); }
function julian(d){
  const s = new Date(d.getFullYear(),0,1);
  return String(Math.floor((d - s)/86400000)+1).padStart(3,"0");
}

