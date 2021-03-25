var mainnav, mainmenu;
window.addEventListener('load', function() {
	mainnav = document.getElementById('mainnav');
	mainmenu = document.getElementById('menu');
	bgmenu = document.getElementById('bgmenu');
	//-----
	let swiperOptions = { direction: 'horizontal' };
	if (document.body.id == "home") {
		swiperOptions.loop = true;
		swiperOptions.pagination = { el: '.swiper-pagination' };
		swiperOptions.autoplay = { delay: 5000 };
	}
	const swiper = new Swiper('.swiper-container', swiperOptions);
	document.addEventListener('scroll', function() { CheckScroll(); });
	document.getElementById('bgmenu').addEventListener('click', function() {
		mainmenu.classList.toggle('displayed');
		bgmenu.classList.toggle('displayed');
	});
	//-----
	ResertScreen();		// Specifically usefull after a browser back button push
})
function CheckScroll() {
	let scrolling = (window.pageYOffset > 0);
	mainnav.classList.toggle('active', scrolling);
	bgmenu.classList.toggle('scrolled', scrolling);
}
function ResertScreen() {
	document.styleSheets[0].insertRule('* { transition: none !important; }', document.styleSheets[0].cssRules.length);
	CheckScroll();
	mainnav.offsetHeight; // Trigger a reflow, flushing the CSS changes
	document.styleSheets[0].deleteRule(document.styleSheets[0].cssRules.length - 1);
}
