 async function main(){
            let moviename=String(myform.datainput.value)
            let api_key="http://www.omdbapi.com/?t="+moviename+"&apikey=c8151565"

            let requests=await fetch(api_key)
            let data=await requests.json()
            console.log(data)
            console.log(data.Year)
            main2(data)
        }

        function main2(data)
        {
          
            if(data.Title!=undefined){
                let gettable=document.querySelector(".gg");
            let getposter=document.querySelector(".poster")
            let postermain=data.Poster
            let title=document.querySelector(".movietitle")
            
            // gettadble.innerHTML='<tr><td>Title :</td><td>'+data.Title+'</td></tr><tr><td>Year :</td><td>'+data.Year+'</td></tr></tr><tr><td>ImdbRating  :</td><td>'+data.imdbRating+'</td></tr><tr><td>Released</td><td>'+data.Released+'</td></tr></tr><tr><td>Runtime :</td><td>'+data.Runtime+'</td></tr></tr><tr><td>Genre :</td><td>'+data.Genre+'</td></tr></tr><tr><td>Director :</td><td>'+data.Director+'</td></tr></tr><tr><td>Actors :</td><td>'+data.Actors+'</td></tr></tr><tr><td>Language :</td><td>'+data.Language+'</td></tr></tr><tr><td>Country :</td><td>'+data.Country+'</td></tr></tr><tr><td>BoxOffice :</td><td>'+data.BoxOffice+'</td></tr></tr>';
            getposter.innerHTML='<center><img class="postermain" src='+postermain+'style="aling:left;"></center>'
            gettable.innerHTML="<h1 class='movietitle'>"+data.Title+"</h1>" +
            "<p class='year y'><strong><span>Year:</span></strong>"+data.Year+"<span class='non'>m</span><span class='myrating'>imdbRating:"+data.imdbRating    +"</span></p>"+
            "<p class='year r'><strong><span>Released:</span></strong>"+data.Released+"</span></p>"+
            "<p class='year g'><strong><span>Genre:</span></strong>"+data.Genre+"</p>"+
            "<p class='year w'><strong><span>Writer:</span></strong>"+data.Writer+"</p>"+
            "<p class='year a'><strong><span>Actors:</span></strong>"+data.Actors+"</p>"+
            "<p class='year c'><strong><span>Country:</span></strong>"+data.Country+"<span class='non'>a</span><span>Language:</span></strong>"+data.Language+"</p>"+
            "<p class='year'<span>Awards <i class='fa-solid fa-trophy'>: </i></span></string>"+data.Awards+"</p>"  
            document.querySelector(".mainwin").style="backdrop-filter: blur(19px);"
            }
            else{
                let gettable=document.querySelector(".gg");
                let poster=document.querySelector(".postermain")
                poster.remove()

               

                gettable.innerHTML="<h1 class='movietitle' style='visibility:hidden'>"+data.Title+"</h1>"+
            "<center><p class='nooo' >No movie Found</p></center>"
            "<p class='year y' style='visibility:hidden'><strong><span>Year:</span></strong>"+data.Year+"<span class='non'>m</span><span class='myrating'>imdbRating:"+data.imdbRating    +"</span></p>"+
            "<p class='year r'style='visibility:hidden'><strong><span>Released:</span></strong>"+data.Released+"</span></p>"+
            "<p class='year g'style='visibility:hidden'><strong><span>Genre:</span></strong>"+data.Genre+"</p>"+
            "<p class='year w'style='visibility:hidden'><strong><span>Writer:</span></strong>"+data.Writer+"</p>"+
            "<p class='year a'style='visibility:hidden'><strong><span>Actors:</span></strong>"+data.Actors+"</p>"+
            "<p class='year c'style='visibility:hidden'><strong><span>Country:</span></strong>"+data.Country+"<span class='non'>a</span><span>Language:</span></strong>"+data.Language+"</p>"+
            "<p class='year'style='visibility:hidden'><span>Awards <i class='fa-solid fa-trophy'>: </i></span></string>"+data.Awards+"</p>"  
            document.querySelector(".mainwin").style="backdrop-filter: blur(19px); height:200px;"
            }
            }
               
        
