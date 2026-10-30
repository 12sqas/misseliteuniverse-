/* Seamless looping hotel video — Miss Elite Universe 2027.
   Targets only the video belonging to the Host Hotel — VIE Bangkok Hotel heading. */
(()=>{
  'use strict';
  const VIDEO_ID='meu-vie-ambient-video';
  const STYLE_ID='meu-vie-ambient-style';
  function normalize(s){return (s||'').replace(/[\u2013\u2014\-]+/g,' ').replace(/\s+/g,' ').trim().toLowerCase()}
  function findHotelHeading(){
    return Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).find(h=>{
      const t=normalize(h.textContent);
      return t.includes('host hotel') && t.includes('vie bangkok');
    })||null;
  }
  function findAssociatedVideo(heading){
    if(!heading)return null;
    // First look immediately after the heading inside its content grouping.
    let sibling=heading.nextElementSibling;
    for(let n=0;sibling&&n<8;n++,sibling=sibling.nextElementSibling){
      if(sibling.matches('video'))return sibling;
      const found=sibling.querySelector('video');
      if(found)return found;
      if(sibling.matches('h1,h2,h3'))break;
    }
    // Then inspect progressively larger containers; never select an unrelated video.
    let node=heading.parentElement;
    for(let depth=0;node&&depth<4;depth++,node=node.parentElement){
      const videos=node.querySelectorAll('video');
      if(videos.length===1)return videos[0];
      if(videos.length>1)return null;
    }
    return null;
  }
  function apply(){
    const heading=findHotelHeading();
    const video=findAssociatedVideo(heading);
    if(!video)return false;
    if(!document.getElementById(STYLE_ID)){
      const css=document.createElement('link');
      css.id=STYLE_ID;
      css.rel='stylesheet';
      css.href='vie-video-ambient.css?v=20261030';
      document.head.appendChild(css);
    }
    if(!video.classList.contains('meu-vie-ambient-video')){
      video.id=VIDEO_ID;
      video.classList.add('meu-vie-ambient-video');
      const parent=video.parentElement;
      const wrapper=document.createElement('div');
      wrapper.className='meu-vie-ambient-stage';
      wrapper.setAttribute('aria-label','VIE Bangkok Hotel cinematic video');
      parent.insertBefore(wrapper,video);
      wrapper.appendChild(video);
      // Remove an unnecessary dark panel only when it contains nothing else.
      if(parent.children.length===1&&parent.firstElementChild===wrapper)parent.classList.add('meu-vie-video-host');
    }
    // Autoplay works reliably when muted; mobile browsers also require playsinline.
    video.controls=false;
    video.removeAttribute('controls');
    video.muted=true;
    video.defaultMuted=true;
    video.setAttribute('muted','');
    video.loop=true;
    video.setAttribute('loop','');
    video.autoplay=true;
    video.setAttribute('autoplay','');
    video.playsInline=true;
    video.setAttribute('playsinline','');
    video.setAttribute('webkit-playsinline','');
    video.preload='auto';
    video.disablePictureInPicture=true;
    video.setAttribute('aria-label','VIE Bangkok Hotel cinematic film, muted and continuously looping');
    const start=()=>{if(video.isConnected&&video.paused){const p=video.play();if(p&&typeof p.catch==='function')p.catch(()=>{});}};
    if(!video.dataset.meuVieReady){
      video.dataset.meuVieReady='1';
      video.addEventListener('loadeddata',start,{once:true});
      video.addEventListener('canplay',start,{once:true});
      video.addEventListener('ended',()=>{video.currentTime=0;start()});
      document.addEventListener('visibilitychange',()=>{if(!document.hidden)start()});
      window.addEventListener('pageshow',start);
    }
    start();
    return true;
  }
  function boot(){
    if(apply())return;
    let attempts=0;
    const timer=setInterval(()=>{if(apply()||++attempts>=16)clearInterval(timer)},450);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
