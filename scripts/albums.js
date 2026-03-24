// CODE TO SPIN UP THE ARTIST IMAGE

let albumDiv = document.querySelector('.two-mid');
let albumHTML = '';
let albumSvg = `  <span class="play-album">
<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="play"><g><path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008    c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"/><path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248    l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373    C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"/></g></g><g id="stop"/><g id="pause"/><g id="replay"/><g id="next"/><g id="Layer_8"/><g id="search"/><g id="list"/><g id="love"/><g id="menu"/><g id="add"/><g id="headset"/><g id="random"/><g id="music"/><g id="setting"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/></svg>
</span>`


const album = [
  {
    image:'images/album_cover/rema_cover.jpg',
    name: 'HEIS',
    genre: 'Rema'
  },
  {
    image:'images/album_cover/fireboy_cover.jpg',
    name: 'adedamola',
    genre: 'Fireboy DML'
  },
  {
    image:'images/album_cover/asake_cover.jpg',
    name: 'Lungu Boy',
    genre: 'Asake'
  },
  {
    image:'images/album_cover/jonn_cover.jpg',
    name: 'Jiggy Forever',
    genre: 'Young Jonn'
  },
  {
    image:'images/album_cover/maff_cover.jpg',
    name: 'MAFFIAN',
    genre: 'Ayo Maff'
  },
  {
    image:'images/album_cover/seyi_cover.jpg',
    name: 'Loseyi Professor',
    genre: 'Seyi Vibez'
  }
]

album.forEach((eachAlbum) => {

  const {image, name, genre} = eachAlbum;

  albumHTML+= `
      <div class="album">
              <img src="${image}">

              <span>
                <h1>${name}</h1>
                <p>${genre}</p>
              </span>
              ${albumSvg}
            </div>
  `;
  
});




albumDiv.innerHTML = albumHTML;

const  albumList = document.querySelectorAll('.album');

albumList.forEach((eachAlbum) => {

   
  
  eachAlbum.addEventListener("mouseover", () => {
   const playBtn = eachAlbum.children[2];
   playBtn.classList.add('play-slide-album');
   playBtn.classList.remove('go-away');
  })
  
  eachAlbum.addEventListener("mouseout", () => {
    

   const playBtn = eachAlbum.children[2];
   playBtn.classList.add('go-away');
   playBtn.classList.remove('play-slide-album');
   
  });
})



// setInterval(sizeDiv, 2000);

// function sizeDiv(){
//   const divWidth = albumDiv.offsetWidth;
//   let totalWidth = 0;

//   albumList.forEach((div) => {
//     totalWidth += div.offsetWidth;

//     if(totalWidth > divWidth){
//       // div.style.display = 'none';
//       album.pop();
//       showAlbums();
//     }
//   });

//   console.log(divWidth, totalWidth);
// }

setInterval(searchBar, 1000);

function searchBar() {

  if(document.body.offsetWidth <= 600){
    document.querySelector('.search-bar input').placeholder = 'Search...';
  }
  else{
    document.querySelector('.search-bar input').placeholder = 'What do you want to play?';
  }
}  