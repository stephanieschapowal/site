---
siteTitle: Stephanie Schapowal
pageTitle: MoMA's Digital Visitor Guide and Map
linkTitle: Digital Map
pageClass: work
layout: posts.html
description: Harnessing MoMA’s collection data to improve wayfinding for visitors
img: /img/moma-dvg/thumbnail-DVG.jpg
headerImg: /img/moma-dvg/dvg-header.png
cta: Case study
tags: 
- moma
related:
- sweetpea
- moma-ticketing
---

#### Background

### Visitors are overwhelmed by MoMA’s scale, and aren’t sure where to start.

Upon reopening in 2020, MoMA’s digital product team released an MVP digital visitor guide (or DVG), meant to replace onsite resources like paper maps, rentable audio devices, and volunteer guides. Over one million visitors use the DVG each year, and wayfinding is reported as our visitors’ biggest challenge.

The original DVG map was a link to a PDF. Unsurprisingly, our users found this difficult to read and navigate on their phones. The graphic design team also found it tedious to update, and visitor engagement still had to field hundreds of questions a day. We had the data users were looking for, like artwork locations and whether an exhibition is on view, but it wasn’t centralized for the onsite visitor.

I collaborated with another designer on research and initial wireframing for the new map, and led high fidelity design. Along with our UX research fellow, we ran in-person usability testing, and I worked closely with our developer to perform visual QA and perfect the interactions.

![Three phone mockups displaying MoMA's digital visitor guide landing page, the landing page with map accordion open, and the PDF map](/img/moma-dvg/dvg-before.png)
<p class="caption">MoMA's digital PDF map in 2023</p>


#### Approach

### Create an interactive map to serve our visitors’ distinct needs, while minimizing the demands on our staff

MoMA’s visitors typically fall into two groups—those visiting for the first time, and New Yorkers or members who have visited before. First-timers are typically tourists who want to see the whole museum, and consider MoMA to be a landmark. Repeat visitors are often drawn to visit by a specific exhibition or artwork. An image-forward directory with a more modern map would be essential in serving both of these groups.

moma.org runs on our internal CMS and the collection database TMS, meaning internal teams only need to update one entry in order to populate the exhibition page, homepage, and onsite screens. Why couldn’t the visitor guide also run on this data? This ensures that on view data for exhibitions and artworks, as well as their locations, exhibition run dates, locations are always up to date.

A common pattern is for users to search for artworks and artists using our global site search. Previously, artworks that were on view were not prioritized in search listings, and gallery locations were not linked to the map. On artist pages, we pushed artworks that were on view to the top of the list, and on artworks pages, we linked out to the gallery where the artwork was located. This made it much easier for visitors to use our site to find specific artworks and artist they wanted to see.

<div class="carousel">
  <div class="carousel-track">
    <div class="carousel-slide">
      <img src="/img/moma-dvg/dvg-carousel-beforeafter.png" alt="placeholder">
      <p class="caption">The interactive map allowed visitors to easily select floors rather than scrolling through a PDF. Visitors could tap on the map to explore exhibitions, or discover them in the “On this floor” listings.</p>
    </div>
    <div class="carousel-slide">
      <img src="/img/moma-dvg/dvg-carousel-Onthisfloor.png" alt="placeholder">
      <p class="caption">We had artwork locations and exhibition details in our CMS already, but it wasn’t centralized in one place online for the onsite visitor. The “On this floor” section centralized this information alongside an interactive map.</p>
    </div>
    <div class="carousel-slide">
      <img src="/img/moma-dvg/dvg-carousel-overlay.png" alt="alt">
      <p class="caption">In our old guide, galleries were often represented by one image—if a visitor didn’t resonate with that image, they were less likely to engage. The overlay for each gallery gave visitors more artworks and artists to explore.</p>
    </div>
    <div class="carousel-slide">
      <img src="/img/moma-dvg/dvg-carousel-links.png" alt="Placeholder">
      <p class="caption">Throughout the site and search listings, we prioritized artworks that are on view, and linked locations of galleries, exhibitions, and artworks to the map.</p>
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
    <button class="carousel-dot" aria-label="Slide 3"></button>
    <button class="carousel-dot" aria-label="Slide 4"></button>
  </div>

  <button class="carousel-next" aria-label="Next slide">
        <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0711 20.3431L8.70718 26.7071C8.31665 27.0976 7.68349 27.0976 7.29296 26.7071L0.929002 20.3431C0.538477 19.9526 0.538477 19.3195 0.929002 18.9289C1.31953 18.5384 1.95269 18.5384 2.34322 18.9289L7.00007 23.5858L7.00007 0L9.00007 8.74228e-08L9.00007 23.5858L13.6569 18.9289C14.0474 18.5384 14.6806 18.5384 15.0711 18.9289C15.4617 19.3195 15.4617 19.9526 15.0711 20.3431Z" fill="#656377"/>
</button>
  </div>
</div>



#### Outcomes

### Our updates resulted in much higher engagement with the map and other moma.org content.

Following our updates, the average DVG user session duration increased from 12 to 28 seconds (2.3x). Our lobby staff has reported that the map integration with the rest of the site has empowered users to find artworks themselves, rather than asking staff.

Visitors are also engaging more with the rest of moma.org. We also saw traffic increase to our Artwork, Exhibition, and Collection gallery pages. 


#### Team

Madhav Tankha (assistant director of UX), Terrance Rose (software developer), Debora Domass (product manager), Tharani Prabu (research fellow)

</div>
