let date = new Date();                                                                                      date.setFullYear(2018, 5, 28);
let now_date = new Date();

let i = date.getTime() - now_date.getTime();

setInterval(function(){
    let now_date = new Date();
    now_date.setHours(now_date.getHours() + 3);
    let i = Math.abs(date.getTime() - now_date.getTime());
    let q = document.getElementById("tid");
    // console.log(now_date);
    if(i <= 0){
        window.location.href = 'https://hbdr.herokuapp.com/main11'
    }
    q.innerText = (i / 1000).toFixed().toString();
}, 1000);