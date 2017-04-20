function dataHeading() {

    if ($("#title-text").html() == "This is first Title appeared") {
      let string = $("#title-text").attr("data")
      $("#title-text").html(string)
    }else{
      $("#title-text").html("This is first Title appeared")
    }
}



function skillButton(name, url) {
   name = name.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
       results = regex.exec(url);

   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let changeHeadingUsingUrl = function() {
  let link = 'http://127.0.0.1:8080/search?query=ThisIsFromQuery'
  let data = skillButton('query', link)
  $('#title-text').text(`${data}`)
  $( '#title-text' ).append( `<h6 class="subtitle is-6">from ${link}</h6>` );
}


$('#skill').click(function () {
  $('#skill').addClass("is-active").siblings().removeClass( "is-active" );
  $('#skill-button').css("display","").siblings().css("display","none");
  $("#title-text").html("You press Skills in NavBar");
})

$('#meals').click(function () {
  $('#meals').addClass("is-active").siblings().removeClass( "is-active" );
  $('#meal-button').css("display","").siblings().css("display","none");
  $("#title-text").html("You press Meals in NavBar");
})

$('#home').click(function () {
  $('#home').addClass("is-active").siblings().removeClass( "is-active" );
  $('#home-button').css("display","").siblings().css("display","none");
  $("#title-text").html("You press Home in NavBar");
})
