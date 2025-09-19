//setCookie("username", "", 1)
//deleteCookie("username")
window.addEventListener("load", () => {
  checkName();
  document
    .getElementById("applyUsername")
    .addEventListener("click", changeName);
});

function setCookie(name, value, daysTolive) {
  const date = new Date();
  date.setTime(date.getTime() + daysTolive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires};`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

function checkName() {
  const username = getCookie("username") || "";
  if (username === "" || username.length > 50) {
    console.log(`bad user ${username}`);
    document.getElementById("changeUsername").style.visibility = "visible";
    document.getElementById("changeUsername").style.opacity = "1";
  }
}

function changeName() {
  const usernameInput = document.getElementById("username").value.trim();
  if (usernameInput === "" || usernameInput.length > 50) {
    alert("El nom d'usarui està buit o supera més de 50 càracters");
    return;
  }
  const value = document.getElementById("username").value;
  setCookie("username", value, 1);
  document.getElementById("changeUsername").style.transform = "scale(0)";
  document.getElementById("changeUsername").style.visibility = "hidden";
}

function showPage(pageName) {
  const page = pageName;
  if ((document.getElementById(page).display.visibility = "hidden")) {
    Document.getElementById(page).display.visibility = "visible"; 
  }
}
