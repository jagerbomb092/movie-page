let langue = 'vi'
let num = 1
let baseURL =`https://api.themoviedb.org/3/discover/movie?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`+`&language=${langue}`
let IMGPATH = "https://image.tmdb.org/t/p/w1280"


fetch(baseURL).then(data=>data.json())
.then((info)=>{
    callBack(info)
})
function callBack(num){
     console.log(num);
    // await console.log(num.results);
    num.results.forEach((nums) => {
        let img = document.createElement("img")
        img.src = IMGPATH + nums.backdrop_path
        document.body.appendChild(img)
    });
}