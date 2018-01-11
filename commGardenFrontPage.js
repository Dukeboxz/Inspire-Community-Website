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
  //console.log("getblog post");
  var xmlhttp = new XMLHttpRequest();
  var url = "https://www.googleapis.com/blogger/v3/blogs/16981595/posts?key=AIzaSyBaJW75-VpKaN0V1-Ttyit90i3o9FUEYT8";

  xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.responseText);
      //console.log(response);
      displayPosts(response);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function displayPosts(jsonResponse){
  console.log("displayPosts")
  var out = "";
  var blog = document.getElementsByClassName("blogDiv")[0];
  for(var i =0;  i < 3; i++){
    console.log("in loop")
   var postTitle = document.createElement("H3");
   postTitle.className = "blogPostTitle"
   postTitle.innerHTML= jsonResponse.items[i].title;
   blog.appendChild(postTitle);


   var postContent = document.createElement("div");
   postContent.className = "blogPostContent";
   postContent.innerHTML = jsonResponse.items[i].content;
   blog.appendChild(postContent);
  }

}
