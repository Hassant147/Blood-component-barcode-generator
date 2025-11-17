/* ====================== ISO/IEC 7064 MOD 37-2 ====================== */
function charVal(c){
  c = c.toUpperCase().charCodeAt(0);
  if (c >= 48 && c <= 57) return c - 48;      // 0-9
  if (c >= 65 && c <= 90) return c - 55;      // A-Z => 10-35
  return null;
}
function valToChar(v){
  return v < 10 ? String.fromCharCode(48 + v)
                : String.fromCharCode(55 + v); // 10 -> 'A'
}
// Correct 0-start ISO 7064 Mod 37-2 (pure system)
function iso7064(str){
  str = (str || "").replace(/\s+/g, "").toUpperCase();
  if (!/^[A-Z0-9]+$/.test(str)){
    return { ok:false, err:"Only A–Z and 0–9 allowed" };
  }
  let product = 0;                             // start at 0
  for (const ch of str){
    const v = charVal(ch);
    product = ((product + v) * 2) % 37;
  }
  const checkVal = (38 - product) % 37;
  return { ok:true, chk:valToChar(checkVal) };
}
function flagDigits(ch){
  const v = charVal(ch);                       // 0–36
  const s = String(v);
  return s.length === 1 ? "0" + s : s;
}

