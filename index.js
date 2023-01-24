var string = "Learn Tamil From A Professional Teacher Today!";
var str = string.split("");
var el = document.getElementById('introduction');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 100);
})();
var cursor = true;
var speed = 500;        setInterval(() => {
    if(cursor) {
    document.getElementById('cursor').style.opacity = 0;
    cursor = false;
    }else {
    document.getElementById('cursor').style.opacity = 1;
    cursor = true;
    }
}, speed);