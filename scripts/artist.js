// CODE TO SPIN UP THE ARTIST IMAGE

let artistDiv = document.querySelector('.one-mid');
let artistHTML = '';
let artistSvg = `  <span class="play-artist">
<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="play"><g><path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008    c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"/><path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248    l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373    C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"/></g></g><g id="stop"/><g id="pause"/><g id="replay"/><g id="next"/><g id="Layer_8"/><g id="search"/><g id="list"/><g id="love"/><g id="menu"/><g id="add"/><g id="headset"/><g id="random"/><g id="music"/><g id="setting"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/></svg>
</span>`


const artist = [
  {
    image:'images/artist_cover/asake_pic.jpg',
    name: 'Asake',
    genre: 'Artist'
  },
  {
    image:'images/artist_cover/rema_pic.jpg',
    name: 'Rema',
    genre: 'Artist'
  },
  {
    image:'images/artist_cover/yjonn_pic.jpg',
    name: 'Young Jonn',
    genre: 'Artist'
  },
  {
    image:'images/artist_cover/bboy_pic.jpg',
    name: 'Burna Boy',
    genre: 'Artist'
  },
  {
    image:'images/artist_cover/victony_pic.jpg',
    name: 'Victony',
    genre: 'Artist'
  },
  {
    image:'images/artist_cover/fireboy_pic.jpg',
    name: 'Fireboy DML',
    genre: 'Artist'
  }
]
artist.forEach((eachArtist) => {

  const {image, name, genre} = eachArtist;

  artistHTML+= `
     <div class="artist">
          
              <img src="${image}">

              <span>
                <h1>${name}</h1>
                <p>${genre}</p>
              </span>
              ${artistSvg}
            </div>
         
  `;
  
});


artistDiv.innerHTML = artistHTML;

const  artistList = document.querySelectorAll('.artist');

artistList.forEach((artist) => {

  let timeoutId;
  const img = artist.children[0];
 
  const playBtn = artist.children[2];
  
  artist.addEventListener("mouseover", () => {
   const playBtn = artist.children[2];
   playBtn.classList.add('play-slide-artist');
   playBtn.classList.remove('go-away');
  })
  
  artist.addEventListener("mouseout", () => {
    

   const playBtn = artist.children[2];
   playBtn.classList.add('go-away');
   playBtn.classList.remove('play-slide-artist');
   
  });
})

