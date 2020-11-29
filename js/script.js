const shareBtn = document.querySelector('.fa-share');
const sharePopup = document.querySelector('.share-popup');
let popup = false;
const x = window.matchMedia('(min-width: 992px)');

shareBtn.addEventListener('mouseenter', e => e.target.classList.add('shareBtn-click'));

shareBtn.addEventListener('mouseout', e => {
	if(!popup) {
		e.target.classList.remove('shareBtn-click');
	}
});

console.log(x);

shareBtn.addEventListener('click', (e) => {
	if(x.matches) {
		if(!popup) {
			sharePopup.style.transform = 'scale(1)';
			popup = true;
		} else {
			sharePopup.style.transform = 'scale(0)';
			popup = false;
		}	
	} else {
		if(!popup) {
			sharePopup.style.transform = 'translateY(-100%)';
			popup = true;
		} else {
			sharePopup.style.transform = 'translateY(100%)';
			popup = false;
		}	
	}
});