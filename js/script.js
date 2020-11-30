const shareBtn = document.querySelector('.fa-share');
const sharePopup = document.querySelector('.share-popup');
let popup = false;

shareBtn.addEventListener('mouseenter', e => e.target.classList.add('shareBtn-click'));

shareBtn.addEventListener('mouseout', e => {
	if(!popup) {
		e.target.classList.remove('shareBtn-click');
	}
});

shareBtn.addEventListener('click', e => {
	sharePopup.classList.toggle('popup-animation');

	popup === true ? popup = false : popup = true;
});