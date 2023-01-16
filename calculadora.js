
function suma(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    
    let total = n1 + n2;

    resultado.innerHTML= 'La suma de: ' + n1 + " + " + n2 + " es " + total;
}


function resta(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    let total = n1 - n2;

    resultado.innerHTML= 'La resta de: ' + n1 + " - " + n2 + " es " + total;
}


function multiplicación(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    let total = n1 * n2;

    resultado.innerHTML= 'La multiplicación de: ' + n1 + " * " + n2 + " es " + total;
}


function división(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    let total = n1 / n2;

    resultado.innerHTML= 'La división de: ' + n1 + " / " + n2 + " es " + total;
}