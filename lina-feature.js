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
      {name:'Elite Glow',image:'images/sponsors/elite-glow.png'},
      {name:'Lumina Cosmetics',image:'images/sponsors/lumina-cosmetics.png'},
      {name:'Aura Beauty',image:'images/sponsors/aura-beauty.png'}
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