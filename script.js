console.log(`cookies: ${navigator.cookieEnabled}`);

setCookie ("username", "jugador", 1 );
console.log(`username: ${getCookie("username")}`);

function setCookie(name, value, daysTolive) {
    const date = new Date();
    date.setTime(date.getTime() +  daysTolive *  24 * 60 * 60 * 1000); 
    let expires = "expires=" +  date.toUTCString ();  
    document.cookie = `${name}=${value}; ${expires };` 
}
function deleteCookie(name) {
    setCookie(name, null, null);
}
function getCookie(name) {
    const cDecoded =  decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name)==0 ){
             result = element.substring(name.length + 1)
        }
    })
    return result;
}

function showSection(sectionId) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    if (sectionId === 'menu') {
        document.getElementById('menu').style.display = 'flex';
    } else {
        document.getElementById(sectionId).style.display = 'block';
    }
}