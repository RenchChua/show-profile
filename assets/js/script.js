$(function(){
  $name = $('.name');
  $email = $('.email');
  $favquote = $('.favquote');
  $repo = $('.repo-container');

  api_url = "https://glacial-lowlands-36939.herokuapp.com/users";

  $.ajax({
    method: "GET",
    url: api_url,
    dataType: 'json',
    async: true,
    crossDomain: true

  }).success(successFunction)
    .fail(failFunction);

  function successFunction(data){
    $name.text("Name: " + data.name);
    $email.text("Email: " + data.email);
    $favquote.text("Favourite quote: " + data.favquote);
    $repo.html("<h4>My repo: </hv> <a href='" + data.gitrepo + "'target = '_blank' > " + data.gitrepo + "</a>");
  }

  function failFunction(qXHR, textStatus, errorThrown) {
    console.log(errorThrown);
  }

});
