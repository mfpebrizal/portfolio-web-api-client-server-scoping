// function dataHeading() {
//     if (document.querySelector("#title-text").innerHTML == "This is Title") {
//         document.querySelector("#title-text").innerHTML = $("#title-text").attr("data")
//     } else {
//         document.querySelector("#title-text").innerHTML = "This is Title"
//     }
// }

$('#home').click(function () {
  $('#skill-button').css("display","none");
  $('#meal-button').css("display","none");
})

$('#skills').click(function () {
  $('#skills').addClass("is-active").siblings().removeClass( "is-active" );
})

$('#meals').click(function () {
  $('#meals').addClass("is-active").siblings().removeClass( "is-active" );
})

$('#home').click(function () {
  $('#home').addClass("is-active").siblings().removeClass( "is-active" );
})
