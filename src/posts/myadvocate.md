---
siteTitle: Stephanie Schapowal
pageTitle: MyAdvocate
linkTitle: MyAdvocate
pageClass: work
layout: posts.html
description: A marketing site that brings warmth and clarity to estate planning
img: /img/bh-ma/thumbnail-MA.png
headerImg: /img/bh-ma/ma_cover.png
tags:
  - bh
related:
  - moma-ticketing
  - sweetpea

---

#### Background

### Estate planning has a reputation of being paperwork-heavy, emotionally-fraught, and only for the rich.

MyAdvocate’s goal is to make the process of creating a will or trust accessible to all. They challenged us to create a brand that embodies warmth and encouragement, and apply that brand to a marketing site. Their founder had created a library of content to educate consumers on the estate-planning process, and so it was important to leverage this as a marketing tool.

I collaborated with another designer to develop the brand, and executed all web design—from information architecture, to visual design, to creating a style guide that MyAdvocate’s team could apply to the product itself.




### Injecting warmth and trust into an emotionally-fraught process

MyAdvocate had a few elements of their existing brand they wanted to preserve—such as organic shapes and the color green—but for the most part we started fresh. We created moodboards to compose a palette that was warm and refined, and leaned into a few points of inspiration to create the logo: historic legal typefaces, the legacy of trees, and the language of documents.

<div class="carousel">
  <div class="carousel-track">
    <div class="carousel-slide">
      <img src="/img/bh-ma/ma-carousel-logo.png" alt="placeholder">
      <p class="caption">The logo leaned into the metaphor of trees for leaving a legacy.</p>
    </div>
    <div class="carousel-slide">
      <img src="/img/bh-ma/ma-carousel-moodboard.png" alt="placeholder">
      <p class="caption">Leah and I developed a color palette and brand direction that conveyed warmth and security.</p>
    </div>
  </div>

  <div class=carousel-controls>

   <button class="carousel-prev" aria-label="Previous slide">
    <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0711 20.3431L8.70718 26.7071C8.31665 27.0976 7.68349 27.0976 7.29296 26.7071L0.929002 20.3431C0.538477 19.9526 0.538477 19.3195 0.929002 18.9289C1.31953 18.5384 1.95269 18.5384 2.34322 18.9289L7.00007 23.5858L7.00007 0L9.00007 8.74228e-08L9.00007 23.5858L13.6569 18.9289C14.0474 18.5384 14.6806 18.5384 15.0711 18.9289C15.4617 19.3195 15.4617 19.9526 15.0711 20.3431Z" fill="#656377"/>
</svg>
</button>

  <div class="carousel-dots">
    <button class="carousel-dot active" aria-label="Slide 1"></button>
    <button class="carousel-dot" aria-label="Slide 2"></button>
  </div>

  <button class="carousel-next" aria-label="Next slide">
        <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0711 20.3431L8.70718 26.7071C8.31665 27.0976 7.68349 27.0976 7.29296 26.7071L0.929002 20.3431C0.538477 19.9526 0.538477 19.3195 0.929002 18.9289C1.31953 18.5384 1.95269 18.5384 2.34322 18.9289L7.00007 23.5858L7.00007 0L9.00007 8.74228e-08L9.00007 23.5858L13.6569 18.9289C14.0474 18.5384 14.6806 18.5384 15.0711 18.9289C15.4617 19.3195 15.4617 19.9526 15.0711 20.3431Z" fill="#656377"/>
</button>
  </div>
</div>



<script>
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
</script>


Their team was slated to apply our branding to MyAdvocate’s product, so we worked closely with their designer to hand off a detailed Figma style guide and make sure they had everything that they needed. Leah created all of the spot illustrations for the site.

### Leading with clarity, expertise, and value

For the homepage, I tried to balance a sense of warmth and humanity—many people look for estate planning help during a time of stress or crisis—with clarity surrounding the different plans and ease of use. The main CTA directs users to the assessment, a series of questions that creates a personalized plan for each user.


#### Team

Kris Kiger (Design director), Leah Schmidt (Senior product designer and illustrator), Austin Evarts (Product manager), Andrew Tejerina (Strategist),development by the MyAdvocate team


