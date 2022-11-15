//Задание 1
"use strict";
function temp() {
  let t = Number.parseFloat(document.getElementById("t").value);
  let c = (t - 32) * (5/9);
  c = Math.round(c);
  alert(`${t} F° -> ${c} C°`);
  }
function temp1() {
    let t = Number.parseFloat(document.getElementById("t1").value);
    let f = (t) * (9/5)+32;
    f = Math.round(f);
    alert(`${t} C° -> ${f} F°`);
  }