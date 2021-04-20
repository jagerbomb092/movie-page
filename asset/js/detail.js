// console.log(localStorage.getItem("id"));
let id = localStorage.getItem("id")
let IMGPATH = "https://image.tmdb.org/t/p/original"
let detail = document.querySelector('.detail')
let langue = 'en'


let baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=1b79d7a7bdb69f136a8a39dcc2514e85` + `&language=${langue}`
fetch(baseURL).then(data => data.json())
    .then(info => showDetail(info))
async function showDetail(de) {
    let gernder = de.genres
    console.log(de);
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
                    <ul>
                        ${
                            showgender(gernder)
                        }
                    </ul>

                    <p class="detail-box__time">${de.runtime} minutes</p>
                </div>
                <div class="detail-box__director">
                    <span>Creator:</span>
                    <span>nghia</span>
                    <span>san</span>
                    <span>hoang</span>
                </div>
                    <p class="detail-box__score">Rating: ${de.vote_average}</p>
                    <p class="detail-box__descript">Overview: "${de.overview}"</p>
                </div>
            </div>
        </div>
    </div>
    `
    let gender = document.querySelector('.detail-box__group ul')
    console.log(gender);
    showgender(gernder,gender)
    function showgender(de,parent){
        
        
        // let gener = document.querySelector('.detail-box__group')
        // console.log(gener);
        de.forEach(des => {
            let xyz = document.createElement('li')
            xyz.innerHTML =`${des.name}`
            console.log(xyz);
            // xyz.innerText=des.name
            // gener.appendChild(xyz)
            // parent.appendChild(xyz)
        });
        
    }
    
}

