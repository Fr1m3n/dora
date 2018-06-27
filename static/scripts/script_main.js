let i = 0;
let bo = true;

const COS = 16;
let slides = [];
 for (let i = 0; i < COS; i++) {
  slides.push({});
}
slides[0].text = 'Привет, это начало. Для продолжения нажимай на стрелочку внизу справа.';
slides[0].type = 'Text';
slides[0].color = 'rgb(255, 255, 204)';
slides[1].text = 'Вот тебе и 16 годиков.';
slides[1].type = 'Text';
slides[1].color = 'rgb(255, 255, 153)';
slides[2].text = 'Я безумно счастлив, что ты моя девушка <3';
slides[2].type = 'Text';
slides[2].color = 'rgb(255, 255, 102)';
slides[3].text = 'Ты правда невероятная.';
slides[3].type = 'Text';
slides[3].color = 'rgb(255, 255, 51)';
slides[4].text = 'Я очень хочу чтобы у тебя всё было хорошо.';
slides[4].type = 'Text';
slides[4].color = 'rgb(255, 255, 0)';
slides[5].text = 'И чтобы ты тоже была счастлива(как я).';
slides[5].type = 'Text';
slides[5].color = 'rgb(255, 212, 0)';
slides[6].text = 'Хоть я и уеду скоро, но уверен - время пролетит.';
slides[6].type = 'Text';
slides[6].color = 'rgb(153, 255, 204)';
slides[7].text = 'Потом я вернусь и всё снова будет хорошо с:';
slides[7].type = 'Text';
slides[7].color = 'rgb(102, 255, 204)';
slides[8].text = '<p> Це ти :з </p>'+
    '<br>'+
    '<img src="/static/fullsize.jpg/">';
slides[8].type = 'Image';
slides[8].color = 'rgb(255, 255, 163)';
slides[9].text = 'Хочется, чтобы этот день для тебя был особенным.';
slides[9].type = 'Text';
slides[9].color = 'rgb(0, 255, 154)';
slides[10].text = 'Это день рождения как никак!';
slides[10].type = 'Text';
slides[10].color = 'rgb(51, 204, 105)';
slides[11].text = 'Я тебе уже говорил, что ты очень красивая?';
slides[11].type = 'Text';
slides[11].color = 'rgb(0, 204, 102)';
slides[12].text = 'И безумно милая :з';
slides[12].type = 'Text';
slides[12].color = 'rgb(204, 255, 51)';
slides[13].text = 'Ты очень для меня дорога.';
slides[13].type = 'Text';
slides[13].color = 'rgb(255, 100, 51)';
slides[14].text = 'Я тебя люблю.';
slides[14].type = 'Text';
slides[14].color = 'rgb(255, 51, 0)';
slides[15].text = '<p> Спасибо тебе за всё </p>' +
 '<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">'+
 '<g class="lines">'+
  '<title>Layer 1</title>'+
  '<path fill="none" stroke="#ff0000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m294.63489,173.13809c62.46265,-163.84241 307.20013,0 0,210.65414c-307.19644,-210.65414 -62.46045,-374.49656 0,-210.65414z" id="svg_6"/>'+
 '</g>'+
'</svg>'+
 '<p> С днём рождения! </p>';
slides[15].type = 'SVG';
slides[15].color = 'rgb(248, 0, 0)';



document.body.style.background = slides[0].color;
document.getElementById('main').innerText = slides[0].text;


function checkName() {
    const NAME = 'Дарья';
    let forma = document.getElementById('form');
    let link = document.getElementById('link');
    let name_form = document.getElementById('name');
    let main_div = document.getElementById('main');
    let wrong = document.getElementById('wrong');
    let next_button = document.getElementById('btn-next');
    if (name_form.value === NAME) {
        forma.style.visibility = 'hidden';
        wrong.style.visibility = 'hidden';
        main.style.visibility = 'visible';
        next_button.style.visibility = 'visible';
        bo = false;
    } else {
        name_form.value = '';
        wrong.style.visibility = 'visible';
        setTimeout(function () {
            wrong.style.visibility = 'hidden';
        }, 4000);
    }
}

let TIME = 3000;

function next() {
    let btn = document.getElementById('btn-next');
    btn.style.visibility = 'hidden';
    if (bo === true) {
        return 'Another function is running';
    }
    let m = document.getElementById('main');
    let text_anim = anime({
        targets: '#main',
        opacity: 0,
        elasticity: 0,
        duration: TIME,
        complete: function () {
            console.log(slides[i].text);
            if (slides[i].type == 'Text') {
                m.innerText = slides[i].text;
            } else {
                m.innerHTML = slides[i].text;
                var lineDrawing = anime({
                    targets: '#main .lines path',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 1500,
                    delay: function (el, i) {
                        return i * 250
                    },
                    direction: 'alternate',
                    loop: false
                });
            }
            console.log('Open');
            let closetext_anim = anime({
                targets: '#main',
                opacity: 1,
                elasticity: 0,
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
    if (i === COS - 1) {
        btn.innerText = '<--'
    }
    if (i === COS) {
        i = 0;
        btn.innerText = '->';
        return 'It`s All';
    }
    return 'Success';
}
