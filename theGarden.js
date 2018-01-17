function launchPopUp(plotNumber){

  var newWindow = window.open("", plotNumber, "menubar=no, width=200,height=200");

  var windowTitle = document.createElement("div");
  windowTitle.innerHTML = "Plot Number " + plotNumber;

  newWindow.document.body.appendChild(windowTitle);
  var cropPlanted = document.createElement("div");
  cropPlanted.innerHTML="sweetcorn";

  var wikipediaEntry = document.createElement("iframe");
  wikipediaEntry.className = "wikiEntry";
  wikipediaEntry.src = "https://en.wikipedia.org/wiki/" + cropPlanted.innerHTML;

  newWindow.document.body.appendChild(cropPlanted);
  newWindow.document.body.appendChild(wikipediaEntry);


}
