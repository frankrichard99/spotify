// CODE TO SPIN UP THE ARTIST IMAGE

let chartDiv = document.querySelector('.four-mid');
let chartHTML = '';



const chart = [
  {
    image:'images/charts_cover/global_cover.jpg',
    name: 'Asake',
    genre: 'Your weekly update of the most played tracks right now - Global.'
  },
  {
    image:'images/charts_cover/usa_cover.jpg',
    name: 'Rema',
    genre: 'Your weekly update of the most played tracks right now - USA.'
  },
  {
    image:'images/charts_cover/global50_cover.jpg',
    name: 'Young Jonn',
    genre: 'Your daily update of the most played tracks right now - Global.'
  },
  {
    image:'images/charts_cover/usa50_cover.jpg',
    name: 'Burna Boy',
    genre: 'Your daily update of the most played tracks right now - USA'
  },
  {
    image:'images/charts_cover/viralglobal_cover.jpg',
    name: 'Victony',
    genre: 'Your daily update of the most viral tracks right now - Global.'
  },
  {
    image:'images/charts_cover/viralusa_cover.jpg',
    name: 'Fireboy DML',
    genre: 'Your daily update of the most viral tracks right now - USA'
  }
]
chart.forEach((eachchart) => {

  const {image, name, genre} = eachchart;

  chartHTML+= `
     <div class="album chart">
              <img src="${image}">

              <span>
                <p class="album-p">${genre}</p>
              </span>
              ${restSvg}
            </div>
  `;
  
});


chartDiv.innerHTML = chartHTML;

const  chartList = document.querySelectorAll('.chart');



chartList.forEach((chart) => {

  let timeoutId;
  const img = chart.children[0];
 
  const playBtn = chart.children[2];
  
  chart.addEventListener("mouseover", () => {
   const playBtn = chart.children[2];
   playBtn.classList.add('play-slide-others');
   playBtn.classList.remove('go-away');
  })
  
  chart.addEventListener("mouseout", () => {
    

   const playBtn = chart.children[2];
   playBtn.classList.add('go-away');
   playBtn.classList.remove('play-slide-others');
   
  });
})

