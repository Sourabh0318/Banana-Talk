var btn = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error type occured" + error);
    alert("Server is down try after sometime")
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translate = json.contents.translated;
            output.innerText = translate
        })
        .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);