const semBtns = [document.getElementById('sem1-btn'),
    document.getElementById('sem2-btn'),
    document.getElementById('sem3-btn'),
    document.getElementById('sem4-btn'),
    document.getElementById('sem5-btn'),
    document.getElementById('sem6-btn'),
    document.getElementById('sem7-btn'),
    document.getElementById('sem8-btn')
];

const semesters = [document.getElementById('sem-1'),
    document.getElementById('sem-2'),
    document.getElementById('sem-3'),
    document.getElementById('sem-4'),
    document.getElementById('sem-5'),
    document.getElementById('sem-6'),
    document.getElementById('sem-7'),
    document.getElementById('sem-8')
];

semBtns.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        semBtns.forEach(function(b){
            b.classList.remove('on');
        });

        semesters.forEach(function(sems){
            sems.classList.remove('on');
        });

        btn.classList.add('on');
        semesters[index].classList.add('on');
    });
});
