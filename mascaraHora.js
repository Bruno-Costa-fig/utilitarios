//adiciona mascara a Hora
function MascaraHora(hora) {
  const value = hora.value
  value.replace(":", "")

  let horaPadrao = value.padStart(2, '0');

  if (horaPadrao.length < 4) {
          horaPadrao = horaPadrao.padEnd(4, '0')
  }

  const horaVal = horaPadrao.substring(0, 2)
  const minVal = horaPadrao.substring(2)

  document.getElementById("nmHoraCirurgia").value = `${horaVal}:${minVal}`;
}
