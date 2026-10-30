/* Miss Elite Universe — Instagram icon beside existing Facebook & TikTok icons. */
(()=>{
  'use strict';
  const ACCOUNT='https://www.instagram.com/misseliteuniverse/';
  const ICON_ID='meu-instagram-social-icon';
  const OLD_CARD='meu-instagram-official-contact';
  const svg='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.7" y="2.7" width="18.6" height="18.6" rx="5.1"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.7" r="1.15" fill="currentColor" stroke="none"/></svg>';

  function identify(el,network){
    if(!el)return false;
    const content=[el.getAttribute('href'),el.getAttribute('aria-label'),el.getAttribute('title'),el.className,el.querySelector('img')?.getAttribute('alt'),el.querySelector('img')?.getAttribute('src'),el.querySelector('i')?.className,el.querySelector('svg')?.outerHTML.slice(0,260)].filter(Boolean).join(' ').toLowerCase();
    return network==='tiktok'?/tiktok/.test(content):/facebook|fb\.com|fa-facebook|lucide-facebook/.test(content);
  }
  function getCandidates(network){
    return Array.from(document.querySelectorAll('a[href], a[aria-label], .social-icons a, .social-links a, .social-media a, a:has(i), a:has(svg)')).filter(a=>identify(a,network));
  }
  function findCommonContainer(first,second){
    let at=first.parentElement;
    for(let depth=0;at&&depth<7;depth++,at=at.parentElement){
      if(!at.contains(second))continue;
      const links=at.querySelectorAll('a').length;
      if(links>1&&links<=12)return at;
    }
    return null;
  }
  function findSocialGroup(){
    const tikToks=getCandidates('tiktok');
    const facebooks=getCandidates('facebook');
    const options=[];
    tikToks.forEach(tk=>facebooks.forEach(fb=>{
      const parent=findCommonContainer(tk,fb);
      if(!parent)return;
      const styleHint=(parent.className||'')+' '+(parent.parentElement?.className||'');
      const score=(/social|follow|icon|footer/i.test(styleHint)?30:0)+(tk.textContent.trim().length<=12?10:0)+(fb.textContent.trim().length<=12?10:0)
        -parent.querySelectorAll('a').length;
      options.push({parent,tikTok:tk,score});
    }));
    if(options.length){options.sort((a,b)=>b.score-a.score);return options[0]}
    const groups=Array.from(document.querySelectorAll('.social-icons, .social-links, .social-media, .social-buttons, .footer-social, .footer-socials, .meu-social-icons, [class*="social-icons"], [class*="social-links"]'));
    const matching=groups.filter(g=>g.querySelectorAll('a').length>=1 && g.querySelectorAll('a').length<=10);
    if(matching.length){
      const prioritized=matching.find(g=>Array.from(g.querySelectorAll('a')).some(a=>identify(a,'tiktok')))
        ||matching.find(g=>Array.from(g.querySelectorAll('a')).some(a=>identify(a,'facebook')))
        ||matching[0];
      const sibling=Array.from(prioritized.querySelectorAll('a')).find(a=>identify(a,'tiktok'))||prioritized.querySelector('a:last-of-type');
      return {parent:prioritized,tikTok:sibling,score:0};
    }
    return null;
  }
  function attach(){
    document.getElementById(OLD_CARD)?.remove();
    if(document.getElementById(ICON_ID))return true;
    const match=findSocialGroup();
    if(!match||!match.tikTok)return false;
    const {parent,tikTok}=match;
    if(parent.querySelector('a[href*="instagram.com/misseliteuniverse"]'))return true;

    const link=document.createElement('a');
    link.id=ICON_ID;
    link.href=ACCOUNT;
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.title='Miss Elite Universe on Instagram';
    link.setAttribute('aria-label','Instagram — Miss Elite Universe (@misseliteuniverse)');
    link.className=Array.from(tikTok.classList).filter(c=>!/(tiktok|facebook|twitter|youtube|instagram|\btt\b)/i.test(c)).join(' ')+' meu-instagram-icon-link';
    link.innerHTML=svg;
    // If existing social icons are individually wrapped in <li>, preserve the row layout.
    let target=tikTok;
    if(tikTok.parentElement?.tagName==='LI' && tikTok.parentElement.parentElement===parent){
      const wrapper=document.createElement('li');
      wrapper.className=Array.from(tikTok.parentElement.classList).filter(c=>!/(tiktok|facebook|youtube)/i.test(c)).join(' ');
      wrapper.appendChild(link);
      target=tikTok.parentElement;
      target.insertAdjacentElement('afterend',wrapper);
    }else{
      target.insertAdjacentElement('afterend',link);
    }
    const style=document.createElement('link');
    style.rel='stylesheet';
    style.href='instagram-contact.css?v=20261030social';
    document.head.appendChild(style);
    return true;
  }

  function install(){
    if(attach())return;
    // Retry for icon rows that are inserted by the site's own scripts.
    let count=0;
    const timer=setInterval(()=>{count++;if(attach()||count>=12)clearInterval(timer)},350);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();
