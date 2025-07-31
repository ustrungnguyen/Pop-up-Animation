// Lấy target
const openPopupButton = document.getElementById('open-popup-button');
const closePopupButton = document.getElementById('close-button');
const popupContainer = document.getElementById('popup-container');

// Hàm hiện pop-up khi bấm nút
const openPopup = () => {
    popupContainer.classList.add('active');
};

// Hàm đóng pop-up khi bấm nút 
const closePopup = () => {
    popupContainer.classList.remove('active');
};

// Xác định lúc user bấm nút để gọi hàm
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);