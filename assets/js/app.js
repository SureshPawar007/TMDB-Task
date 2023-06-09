var cl = console.log ;  //first class function(FCF)



const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

cl(movieArr);

const movieInfo = document.getElementById('card');
result = '';

movieArr.forEach(movie => 
   result += ` 
   
   <div class="col-md-4">
   <div class="card imdbCard">
       <figure>
         <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="image" title="img" class="cardImg">
         <figcaption>
            <div class="row">
             <div class="col-9">
               <p class="details name">
               ${movie.title}
               </p>
             </div>
             <div class="col-3">
               <p class="details rating ${colors(movie.vote_average)}" id="badge" >
                ${movie.vote_average} 
               </p>
             </div>
            </div>
         </figcaption>
         <div class="overview">
           <h3>overview</h3>
           <p>
           ${movie.overview}
           </p>
         </div>
       </figure>
   </div>
 </div>` 
)

movieInfo.innerHTML = result;

const ratId = document.getElementById("ratId");

function colors(rating){
    if(rating >= 8){
        return "ratingGreen";
    }else if(rating >= 5){
        return "ratingYellow";
    }else if(rating >= 4){
        return "ratingOrange";
    }else{
        return "ratingWhite";
    }
}

// let output = colors();

// cl(output);

ratId.innerHTML = result;

