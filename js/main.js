$(function(){
	/* СМЕНА ВКЛАДОК В КАТАЛОГЕ */
	const tabItem = document.querySelectorAll(".tabs__bttn-item");
	const tabContent = document.querySelectorAll(".tabs__content-item");
	tabItem.forEach(function (element){
		element.addEventListener("click", open);
	});
	
	function open(evt) {
		const tabTarget = evt.currentTarget;
		const button = tabTarget.dataset.button;
		
		tabItem.forEach(function(item) {
			item.classList.remove("tabs__bttn-item--active");
		});
		
		tabTarget.classList.add("tabs__bttn-item--active");
		
		tabContent.forEach(function(item) {
			item.classList.remove("tabs__content-item--active");
		});
		
		document.querySelector(`#${button}`).classList.add("tabs__content-item--active")
	};
	
	/* КНОПКА МОБИЛЬНОГО МЕНЮ */
	$(".mobile__menu__bttn").on("click", function(){
		$(".header").find(".menu__list").toggleClass("menu__list--active");
		$(".top__banner").find(".top__banner__title").toggleClass("top__banner__title--unactive");
	});
	
	/* СЛАЙДЕР */
	const swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		effect: "fade"
	});
});
