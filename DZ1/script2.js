//Задание 1

function temp() {
  let t = document.getElementById("t").value;
  let c = (t - 32) * (5/9);
  alert(`${t} F° -> ${c} C°`);
  }
  function temp1() {
    let t = document.getElementById("t1").value;
    let f = (t) * (9/5)+32;
    alert(`${t} C° -> ${f} F°`);
  }