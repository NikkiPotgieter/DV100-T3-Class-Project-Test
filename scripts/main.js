// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();
    $("#descriptionText2").hide();
    $("#descriptionText3").hide();
    $("#descriptionText4").hide();
    $("#descriptionText5").hide();

  }); 

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();
    $("#descriptionText2").toggle();
    $("#descriptionText3").toggle();
    $("#descriptionText4").toggle();
    $("#descriptionText5").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });

  $(document).on('click', '.remove-btn', function() {
    $(this).closest('tr').remove();
  });