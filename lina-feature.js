/* Automatically insert Lina's section after the homepage cover/hero. */
(()=>{const id='lina-ferreira-2026';if(document.getElementById(id))return;
const marker=document.querySelector('.hero, #hero, .hero-section, #home, .banner, .homepage-banner, header.hero, main > section:first-of-type');
if(!marker){console.warn('Lina feature: no homepage cover found; adjust banner selector.');return;}
const style=document.createElement('link');style.rel='stylesheet';style.href='lina-feature.css';document.head.appendChild(style);
const holder=document.createElement('div');holder.innerHTML="<section class=\"lina-royal\" id=\"lina-ferreira-2026\" aria-labelledby=\"lina-title\">\n <div class=\"lina-royal__inside\">\n  <p class=\"lina-kicker\">A Legacy Begins · Miss Elite Universe 2026</p>\n  <h2 id=\"lina-title\">Lina Ferreira</h2>\n  <p class=\"lina-subtitle\">First-Ever Miss Elite Universe 2026 <span>·</span> United States of America</p>\n  <div class=\"lina-gallery\" aria-label=\"Four portraits of Lina Ferreira\">\n   <figure><img src=\"images/lina-ferreira-1.jpg\" alt=\"Lina Ferreira — official portrait\" loading=\"lazy\"></figure>\n   <figure><img src=\"images/lina-ferreira-2.jpg\" alt=\"Lina Ferreira — Miss Elite Universe 2026\" loading=\"lazy\"></figure>\n   <figure><img src=\"images/lina-ferreira-3.jpg\" alt=\"Lina Ferreira wearing the Miss Elite Universe crown\" loading=\"lazy\"></figure>\n   <figure><img src=\"images/lina-ferreira-4.jpg\" alt=\"Lina Ferreira — crowned queen portrait\" loading=\"lazy\"></figure>\n  </div>\n  <div class=\"lina-story\">\n   <p class=\"lina-story__eyebrow\">A Message from Our Inaugural Queen</p>\n   <blockquote>\n    “Becoming the very first Miss Elite Universe is an honor I will carry with me for the rest of my life. When my name was called, I knew that this crown represented more than a personal dream — it marked the beginning of a new legacy, one built on courage, compassion, and the belief that every woman has the power to make a difference.\n    <br><br>Over the past four months, this journey has taken me across seven incredible destinations: South Korea, the Philippines, Doha in Qatar, France, Vietnam, Taiwan, and the United States of America. Each stop has given me something unforgettable — meaningful conversations, new friendships, beautiful cultures, and moments that reminded me why this platform matters. From the warmth of the people I met to the inspiring stories I had the privilege to hear, every experience has shaped the woman and titleholder I am becoming.\n    <br><br>As the inaugural titleholder, I feel both immense gratitude and a profound responsibility. There was no path laid out before us; together, we are creating it. I hope my reign will be remembered not only for the places I visited or the milestones we celebrated, but for the kindness we shared, the voices we uplifted, and the doors we opened for those who will follow.\n    <br><br>To the Miss Elite Universe Organization, to everyone who believed in me, and to the communities who welcomed me with open arms: thank you. This is only the first chapter. May our legacy inspire future generations to lead with grace, serve with purpose, and shine without limits.”\n   </blockquote>\n   <p class=\"lina-signoff\">— Lina Ferreira <span>Miss Elite Universe 2026</span></p>\n  </div>\n </div>\n</section>";marker.insertAdjacentElement('afterend',holder.firstElementChild);
})();

/* Beauty & Skincare sponsors — 2027 */
(()=>{
  'use strict';
  const sectionId='beauty-skincare-partners';
  const install=()=>{
    if(document.getElementById(sectionId)) return;
    const footer=document.querySelector('footer:last-of-type') || document.querySelector('footer');
    const main=document.querySelector('main');
    const section=document.createElement('section');
    section.id=sectionId;
    section.className='meu-beauty-section';
    section.setAttribute('aria-labelledby','meu-beauty-title');
    const partners=[
      {name:'Elite Glow',image:'images/elite-glow.png'},
      {name:'Lumina Cosmetics',image:'images/lumina-cosmetics.png'},
      {name:'Aura Beauty',image:'images/aura-beauty.png'}
    ];
    const title=document.createElement('div');title.className='meu-beauty-heading';
    title.innerHTML='<p class="meu-beauty-eyebrow">MISS ELITE UNIVERSE 2027 · OFFICIAL PARTNERS</p><h2 id="meu-beauty-title">Beauty &amp; Skincare</h2><p class="meu-beauty-intro">Celebrating beauty, confidence and the art of self-care.</p>';
    section.appendChild(title);
    const grid=document.createElement('div');grid.className='meu-beauty-grid';
    for(const partner of partners){
      const card=document.createElement('article');card.className='meu-beauty-card';
      const visual=document.createElement('div');visual.className='meu-beauty-visual';
      const img=document.createElement('img');img.src=partner.image;img.alt=partner.name+' logo';img.loading='lazy';img.decoding='async';img.width=410;img.height=300;
      img.addEventListener('error',()=>{visual.classList.add('meu-beauty-image-missing');img.hidden=true;});
      visual.appendChild(img);card.appendChild(visual);
      const name=document.createElement('h3');name.textContent=partner.name;card.appendChild(name);
      grid.appendChild(card);
    }
    section.appendChild(grid);
    const style=document.createElement('style');style.id='meu-beauty-styles';
    style.textContent=String.raw`
      .meu-beauty-section{position:relative;padding:84px max(24px,5vw) 94px;background:radial-gradient(ellipse at 50% 0,#1c4939 0%,#0b251d 55%,#061811 100%);color:#fbf2dc;border-top:1px solid rgba(221,181,103,.4);border-bottom:1px solid rgba(221,181,103,.4);font-family:Arial,Helvetica,sans-serif}
      .meu-beauty-section *{box-sizing:border-box}.meu-beauty-heading{text-align:center;margin:0 auto 38px;max-width:780px}
      .meu-beauty-eyebrow{margin:0 0 13px;color:#ddbc77;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase}
      .meu-beauty-heading h2{margin:0;color:#f0d79a;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(34px,4vw,56px);letter-spacing:1px;text-transform:none;line-height:1.2}
      .meu-beauty-intro{color:#d6d8cc;font-size:14px;line-height:1.7;margin:15px 0 0}
      .meu-beauty-grid{width:min(100%,1220px);margin:0 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
      .meu-beauty-card{min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;min-height:305px;padding:26px 20px 23px;background:linear-gradient(160deg,rgba(244,219,153,.085),rgba(255,255,255,.025));border:1px solid rgba(228,191,121,.46);border-radius:14px;text-align:center;box-shadow:0 20px 45px rgba(0,0,0,.16)}
      .meu-beauty-visual{height:196px;min-height:196px;display:flex;justify-content:center;align-items:center;width:100%}
      .meu-beauty-visual img{max-width:100%;max-height:190px;width:auto;height:auto;object-fit:contain;filter:drop-shadow(0 9px 14px rgba(0,0,0,.15))}
      .meu-beauty-card h3{margin:0;color:#e5d4a4;font:400 20px/1.35 Georgia,'Times New Roman',serif;letter-spacing:.5px}
      .meu-beauty-image-missing:after{content:'IMAGE COMING SOON';font-size:10px;letter-spacing:2px;color:#bba97e}
      @media(max-width:800px){.meu-beauty-section{padding:65px 18px}.meu-beauty-grid{gap:12px}.meu-beauty-card{min-height:225px;padding:16px 10px}.meu-beauty-visual{height:145px;min-height:145px}.meu-beauty-visual img{max-height:140px}.meu-beauty-card h3{font-size:16px}}
      @media(max-width:540px){.meu-beauty-grid{grid-template-columns:1fr;gap:15px;max-width:340px}.meu-beauty-card{min-height:230px}.meu-beauty-visual{height:156px;min-height:156px}.meu-beauty-visual img{max-height:152px}}
    `;
    document.head.appendChild(style);
    if(footer && footer.parentNode) footer.parentNode.insertBefore(section,footer);
    else if(main) main.appendChild(section);
    else document.body.appendChild(section);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();

/* Media Partners — Miss Elite Universe 2027 */
(()=>{
  'use strict';
  const sectionId='meu-media-partners';
  const install=()=>{
    if(document.getElementById(sectionId))return;
    const section=document.createElement('section');
    section.id=sectionId;
    section.className='meu-media-section';
    section.setAttribute('aria-labelledby','meu-media-title');

    const heading=document.createElement('div');
    heading.className='meu-media-heading';
    const eyebrow=document.createElement('p');
    eyebrow.className='meu-media-eyebrow';
    eyebrow.textContent='MISS ELITE UNIVERSE 2027 · OFFICIAL PARTNERS';
    const title=document.createElement('h2');
    title.id='meu-media-title';
    title.textContent='Media Partners';
    const intro=document.createElement('p');
    intro.className='meu-media-intro';
    intro.textContent='Connecting stories, celebrating voices, and sharing the Miss Elite Universe journey with the world.';
    heading.append(eyebrow,title,intro);
    section.appendChild(heading);

    const logos=[
      {name:'FOX',image:'images/media-fox.jpg'},
      {name:'SHARED.MEDIA',image:'images/media-shared.png'},
      {name:'Khang Việt Media',image:'images/media-khang-viet.jpg'}
    ];
    const grid=document.createElement('div');
    grid.className='meu-media-grid';
    for(const partner of logos){
      const card=document.createElement('article');
      card.className='meu-media-card';
      const imageBox=document.createElement('div');
      imageBox.className='meu-media-visual';
      const img=document.createElement('img');
      img.src=partner.image;
      img.alt=partner.name+' logo';
      img.loading='lazy';
      img.decoding='async';
      img.width=500;
      img.height=500;
      img.addEventListener('error',()=>{
        img.hidden=true;
        imageBox.classList.add('meu-media-image-missing');
      },{once:true});
      imageBox.appendChild(img);
      const brand=document.createElement('h3');
      brand.textContent=partner.name;
      card.append(imageBox,brand);
      grid.appendChild(card);
    }
    section.appendChild(grid);
    if(!document.getElementById('meu-media-styles')){
      const style=document.createElement('style');
      style.id='meu-media-styles';
      style.textContent=String.raw`
        .meu-media-section{position:relative;padding:80px max(24px,5vw) 96px;background:radial-gradient(ellipse at 50% 0,#163a31 0%,#071e18 58%,#061711 100%);color:#f9f1dd;border-top:1px solid rgba(221,181,103,.45);border-bottom:1px solid rgba(221,181,103,.4);font-family:Arial,Helvetica,sans-serif}
        .meu-media-section *{box-sizing:border-box}
        .meu-media-heading{max-width:840px;margin:0 auto 37px;text-align:center}
        .meu-media-eyebrow{margin:0 0 13px;color:#ddbc77;font-size:11px;font-weight:600;letter-spacing:2.8px;text-transform:uppercase}
        .meu-media-heading h2{margin:0;color:#f0d79a;font:400 clamp(34px,4vw,56px)/1.2 Georgia,'Times New Roman',serif;letter-spacing:.7px;text-transform:none}
        .meu-media-intro{color:#d6d8cc;font-size:14px;line-height:1.7;margin:15px 0 0}
        .meu-media-grid{width:min(100%,1220px);margin:0 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .meu-media-card{min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:17px;min-height:322px;padding:22px;background:linear-gradient(160deg,rgba(244,219,153,.07),rgba(255,255,255,.025));border:1px solid rgba(228,191,121,.46);border-radius:14px;text-align:center;box-shadow:0 18px 42px rgba(0,0,0,.18)}
        .meu-media-visual{width:100%;height:226px;display:grid;place-items:center;overflow:hidden;border-radius:10px;background:#f7f6f2}
        .meu-media-visual img{width:100%;height:100%;object-fit:contain}
        .meu-media-card h3{margin:0;color:#e5d4a4;font:400 20px/1.35 Georgia,'Times New Roman',serif;letter-spacing:.4px}
        .meu-media-image-missing:after{content:'LOGO COMING SOON';font-size:11px;letter-spacing:2px;color:#52645b}
        @media(max-width:800px){.meu-media-section{padding:64px 18px}.meu-media-grid{gap:12px}.meu-media-card{padding:12px;min-height:238px}.meu-media-visual{height:160px}.meu-media-card h3{font-size:16px}}
        @media(max-width:540px){.meu-media-grid{grid-template-columns:1fr;gap:16px;max-width:340px}.meu-media-card{min-height:240px}.meu-media-visual{height:178px}}
      `;
      document.head.appendChild(style);
    }

    const beauty=document.getElementById('beauty-skincare-partners');
    const footer=document.querySelector('footer:last-of-type') || document.querySelector('footer');
    const main=document.querySelector('main');
    if(beauty && beauty.parentNode)beauty.insertAdjacentElement('afterend',section);
    else if(footer && footer.parentNode)footer.parentNode.insertBefore(section,footer);
    else if(main)main.appendChild(section);
    else document.body.appendChild(section);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();


/* Compact sponsorship directory + George Wittels crown sponsor — 2027 */
(()=>{
  'use strict';
  function install(){
    if(document.getElementById('meu-crown-sponsor'))return;
    const footer=document.querySelector('footer:last-of-type')||document.querySelector('footer');
    const media=document.getElementById('meu-media-partners');
    const beauty=document.getElementById('beauty-skincare-partners');
    const main=document.querySelector('main');
    const section=document.createElement('section');
    section.id='meu-crown-sponsor';
    section.className='meu-crown-section';
    section.setAttribute('aria-labelledby','meu-crown-title');

    const heading=document.createElement('div');
    heading.className='meu-crown-heading';
    heading.innerHTML='<p class="meu-crown-eyebrow">MISS ELITE UNIVERSE 2027 · OFFICIAL PARTNER</p><h2 id="meu-crown-title">Official Crown Sponsor</h2>';
    const card=document.createElement('div');card.className='meu-crown-card';
    const logoWrap=document.createElement('div');logoWrap.className='meu-crown-logo';
    const logo=document.createElement('img');
    logo.src='data:image/webp;base64,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';
    logo.alt='George Wittels — official crown sponsor logo';
    logo.width=700;logo.height=315;
    logo.loading='lazy';logo.decoding='async';
    logo.addEventListener('error',()=>{logo.hidden=true;logoWrap.classList.add('meu-crown-image-missing')},{once:true});
    logoWrap.appendChild(logo);
    const info=document.createElement('div');info.className='meu-crown-info';
    const name=document.createElement('h3');name.textContent='George Wittels';
    const desc=document.createElement('p');desc.textContent='Crown Sponsor · Miss Elite Universe 2027';
    info.append(name,desc);
    card.append(logoWrap,info);
    section.append(heading,card);
    if(media && media.parentNode)media.insertAdjacentElement('afterend',section);
    else if(beauty && beauty.parentNode)beauty.insertAdjacentElement('afterend',section);
    else if(footer && footer.parentNode)footer.parentNode.insertBefore(section,footer);
    else if(main)main.appendChild(section);
    else document.body.appendChild(section);

    if(!document.getElementById('meu-sponsor-compact-styles')){
      const style=document.createElement('style');
      style.id='meu-sponsor-compact-styles';
      style.textContent=String.raw`
      /* Three consistent, compact sponsorship categories */
      .meu-beauty-section,.meu-media-section,.meu-crown-section {
        padding:34px max(20px,4vw) 38px!important;
        background:#081f1a!important;
        border-top:1px solid rgba(219,182,112,.24)!important;
        border-bottom:0!important;
        color:#f2e8d3;
        font-family:Arial,Helvetica,sans-serif;
      }
      .meu-beauty-heading,.meu-media-heading,.meu-crown-heading {
        max-width:950px!important;
        text-align:center!important;
        margin:0 auto 17px!important;
      }
      .meu-beauty-eyebrow,.meu-media-eyebrow,.meu-crown-eyebrow {
        font:600 9px/1.5 Arial,Helvetica,sans-serif!important;
        letter-spacing:2.1px!important;
        color:#cbb378!important;
        margin:0 0 7px!important;
      }
      .meu-beauty-heading h2,.meu-media-heading h2,.meu-crown-heading h2 {
        color:#ebd6a1!important;
        font:400 clamp(23px,2.6vw,32px)/1.25 Georgia,'Times New Roman',serif!important;
        letter-spacing:.2px!important;
        margin:0!important;
        text-transform:none!important;
      }
      .meu-beauty-intro,.meu-media-intro {display:none!important;}
      .meu-beauty-grid,.meu-media-grid {
        max-width:900px!important;
        width:100%!important;
        display:grid!important;
        grid-template-columns:repeat(3,minmax(0,1fr))!important;
        gap:13px!important;
      }
      .meu-beauty-card,.meu-media-card {
        min-height:148px!important;
        padding:13px 10px!important;
        gap:7px!important;
        border:1px solid rgba(210,181,124,.24)!important;
        border-radius:8px!important;
        background:rgba(255,255,255,.025)!important;
        box-shadow:none!important;
      }
      .meu-beauty-visual,.meu-media-visual {
        flex:0 0 auto!important;
        width:100%!important;
        height:93px!important;
        min-height:93px!important;
        display:flex!important;
        justify-content:center!important;
        align-items:center!important;
        overflow:hidden!important;
        border-radius:5px!important;
      }
      .meu-beauty-visual {background:transparent!important;}
      .meu-media-visual {background:#f5f5f3!important;}
      .meu-beauty-visual img,.meu-media-visual img {
        display:block;
        width:auto!important;
        max-width:100%!important;
        height:auto!important;
        max-height:90px!important;
        object-fit:contain!important;
      }
      .meu-beauty-visual img[hidden],.meu-media-visual img[hidden]{display:none!important}
      .meu-beauty-card h3,.meu-media-card h3 {
        font:400 13px/1.4 Georgia,'Times New Roman',serif!important;
        color:#e5d6b7!important;
        letter-spacing:0!important;
        margin:0!important;
        text-align:center!important;
      }
      .meu-crown-section *{box-sizing:border-box}
      .meu-crown-card {
        max-width:900px;
        margin:0 auto;
        min-height:134px;
        display:grid;
        grid-template-columns:minmax(0,1fr) minmax(0,1fr);
        gap:20px;
        align-items:center;
        padding:15px 24px;
        border:1px solid rgba(210,181,124,.28);
        border-radius:8px;
        background:rgba(255,255,255,.025);
      }
      .meu-crown-logo {
        min-height:104px;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        border-radius:5px;
        background:#101519;
      }
      .meu-crown-logo img {
        display:block;
        width:100%;
        height:auto;
        max-width:330px;
        max-height:100px;
        object-fit:contain;
      }
      .meu-crown-logo img[hidden]{display:none!important}
      .meu-crown-image-missing:after{content:'George Wittels';color:#fff;font:italic 27px Georgia,serif}
      .meu-crown-info{text-align:left}
      .meu-crown-info h3{margin:0 0 7px;color:#efdbb2;font:400 clamp(20px,2.3vw,27px)/1.25 Georgia,serif}
      .meu-crown-info p{margin:0;font:11px/1.5 Arial,sans-serif;letter-spacing:1px;color:#c8c6bb}
      @media(max-width:650px){
        .meu-beauty-section,.meu-media-section,.meu-crown-section{padding:26px 12px 30px!important}
        .meu-beauty-grid,.meu-media-grid{gap:7px!important}
        .meu-beauty-card,.meu-media-card{min-height:112px!important;padding:8px 5px!important;gap:5px!important}
        .meu-beauty-visual,.meu-media-visual{height:68px!important;min-height:68px!important}
        .meu-beauty-visual img,.meu-media-visual img{max-height:66px!important}
        .meu-beauty-card h3,.meu-media-card h3{font-size:10px!important;line-height:1.25!important}
        .meu-beauty-heading h2,.meu-media-heading h2,.meu-crown-heading h2{font-size:24px!important}
        .meu-crown-card{min-height:0;gap:8px;padding:10px;grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
        .meu-crown-logo{min-height:77px}.meu-crown-logo img{max-height:74px}
        .meu-crown-info h3{font-size:18px}
        .meu-crown-info p{font-size:9px;letter-spacing:.2px}
      }
      `;
      document.head.appendChild(style);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();


/* MEU 2027 · Hospitality and transportation sponsors */
(()=>{
  'use strict';
  const install=()=>{
    if(document.getElementById('meu-hospitality-partners'))return;

    const createSection=(id,title,logos,modifier)=>{
      const section=document.createElement('section');
      section.className='meu-logistics-section';
      section.id=id;
      section.setAttribute('aria-label',title);
      const heading=document.createElement('div');
      heading.className='meu-logistics-heading';
      const eyebrow=document.createElement('p');
      eyebrow.className='meu-logistics-eyebrow';
      eyebrow.textContent='MISS ELITE UNIVERSE 2027 · OFFICIAL PARTNERS';
      const headingText=document.createElement('h2');
      headingText.textContent=title;
      heading.append(eyebrow,headingText);
      section.appendChild(heading);
      const grid=document.createElement('div');
      grid.className='meu-logistics-grid'+(modifier?' meu-logistics-grid--two':'');
      for(const partner of logos){
        const card=document.createElement('article');
        card.className='meu-logistics-card';
        const visual=document.createElement('div');
        visual.className='meu-logistics-visual';
        const img=document.createElement('img');
        img.src=partner.image;
        img.alt=partner.name+' logo';
        img.width=180;
        img.height=180;
        img.loading='lazy';
        img.decoding='async';
        img.addEventListener('error',()=>{
          img.hidden=true;
          visual.classList.add('meu-logistics-image-missing');
        },{once:true});
        visual.appendChild(img);
        const label=document.createElement('h3');
        label.textContent=partner.name;
        card.append(visual,label);
        grid.appendChild(card);
      }
      section.appendChild(grid);
      return section;
    };

    const hospitality=createSection(
      'meu-hospitality-partners','Accommodation & Hotel Partners',[
        {name:'Khum Dam Noen Resort',image:'images/partners-hotel-khum.webp'},
        {name:'Agoda',image:'images/partners-hotel-agoda.webp'},
        {name:'VIE Hotel Bangkok – MGallery',image:'images/partners-hotel-vie.webp'}
      ],false
    );
    const travel=createSection(
      'meu-transport-partners','Transportation Partners',[
        {name:'OMODA',image:'images/partners-transport-omoda.webp'},
        {name:'AirAsia',image:'images/partners-transport-airasia.webp'}
      ],true
    );

    const anchor=document.getElementById('meu-crown-sponsor')||
      document.getElementById('meu-media-partners')||
      document.getElementById('beauty-skincare-partners');
    const footer=document.querySelector('footer:last-of-type')||document.querySelector('footer');
    if(anchor&&anchor.parentNode){
      anchor.insertAdjacentElement('afterend',hospitality);
      hospitality.insertAdjacentElement('afterend',travel);
    }else if(footer&&footer.parentNode){
      footer.parentNode.insertBefore(hospitality,footer);
      footer.parentNode.insertBefore(travel,footer);
    }else{
      document.body.append(hospitality,travel);
    }

    if(!document.getElementById('meu-logistics-styles')){
      const style=document.createElement('style');
      style.id='meu-logistics-styles';
      style.textContent=[
        '.meu-logistics-section{box-sizing:border-box;padding:32px max(20px,4vw) 36px;background:#081f1a;border-top:1px solid rgba(219,182,112,.24);color:#f2e8d3;font-family:Arial,Helvetica,sans-serif;}',
        '.meu-logistics-section *{box-sizing:border-box;}',
        '.meu-logistics-heading{text-align:center;margin:0 auto 17px;max-width:950px;}',
        '.meu-logistics-eyebrow{margin:0 0 7px;color:#cbb378;font:600 9px/1.5 Arial,Helvetica,sans-serif;letter-spacing:2.1px;}',
        '.meu-logistics-heading h2{margin:0;color:#ebd6a1;font:400 clamp(23px,2.6vw,32px)/1.25 Georgia,serif;}',
        '.meu-logistics-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px;width:min(100%,900px);margin:0 auto;}',
        '.meu-logistics-grid--two{grid-template-columns:repeat(2,minmax(0,280px));justify-content:center;}',
        '.meu-logistics-card{min-width:0;min-height:148px;padding:13px 10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;text-align:center;border:1px solid rgba(210,181,124,.24);border-radius:8px;background:rgba(255,255,255,.025);}',
        '.meu-logistics-visual{width:100%;height:94px;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#f7f7f6;}',
        '.meu-logistics-visual img{display:block;height:90px;max-height:90px;max-width:100%;width:auto;object-fit:contain;}',
        '.meu-logistics-visual img[hidden]{display:none!important;}',
        '.meu-logistics-image-missing:after{content:"LOGO COMING SOON";font:10px Arial,sans-serif;color:#52645b;letter-spacing:1px;}',
        '.meu-logistics-card h3{margin:0;color:#e5d6b7;font:400 13px/1.4 Georgia,serif;}',
        '@media(max-width:650px){.meu-logistics-section{padding:26px 12px 30px;}.meu-logistics-heading h2{font-size:24px;}.meu-logistics-grid{gap:7px;}.meu-logistics-grid--two{grid-template-columns:repeat(2,minmax(0,170px));}.meu-logistics-card{min-height:112px;padding:8px 5px;gap:5px;}.meu-logistics-visual{height:68px;}.meu-logistics-visual img{height:66px;max-height:66px;}.meu-logistics-card h3{font-size:10px;line-height:1.25;}}'
      ].join('\n');
      document.head.appendChild(style);
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();

/* Official 2027 selection format — separate maintainable module. */
(()=>{const s=document.createElement('script');s.src='competition-format.js?v=20261030gold';s.async=true;document.head.appendChild(s);})();

/* Dedicated official Instagram contact link for the homepage. */
(()=>{if(document.querySelector('script[data-meu-instagram]'))return;const s=document.createElement('script');s.src='instagram-contact.js?v=20261030icononly';s.dataset.meuInstagram='1';document.head.appendChild(s);})();
