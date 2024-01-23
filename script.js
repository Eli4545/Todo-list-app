var button = document.getElementById("enter");
var alpha = document.getElementById("alphainput");
var ul = document.querySelector("ul");

function alphaLength() {
    return alpha.value.length;
}

function createListElement() {
    var li = document.createElement("li");
     li.appendChild(document.createTextNode(alpha.value));
     ul.appendChild(li);
     alpha.value = "";
}

function addListAfterClick() {
    if (alphaLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (alphaLength() > 0 && event.charCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

alpha.addEventListener("keypress", addListAfterKeypress);