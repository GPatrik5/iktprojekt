function szamol()
{
    var random= Math.random() * (250 - 50) + 50;
    var keses= ((random*4)-150).toFixed(0)
    
    document.getElementById('a').innerHTML = random.toFixed(0);
    document.getElementById('b').innerHTML = ((random*5)-200).toFixed(0);
    document.getElementById('c').innerHTML = keses*2;
}