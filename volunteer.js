
function loadScheme(scheme){
  var healthButton = document.getElementById("getFitButton");
  var learnSkillButton = document.getElementById("skillsButton");
  var beSocialButton = document.getElementById("newPeopleButton");
  switch (scheme) {
    case 1:
      loadHealthScene();
      healthButton.style.backgroundColor = "#4CAF50";
      learnSkillButton.style.backgroundColor = "#ecffb3";
      beSocialButton.style.backgroundColor = "#ecffb3";
      break;
    case 2:
      loadSkillsScene();
      healthButton.style.backgroundColor = "#ecffb3" ;
      learnSkillButton.style.backgroundColor = "#4CAF50";
      beSocialButton.style.backgroundColor = "#ecffb3";
      break;
    case 3:
    loadSocialScene();
    healthButton.style.backgroundColor = "ecffb3";
    learnSkillButton.style.backgroundColor = "#ecffb3";
    beSocialButton.style.backgroundColor = "#4CAF50";
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


 var healthSchemeTopText = document.createElement("div");

healthSchemeTopText.innerHTML= websiteText.healthAndFitness.topText;
 healthSchemeTopText.className="topText";
 var topImage = document.createElement("img");
 topImage.className = "topImage";
 topImage.src= "images/Women_clearing_Path.jpg"
 topImage.id= "womanPathImage";



 var healthSchemeMiddleText = document.createElement("div");
 healthSchemeMiddleText.innerHTML = websiteText.healthAndFitness.middleText;
 healthSchemeMiddleText.className="middleText";
 var middleImage = document.createElement("img");
 middleImage.className = "middleImage";
 middleImage.src = "images/Orchard_Planting.jpg";

var healthSchemeBottomText = document.createElement("div");
healthSchemeBottomText.innerHTML = websiteText.healthAndFitness.bottomText;
healthSchemeBottomText.className= "bottomText";
var bottomImage = document.createElement("img");
bottomImage.className="bottomImage";
bottomImage.src="images/workInPlottingShed.jpg";



 panel.appendChild(healthSchemeTopText);
 panel.appendChild(topImage);
 panel.appendChild(healthSchemeMiddleText);
 panel.appendChild(middleImage);
 panel.appendChild(healthSchemeBottomText);
 panel.appendChild(bottomImage);



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
