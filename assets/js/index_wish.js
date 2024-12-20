// 구현 미완료.
// 제대로 동작하지 않음.
function renderInitialWish() {
    const buttons = document.querySelectorAll('#wishBtn');
    buttons.forEach(button => {
        button.addEventListener('click', (event)=> {
            const starIcon = button.querySelector('#starIcon');
            const buttonTag = button.querySelector('button');
            if (buttonTag.textContent === '찜하기') {
                starIcon.src = './assets/img/yellow-start-filled.svg';
                button.textContent = '내려놓기';
            } else {
                starIcon.src = './assets/img/white-star.svg';
                button.textContent = '찜하기';
            }
        });
    });
}

renderInitialWish();