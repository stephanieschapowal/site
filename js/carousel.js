(function () {
	var track = document.querySelector('.carousel-track');
	if (!track) return;
	var slides = track.querySelectorAll('.carousel-slide');
	var dots = document.querySelectorAll('.carousel-dot');
	var current = 0;

	function goTo(index) {
		current = (index + slides.length) % slides.length;
		track.style.transform = 'translateX(-' + (current * 100) + '%)';
		dots.forEach(function (d, i) {
			d.classList.toggle('active', i === current);
		});
	}

	document.querySelector('.carousel-prev').addEventListener('click', function () { goTo(current - 1); });
	document.querySelector('.carousel-next').addEventListener('click', function () { goTo(current + 1); });
	dots.forEach(function (dot, i) {
		dot.addEventListener('click', function () { goTo(i); });
	});

	var touchStartX = 0;
	track.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
	track.addEventListener('touchend', function (e) {
		var diff = touchStartX - e.changedTouches[0].clientX;
		if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
	}, { passive: true });
})();
