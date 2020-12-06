var btntranslate=document.querySelector("button");
var inptxt=document.querySelector("#input");
var outputtxt=document.querySelector("#output");

function getURl(){
return "https://api.funtranslations.com/translate/minion.json?text="+inptxt.value;
}
/*btntranslate.addEventListener("click",function clickEventHandler(){
    console.log(getURl())
})*/
/*outputtxt.innerHTML=json.contents.translated*/

function errorHandler(error){
    console.log(error)
}
btntranslate.addEventListener("click",function clickEventHandler(){
    fetch(getURl()).then(response => response.json())
    .then(json=>outputtxt.innerHTML=json.contents.translated).catch(errorHandler)
})