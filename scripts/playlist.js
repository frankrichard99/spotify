// CODE TO SPIN UP THE ARTIST IMAGE

let playlistDiv = document.querySelector('.five-mid');
let playlistHTML = '';



const playlist = [
  {
    image:'images/playlist_cover/friday_cover.jpg',
    name: 'Asake',
    genre: 'The very best in new music from around the world. Cover: Lady Gaga'
  },
  {
    image:'images/playlist_cover/joints_cover.jpg',
    name: 'Rema',
    genre: 'All the New Joints featuring Rod Wave, Saweetie, Lil Durk, Young Thug and more!'
  },
  {
    image:'images/playlist_cover/dance_cover.jpg',
    name: 'Young Jonn',
    genre: "This week's handpicked new, dance and electronic music, featuring new music from Barry Can't Swim"
  },
  {
    image:'images/playlist_cover/rock_cover.jpg',
    name: 'Burna Boy',
    genre: 'The best new rock tracks every week. Cover: The Cure'
  },
  {
    image:'images/playlist_cover/rnb_cover.jpg',
    name: 'Victony',
    genre: 'The newest r&b drops, every week. Cover: TOMMY RICHMAN'
  },
  {
    image:'images/playlist_cover/indie_cover.jpg',
    name: 'Fireboy DML',
    genre: 'The best new music every Friday. Cover: Kate Bollinger'
  }
]
playlist.forEach((eachplaylist) => {

  const {image, name, genre} = eachplaylist;

  playlistHTML+= `
     <div class="album playlist">
              <img src="${image}">

              <span>
                <p class="album-p">${genre}</p>
              </span>
              ${restSvg}
            </div>
  `;
  
});


playlistDiv.innerHTML = playlistHTML;

const  playlistList = document.querySelectorAll('.playlist');



playlistList.forEach((playlist) => {

  let timeoutId;
  const img = playlist.children[0];
 
  const playBtn = playlist.children[2];
  
  playlist.addEventListener("mouseover", () => {
   const playBtn = playlist.children[2];
   playBtn.classList.add('play-slide-others');
   playBtn.classList.remove('go-away');
  })
  
  playlist.addEventListener("mouseout", () => {
    

   const playBtn = playlist.children[2];
   playBtn.classList.add('go-away');
   playBtn.classList.remove('play-slide-others');
   
  });
})

