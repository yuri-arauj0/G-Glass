function changePic(pic) {
    document.getElementById('icone').src = pic;
}

function _calcTotal() {
    var qtd = parseInt(document.getElementById('f-qtd').value);
    total = qtd * 1500;
    document.getElementById('f-total').value = total; 
}