const malla = document.getElementById('malla');
const totalCeldas = 16;

for (let i = 1; i <= totalCeldas; i++) {
  const celda = document.createElement('div');
  celda.innerText = `C${i}`;
  celda.onclick = () => alert(`¡Hiciste click en la Celda ${i}!`);
  malla.appendChild(celda);
}
