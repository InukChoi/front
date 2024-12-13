// 모달 제어를 위한 요소 선택
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const paymentModal = document.getElementById('paymentModal');

// 모달 열기
openModalButton.addEventListener('click', () => {
  paymentModal.classList.remove('hidden'); // hidden 클래스 제거
});

// 모달 닫기
closeModalButton.addEventListener('click', () => {
  paymentModal.classList.add('hidden'); // hidden 클래스 추가
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', (e) => {
  if (e.target === paymentModal) {
    paymentModal.classList.add('hidden');
  }
});
