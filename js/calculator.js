function calc() {

    if (document.getElementById('vat').value === "vat-1") {
        var vat = 23;
    } else if (document.getElementById('vat').value === "vat-2") {
        vat = 15;
    } else {
        vat = 0;
    }

    var declaration = document.getElementById('declaration').value;
    if(declaration < 20) {
        declaration = declaration * 5;
    } else if (declaration >= 20 && declaration <= 50){
        declaration = declaration * 4;
    } else if (declaration > 50){
        declaration = declaration * 3;
    }

    var staff = document.getElementById('staff').value;
    if(staff < 20) {
        staff = staff * 5;
    } else if (staff >= 20 && staff <= 50){
        staff = staff * 4;
    } else if (staff > 50){
        staff = staff * 3;
    }

    var num_dec = document.getElementById('num-dec').value;
    var pos_dec = document.getElementById('pos-dec').value;

    if (pos_dec <= 10) {
        pos_dec = 10;
    } else if (pos_dec > 10 && pos_dec < 25) {
        pos_dec = 15;
    } else if (pos_dec >= 25){
        pos_dec = 25;
    }

    var import_goods = num_dec * pos_dec;

    var security = document.getElementById('security').value;
    if(security < 20) {
        security = security * 5;
    } else if (security >= 20 && security <= 50){
        security = security * 4;
    } else if (security > 50){
        security = security * 3;
    }

    var shop = document.getElementById('shop').value;

    var invoice = document.getElementById('invoice').value;
    invoice = invoice * 1.7;

    var payment = document.getElementById('payment').value;

    var result1 = Number(vat) + Number(invoice) + Number(shop) + Number(payment) + Number(declaration) + Number(staff) + Number(import_goods) + Number(security);
    var result2 = Number(result1) * 0.2;

    var march50 = Number(result1) * 0.5;
    var march100 = Number(result1);
    var year_30 = Number(result1) * 0.3;

    result1 = Math.round(result1);
    result2 = Math.round(result2);
    march50 = Math.round(march50);
    march100 = Math.round(march100);
    year_30 = Math.round(year_30);

    document.getElementById('result1').innerHTML = result1;
    document.getElementById('result2').innerHTML = result2;
    document.getElementById('march50').innerHTML = march50;
    document.getElementById('march100').innerHTML = march100;
    document.getElementById('year-30').innerHTML = year_30;


}



