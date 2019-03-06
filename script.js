function createButton(str) {


    var newButton = $("<button>");
    newButton.addClass("btn btn-primary p-2 m-1 content-button");
    newButton.text(str);
    newButton.data("content", str);
    $("#button-area").append(newButton);
  }
  
  $(function () {
  
      $(document).on("click", "#submit-button", function(event) {
          event.preventDefault();
          var buttonText = $("#user-input").val();
          $("#user-input").val("");
          createButton(buttonText);
        });
  
      })
  
  
  
  $(".button").on("click", function (event){
      event.preventDefault();
    var animal = $(".button").val().trim();
    var queryURL = "GIPHY API" + animal + "API KEY";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     
      // Create an area/column on HTML to store the gifs.
      // render the gif through the response, with displaying the rating of the gif. 
  
  })
  
  })
  
  
  var animal = ["dog", "cat", "pig", "horse", "panda", "mouse", "elephant", "shark", "squid", "whale"];
  