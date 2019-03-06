
  // Beginning Array of Animals

  var animals = ["dog", "cat", "pig", "horse", "panda", "mouse", "elephant", "shark", "squid", "whale"];

  function displayGifs(){
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8vHgziN5vaPY91SvIQnBCvxCVorAn6CK&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";
    
      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      
      for (var i = 0; i < 10; i++){
  if (response.data[i].rating !== "r" && response.data[i].rating !== "pg-13"){
    var rating = response.data[i].rating;
        
    var gifDiv = $("#gif-area");
  //       // Creating a class to displays the gifs
    var pRating = $("<p>").text("Rating: " + rating);
    gifDiv.append(pRating);

    var stillImage = response.data[i].images.fixed_height_still.url;
    var animatedImage = response.data[i].images.fixed_height.url;

    var image = $("<img>");
    image.attr("src", still);
    image.attr("data-still", stillImage);
    image.attr("data-animate", animateImage);
    image.attr("data-state", "still");
    image.addClass("animalGifs");

    gifDiv.append(image);
  }
  }
});
}

  

  function renderButtons() {

    $("#button-area").empty();

    for (var i = 0; i < animals.length; i++){

    var newButton = $("<button>");
    newButton.addClass("animal-button");
    newButton.attr("data-name", animals[i]);
    newButton.text(animals[i]);
    $("#button-area").append(newButton);
  }
}
  
  
      $(document).on("click", "#submit-button", function(event) {
          event.preventDefault();
          var animal = $("#user-input").val().trim();
          animals.push(animal);
          renderButtons();
      });

      $(document).on("click", ".animal-button", displayGifs);

      renderButtons();
  //       });
  
  //     });







     
      // Create an area/column on HTML to store the gifs.
      // render the gif through the response, with displaying the rating of the gif. 
  
 
  

  
  
  // var animals = ["dog", "cat", "pig", "horse", "panda", "mouse", "elephant", "shark", "squid", "whale"];


// //need to create something that will show the gifs
// function displayGifs() {
//     var game = $(this).attr("data-name");

//     // Constructing a URL to search Giphy for the game /topic
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         game + "&api_key=OkTiJu8wDseohADATaJsTUYxeL3AOg0q&limit=10";

//     // Performing our AJAX GET request
//     $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .then(function(response) {
//             // Storing an array of results in the results variable
//             var results = response.data;

//             // Looping over every result item
//             for (var i = 0; i < results.length; i++) {

//                 // Only taking action if the photo has an appropriate rating
//                 if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//                     // Creating a div for the gif
//                     var gifDiv = $("<div>");

//                     // Storing the result item's rating
//                     var rating = results[i].rating;

//                     // Creating a paragraph tag with the result item's rating
//                     var p = $("<p>").text("Rating: " + rating);

//                     // Creating an image tag
//                     var gameImage = $("<img>");

//                     // Giving the image tag an src attribute of a proprty pulled off the
//                     // result item
//                     gameImage.attr("src", results[i].images.fixed_height.url);

//                     // Appending the paragraph and gameIMage we created to the "gifDiv" div we created
//                     gameImage.append(p);
//                     gifDiv.append(gameImage);

//                     // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//                     $("#videoGame-view").prepend(gifDiv);
//                 }
//             }
//         });
// }

// function renderButtons() {

//     // Deletes the games prior to adding new game
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#gameGifbuttons").empty();
//     // Loops through the array of movies
//     for (var i = 0; i < games.length; i++) {

//         // Then dynamicaly generates buttons for each game in the array
//         // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//         var a = $("<button>");
//         // Adds a class of game to our button
//         a.addClass("game");
//         // Added a data-attribute
//         a.attr("data-name", games[i]);
//         // Provided the initial button text
//         a.text(games[i]);
//         // Added the button to the buttons-view div
//         $("#gameGifbuttons").append(a);
//     }
// }
// renderButtons();
// $(document).on("click", ".game", displayGameGifs);
  