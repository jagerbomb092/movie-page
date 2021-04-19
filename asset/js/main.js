let langue = 'en'
let num = 5
let baseURL =`https://api.themoviedb.org/3/discover/movie?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${num}&with_watch_monetization_types=flatrate`+`&language=${langue}`
let IMGPATH = "https://image.tmdb.org/t/p/w1280"
let center = document.querySelector('.movie .container .row')
let modalLoad = document.querySelector('.modal')


fetch(baseURL).then(data=>data.json())
.then((info)=>{
    callBack(info)
})
async function callBack(num){
     
    await window.addEventListener('load',contentLoad)
    await num.results.forEach((nums) => {
        let col = document.createElement('div')
        col.classList.add('col-lg-3', 'col-md-6' ,'col-sm-12')
        col.innerHTML = `
            <div class="movie-box">
            <a href="" class="movie-box__img"><img src="${IMGPATH+nums.backdrop_path}"></a>
            <div class="movie-box__info">
                    <p class="box__info-title"><a href="" class="info-title__link">${nums.original_title}</a></p>
                    <span class="box__info-rating">${nums.vote_average}</span>
                </div>
            </div>
        `
        center.appendChild(col)

    })
    
}
function contentLoad(){
    modalLoad.classList.add('active')
}