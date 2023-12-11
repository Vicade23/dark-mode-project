window.addEventListener('DOMContentLoaded',()=>{

    const body = document.querySelector('.body')
    const btn = document.querySelector('.btn')
    const h2 = document.querySelectorAll('.h2')
    const h1 = document.querySelectorAll('.h1')
    const main = document.querySelectorAll('.main')
    const firstH1 = document.getElementById('firstH1');
    const secondH1 = document.getElementById('secondH1');
    const thirdH1 = document.getElementById('thirdH1');
    const firstH2 = document.getElementById('firstH2');
    const secondH2 = document.getElementById('secondH2');
    const thirdH2 = document.getElementById('thirdH2');

    btn.addEventListener('click',()=>{
        h2.forEach((ha2)=>{
            ha2.classList.toggle('h22')
        })
        h1.forEach((ha1)=>{
            ha1.classList.toggle('h11')
        })
        main.forEach((mains)=>{
            mains.classList.toggle('mainn')
        })
        btn.classList.toggle('btnn');
        body.classList.toggle('bodyy')
    })


    let firstH1Count = 0;
    let secondH1Count = 0;
    let thirdH1Count = 0;
    const firstH1Timing = setInterval(functionContainer)
    function functionContainer() {
        firstH1CountFunc()
        function firstH1CountFunc() {
            if(firstH1Count === 500) {
                firstH1Count = 500;
            }
            else {
                firstH1Count = firstH1Count + 1;
                firstH1.innerHTML = firstH1Count + '+';
            }
        }
        secondH1CountFunc()
        function secondH1CountFunc() {
            if(secondH1Count > 17140) {
                clearInterval(firstH1Timing)
            }
            else {
                secondH1Count = secondH1Count + 10;
                secondH1.innerHTML = secondH1Count + '+';
            }
        }
        thirdH1CountFunc()
        function thirdH1CountFunc() {
            if(thirdH1Count === 1500) {
                thirdH1Count = 1500;
            }
            else {
                thirdH1Count = thirdH1Count + 1;
                thirdH1.innerHTML = thirdH1Count + '+';
            }
        }
    }
})