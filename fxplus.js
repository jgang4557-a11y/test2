/* fxplus.js — 모요 전용 확장: 클릭 입자 '흘러내림' + 잎/하얀꽃/꽃잎 믹스
   반드시 <script src="fx.js"> '뒤'에 로드 (서브는 ../fxplus.js) */
(function(){
  if (typeof window.fxHearts !== 'function') return;
  var st=document.createElement('style');
  st.textContent='.fx-heart{animation-duration:1.02s; animation-timing-function:cubic-bezier(.33,.12,.55,1);}'
   +'@keyframes fxHeart{0%{opacity:0; transform:translate(-50%,-50%) scale(.45) rotate(0);}14%{opacity:.95;}100%{opacity:0; transform:translate(calc(-50% + var(--hx,0px)), calc(-50% + 96px)) scale(1) rotate(150deg);}}';
  document.head.appendChild(st);
  var shapes=['🍃','🌼','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDIyIDI2Ij48cGF0aCBkPSJNMTEgMS41IEM1LjUgOCA0LjUgMTQuNSAxMSAyNC41IEMxNy41IDE0LjUgMTYuNSA4IDExIDEuNSB6IiBmaWxsPSIjZmZmZGYyIiBzdHJva2U9IiNjZmM4YTAiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTExIDUgTDExIDIxIiBzdHJva2U9IiNlNGRjYjQiIHN0cm9rZS13aWR0aD0iMS4xIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4='];
  var orig=window.fxHearts;
  window.fxHearts=function(x,y,n){
    for(var i=0;i<n;i++){ FX_CLICK=shapes[(Math.random()*shapes.length)|0]; orig(x,y,1); }
  };
})();
