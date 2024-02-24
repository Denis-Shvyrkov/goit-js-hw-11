import{S as p,i as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){const r="https://pixabay.com",s="/api/",a=`?key=42535847-effe6d5cdde3e67806355c12e&q&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,l=r+s+a;return fetch(l,{headers:{}}).then(c=>{if(c.ok)return c.json();throw newError(c.status)})}function g(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,comments:t,views:a,downloads:l})=>`<li class="gallery-item"><a href="${s}">
  <img class="gallery-image" src="${r}" alt="${n}" >
  
  <div class="img-details">
  <div class="img-details-item">
  <p>Likes</p>
  <p>${e}</p>
  </div>
  <div class="img-details-item">
  <p>Views</p>
  <p>${a}</p>
  </div>
  <div class="img-details-item">
  <p>Comments</p>
  <p>${t}</p>
  </div>
  <div class="img-details-item">
  <p>Downloads</p>
  <p>${l}</p>
  </div>
  </div>
  </a>
  </li>`).join("")}const i={formEl:document.querySelector(".search-form"),imgGallery:document.querySelector(".gallery"),submitBtn:document.querySelector(".submit"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-container")},m=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),u={theme:"light",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",iconColor:"#FFFFFF",color:"#FFFFFF"};m.on("show.simplelightbox");i.formEl.addEventListener("submit",o=>{o.preventDefault(),i.loader.classList.remove("hidden"),i.gallery.innerHTML="";const r=o.target.elements.search.value.trim();f(r).then(s=>{if(r===""){i.loader.classList.add("hidden"),d.error({...u,message:"Please, enter a request!"});return}s.hits.length===0?(i.loader.classList.add("hidden"),d.error({...u,message:"Sorry, there are no images matching your search query. Please try again!"})):(i.loader.classList.remove("hidden"),h(s.hits),i.loader.classList.add("hidden"))}).catch(s=>{console.log(s)}),o.target.reset()});function h(o){const r=g(o);i.gallery.insertAdjacentHTML("beforeend",r),m.refresh()}
//# sourceMappingURL=commonHelpers.js.map
