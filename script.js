/*Fill your code */

let flag = false;
let layer = 1;
let total = 0;
const chocolate = document.getElementById("Chocolate");
chocolate.addEventListener("click", function () {
    if (!flag) {
        document.getElementById("billlist").innerHTML += "<h3>BILL</h3>";
        flag = true;
    }
    document.getElementById("billlist").innerHTML += "<p>Chocolate --------- 300</p>";
    document.getElementById("design").innerHTML += '<p id="layer' + layer + '"></p>';
    document.getElementById("layer"+layer).style.backgroundColor += "#4b1d1d";
    layer++;
    total += 300;
    chocolate.disabled = true;
});
const strawberry = document.getElementById("Strawberry");
strawberry.addEventListener("click", function () {
    if (!flag) {
        document.getElementById("billlist").innerHTML += "<h3>BILL</h3>";
        flag = true;
    }
    document.getElementById("billlist").innerHTML += "<p>Strawberry ------ 100</p>";
    document.getElementById("design").innerHTML += '<p id="layer' + layer + '"></p>';
    document.getElementById('layer'+layer).style = "background-color: pink;";
    layer++;
    total += 100;
    strawberry.disabled = true;
});
const butterscotch = document.getElementById("Butterscotch");
butterscotch.addEventListener("click", function () {
    if (!flag) {
        document.getElementById("billlist").innerHTML += "<h3>BILL</h3>";
        flag = true;
    }
    document.getElementById("billlist").innerHTML += "<p>Butterscotch --- 200</p>";
    document.getElementById("design").innerHTML += '<p id="layer' + layer + '"></p>';
    document.getElementById('layer'+layer).style = "background-color: yellow;";
    layer++;
    total += 200;
    butterscotch.disabled = true;
});
const vanilla = document.getElementById("Vanilla");
vanilla.addEventListener("click", function () {
    if (!flag) {
        document.getElementById("billlist").innerHTML += "<h3>BILL</h3>";
        flag = true;
    }
    document.getElementById("billlist").innerHTML += "<p>Vanilla --------------- 250";
    document.getElementById("design").innerHTML += '<p id="layer' + layer + '"></p>';
    document.getElementById('layer'+layer).style = "background-color: white;";
    layer++;
    total += 250;
    vanilla.disabled = true;
});
const redvelvet = document.getElementById("Redvelvet");
redvelvet.addEventListener("click", function () {
    if (!flag) {
        document.getElementById("billlist").innerHTML += "<h3>BILL</h3>";
        flag = true;
    }
    document.getElementById("billlist").innerHTML += "Redvelvet ---------- 350";
    document.getElementById("design").innerHTML += '<p id="layer' + layer + '"></p>';
    document.getElementById('layer'+layer).style = "background-color: red;";
    layer++;
    total += 350;
    redvelvet.disabled = true;
});
const buy = document.getElementById("buy");
buy.addEventListener("click", function () {
    if (!flag) {
        alert("Please buy any flavour!!");
    } else {
        document.getElementById("billlist").innerHTML += "<p class=\"total\">Total ------- " + total + "</p>";
    }
});