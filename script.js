console.log(`cookies: ${navigator.cookieEnabled}`);

setCookie ("username", "example_user", 1 );
setCookie ("bgmusic", 50, 1)
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