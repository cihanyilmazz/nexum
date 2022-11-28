import $ from "jquery";
import { router, route } from 'jqueryrouter';

require('webpack-jquery-ui/autocomplete');

$( document ).ready(function() {
  $('#searchBar').on('input', function() {
      var i = $(this).val().length;
      if(i > 0){
          $('#search-icon').css("display", "none");
          $('#arrow-icon').css("display", "block");
      }
      else{
          $('#arrow-icon').css("display", "none");
          $('#search-icon').css("display", "block");
      }
  });
    

//    $('#searchBar').on('input', function() {

//         var moviesTitle = $('#searchBar').val();
//         var apiUrl = 'https://omdbapi.com/?apikey=2374f3c&s=' + moviesTitle;
//         $.getJSON(apiUrl, function(data){ 
//             console.log(data)
//             if(data.Search){
//                 var html = "";
//                 $('#movie-bar').css("display", "block")
//                 for(var i=0; i<2; i++){
//                 var movieItem = data.Search[i];
//                 html += '<div class="movie-item">'
//                 html += '<div class="d-flex">'
//                 html += '<div class="img-wrapper">'
//                 html += '<img src="'+ movieItem.Poster+'">';
//                 html += '</div>';
//                 html += '<div class="content-wrapper">';
//                 html += '<div class="content-title">'+movieItem.Title+'</div>';
//                 html += '<div class="rating mb-3 text-primary d-flex align-items-center">';
//                 html += '<i class="ri-star-fill mr-2"></i>';
//                 html += '<div> 6.8/<span class="text-small text-dark">10</span></div>';
//                 html += '</div>';
//                 html += '<div class="content-info mb-3">';
//                 html += '<div class="lang"><b>Dil:</b> İngilizce</div>';
//                 html += '<div class="lang"><b>Oyuncular:</b> Jeff Bridges, Garrett Hedlund, Olivia Wilde | <a href="#">Tüm listeyi gör</a></div>';
//                 html += '</div>';
//                 html += '<div class="content-description">';
//                 html += '<div class="ellipsis-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto eaque accusantium aliquam voluptatum delectus, atque quasi eligendi eum maxime repudiandae nemo earum natus? Ipsa itaque libero quae maxime earum.</div>';
//                 html += '<a href="#">Detaylar</a>';
//                 html += '</div>';
//                 html += '</div>';
//                 html += '</div>';
//                 html += '</div>';
//                 html += '</div>';
//                 html += '<hr class="my-3">';

//             }
//             $('#movieList').html(html);
//             console.log("çlaışş")
// ;
//             }
//             else{
//                 console.log("hattttaa")
//                 var html = "";
//                 html += 'Sonuç Bulunamadı...';
//                 $('#movieList').html(html);
//             }
//         })

//     })

$(function(){
    // * AUTOCOMPLETE START * 
    $('#searchBar').autocomplete({
        source: function( request, response ) {
            $.ajax( {
                url: 'http://www.omdbapi.com?s='+ request.term +'&apikey=2374f3c',
                dataType: 'json',
                data: {
                    movie:request.term
                },
                success: function( data ) {
                    var movies = [];
                    $.each(data.Search, function(index, item) {
                        var imdb = item.Title;
                        $.ajax({
                            url: 'http://www.omdbapi.com?t='+ imdb +'&apikey=2374f3c',
                            dataType: 'json',
                            data: {
                                movieDetail:imdb
                            },
                            success: function (data) {
                                movies.push(data); 
                                response(movies.slice(0, 2));
                            }
                        });
                    });
                },
            });
        },
        // open: function(event,ui){
        //     var len = $('.ui-autocomplete > li').length;
        //     $('#count').html( len + ' film bulundu');
        // },
        // minLength: 1
    });
    // * AUTOCOMPLETE END * 
    // * HTML APPEND START * 
    $('#searchBar').data('ui-autocomplete')._renderItem = function(x, item ){
        var re = new RegExp(this.term, "gi");
        var t = item.Title.replace(re,"<span style='font-weight: bold;color:red;text-decoration: underline;text-transform: capitalize;'>" + this.term + "</span>");
        var $li = $('<li>');

        $li.html(
            '<div class="movie-item">' +
            '<div class="d-flex">' +
            '<div class="img-wrapper">' +
            '<img src="'+ item.Poster+'">' +
            '</div>' +
            '<div class="content-wrapper">' +
            '<div class="content-title">'+t+'</div>' +
            '<div class="rating mb-3 text-primary d-flex align-items-center">' +
            '<i class="ri-star-fill mr-2"></i>' +
            '<div> ' + item.Ratings[0].Value.substr(0, 3) +' /<span class="text-small text-dark"> ' + item.Ratings[0].Value.substr(4, 5) + ' </span></div>' +
            '</div>' +
            '<div class="content-info mb-3">' +
            '<div class="lang"><b>Dil:</b> ' + item.Language+ ' </div>' +
            '<div class="lang"><b>Oyuncular:</b> ' + item.Actors + ' | <a href="#">Tüm listeyi gör</a></div>' +
            '</div>' +
            '<div class="content-description">' +
            '<div class="ellipsis-5">' + item.Plot +'</div>' +
            '<a href="#">Detaylar</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<hr class="my-3">'
        );
        $(".ui-menu").removeClass('ui-menu ui-widget ui-widget-content ui-autocomplete ui-front').addClass('autocomplate-customize')
        $("#movieList").append(x)
          return $li.appendTo(x);  
    };
    // * HTML APPEND FINISH * 
});


// Duzenlenecek;
  $('#moreButton').on("click",function () {
    route((data) => {
        window.self.window.self.window.window.location = window.location
    });
     router.init(); // Manually trigger event

});
 route('/listing.html', () => { 
       
    $( "#listing" ).append( " Test" );
    
 }); 
router.set({
    route: '/listing.html',
    data: {
        prop: 'Hello World!'
    }
   
});


}); 