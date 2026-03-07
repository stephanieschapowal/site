---
siteTitle: Stephanie Schapowal
pageTitle: MoMA's Online Ticketing
linkTitle: Online Ticketing
pageClass: work
layout: posts.html
description: Streamlining the ticket-buying process for both visitors and staff and cutting time to purchase in half
img: /img/moma-ticketing/thumbnail-Ticketing.png
headerImg: /img/moma-ticketing/ticketing-header.png
cta: View case study
tags: moma
related:
  - sweetpea
  - myadvocate
---

#### Background

### MoMA's online ticketing system was optimized for timed entry slots, not a seamless purchase experience

During the pandemic, MoMA adopted a timed ticketing system for admission in order to ease crowding. To stand up this solution quickly during uncertain times, the Digital Product team had turned to a white label solution. While the white label did a great job of handling time slots, its six screen flow took an average of 7 minutes to complete, was saddled with confusing out-of-the-box copy, and was unable to support membership or Design Store upsells. With timed ticketing no longer necessary, our team took the opportunity to build a ticketing solution in-house.

#### Approach

### Trimming down the checkout flow and getting visitors excited to visit MoMA

- Trim down from six steps to three
- Surface highest purchase volume paid tickets, but organize free tickets for access too
- Encourage buying online to ease surge on lobby staff
- Messaging an online-only discount
- Assist membership and marketing goals
- Help visitors feel prepared for their visit

<div class="carousel">
  <div class="carousel-track">
    <div class="carousel-slide">
      <img src="/img/moma-ticketing/ticketing-steps.png" alt="Three-step checkout flow">
    </div>
    <div class="carousel-slide">
      <img src="/img/moma-ticketing/ticketing-fork.png" alt="Ticket type selection">
    </div>
    <div class="carousel-slide">
      <img src="/img/moma-ticketing/ticketing-confirmation.png" alt="Confirmation screen and digital ticket">
    </div>
  </div>
  <button class="carousel-prev" aria-label="Previous slide">←</button>
  <button class="carousel-next" aria-label="Next slide">→</button>
  <div class="carousel-dots">
    <button class="carousel-dot active" aria-label="Slide 1"></button>
    <button class="carousel-dot" aria-label="Slide 2"></button>
    <button class="carousel-dot" aria-label="Slide 3"></button>
  </div>
</div>

<p class="caption">Bold, color coded tickets helped staff quickly identify who needed an ID check while scanning tickets for entry.</p>

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
})();
</script>

#### Outcomes

### By focusing on an intuitive and accessible user experience, we saw revenue from online ticketing increase 4.5% in the first six months after launch.

For our users, the average time to checkout was reduced by over 50%. The new design also provided a foundation for future experimentation and testing by our growth squad, leading to a successful membership upsell offer system, and the addition of digital wallet payments. We were able to make critical improvements for staff, like growing marketing's email subscription list, and easing requests of our lobby staff by optimizing our confirmation page and digital tickets to prepare visitors for their day at MoMA.

#### Team

- Michelle Pae, director of digital product
- Rik Van Mechelen, director of IT apps
- John Cline, director of engineering
- Madhav Tankha, assistant director of UX
- Debora Domass, product manager
- Kengo Ikeda-Iyeki, front end developer
- Anthony Hersey, back end developer
- John Halderman, back end developer
- James Duffy, back end developer
- Tyler Cole, product manager
- Deepa Ahmed, project manager
