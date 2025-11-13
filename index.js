// code here, goodluck!!

'use strict'
const prompt = require("prompt-sync")();

// No 1 User Input Handling
function getValidNumberInput(promptMessage) {
  let num = prompt(promptMessage);

  // selama input bukan angka atau kosong, ulangi
  while (isNaN(num) || num.trim() === "") {
    console.log("Input tidak valid! Silakan masukkan angka yang benar.");
    num = prompt(promptMessage);
  }
  return Number(num); 
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"]; 
  let operator = prompt(promptMessage);

  // jika operator tidak termasuk dalam daftar valid
  while (!validOperators.includes(operator.trim())) {
    console.log("Operator tidak valid! Silakan masukkan salah satu dari: +, -, *, /, %, **");
    operator = prompt(promptMessage);
  }
  return operator;
}

// No 2 — FUNGSI ARITMATIKA DASAR
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}

function modulo(a, b) {
  if (b === 0) return "Error: Modulo by zero!";
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// NO 3 - MAIN CALCULATOR LOGIC

function calculation(a, b, operator) {
  switch (operator) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    case "%": return modulo(a, b);
    case "**": return power(a, b);
    default: return "Operator tidak valid";
  }
}

while (true) {
console.log("\n=== Kalkulator Sederhana ===");

const num1 = getValidNumberInput("Masukkan angka pertama: ");
const operator = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **): ");
const num2 = getValidNumberInput("Masukkan angka kedua: ");

let result = calculation(num1, num2, operator);
console.log(`Hasil: ${num1} ${operator} ${num2} = ${result}`);

// No 4 Data Type Analysis & Conditional Output

console.log("\n=== Analisis Hasil ===");

// tipe data
console.log("Hasil tipe data:", typeof result);

// Jika hasil adalah number
if (typeof result === "number") {
  // Positif / Negatif / Nol
  if (result > 0) {
    console.log("Angka ini adalah bilangan positif.");
  } else if (result < 0) {
    console.log("Angka ini adalah bilangan negatif.");
  } else {
    console.log("Angka ini adalah nol.");
  }

  // Integer / Floating point
  if (Number.isInteger(result)) {
    console.log("Termasuk bilangan bulat (integer).");
  } else {
    console.log("Termasuk bilangan desimal (floating point).");
  }


  // Genap / Ganjil (hanya untuk integer)
  if (Number.isInteger(result)) {
  console.log(result % 2 === 0 ? "Ini bilangan genap." : "Ini bilangan ganjil.");
  }

  // Gunakan AND (&&) dan OR (||)
  if (result > 0 && result % 2 === 0) {
    console.log("Angka ini positif dan genap. (contoh penggunaan AND)");
  } else if (result < 0 || result === 0) {
    console.log("Angka ini negatif atau nol. (contoh penggunaan OR)");
  }


} else if (typeof result === "string") {
  // Jika hasilnya string, misalnya pesan error
  console.log("Pesan:", result);
} else {
  // Jika hasil null atau undefined
  console.log(result ?? "Result is undefined or null, something went wrong!");
}

// No 5 - Exit Mechanism (Loops & Conditionals)
  const again = prompt("\nApakah ingin melakukan perhitungan lagi? (yes/no): ").toLowerCase();
  if (again === "no") {
    console.log("Terima kasih! Program selesai.");
    break;
  }
}



