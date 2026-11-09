/* Miss Elite Universe 2027 | lightweight progressive scroll effects.
   Cosmetic only. All content remains readable without JavaScript.
   Do not change forms, dialogs, sign-in, navigation or vote logic. */
(()=>{
  'use strict';
  if(window.__meuScrollEffectsInstalled)return;
  window.__meuScrollEffectsInstalled=true;
  if(!('IntersectionObserver' in window)||!('MutationObserver' in window)||
    matchMedia('(prefers-reduced-motion: reduce)').matches)return;

  const targets=[
    '#about .meu-story-eyebrow','#about .meu-story-title',
    '#about .meu-story-subtitle','#about .meu-story-prose','#about .meu-story-visual',
    '#leadership .meu-leadership-heading','#leadership .meu-leader',
    '#top35 .top35-eyebrow','#top35 .section-title','#top35 .intro',
    '#top35 .top35-card',
    '#venue h2','#venue .venue-location',
    '#hotel .hotel-eyebrow','#hotel .section-title','#hotel .hotel-video-frame',
    '#lina-ferreira-2026 .lina-kicker','#lina-ferreira-2026 #lina-title',
    '#lina-ferreira-2026 .lina-subtitle',
    '#lina-ferreira-2026 .lina-gallery figure',
    '#lina-ferreira-2026 .lina-story',
    '#meu-official-schedule .meu-schedule-topline',
    '#meu-official-schedule #meu-schedule-title',
    '#meu-official-schedule .meu-schedule-lead',
    '#meu-official-schedule .meu-schedule-poster-frame',
    '#meu-official-schedule .meu-schedule-events-header',
    '#meu-official-schedule .meu-schedule-row',
    '#meu-official-schedule .meu-schedule-policy',
    '#meu-official-logo-announcement',
    '.meu-beauty-heading','.meu-beauty-card',
    '.meu-media-heading','.meu-media-card',
    '.meu-crown-heading','.meu-crown-card',
    '.meu-logistics-heading','.meu-logistics-card'
  ].join(',');

  const seen=new WeakSet();
  let nth=0;
  const io=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      entry.target.classList.add('meu-motion-in');
      io.unobserve(entry.target);
    }
  },{threshold:0.04,rootMargin:'0px 0px -7% 0px'});

  const register=el=>{
    if(!(el instanceof Element)||seen.has(el)||nth>200)return;
    seen.add(el);
    // Never temporarily hide interactive vote controls or an open dialog.
    if(el.closest('dialog,[role="dialog"],form,[hidden],.paid-dialog,.free-vote-dialog'))return;
    const rect=el.getBoundingClientRect();
    if(rect.bottom<0||rect.top<innerHeight*.92)return;
    el.style.setProperty('--meu-motion-delay',((nth++%3)*65)+'ms');
    el.classList.add('meu-motion-item');
    io.observe(el);
  };

  let queued=false;
  const scan=()=>document.querySelectorAll(targets).forEach(register);
  const schedule=()=>{
    if(queued)return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;scan()});
  };

  const start=()=>{
    scan();
    document.documentElement.classList.add('meu-motion-enabled');
    // Dynamic sections are injected by existing official page scripts.
    const mo=new MutationObserver(records=>{
      if(records.some(r=>r.addedNodes.length))schedule();
    });
    mo.observe(document.body,{childList:true,subtree:true});
    setTimeout(()=>mo.disconnect(),15000);
  };
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',start,{once:true});
  }else start();
})();
