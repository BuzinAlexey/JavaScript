//Задание 1

function temp() {
    let t = document.getElementById("t").value;

    //Делаем заголовок таблицы
    document.write("<table border=1>");
    document.write("<tr><th>F</th><th>C</th></tr>");
    for (let i = t; i <= t; i++) {
      let c = (i - 32) * (5/9);
      document.write('<tr><td>'+i+'</td><td>'+c+'</td></tr>');
    }
    document.write('</table>');
  }