I am a digital product designer working on my portfolio website. I have both a working prototype of my website in code and in Figma. I like to explore ideas first in Figma, then use the Figma MCP to make edits to my existing code. I then like to tweak the code to adjust the styling to my liking. Before any request, show me a plan of how you would complete it, and I will approve it. I like to approve changes one at a time.

Stack:
—Eleventy (SSG) with Liquid templating
—HTML
—CSS (no preprocessors or build tools beyond Eleventy)
—Vanilla JavaScript
—Source files in `src/`, built output to `public/`

---

## File Structure

```
src/
  _includes/
    base.html           ← Homepage layout template
    posts.html          ← Case study layout template
    components/
      header.html       ← Sticky pill nav header (shared)
    postlist-moma.html  ← MoMA project card list partial
    postlist-bh.html    ← Big Human project card list partial
  css/
    style.css           ← Global styles (homepage + shared)
    post.css            ← Case study-only styles (carousel, post layout)
  fonts/                ← GT America Standard Regular (woff/woff2)
  img/                  ← Organized by project slug (see below)
  js/
    carousel.js         ← Vanilla JS carousel (no external library)
  posts/                ← Markdown case study files
  index.md              ← Homepage content
  about.md
```

Image naming conventions:
- Thumbnails: `thumbnail-[PROJECTCODE].png` (e.g. `thumbnail-Ticketing.png`)
- Header images: `[projectcode]-header.png`
- Carousel images: `[projectcode]-carousel-[description].png`
- Images organized in subdirectories by project: `src/img/moma-ticketing/`, `src/img/moma-dvg/`, `src/img/bh-ma/`, `src/img/bh-sp/`

---

## Styling

—Figma is the source of truth for styling
—Draw color variables, spacing variables, effects, and text styles from Figma to create CSS styles
—If a styling change has not been reflected in Figma, do not change the styles
—There are two page templates for the site: the Homepage (`base.html`) and Case Study (`posts.html`) templates

### CSS Conventions

Variable naming pattern: `--category-size` (e.g. `--space-xs`, `--typography-xl`, `--text-primary`)

Color variables (defined in `:root`):
- `--background`, `--text-primary`, `--text-secondary`, `--accent-text`, `--accent-header`

Spacing scale (rem-based):
- `--space-xs` `--space-sm` `--space-md` `--space-lg` `--space-xl` `--space-xxl`

Typography scale (rem-based):
- `--typography-xxs` `--typography-xs` `--typography-sm` `--typography-md` `--typography-lg` `--typography-xl`

Line height variables:
- `--line-height-loose` `--line-height-body` `--line-height-tight`

Effects:
- `--shadow`

CSS nesting is used — media queries are written inside selectors, not outside:
```css
.selector {
  property: value;

  @media (min-width: 768px) {
    property: value;
  }
}
```

Section comments use this format:
```css
/*---------------------------SECTION NAME---------------------------*/
```

`style.css` contains global styles (typography, header, cards, shared layout).
`post.css` contains case study-only styles (`.post`, `.project-header`, carousel).

---

## HTML / Template Conventions

Two layout templates:
- `base.html` — used for the homepage; renders `<main>{{ content }}</main>`
- `posts.html` — used for case studies; renders project header, `<main class="post">`, related posts, and loads `post.css` + `carousel.js`

Liquid templating syntax is used (not Nunjucks).

Component includes:
- `{% include "components/header.html" %}` — sticky pill nav, shared via base.html

Post list partials are included directly in markdown:
- `{% include "postlist-moma.html" %}` and `{% include "postlist-bh.html" %}`

Class naming uses kebab-case: `.content-card`, `.card-image`, `.card-caption`, `.carousel-track`, `.carousel-slide`, `.header-pill`

The `pageClass` front matter variable is applied to `<body class="p-{{pageClass}}">` for page-specific targeting.

---

## Content

—Do not edit any body copy or image content in the markdown case study files
—I will create and replace images and body copy myself in the markdown
—Editing markdown front matter is acceptable if necessary to organize content
—Editing markdown to add or edit a component (such as a carousel) is also acceptable

### Front Matter Fields (case studies)

```yaml
siteTitle: Stephanie Schapowal     ← renders in header pill
pageTitle:                         ← h1 on page
linkTitle:                         ← shorter title for project cards
pageClass: work
layout: posts.html
description:                       ← subtitle under h1, and card caption
img:                               ← thumbnail path for project cards
headerImg:                         ← full-width image below h1
cta:
tags:                              ← moma or bh (controls which postlist collection)
related:                           ← array of file slugs for related posts
  - slug-one
  - slug-two
```

### Case Study Structure

Case studies follow this section order using `####` for labels and `###` for section headlines:

```
#### Background
### [headline]
[body copy]

#### My role
[body copy]

#### Approach
### [headline]
[body copy + carousel]

#### Outcomes
### [headline]
[body copy]

#### Team
[names and titles]
```

### Image and Caption Pattern

Images in markdown use standard syntax with descriptive alt text:
```markdown
![Alt text describing the image](/img/project/filename.png)
<p class="caption">Caption text here.</p>
```

### Carousel Component

Carousels are written as raw HTML directly in markdown files. The structure is:

```html
<div class="carousel">
  <div class="carousel-track">
    <div class="carousel-slide">
      <img src="/img/..." alt="...">
      <p class="caption">...</p>
    </div>
    <!-- repeat slides -->
  </div>
  <div class=carousel-controls>
    <button class="carousel-prev" aria-label="Previous slide">
      <!-- SVG arrow icon -->
    </button>
    <div class="carousel-dots">
      <button class="carousel-dot active" aria-label="Slide 1"></button>
      <!-- one dot per slide -->
    </div>
    <button class="carousel-next" aria-label="Next slide">
      <!-- SVG arrow icon -->
    </button>
  </div>
</div>
```

On mobile: prev/next arrows are hidden, dots only. On desktop: arrows are visible.
The number of `.carousel-dot` buttons must match the number of `.carousel-slide` elements.

---

## Responsiveness

—It is important that the website is responsive and legible across breakpoints
—Mobile-first approach: base styles target mobile, desktop styles are in `@media (min-width: 768px)`
—Single breakpoint: 768px

Main content width pattern:
- Mobile: `width: 85%`
- Desktop: `width: 55%`
- Max-width: `800px`

---

## JavaScript

—Vanilla JS only (`carousel.js`) — no external carousel library
—`carousel.js` is loaded at the bottom of `posts.html` only, not on the homepage
—jQuery is included in `<head>` for Google Analytics only, not used for site functionality
