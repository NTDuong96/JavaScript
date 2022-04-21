// Tạo var để lưu số ngâu nhiên từ 1 đến 10
var randomNum = Math.floor((Math.random()*10)+1);

var el=document.getElementById('info');
el.innerHTML = '<h2>rng number</h2><p>' + randomNum + '</p>';