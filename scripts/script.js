$ (function(){
  $(".img-block").on("mouseover", function (){
    $(this).children(".image-text").show();
  });

  $(".img-block").on("mouseout", function (){
    $(this).children(".image-text").hide();
  });

  $(".submit-button").on("click", function (){
    $(".entire-page").show();
  });

  $(".entire-page").on("click", function (){
    $(".entire-page").hide();
  });
});
