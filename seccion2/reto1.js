const accumulateMarks = [];

let mark = prompt('Por favor ingrese sus notas separadas por ",": ');

let separated = mark.split(",");

accumulateMarks.push(...separated); 

const sum = accumulateMarks.reduce((total, mark) => total + parseInt(mark), 0); 

const average = sum / accumulateMarks.length; 

window.alert('Tu nota promedio es: ' + average);
