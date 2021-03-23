var mainnav;
window.addEventListener('load', function() {
	mainnav = document.getElementById('mainnav');
	const swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: { el: '.swiper-pagination' },
		autoplay: { delay: 5000 },
	});
	document.addEventListener('scroll', function() {
		mainnav.classList.toggle('active', window.pageYOffset > 0);
	})
})
