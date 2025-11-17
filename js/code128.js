/* ====================== Code-128 (Set B) ====================== */
const PAT=["212222","222122","222221","121223","121322","131222","122213","122312","132212","221213","221312","231212","112232","122132","122231","113222","123122","123221","223211","221132","221231","213212","223112","312131","311222","321122","321221","312212","322112","322211","212123","212321","232121","111323","131123","131321","112313","132113","132311","211313","231113","231311","112133","112331","132131","113123","113321","133121","313121","211331","231131","213113","213311","213131","311123","311321","331121","312113","312311","332111","314111","221411","431111","111224","111422","121124","121421","141122","141221","112214","112412","122114","122411","142112","142211","241211","221114","413111","241112","134111","111242","121142","121241","114212","124112","124211","411212","421112","421211","212141","214121","412121","111143","111341","131141","114113","114311","411113","411311","113141","114131","311141","411131","211412","211214","211232","2331112"];
function enc128B(s){
  const out=[];
  for(const ch of s){
    const c=ch.charCodeAt(0);
    if(c<32||c>126) throw Error("Code128B supports ASCII 32..126");
    out.push(c-32);
  }
  return out;
}
function cksum(codes,start){
  let s=start;
  for(let i=0;i<codes.length;i++) s+=codes[i]*(i+1);
  return s%103;
}
function drawCode128ToCanvas(ctx, text, width, height){
  const start=104;
  const data=enc128B(text);
  const sum=cksum(data,start);
  const seq=[start,...data,sum,106];
  const modules=[];
  seq.forEach(v=>PAT[v].split("").forEach(n=>modules.push(+n)));
  const quietMods=10;
  const totalMods=modules.reduce((a,b)=>a+b,0)+quietMods*2;
  const modW=width/totalMods;
  let x=quietMods*modW;
  let bar=true;
  ctx.fillStyle = "#000";
  for(const m of modules){
    const w=m*modW;
    if(bar){
      ctx.fillRect(Math.round(x), 0, Math.ceil(w), height);
    }
    x+=w;
    bar=!bar;
  }
}

