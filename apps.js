// Todo List
const flexCheck1 = document.getElementById("flexCheck1");
const td1text = document.getElementById("td1text");
const td1checkbox = document.getElementById("td1checkbox");
const tbody = document.getElementById("tbody");
let counter = 0;
tbody.addEventListener("click", (event) => {
  event.target.parentElement.classList.toggle("ilk");
  event.target.parentElement.classList.toggle("son");
  event.target.parentElement.previousElementSibling.classList.toggle("ilk");
  event.target.parentElement.previousElementSibling.classList.toggle("son");
});
// Don't forget to...

const dontforget = document.getElementById("dontforget");
const checksum = document.getElementById("checksum");
dontforget.addEventListener("click", (event) => {
  if (event.target.tagName == "I") {
    event.target.parentElement.classList.toggle("linethrough");
    event.target.classList.toggle("fa-solid");
    event.target.classList.toggle("fa-xmark");
    event.target.classList.toggle("text-success");

    event.target.classList.contains("text-success") ? counter++ : counter--;
    counter < 0 && (counter = 1);
    checksum.innerText = `${counter} OUT OF 10 TIPS COMPLETED.`;
  }
});

// Todo list from inputbox
const todoinptbtn2 = document.getElementById("todoinptbtn2");
const todoinptbox2 = document.getElementById("todoinptbox2");
const alertTodo = document.getElementById("alertTodo");

todoinptbtn2.addEventListener("click", () => {
  const newAlertNode = document.createTextNode(todoinptbox2.value);
  alertTodo.replaceChild(newAlertNode, alertTodo.firstChild);
});
todoinptbox2.addEventListener("focus", () => {
  const newAlertNode = document.createTextNode("ALL COUGHT UP!");
  alertTodo.replaceChild(newAlertNode, alertTodo.firstChild);
  todoinptbox2.value = "";
});
// wednestay

const wedcontainer = document.getElementById("wedcontainer");
const weddivalert = document.getElementById("weddivalert");
const wedPlusAdon = document.getElementById("wedPlusAdon");
const wedinput = document.getElementById("wedinput");

wedPlusAdon.addEventListener("click", () => {
  if (wedinput.value != "") {
    var newdiv = document.createElement("div");
    const newi = document.createElement("i");
    const newtextnode = document.createTextNode(" " + wedinput.value);
    newi.setAttribute("class", "fa-regular fa-square");
    newi.setAttribute("type", "button");
    newdiv.setAttribute(
      "class",
      "alert alert-light alert-light mt-1 rotatediv"
    );
    newdiv.setAttribute("role", "alert");
    wedcontainer.appendChild(newdiv);
    newdiv.appendChild(newi);
    newdiv.appendChild(newtextnode);
    wedinput.value = "";
  }
});

wedcontainer.addEventListener("click", (event) => {
  if (event.target.tagName == "I") {
    event.target.parentElement.classList.remove("rotatediv");
    event.target.parentElement.classList.toggle("linethroughdiv");
    setTimeout(function () {
      event.target.parentElement.remove();
    }, 2000);
  }
});
