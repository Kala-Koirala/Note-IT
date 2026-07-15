
const btns = [
    document.getElementById('notes-btn'),
    document.getElementById('syl-btn'),
    document.getElementById('pq-btn')
];

const units = [
    document.getElementById('notes'),
    document.getElementById('syllabus'),
    document.getElementById('pq')
];

btns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        btns.forEach(function (bt) {
            bt.classList.remove('on');
        });
        units.forEach(function (content) {
            content.classList.remove('on');
        });
        btn.classList.add('on');
        units[index].classList.add('on');
    });
});

const unitBtns = document.querySelectorAll('.unit-btn');

unitBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        unitBtns.forEach(function (b) {
            b.classList.remove('on');
        });
        document.querySelectorAll('.note').forEach(function (c) {
            c.style.display = 'none';
        });
        btn.classList.add('on');
        document.getElementById(btn.id + '-notes').style.display = 'block';
    });
});

