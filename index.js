const inputField = document.querySelector("#inputTxt");
const translateButton = document.querySelector("#translateBtn");
const outputMsg = document.querySelector("#outputTxt");

// console.log(inputField);

translateButton.addEventListener("click",function(){
    var input = inputField.value;
    if(input===""){
        alert("Type something to translate");
        return;
    }
    fetch(generateStringUrl(input))
    .then(response=>response.json())
    .then(json=>outputMsg.innerText=json.contents.translated)
    .catch(error=>alert("something wrong with server! try again after some time"));
})

function generateStringUrl(input){
    return `https://api.funtranslations.com/translate/shakespeare.json?text=${input}`;
}

