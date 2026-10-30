/* Official Instagram profile — integrated next to homepage contact details. */
(()=>{
  'use strict';
  const ACCOUNT='https://www.instagram.com/misseliteuniverse/';
  const WIDGET_ID='meu-instagram-official-contact';

  const install=()=>{
    if(document.getElementById(WIDGET_ID))return;
    let section=document.querySelector('section#contact, #contact');
    if(section && section.tagName.toLowerCase()==='a')section=section.closest('section')||section.parentElement;
    if(!section){
      const headings=Array.from(document.querySelectorAll('main h2, main h3, section h2, section h3'));
      const title=headings.find(h=>/^(connect with us|contact us|contact|get in touch)$/i.test((h.textContent||'').trim()));
      if(title)section=title.closest('section')||title.parentElement;
    }
    if(!section)return;
    const target=section.querySelector('.contact-info, .contact-details, .contact-content, .contact-card, .contact-inner')
      ||section.querySelector('.container')||section;
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href='instagram-contact.css?v=20261030';
    document.head.appendChild(css);
    const link=document.createElement('a');
    link.id=WIDGET_ID;
    link.className='meu-instagram-contact';
    link.href=ACCOUNT;
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.setAttribute('aria-label','Visit Miss Elite Universe on Instagram at @misseliteuniverse');
    const icon=document.createElement('span');
    icon.className='meu-ig-icon';
    icon.setAttribute('aria-hidden','true');
    icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.75" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
    const copy=document.createElement('span');
    copy.className='meu-ig-copy';
    const label=document.createElement('span');
    label.className='meu-ig-label';
    label.textContent='INSTAGRAM';
    const name=document.createElement('span');
    name.className='meu-ig-name';
    name.textContent='Miss Elite Universe';
    const handle=document.createElement('span');
    handle.className='meu-ig-handle';
    handle.textContent='@misseliteuniverse';
    copy.append(label,name,handle);
    const arrow=document.createElement('span');
    arrow.className='meu-ig-chevron';
    arrow.setAttribute('aria-hidden','true');
    arrow.textContent='↗';
    link.append(icon,copy,arrow);
    target.appendChild(link);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();
