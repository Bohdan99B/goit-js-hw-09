import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as p}from"./assets/vendor-D0gBiHs0.js";/* empty css                      */const s=[{preview:"https://picsum.photos/id/1015/300/200",original:"https://picsum.photos/id/1015/1200/800",description:"Mountain Landscape"},{preview:"https://picsum.photos/id/1025/300/200",original:"https://picsum.photos/id/1025/1200/800",description:"Cute Dog"},{preview:"https://picsum.photos/id/1035/300/200",original:"https://picsum.photos/id/1035/1200/800",description:"City View"},{preview:"https://picsum.photos/id/1045/300/200",original:"https://picsum.photos/id/1045/1200/800",description:"Forest Path"},{preview:"https://picsum.photos/id/1055/300/200",original:"https://picsum.photos/id/1055/1200/800",description:"River"},{preview:"https://picsum.photos/id/1065/300/200",original:"https://picsum.photos/id/1065/1200/800",description:"Bridge"}],e=document.querySelector(".gallery"),r=s.map(({preview:i,original:t,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${i}" alt="${o}" />
      </a>
    </li>
  `).join("");e.innerHTML=r;new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
