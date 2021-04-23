let langue = 'en'


// console.log(num);


// let num =0
function checkNum(){
    if (localStorage.getItem('num')===null) {
        num = 1
    } else {
        num = JSON.parse(localStorage.getItem('num')) 
    }
    
}
function checkName(){
    if (localStorage.getItem('name')===null) {
        NameType = 'title'
    } else {
        NameType = localStorage.getItem('name')
    }
    
}

checkNum()
let nameType = ['title','name']
// console.log(typeof(num));
let TYpeMOVIE = ['movie','tv']
let change 
let NameType
checkName()
function checkStorage() {
    if(localStorage.getItem('movie')===null){
        change = 'movie'
    }
    else{
        change = localStorage.getItem('movie')
    }
}
checkStorage()
let type = document.querySelectorAll('.header a')
for (let i = 0; i < type.length; i++) {
    
    // console.log(change);
    type[i].addEventListener('click',()=>{
         localStorage.setItem('movie',TYpeMOVIE[i]);
         localStorage.setItem('name',nameType[i])
        location.reload();
        // console.log(change);
    })
}
let baseURL =`https://api.themoviedb.org/3/discover/${change}?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${num}&with_watch_monetization_types=flatrate`+`&language=${langue}`
fetchAPI(baseURL)
// console.log(change);

// let baseURL =`https://api.themoviedb.org/3/discover/${change}?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${num}&with_watch_monetization_types=flatrate`+`&language=${langue}`

// fetchAPI(baseURL)
// console.log(num);

// let baseURL =`https://api.themoviedb.org/3/discover/tv?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US&sort_by=popularity.desc&page=${num}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`+`&language=${langue}`
let IMGPATH = "https://image.tmdb.org/t/p/original"
let center = document.querySelector('.movie .container .row')
let modalLoad = document.querySelector('.modalLoading')
let status =false
let abc = []
let count = 0
// window.addEventListener('load',contentLoad)
// Nextpage()
async function fetchAPI(baseURL){
    let abc = await fetch(baseURL)
    let xyz = await abc.json()
    if (NameType==='title') {
        console.log('movie');
        callBackMovie(xyz)
    } else {
        console.log('TV');
        callBackTV(xyz)
    }
    
    // setTimeout()
    status=true
    checkData()
}
console.log(NameType);
checkData()
// fetchAPI()
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
function callBackMovie(num){
     console.log(num);
    
    num.results.map((nums) => {
        let col = document.createElement('div')
        col.classList.add('col-lg-3', 'col-md-6' ,'col-sm-12')
        col.innerHTML = `
            <div class="movie-box">
                <a href = './html/side-page.html' class="movie-box__img"><img src="${IMGPATH+nums.poster_path}"></a>
                <div class="movie-box__info">
                    <p class="box__info-title"><a href = './html/side-page.html' class="info-title__link">${nums.title}</a></p>
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
function callBackTV(num) {
    console.log(num);
    
    num.results.map((nums) => {
        let col = document.createElement('div')
        col.classList.add('col-lg-3', 'col-md-6' ,'col-sm-12')
        col.innerHTML = `
            <div class="movie-box">
                <a href = './html/side-page.html' class="movie-box__img"><img src="${IMGPATH+nums.poster_path}"></a>
                <div class="movie-box__info">
                    <p class="box__info-title"><a href = './html/side-page.html' class="info-title__link">${nums.name}</a></p>
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
                localStorage.setItem("id",JSON.stringify(arr[i].id))
                localStorage.setItem("type",arr[i].first_air_date)
                
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
function createPage(){
    let page =  document.createElement('ul')
    document.body.appendChild(page)
    page.classList.add('moviepage')
    let pages=[parseInt(num)-parseInt(2), parseInt(num)-parseInt(1),parseInt(num) ,parseInt(num)+parseInt(1),parseInt(num)+parseInt(2)]
    console.log(pages);
    for (let i = 0; i < pages.length; i++) {
        let nums = pages[i];
         
        if (pages[i]<=0) {
            // console.log(pages[i]);
            pages.slice(pages[i],pages[i])
            // pages.push(parseInt(num)+parseInt(3))
            

        }
        else{
            
            page.innerHTML += `<li data-value=${nums}>${nums}</li>`
        }
    }
}
// let pagi = document.querySelectorAll('.moviepage li')
//         pagi.forEach((pagis)=>{
//             pagis.addEventListener('click',()=>{
//                 console.log(pagtis);
//             })
//         })
createPage()
let pagi = document.querySelectorAll('.moviepage li')
pagi.forEach(pagis => {
    pagis.addEventListener('click',()=>{
        let current = JSON.parse(pagis.getAttribute('data-value')) 
        // pagis.classList.add('active')
        localStorage.setItem('num',current)
        location.reload();
    })
});
console.log(pagi);
// Nextpage()
