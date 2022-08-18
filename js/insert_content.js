const alert = document.createElement("div");
alert.classList.add("alert", "alert-success");
const msg = document.createTextNode("A extensão esta funcionando!!!");
alert.appendChild(msg);

const element = document.getElementById("wrapper-vue");
element.insertBefore(alert, element.firstChild);
