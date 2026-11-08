/* Replace the existing homepage brand cover with Thailand 2027 artwork. */
(function(){
  const install=()=>{
    const hero=document.querySelector('section.hero.hero-banner');
    if(!hero||hero.classList.contains('meu-thailand-hero'))return;
    const frame=document.createElement('div');
    frame.className='meu-thailand-hero-frame';
    const img=document.createElement('img');
    img.className='meu-thailand-hero-image';
    img.alt='Miss Elite Universe — 2nd Edition, Thailand 2027, Bangkok temple and official gold logo';
    img.loading='eager';
    img.decoding='async';
    img.setAttribute('fetchpriority','high');
    img.width=2033;img.height=774;
    /* The uploaded original PNG is permanently stored in this repository. */
    img.onerror=()=>{img.onerror=null;img.src='/images/miss-elite-universe-2027-banner.png';};
    img.src='/images/meu-thailand-2027-hero.png?v=20261108-original';
    frame.appendChild(img);
    hero.classList.add('meu-thailand-hero');
    hero.appendChild(frame);
    const css=document.createElement('link');
    css.rel='stylesheet';css.href='/thailand-hero-2027.css?v=20261108-hero1';
    document.head.appendChild(css);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();
