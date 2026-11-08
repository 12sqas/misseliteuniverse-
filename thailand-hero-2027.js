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
    const temporaryImage='https://d2jqrm6oza8nb6.cloudfront.net/datasets/8abf94a1-b149-4eb9-8851-5a83a0702f0c.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNTM5Zjk2M2E5ZWZlZGVlNCIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5NDI3MzIxMH0.DdwppSjkG_nwfBoEYERUoOr8oyEb2__w134Tk4iv8f0';
    let fallbackStage=0;
    img.onerror=()=>{
      if(fallbackStage===0){fallbackStage=1;img.src=temporaryImage;}
      else if(fallbackStage===1){fallbackStage=2;img.src='/images/miss-elite-universe-2027-banner.png';}
    };
    img.src='/images/meu-thailand-2027-hero.avif';
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
