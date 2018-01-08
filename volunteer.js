
function loadScheme(scheme){

  switch (scheme) {
    case 1:
      loadHealthScene();
      break;
    case 2:
      loadSkillsScene();
      break;
    case 3:
    loadSocialScene();
    break;

    default:
    alert("sorry something went wrong");
  }



}

function loadHealthScene(){
  console.log("load Health Scheme");
  console.log(websiteText.learnNewSkills.topText); 
  var panel = document.getElementById("schmeDiv");

  while(panel.firstChild) {
    panel.removeChild(panel.firstChild);
  }

 var womanPathImage = document.createElement("img");
 womanPathImage.className = "elementImage";
 womanPathImage.src= "images/woman_clearing_Path.jpg"
 womanPathImage.id= "womanPathImage";

 var healthSchemeText = document.createElement("P");

 healthSchemeText.innerHTML= "Our garden can make you fit and healthy "
 healthSchemeText.id="healthSchemeText";

 panel.appendChild(womanPathImage);
 panel.appendChild(healthSchemeText)


}

function loadSkillsScene(){
  console.log("load skill scene");
  var panel = document.getElementById("schmeDiv");

  while(panel.firstChild) {
    panel.removeChild(panel.firstChild);
  }
}

function loadSocialScene() {
  console.log("loaded social scene");
  var panel = document.getElementById("schmeDiv");

  while(panel.firstChild) {
    panel.removeChild(panel.firstChild);
  }
}
