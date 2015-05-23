// Code goes here
// $(document).ready(function(){

// });
$("button").on('click', function(){
  var userName = $("#userName").val();
  console.log(userName);//what is being handled
  var url = "https://api.github.com/users/" + userName; // endpoint gives info
  $.get(url, function(data){
    console.log(data.avatar_url);
    var img = $("<img>", {src: data.avatar_url});
    $("body").append(img);
  });

});
