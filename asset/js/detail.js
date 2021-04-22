// console.log(localStorage.getItem("id"));
let id = localStorage.getItem("id")
let IMGPATH = "https://image.tmdb.org/t/p/original"
let detail = document.querySelector('.detail')
let langue = 'en'
let status =false


let type = [`tv`,`movie`]
let modalLoad = document.querySelector('.modalLoading')
let baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=1b79d7a7bdb69f136a8a39dcc2514e85` + `&language=${langue}`
let recom = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=1b79d7a7bdb69f136a8a39dcc2514e85` + `&language=${langue}`
let trailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1b79d7a7bdb69f136a8a39dcc2514e85`+`&language=${langue}`
let director = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1b79d7a7bdb69f136a8a39dcc2514e85`+`&language=${langue}`
let TV = `https://api.themoviedb.org/3/tv/${id}?api_key=1b79d7a7bdb69f136a8a39dcc2514e85`+`&language=${langue}`
let recomTV = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US&page=1`
let trailerTV = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US`
let directorTV = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=1b79d7a7bdb69f136a8a39dcc2514e85&language=en-US`
function API(link1,link2, func1,func2) {
    this.link1 = link1
    this.link1 = link2
    this.func1 = function(){

    }
    this.func2 = function(){

    }
    this.call = async () =>{
            try{
                let fetching = await fetch(link1)
                let fetching2 = await fetch(link2)
                let checkType
                function check(){
                    
                    if (localStorage.getItem("type") === null) {
                        checkType = 0
                    } else {
                        checkType = localStorage.getItem("type")
                    }
                }
                check()
                console.log(checkType);
                // let undi = ''
                console.log(checkType.value);
                // console.log(typeof(checkType));
                console.log(checkType);
                console.log(NaN);
                console.log('movie:'+(checkType==='undefined'));
                console.log('TV:'+(checkType!='undefined'));
                console.log('TV:'+(checkType!='undefined' && fetching2.ok == true));
                console.log('movie:'+(checkType==='undefined' && fetching.ok == true));
                // console.log(checkType=undefined);
                // console.log(fetching.ok == true);
                // console.log(fetching2.ok == true);
                // console.log(checkType === undefined && fetching.ok == true);
                // console.log(checkType!==undefined && fetching2.ok == true);
                if (checkType==='undefined' && fetching.ok == true) {
                    let data = await fetching.json()
                    func1(data)
                    status = true
                    checkData()
                    
                    
                }
                else if (checkType!='undefined'&& fetching2.ok == true) {
                    let data = await fetching2.json()
                    
                    func2(data)
                    status = true
                    checkData()
                    
                } 
            }
            catch{(err)=>console.log(err)}
        }
        
        function checkData(){
            if (status===false) {
                modalLoad.classList.add('active')
            } else {
                modalLoad.classList.remove('active')
            }
        }
        checkData()
    }
    
let dirrect = new API(director,directorTV,showDirect,showDirect)
let trai = new API(trailer,trailerTV,showTrailer,showTrailer)
let detai = new API(baseURL,TV,showDetail,showDetailTV)
let reco = new API(recom,recomTV,showRecoment,showRecoment)
detai.call()
reco.call()
trai.call()
dirrect.call()
function showDirect(dr){
    let create = dr.crew
    let reulst =  create.filter((creates)=>{
        return creates.known_for_department === "Directing"
    })
    filterDir(reulst);
}
function filterDir(direct){
    let director = document.querySelector('.detail-box__director')
    
    
    direct.forEach(directs => {
        let xyz = document.createElement('span')
        xyz.innerHTML =`<a href=''>${directs.name}</a>`
        
        director.appendChild(xyz)
        // xyz.innerText=des.name
        // gener.appendChild(xyz)
        // parent.appendChild(xyz)
    });
    director.appendChild(html) 
}
function showRecoment(re){
    console.log(re);
}
function showTrailer(tl){
    console.log(tl);
}
function showDetail(de) {
    let gernder = de.genres
    let box = document.createElement("div")
    box.classList.add('container')
    detail.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0.842) 0%, rgba(255, 255, 255, 0.137) 100%),url('${IMGPATH+de.backdrop_path}')`
    detail.style.backgroundRepeat = 'no-repeat'
    detail.style.backgroundSize = 'cover'
    detail.style.backgroundPosition = 'top'
    
    detail.appendChild(box)
    
     box.innerHTML = `
    <div class="detail-box">
    <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="detail-box__img">
                <img src="${IMGPATH+de.poster_path}" alt=""
                    class="">
            </div>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="detail-box__detail">
                <p class="detail-box__name">
                    ${de.title}
                </p>
                <p class="detail-box__name">
                    ${de.original_title}
                </p>

                <div class="detail-box__group">
                    <p class="detail-box__date">${de.release_date}</p>
                    <ul class='detail-box__gender'>
                        
                    </ul>

                    <p class="detail-box__time">${de.runtime} minutes</p>
                </div>
                <div class="detail-box__director">
                    <span>Director:</span>
                    
                </div>
                    <p class="detail-box__score">Rating: ${de.vote_average}</p>
                    <p class="detail-box__descript">Overview: "${de.overview}"</p>
                </div>
            </div>
        </div>
    </div>
    `
    let gender = document.querySelector('.detail-box__gender')
    
    
    function showgender(de){
        de.forEach(des => {
            let xyz = document.createElement('li')
            xyz.innerHTML =`<a href=''>${des.name}</a>`
            gender.appendChild(xyz)
            
        });
    }
    showgender(gernder)
}

function showDetailTV(de) {
    
    let gernder = de.genres
    let box = document.createElement("div")
    box.classList.add('container')
    detail.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0.842) 0%, rgba(255, 255, 255, 0.137) 100%),url('${IMGPATH+de.backdrop_path}')`
    detail.style.backgroundRepeat = 'no-repeat'
    detail.style.backgroundSize = 'cover'
    detail.style.backgroundPosition = 'top'
    
    detail.appendChild(box)
    
     box.innerHTML = `
    <div class="detail-box">
    <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="detail-box__img">
                <img src="${IMGPATH+de.poster_path}" alt=""
                    class="">
            </div>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="detail-box__detail">
                <p class="detail-box__name">
                    ${de.name}
                </p>
                <p class="detail-box__name">
                    ${de.original_name}
                </p>
                <p class="detail-box__date">Season:${de.number_of_seasons}</p>
                <p class="detail-box__date">Episode:${de.number_of_episodes}</p>
                <div class="detail-box__group">
                    <p class="detail-box__date">${de.first_air_date}</p>
                    <ul class='detail-box__gender'>
                        
                    </ul>

                    <p class="detail-box__time">${de.episode_run_time} minutes/ 1 Episode </p>
                </div>
                <div class="detail-box__director">
                    <span>Director:</span>
                    
                </div>
                    <p class="detail-box__score">Rating: ${de.vote_average}</p>
                    <p class="detail-box__descript">Overview: "${de.overview}"</p>
                </div>
            </div>
        </div>
    </div>
    `
    let gender = document.querySelector('.detail-box__gender')
    function showgender(de){
        de.forEach(des => {
            let xyz = document.createElement('li')
            xyz.innerHTML =`<a href=''>${des.name}</a>`
            
            gender.appendChild(xyz)
            // xyz.innerText=des.name
            // gener.appendChild(xyz)
            // parent.appendChild(xyz)
        });
    }
    showgender(gernder)
}