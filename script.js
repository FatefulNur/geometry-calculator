var areaCalculation = document.querySelector(".context");
var image = document.getElementById("image");

var itemOne = document.querySelector(".item-1");
var itemTwo = document.querySelector(".item-2");
let base = itemOne.querySelector("#b");
let height = itemOne.querySelector("#h");

let width = itemTwo.querySelector("#w");
let len = itemTwo.querySelector("#l");

base.addEventListener("input", disableButtonTriagnle);
height.addEventListener("input", disableButtonTriagnle);

width.addEventListener("input", disableButtonRegTangle);
len.addEventListener("input", disableButtonRegTangle);

itemOne.querySelector("button.btn").classList.add("disable");
itemTwo.querySelector("button.btn").classList.add("disable");

function disableButtonTriagnle() {
    if(base.value > -1 && height.value > -1) {
        if (base.value && height.value) {
            itemOne.querySelector("button.btn").classList.remove("disable");
        } else {
            itemOne.querySelector("button.btn").classList.add("disable");
        }
    }
}

function disableButtonRegTangle() {
    if(width.value > -1 && len.value > -1) {
        if (width.value && len.value) {
            itemTwo.querySelector("button.btn").classList.remove("disable");
        } else {
            itemTwo.querySelector("button.btn").classList.add("disable");
        }
    }
}

function calculateTriangle() {
    let base = parseInt(document.getElementById("b").value);
    let height = parseInt(document.getElementById("h").value);

    let area = 0.5 * base * height;
    
    appendResult('triangle', area);
}

function calculateRectangle() {
    let width = parseInt(document.getElementById("w").value);
    let length = parseInt(document.getElementById("l").value);

    let area = width * length;

    appendResult('rectangle', area);
}

function calculateParallelogram() {
    let itemThree = document.querySelector(".item-3");
    let base = parseInt(itemThree.querySelector(".b").innerText);
    let height = parseInt(itemThree.querySelector(".h").innerText);

    let area = base * height;

    appendResult('parallelogram', area);
}

function calculateRhombus() {
    let itemFour = document.querySelector(".item-4");
    let d1 = parseInt(itemFour.querySelector(".d-1").innerText);
    let d2 = parseInt(itemFour.querySelector(".d-2").innerText);

    let area = 0.5 * d1 * d2;

    appendResult('rhombus', area);
}

function calculatePentagon() {
    let itemFive = document.querySelector(".item-5");
    let p = parseInt(itemFive.querySelector(".p").innerText);
    let b = parseInt(itemFive.querySelector(".b").innerText);

    let area = 0.5 * p * b;

    appendResult('pentagon', area);
}

function calculateEllipse() {
    let itemSix = document.querySelector(".item-6");
    let a = parseInt(itemSix.querySelector(".a").innerText);
    let b = parseInt(itemSix.querySelector(".b").innerText);

    let area = Math.PI * a * b;

    appendResult('ellipse', area);
}


function appendResult(things, area) {
    let index = areaCalculation.children.length + 1;
    let value = Number.isInteger(area) ? area : area.toFixed(2);

    let el = document.createElement('div');
    let text = `<span>${index}. ${things.charAt(0).toUpperCase() + things.slice(1)}</span> <span id="${things}">${value}</span><span id='type-${things}'>cm<sup>2</sup></span> <button onclick='toMeterSquare(${value}, "${things}")' class='btn'>convert to m<sup>2</sup></button>`;
    el.innerHTML = text;

    let exists = document.getElementById(things);
    if(!exists) {
        areaCalculation.appendChild(el);
    } else {
        exists.innerHTML = value;
        document.getElementById("type-"+things).innerHTML = "cm<sup>2</sup>";
    }
}

function toMeterSquare(value, things) {
    let exists = document.getElementById(things);
    let type = document.getElementById('type-'+things);
    exists.innerHTML = (value * Math.pow(10, 4)).toExponential(1);
    type.innerHTML = "m<sup>2</sup>";
    document.querySelector("#" + things + " ~ button").style.display = "none";
}