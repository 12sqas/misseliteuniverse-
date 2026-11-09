/* Official Miss Elite Universe 2027 competition schedule.
   The 2027 title season is staged 09–30 November 2026 in Thailand.
   This module only adds public schedule content; it does not alter voting. */
(()=>{
  'use strict';
  const id='meu-official-schedule';
  const events=[
    {date:'09–15',label:'NOVEMBER 2026',name:"DELEGATES’ ARRIVAL & OFFICIAL WELCOME",
      detail:'Arrival and welcoming of international contestants in Thailand.',type:'Welcome'},
    {date:'17',label:'NOVEMBER 2026',name:'OFFICIAL SASHING CEREMONY',
      detail:'Presentation of national sashes and formal introduction of international delegates.',type:'Ceremony'},
    {date:'18',label:'NOVEMBER 2026',name:'OFFICIAL GALA DINNER',
      detail:'An official evening gathering for international delegates.',place:'Khum Damnoen Resort, Thailand',type:'Gala Dinner'},
    {date:'20',label:'NOVEMBER 2026',name:'CLOSED-DOOR INTERVIEWS',
      detail:'Private interviews and individual evaluation sessions with the judging panel.',type:'Judging'},
    {date:'21',label:'NOVEMBER 2026',name:'DEPARTURE FOR PHUKET',
      detail:'Official delegation flight and transfer to Phuket, Thailand.',type:'Travel'},
    {date:'23',label:'NOVEMBER 2026',name:'LOCAL OCEAN COSTUME SHOWCASE',
      detail:'A special presentation celebrating ocean-inspired fashion and creativity.',type:'Showcase'},
    {date:'24',label:'NOVEMBER 2026',name:'RETURN TO BANGKOK',
      detail:'Official delegation return from Phuket to Bangkok.',type:'Travel'},
    {date:'25',label:'NOVEMBER 2026',name:'NATIONAL COSTUME PRESENTATION',
      detail:'A celebration of cultural identity, national heritage and international diversity.',type:'Competition'},
    {date:'26',label:'NOVEMBER 2026',name:'BANGKOK CULTURAL EXPLORATION',
      detail:'Discovering Thailand’s cultural heritage, landmarks and local traditions.',type:'Cultural Program'},
    {date:'27',label:'NOVEMBER 2026',name:'SEMIFINAL REHEARSAL',
      detail:'Official technical preparation and stage rehearsal.',type:'Rehearsal'},
    {date:'28',label:'NOVEMBER 2026',name:'SEMIFINAL COMPETITION',
      detail:'The official semifinal event of Miss Elite Universe 2027.',type:'Competition'},
    {date:'30',label:'NOVEMBER 2026',name:'GRAND FINAL & CORONATION NIGHT',
      detail:'The culminating event of Miss Elite Universe 2027, featuring the official crowning ceremony.',
      place:'MGI Hall, Bangkok, Thailand',
      broadcast:'LIVE ON YOUTUBE: MISS ELITE UNIVERSE OFFICIAL',
      type:'Grand Final',final:true}
  ];
  const eventMarkup=e=>`<article class="meu-schedule-row${e.final?' meu-schedule-row--final':''}" aria-label="${e.date} ${e.label}: ${e.name}">
    <div class="meu-schedule-date"><span class="meu-schedule-date-number">${e.date}</span><span class="meu-schedule-date-month">${e.label}</span></div>
    <div class="meu-schedule-details"><span class="meu-schedule-type">${e.type}</span><h3>${e.name}</h3><p>${e.detail}</p>
      ${e.place?`<p class="meu-schedule-place"><strong>VENUE:</strong> ${e.place}</p>`:''}
      ${e.broadcast?`<p class="meu-schedule-broadcast">${e.broadcast}</p>`:''}
    </div>
    <span class="meu-schedule-row-arrow" aria-hidden="true">✧</span>
  </article>`;
  const install=()=>{
    if(document.getElementById(id))return;
    const hero=document.querySelector('section.hero.hero-banner') || document.querySelector('main > section:first-of-type');
    if(!hero)return;
    const css=document.createElement('link');
    css.rel='stylesheet';css.href='/official-schedule-2027.css?v=20261109-a';
    css.setAttribute('data-meu-official-schedule-style','1');
    document.head.appendChild(css);
    const section=document.createElement('section');
    section.id=id;
    section.className='meu-official-schedule';
    section.setAttribute('aria-labelledby','meu-schedule-title');
    section.innerHTML=`
    <div class="meu-schedule-container">
      <div class="meu-schedule-topline">MISS ELITE UNIVERSE ORGANIZATION · OFFICIAL MEDIA ANNOUNCEMENT</div>
      <h2 id="meu-schedule-title">OFFICIAL COMPETITION SCHEDULE</h2>
      <p class="meu-schedule-season">MISS ELITE UNIVERSE 2027 <span>·</span> SEASON 2027</p>
      <p class="meu-schedule-location">THAILAND · 09–30 NOVEMBER 2026</p>
      <p class="meu-schedule-lead">The official program for the 2027 title season, taking place in Thailand in November 2026.</p>
      <figure class="meu-schedule-poster-frame">
        <img src="/images/meu-official-schedule-2027.jpg?v=20261109-original"
             alt="Official Miss Elite Universe 2027 program poster, showing all twelve event dates from November 9 to November 30, 2026, with the Grand Final at MGI Hall, Bangkok"
             class="meu-schedule-poster-image" width="1529" height="2048" loading="lazy" decoding="async">
        <figcaption>OFFICIAL 2027 SEASON SCHEDULE · EVENTS HELD IN NOVEMBER 2026</figcaption>
      </figure>
      <div class="meu-schedule-events-header">
        <div><span class="meu-schedule-eyebrow">EVENT-BY-EVENT PROGRAM</span>
        <h3>Official Daily Itinerary</h3></div>
        <span class="meu-schedule-total">12 SCHEDULED MILESTONES</span>
      </div>
      <div class="meu-schedule-rows">${events.map(eventMarkup).join('')}</div>
      <aside class="meu-schedule-policy">
        <h3>ANNUAL EDITION & REIGN POLICY</h3>
        <p>The Miss Elite Universe 2027 title season is held toward the end of the preceding calendar year. Its November 2026 competition schedule is designed to allow the new titleholder to serve a full reign leading into the next annual coronation.</p>
        <p>Miss Elite Universe Organization is committed to continuity, professionalism and clear public communication throughout every titleholder’s reign.</p>
      </aside>
      <div class="meu-schedule-signature">MISS ELITE UNIVERSE ORGANIZATION <span>Official Competition Schedule & Media Announcement</span></div>
    </div>`;
    // Put this prominently below the homepage cover and above other homepage features.
    hero.insertAdjacentElement('afterend',section);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();
