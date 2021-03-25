var mainnav, mainmenu;
window.addEventListener('load', function() {
	mainnav = document.getElementById('mainnav');
	mainmenu = document.getElementById('menu');
	bgmenu = document.getElementById('bgmenu');
	//-----
	const swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: { el: '.swiper-pagination' },
		autoplay: { delay: 5000 },
	});
	document.addEventListener('scroll', function() {
		let scrolling = (window.pageYOffset > 0);
		mainnav.classList.toggle('active', scrolling);
		bgmenu.classList.toggle('scrolled', scrolling);
		
	});
	document.getElementById('bgmenu').addEventListener('click', function() {
		mainmenu.classList.toggle('displayed');
		bgmenu.classList.toggle('displayed');
	});
})
