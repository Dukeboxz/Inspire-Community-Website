function dropButtonfunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
  if(!event.target.matches('.dropbtn')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i = 0; i < dropdowns.length; i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

function getBlogPosts() {
  console.log("getblog post");
  var xmlhttp = new XMLHttpRequest();
  var url = "https://www.googleapis.com/blogger/v3/blogs/16981595?key=AIzaSyBaJW75-VpKaN0V1-Ttyit90i3o9FUEYT8";

  xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      var response = this.responseText;
      console.log(response);
      //displayPosts(response);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function displayPosts(jsonReponse){
  //var out = "";
  //for(var i;  i < 4; i++){
  //  out += jsonReponse.items[i].content;
  //}
  var blog = document.getElementsByClassName("blogDiv")[0];
    blog.innerHTML = jsonResponse;
}
