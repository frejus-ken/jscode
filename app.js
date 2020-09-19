
function presser (touch) 
{document.getElementById('resultat').innerHTML+=touch;}
function effacer () {
    document.getElementById('resultat').innerHTML=""
}
function calculer()  {
    var expression = document.getElementById('resultat').innerHTML;
    console.log(expression);
    console.log;
    var resultatAafficher = math.evaluate (expression);
    document.getElementById('resultat').innerHTML=resultatAafficher;
}

