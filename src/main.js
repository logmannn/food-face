import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72e84175fa8424b15858bc79c8e6a0e0`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});

// $( document ).ready(function(){
//   // Part 1 - Collect User Input Using jQuery Click Listener note we use the class (.) of search_button
//   // $('.search_button').on('click', function(){
//
//     // var random50 = Math.floor(Math.random() * 50);
//     // // Create the Giphy API URL
//     //
//     // // Part 2 - Use AJAX to call GIPHY API (note that the .done() function waits for the API to respond)
//     // var happy = 'http://api.giphy.com/v1/gifs/search?q=happy&offset='+random50+'&api_key=3DhMWAGnrtCvvI3OOlUGScIT0S5EBgYt';
//     // $.ajax({url: happy, method: 'GET'}).done(function(response){
//     //   var giphyURL = response.data[0].images.fixed_height.url;
//     //   $('#happy').attr('src', giphyURL);
//     // });
//     // var neutral = 'http://api.giphy.com/v1/gifs/search?q=neutral&offset='+random50+'&api_key=3DhMWAGnrtCvvI3OOlUGScIT0S5EBgYt';
//     // $.ajax({url: neutral, method: 'GET'}).done(function(response){
//     //   var giphyURL = response.data[0].images.fixed_height.url;
//     //   $('#neutral').attr('src', giphyURL);
//     // });
//     // var sad = 'http://api.giphy.com/v1/gifs/search?q=sad&offset='+random50+'&api_key=3DhMWAGnrtCvvI3OOlUGScIT0S5EBgYt';
//     // $.ajax({url: sad, method: 'GET'}).done(function(response){
//     //   var giphyURL = response.data[0].images.fixed_height.url;
//     //   $('#sad').attr('src', giphyURL);
//     // });
//     // var mad = 'http://api.giphy.com/v1/gifs/search?q=mad&offset='+random50+'&api_key=3DhMWAGnrtCvvI3OOlUGScIT0S5EBgYt';
//     // $.ajax({url: mad, method: 'GET'}).done(function(response){
//     //   var giphyURL = response.data[0].images.fixed_height.url;
//     //   $('#mad').attr('src', giphyURL);
//     // });
//     // var stoned = 'http://api.giphy.com/v1/gifs/search?q=stoned&offset='+random50+'&api_key=3DhMWAGnrtCvvI3OOlUGScIT0S5EBgYt';
//     // $.ajax({url: stoned, method: 'GET'}).done(function(response){
//     //   var giphyURL = response.data[0].images.fixed_height.url;
//     //   $('#stoned').attr('src', giphyURL);
//     // });
//
//
//   //   return false;
//   // })
// });
