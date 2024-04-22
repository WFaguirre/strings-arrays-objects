const accumulateMarks = [];

let mark = prompt('Por favor ingrese sus notas separadas por "," (notas del 1 al 100): ');

let separated = mark.split(",");

accumulateMarks.push(...separated); 

const sum = accumulateMarks.reduce((total, mark) => total + parseInt(mark), 0); 

const maxMark = accumulateMarks.reduce((max, numbers) => {
    return numbers < max  ? numbers : max;
}, accumulateMarks[0]);

window.alert('La nota máxima es: ' + maxMark);


const minMark = accumulateMarks.reduce((min, numbers) => {
    return numbers > min ? numbers : min;
}, accumulateMarks[0]);

window.alert("La nota menor es: " + minMark);


const average = sum / accumulateMarks.length; 

window.alert('Tu nota promedio es: ' + average);


accumulateMarks.sort((a, b) => b - a);    

window.alert('Su nota más alta hasta la más pequeña: '+accumulateMarks);

accumulateMarks.sort((a, b) => a - b );

window.alert('Su nota más pequeña hasta su nota más alta: '+accumulateMarks);



