function suma() {
  document.getElementById("disp").value += "+";
}

function resta() {
  document.getElementById("disp").value += "-";
}

function multiplicacion() {
  document.getElementById("disp").value += "*";
}

function division() {
  document.getElementById("disp").value += "/";
}

function porcentaje() {
  document.getElementById("disp").value += "%";
}

function uno() {
  document.getElementById("disp").value += 1;
}

function dos() {
  document.getElementById("disp").value += 2;
}

function tres() {
  document.getElementById("disp").value += 3;
}

function cuatro() {
  document.getElementById("disp").value += 4;
}

function cinco() {
  document.getElementById("disp").value += 5;
}

function seis() {
  document.getElementById("disp").value += 6;
}

function siete() {
  document.getElementById("disp").value += 7;
}

function ocho() {
  document.getElementById("disp").value += 8;
}

function nueve() {
  document.getElementById("disp").value += 9;
}

function cero() {
  document.getElementById("disp").value += 0;
}

function ce() {
  document.getElementById("disp").value = "";
}

function c() {
  document.getElementById("disp").value = "";
}

function igual() {
  try {
    document.getElementById("disp").value = eval(
      document.getElementById("disp").value
    );
  } catch (e) {
    document.getElementById("disp").value = "Error";
  }
}
