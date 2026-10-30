/* Miss Elite Universe: matching Instagram icon in each existing social-icons row, including the bottom footer. */
(()=>{
  'use strict';
  const INSTAGRAM='https://www.instagram.com/misseliteuniverse/';
  const ICON='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5"/><circle cx="12" cy="12" r="4.15"/><circle cx="17.5" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>';
  function details(a){
    const tags=[a.getAttribute('href'),a.getAttribute('title'),a.getAttribute('aria-label'),a.className,
      a.querySelector('i')?.className,a.querySelector('img')?.alt,a.querySelector('img')?.src,
      a.querySelector('svg')?.outerHTML.slice(0,200)].filter(Boolean);
    return tags.join(' ').toLowerCase();
  }
  function socialGroups(){
    const links=Array.from(document.querySelectorAll('a[href],a[aria-label]'));
    const tikTok=links.filter(a=>/tiktok/.test(details(a)));
    const facebook=links.filter(a=>/facebook|fb\.com|fa-facebook|lucide-facebook/.test(details(a)));
    const groups=new Set();
    for(const tk of tikTok){
      for(const fb of facebook){
        let parent=tk.parentElement;
        for(let depth=0;parent&&depth<8;depth++,parent=parent.parentElement){
          if(!parent.contains(fb))continue;
          const count=parent.querySelectorAll('a').length;
          if(count>=2&&count<=7){groups.add(parent);break;}
        }
      }
    }
    // Preserve existing social rows even if they have only one detected social platform.
    const known=Array.from(document.querySelectorAll('.social-icons,.social-links,.social-media,.footer-social,.footer-socials,[class*="social-icons"],[class*="social-links"]'));
    for(const group of known){
      const a=Array.from(group.querySelectorAll('a'));
      if(a.length<2||a.length>7)continue;
      if(a.some(x=>/facebook|tiktok/.test(details(x))))groups.add(group);
    }
    // Prefer the closest matching social row for any nested group.
    return Array.from(groups).filter(g=>!Array.from(groups).some(x=>x!==g&&g.contains(x)));
  }
  function ensureStyles(){
    if(document.getElementById('meu-ig-unified-styles'))return;
    const link=document.createElement('link');
    link.id='meu-ig-unified-styles';
    link.rel='stylesheet';
    link.href='instagram-contact.css?v=20261030footer2';
    document.head.appendChild(link);
  }
  function fixRow(group){
    if(group.querySelectorAll('a').length>8)return false;
    const anchors=Array.from(group.querySelectorAll('a'));
    const tk=anchors.find(a=>/tiktok/.test(details(a)));
    const fb=anchors.find(a=>/facebook|fb\.com|fa-facebook|lucide-facebook/.test(details(a)));
    if(!tk&&!fb)return false;
    const reference=tk||fb;
    const existing=anchors.find(a=>/instagram\.com\/misseliteuniverse/i.test(a.href));
    group.classList.add('meu-social-icons-unified');
    if(existing){
      existing.classList.add('meu-instagram-icon-link');
      existing.title='Instagram – Miss Elite Universe';
      existing.setAttribute('aria-label','Instagram – Miss Elite Universe (@misseliteuniverse)');
      return true;
    }
    const icon=document.createElement('a');
    icon.className=Array.from(reference.classList).filter(x=>!/tiktok|facebook|twitter|youtube|instagram/i.test(x)).join(' ')+' meu-instagram-icon-link';
    icon.setAttribute('href',INSTAGRAM);
    icon.setAttribute('target','_blank');
    icon.setAttribute('rel','noopener noreferrer');
    icon.setAttribute('title','Instagram – Miss Elite Universe');
    icon.setAttribute('aria-label','Instagram – Miss Elite Universe (@misseliteuniverse)');
    icon.innerHTML=ICON;
    const maybeLI=reference.parentElement?.tagName==='LI'&&reference.parentElement.parentElement===group;
    if(maybeLI){
      const li=document.createElement('li');
      li.className=Array.from(reference.parentElement.classList).filter(x=>!/tiktok|facebook/i.test(x)).join(' ');
      li.appendChild(icon);
      reference.parentElement.insertAdjacentElement('afterend',li);
    }else{
      reference.insertAdjacentElement('afterend',icon);
    }
    return true;
  }
  function install(){
    // Clean up the old large standalone Instagram card and the oversized previous header icon.
    document.getElementById('meu-instagram-official-contact')?.remove();
    document.getElementById('meu-instagram-social-icon')?.remove();
    const groups=socialGroups();
    if(!groups.length)return false;
    ensureStyles();
    let applied=false;
    groups.forEach(group=>{applied=fixRow(group)||applied;});
    return applied;
  }
  function boot(){
    install();
    let attempts=0;
    const repeat=setInterval(()=>{
      attempts++;
      install();
      if(attempts>=16)clearInterval(repeat);
    },500);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
