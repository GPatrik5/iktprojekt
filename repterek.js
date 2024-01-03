function szamol()
{
    var random1= Math.random() * (99999 - 11111) + 11111;
    var random2= random1-(Math.random() * (25000 - 22500) + 22500);
    var random3= random2-(Math.random() * (18000 - 450) + 450);

    document.getElementById('a').innerHTML = random3.toFixed(0);
    document.getElementById('b').innerHTML = random2.toFixed(0);
    document.getElementById('c').innerHTML = random1.toFixed(0);
}
