setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.querySelector('.hour .one').innerHTML = h[0];
    document.querySelector('.hour .two').innerHTML = h[1];
    document.querySelector('.minute .one').innerHTML = m[0];
    document.querySelector('.minute .two').innerHTML = m[1];
    document.querySelector('.second .one').innerHTML = s[0];
    document.querySelector('.second .two').innerHTML = s[1];
    document.querySelector('.extra .ampm').innerHTML = ampm;

    console.log(h, m, s, ampm);
}, 1000);
