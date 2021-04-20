let langue = 'en'
let num 
let baseURL =`https://api.themoviedb.org/3/discover/movie?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${num}&with_watch_monetization_types=flatrate`+`&language=${langue}`
let IMGPATH = "https://image.tmdb.org/t/p/original"
let center = document.querySelector('.movie .container .row')
let modalLoad = document.querySelector('.modalLoading')
let status =false
let abc = []
let count = 0
// window.addEventListener('load',contentLoad)
async function fetchAPI(){
    let abc = await fetch(baseURL)
    let xyz = await abc.json()
    console.log(xyz);
    callBack(xyz)
    // setTimeout()
    
    status=true
        checkData()
    
}

checkData()
fetchAPI()
function checkData(){
    if (status===false) {
        modalLoad.classList.add('active')
    } else {
        modalLoad.classList.remove('active')
    }
}

// fetch(baseURL).then(data=>data.json())
// .then((info)=>{
//     callBack(info)
// })
function callBack(num){
     
    
    num.results.map((nums) => {
        let col = document.createElement('div')
        col.classList.add('col-lg-3', 'col-md-6' ,'col-sm-12')
        col.innerHTML = `
            <div class="movie-box">
                <a href = './html/side-page.html' class="movie-box__img"><img src="${IMGPATH+nums.poster_path}"></a>
                <div class="movie-box__info">
                    <p class="box__info-title"><a href = './html/side-page.html' class="info-title__link">${nums.original_title}</a></p>
                    <span class="box__info-rating">${nums.vote_average}</span>
                </div>
            </div>
        `
        center.appendChild(col)
        
        // getID(nums.id)
        
        
       
    })
    console.log();
    let xyz = num.results
    // abc.push(...num.result)
    // for (let i = 0; i < id.length; i++) {
    //     let id = num.results.id
        
    // }
    // console.log(num.results[0].id);
    getID(xyz)
}

async function getID(id){
    await abc.push(...id)
    await clickFn(abc)
}


function clickFn(arr){
    // console.log(arr[0].id);
    let box = document.querySelectorAll('.movie-box')
    let link = document.querySelectorAll('.movie-box .movie-box__img')
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        let arrs = box[i];
        arrs.addEventListener('click',()=>{
            console.log(arr[i].id);
            // link.href  = './html/side-page.html'
            // if (typeof(Storage) !== "undefined") {
                localStorage.setItem("id",arr[i].id)
            // } else {
                
            // }
            // showID(arr[i].id)
        })
        // console.log(arrs);
        // arrs.addeventlistener('click',()=>{
        
        // })
        // console.log(arrs);
    }
    
    
    
}
for (let index = 0; index> 0; index++) {
    
    
}