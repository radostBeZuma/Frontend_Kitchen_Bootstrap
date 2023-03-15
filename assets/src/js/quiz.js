const nextBtn = document.querySelectorAll("[data-quiz-btn-next]");
const prevBtn = document.querySelectorAll("[data-quiz-btn-prev]");

for (let i = 0; i < nextBtn.length; i++) {
    nextBtn[i].addEventListener("click", function(e) {

        let el = e.currentTarget;
        let number = el.getAttribute('data-quiz-btn-next');

        let thisEl = document.querySelector(`[data-quiz-element='${+number - 1}']`);
        thisEl.classList.add('d-none');

        let nextEl = document.querySelector(`[data-quiz-element='${number}']`);
        nextEl.classList.remove('d-none');

    });
}


for (let i = 0; i < prevBtn.length; i++) {
    prevBtn[i].addEventListener("click", function(e) {

        let elem = e.currentTarget;
        let number = elem.getAttribute('data-quiz-btn-prev');

        let thisElem = document.querySelector(`[data-quiz-element='${+number + 1}']`);
        thisElem.classList.add('d-none');

        let prevElem = document.querySelector(`[data-quiz-element='${number}']`);
        prevElem.classList.remove('d-none');

    });
}