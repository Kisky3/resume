document.getElementById('html-progress').style.animation = "move90 2s ease infinite";
document.getElementById('css-progress').style.animation = "move90 2s ease infinite";
document.getElementById('js-progress').style.animation = "move85 2s ease infinite";
document.getElementById('react-progress').style.animation = "move70 2s ease infinite";
document.getElementById('node-progress').style.animation = "move30 2s ease infinite";
document.getElementById('cake-progress').style.animation = "move40 2s ease infinite";
document.getElementById('java-progress').style.animation = "move50 2s ease infinite";

function switchFixed() {
  var value = document.getElementById('side').style.position === 'fixed' ? 'absolute' : 'fixed';
  document.getElementById('side').style.position = value;
  var photoUrl = document.getElementById('photo').getAttribute("src") === "assets/images/avatar.jpg" ? "assets/images/avatar1.jpg" : "assets/images/avatar.jpg";
  document.getElementById('photo').setAttribute("src", photoUrl);
}