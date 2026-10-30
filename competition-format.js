/* Miss Elite Universe 2027 — Competition Format: progressive, accessible selection flow. */
(()=>{
'use strict';
const SECTION_ID='competition-format';
const STAGES=[
  {title:'TOP 20',number:20,desc:'Twenty delegates advance to the first official selection stage. Every qualifying delegate is represented by a platinum statuette.'},
  {title:'TOP 10',number:10,desc:'Ten delegates move forward, including one Miss Popular Vote winner. The remaining places follow the official competition selection criteria.',popular:true},
  {title:'TOP 5',number:5,desc:'Five outstanding contestants progress to the final competitive stage.'},
  {title:'TOP 3',number:3,desc:'Three finalists remain in contention for the crown and the two runner-up titles.'},
  {title:'2ND RUNNER-UP',number:1,desc:'The finalist awarded third place receives the title of Second Runner-Up.'},
  {title:'1ST RUNNER-UP',number:1,desc:'The finalist awarded second place receives the title of First Runner-Up.'},
  {title:'MISS ELITE UNIVERSE 2027',number:1,desc:'One remarkable woman will be crowned Miss Elite Universe 2027, becoming the titleholder of the new edition.',winner:true}
];
const slug=x=>x.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function statueSet(stage){
  const frame=document.createElement('div');
  frame.className='meu-cf-statues meu-cf-statues--'+stage.number;
  frame.setAttribute('role','img');
  frame.setAttribute('aria-label',stage.number+' female statuettes representing '+stage.title+(stage.popular?', including the Miss Popular Vote winner':''));
  for(let i=0;i<stage.number;i++){
    const figure=document.createElement('div');
    figure.className='meu-cf-statue'+(stage.popular&&i===0?' meu-cf-statue--popular':'')+(stage.winner?' meu-cf-statue--winner':'');
    const img=document.createElement('img');
    img.src='images/queen-gold-3d-2027.webp?v=20261030';
    img.alt='';
    img.loading='lazy';
    img.decoding='async';
    img.width=114;
    img.height=181;
    figure.appendChild(img);
    if(stage.popular&&i===0){
      const tag=document.createElement('span');
      tag.className='meu-cf-statue-popular';
      tag.textContent='POPULAR VOTE';
      figure.appendChild(tag);
    }
    frame.appendChild(figure);
  }
  return frame;
}
function createStage(stage,index){
  const wrapper=document.createElement('section');
  wrapper.className='meu-cf-stage'+(stage.winner?' meu-cf-stage--winner':'');
  wrapper.id='meu-cf-stage-'+index;
  wrapper.hidden=index!==0;
  const head=document.createElement('div');
  head.className='meu-cf-stage-top';
  const copy=document.createElement('div');
  const eyebrow=document.createElement('span');
  eyebrow.className='meu-cf-stage-step';
  eyebrow.textContent='STAGE '+String(index+1).padStart(2,'0')+' / 07';
  const title=document.createElement('h3');
  title.className='meu-cf-stage-title';
  title.textContent=stage.title;
  title.tabIndex=-1;
  copy.append(eyebrow,title);
  const count=document.createElement('span');
  count.className='meu-cf-count';
  count.textContent=stage.number===1?'ONE TITLE':stage.number+' DELEGATES';
  head.append(copy,count);
  const desc=document.createElement('p');
  desc.className='meu-cf-stage-desc';
  desc.textContent=stage.desc;
  wrapper.append(head,desc,statueSet(stage));
  if(stage.popular){
    const note=document.createElement('p');
    note.className='meu-cf-vote-note';
    note.textContent='One Top 10 place is reserved for the Miss Popular Vote winner.';
    wrapper.appendChild(note);
  }
  if(index<STAGES.length-1){
    const next=document.createElement('div');
    next.className='meu-cf-next';
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='meu-cf-reveal';
    btn.dataset.next=String(index+1);
    btn.setAttribute('aria-controls','meu-cf-stage-'+(index+1));
    btn.setAttribute('aria-expanded','false');
    btn.textContent='REVEAL '+STAGES[index+1].title+'  ›';
    next.appendChild(btn);
    wrapper.appendChild(next);
  }else{
    const note=document.createElement('p');
    note.className='meu-cf-final-note';
    note.textContent='ONE CROWN · ONE LEGACY · A UNIVERSE OF POSSIBILITIES';
    wrapper.appendChild(note);
  }
  return wrapper;
}
function inject(){
  if(document.getElementById(SECTION_ID))return;
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href='competition-format.css?v=20261030gold';
  document.head.appendChild(link);
  const section=document.createElement('section');
  section.id=SECTION_ID;
  section.setAttribute('aria-labelledby','meu-cf-heading');
  const shell=document.createElement('div');
  shell.className='meu-cf-shell';
  const kicker=document.createElement('p');
  kicker.className='meu-cf-kicker';
  kicker.textContent='OFFICIAL COMPETITION STRUCTURE · THAILAND 2027';
  const heading=document.createElement('h2');
  heading.className='meu-cf-title';
  heading.id='meu-cf-heading';
  heading.innerHTML='THE ROAD TO <strong>THE CROWN</strong>';
  const intro=document.createElement('p');
  intro.className='meu-cf-intro';
  intro.textContent='Discover the official Miss Elite Universe 2027 selection journey. Follow each milestone from the Top 20 announcement to the crowning of our new queen.';
  const rule=document.createElement('div');
  rule.className='meu-cf-line';
  rule.setAttribute('aria-hidden','true');
  const outline=document.createElement('ol');
  outline.className='meu-cf-path';
  outline.setAttribute('aria-label','Competition selection stages');
  for(const stage of STAGES){
    const item=document.createElement('li');
    item.textContent=stage.winner?'WINNER':stage.title;
    outline.appendChild(item);
  }
  const cards=document.createElement('div');
  cards.className='meu-cf-stages';
  STAGES.forEach((stage,i)=>cards.appendChild(createStage(stage,i)));
  const foot=document.createElement('p');
  foot.className='meu-cf-footnote';
  foot.textContent='Miss Popular Vote qualification and all stage placements remain subject to the organization’s published voting, eligibility and judging rules.';
  shell.append(kicker,heading,intro,rule,outline,cards,foot);
  section.appendChild(shell);

  let about=document.querySelector('main #about, #about, main #about-us, .about-section, main .meu-about');
  if(about)about=about.closest('section')||about;
  if(!about){
    const heads=Array.from(document.querySelectorAll('main h2, main h1, section h2'));
    const match=heads.find(el=>/about(?:\s+the\s+competition|\s+miss\s+elite\s+universe)?/i.test(el.textContent.trim().slice(0,90)));
    if(match)about=match.closest('section');
  }
  const anchor=about||document.querySelector('#lina-ferreira-2026')||document.querySelector('main > section:first-of-type')||document.querySelector('.hero');
  if(anchor&&anchor.parentNode)anchor.insertAdjacentElement('afterend',section);
  else (document.querySelector('main')||document.body).prepend(section);

  const nav=document.querySelector('.site-header nav, header nav, nav[aria-label="Primary navigation"]');
  if(nav&&!nav.querySelector('a[href="#competition-format"]')){
    const link=document.createElement('a');
    link.href='#competition-format';
    link.textContent='Format';
    link.className='meu-cf-nav-link';
    const aboutLink=Array.from(nav.querySelectorAll('a')).find(x=>(x.getAttribute('href')||'').includes('#about')||/^about$/i.test(x.textContent.trim()));
    if(aboutLink)aboutLink.insertAdjacentElement('afterend',link);
    else nav.appendChild(link);
  }
  cards.addEventListener('click',event=>{
    const btn=event.target.closest('button[data-next]');
    if(!btn||!cards.contains(btn))return;
    const idx=Number(btn.dataset.next);
    const next=document.getElementById('meu-cf-stage-'+idx);
    if(!next)return;
    const open=next.hidden;
    if(open){
      next.hidden=false;
      btn.setAttribute('aria-expanded','true');
      btn.textContent='HIDE FOLLOWING STAGES  −';
      next.querySelector('h3').focus({preventScroll:true});
      if(!window.matchMedia('(prefers-reduced-motion:reduce)').matches)next.scrollIntoView({behavior:'smooth',block:'nearest'});
    }else{
      for(let k=idx;k<STAGES.length;k++){
        const stageNode=document.getElementById('meu-cf-stage-'+k);
        stageNode.hidden=true;
        const trigger=document.querySelector('#meu-cf-stage-'+(k-1)+' button[data-next]');
        if(trigger){
          trigger.setAttribute('aria-expanded','false');
          trigger.textContent='REVEAL '+STAGES[k].title+'  ›';
        }
      }
      btn.focus();
    }
  });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject,{once:true});else inject();
})();
