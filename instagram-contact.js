/* Miss Elite Universe: add Instagram only to genuine icon-only social rows.
   Never insert icons into footer contact text or ordinary links. */
(()=>{
  'use strict';
  const PROFILE='https://www.instagram.com/misseliteuniverse/';
  const ICON='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5"/><circle cx="12" cy="12" r="4.15"/><circle cx="17.5" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>';
  function source(a){
    return [
      a.getAttribute('href'),a.getAttribute('title'),a.getAttribute('aria-label'),
      a.className,a.querySelector('i')?.className,
      a.querySelector('img')?.src,a.querySelector('img')?.alt,
      a.querySelector('svg')?.outerHTML.slice(0,220)
    ].filter(Boolean).join(' ').toLowerCase();
  }
  function isSocialIcon(a){
    if(!a || a.tagName!=='A')return false;
    // Textual links like 'Official TikTok: @misseliteuniverse.org' are NOT icons.
    if((a.textContent||'').trim().length>4)return false;
    return Boolean(a.querySelector('svg,i,img,[class*="icon"],[class*="fa-"]')) ||
      /social|icon|facebook|tiktok|youtube|instagram|gmail|email/i.test(a.className||'') ||
      (!(a.textContent||'').trim() && /facebook|tiktok|instagram|mail|gmail/.test(source(a)));
  }
  function findRows(){
    const links=Array.from(document.querySelectorAll('a[href]'));
    const tiktoks=links.filter(a=>isSocialIcon(a)&&/tiktok/.test(source(a)));
    const facebooks=links.filter(a=>isSocialIcon(a)&&/facebook|fb\.com|fa-facebook/.test(source(a)));
    const rows=new Set();
    for(const tk of tiktoks){
      for(const fb of facebooks){
        if(tk===fb)continue;
        let node=tk.parentElement;
        while(node&&node!==document.body){
          if(node.contains(fb)){
            const icons=Array.from(node.querySelectorAll('a[href]'));
            if(icons.length>=2&&icons.length<=7&&icons.every(isSocialIcon)&&node.tagName!=='FOOTER'){
              rows.add(node);
            }
            break;
          }
          node=node.parentElement;
        }
      }
    }
    // For icon rows where social network icon names aren't explicit in the link URLs.
    const selectors='.social-icons,.social-links,.footer-social,.footer-socials,[class*="social-icons"],[class*="social-links"]';
    for(const node of document.querySelectorAll(selectors)){
      const icons=Array.from(node.querySelectorAll('a[href]'));
      if(icons.length>=2&&icons.length<=7&&icons.every(isSocialIcon)&&icons.some(a=>/tiktok|facebook/.test(source(a))))rows.add(node);
    }
    return Array.from(rows).filter(node=>!Array.from(rows).some(other=>other!==node&&node.contains(other)));
  }
  function apply(){
    document.getElementById('meu-instagram-official-contact')?.remove();
    document.getElementById('meu-instagram-social-icon')?.remove();
    const rows=findRows();
    for(const row of rows){
      const icons=Array.from(row.querySelectorAll('a[href]'));
      const existing=icons.find(a=>(a.href||'').startsWith(PROFILE));
      if(existing){existing.classList.add('meu-instagram-icon-link');continue;}
      const reference=icons.find(a=>/tiktok/.test(source(a)))||icons.find(a=>/facebook/.test(source(a)));
      if(!reference)continue;
      const link=document.createElement('a');
      link.href=PROFILE;
      link.target='_blank';
      link.rel='noopener noreferrer';
      link.className='meu-instagram-icon-link';
      link.setAttribute('aria-label','Instagram – Miss Elite Universe (@misseliteuniverse)');
      link.title='Miss Elite Universe Instagram';
      link.innerHTML=ICON;
      if(reference.parentElement?.tagName==='LI'&&reference.parentElement.parentElement===row){
        const li=document.createElement('li');
        li.appendChild(link);
        reference.parentElement.insertAdjacentElement('afterend',li);
      }else{
        reference.insertAdjacentElement('afterend',link);
      }
    }
  }
  function boot(){
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href='instagram-contact.css?v=20261030icononly';
    document.head.appendChild(css);
    apply();
    let checks=0;
    const timer=setInterval(()=>{
      apply();
      if(++checks>=10)clearInterval(timer);
    },400);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
