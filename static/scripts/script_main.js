let i = 0;
let bo = true;
const COS = 5; // Count of slides
let slides = [];
for(let i = 0; i < COS; i++){
    slides.push({});
}

slides[0].text = 'Привет!';
slides[0].color = 'rgb(209, 176, 176)';
slides[1].text = 'Как дела?';
slides[1].color = 'rgb(171, 109, 109)';
slides[2].text = 'У тебя сегодня др между прочим.';
slides[2].color = 'rgb(145, 93, 93)';
slides[3].text = 'Lol!';
slides[3].color = 'rgb(188, 143, 143)';
slides[4].text = 'Ahahah!';
slides[4].color = 'rgb(204, 136, 153)';

document.body.style.background = slides[0].color;
document.getElementById('main').innerText = slides[0].text;


function checkName(){
    const NAME = 'Дарья';
    let forma = document.getElementById('form');
    let link = document.getElementById('link');
    let name_form = document.getElementById('name');
    let main_div = document.getElementById('main');
    let wrong = document.getElementById('wrong');
    let next_button = document.getElementById('btn-next');
    if(name_form.value === NAME){
        forma.style.visibility = 'hidden';
        wrong.style.visibility = 'hidden';
        main.style.visibility = 'visible';
        next_button.style.visibility = 'visible';
        bo = false;
    } else {
        name_form.value = '';
        wrong.style.visibility = 'visible';
        setTimeout(function(){
            wrong.style.visibility = 'hidden';
        }, 4000);
    }
}

function next() {
    const TIME = 1250;
    let btn = document.getElementById('btn-next');
    btn.style.visibility = 'hidden';
    if (bo === true) {
        return 'Another function is running';
    }
    let m = document.getElementById('main');
    let text_anim = anime({
        targets: '#main',
        opacity: 0,
        duration: TIME,
        complete: function () {
            m.innerText = slides[i].text;
            console.log('Open');
            let closetext_anim = anime({
                targets: '#main',
                opacity: 1,
                duration: TIME,
            });
        }
    });

    let q = anime({
        targets: 'body',
        backgroundColor: slides[i].color, // анимацию заднено фона
        duration: TIME * 2,
        complete: function () {
          console.log('Background Completed');
          btn.style.visibility = 'visible';
        },
    });
    i++;
    if(i === COS - 1){
        btn.innerText = '<--'
    }
    if (i === COS) {
        i = 0;
        btn.innerText = '->';
        return 'It`s All';
    }
    return 'Success';
}