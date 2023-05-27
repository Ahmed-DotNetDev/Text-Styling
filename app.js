function f1() {
    document.getElementById("textarea").style.fontWeight = "bold";
}

function f2() {
    document.getElementById("textarea").style.fontStyle = "italic";
}

function f3() {
    document.getElementById("textarea").style.textAlign = "left";
}

function f4() {
    document.getElementById("textarea").style.textAlign = "center";
}

function f5() {
    document.getElementById("textarea").style.textAlign = "right";
}

function f6() {
    document.getElementById("textarea").style.textTransform = "uppercase";
}

function f7() {
    document.getElementById("textarea").style.textTransform = "lowercase";
}

function f8() {
    document.getElementById("textarea").style.textTransform = "capitalize";
}

function f9() {
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.textAlign = "left";
    document.getElementById("textarea").style.fontStyle = "normal";
    document.getElementById("textarea").style.textTransform = "normal";
    document.getElementById("textarea").value = " ";
}

function f10() {
    const content = document.getElementById("textarea").value;
    var save = document.createElement("a");
    save.setAttribute("href", "data:text/plain;charset=umenttttf-8,");
    save.setAttribute("download", ".txt");
    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
}