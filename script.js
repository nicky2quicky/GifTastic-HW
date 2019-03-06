
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

    var stillImage = response.data[i].images.fixed_height_still;
    var animatedImage = response.data[i].images.fixed_height.url;

    var image = $("<img>");
    image.attr("src", stillImage);
    image.attr("data-still", stillImage);
    image.attr("data-animate", animatedImage);
    image.attr("data-state", "still");

    gifDiv.append(image);
    console.log(response);
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







     
    