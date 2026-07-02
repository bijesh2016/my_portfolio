
# Portfolio Projects Section Documentation

## Overview

The projects section in this portfolio is designed as a premium showcase of products, concepts, and full-stack ideas. It presents a larger collection of work across booking, ecommerce, travel, discovery, mobile, and branding so visitors can quickly understand the scope of the portfolio.

The section is built in `src/components/Projects.tsx` and rendered on the home page. Each project card is powered by `src/components/ProjectCard.tsx`.

## Goals

- Present a broad and polished view of the work.
- Keep the original projects while adding new concepts.
- Show an image for every project card.
- Use a premium visual style with motion and depth.
- Make the section easy to maintain and extend.

## Visual Structure

The projects section uses:

- A layered gradient background with soft glow accents.
- A centered section header with a highlighted label.
- A responsive grid that spans 1, 2, or 3 columns depending on screen size.
- Mixed card widths on large screens to create a more editorial layout.
- Hover lift and animated entrance timing for each card.

## Project Cards

Each card includes:

- A themed image.
- A category badge.
- Project title.
- Short description.
- Technology tags.
- GitHub and live demo actions.

The card component is styled to feel glass-like and premium, with stronger hover motion, layered overlays, and a cleaner image treatment.

## Project Catalog

The current projects section includes the following entries:

1. ATM Locator System
1. Event Ticketing Platform
1. Tourism Blog Platform (Nepal Edition)
1. Hotel Reservation System
1. Grocery Store E-Commerce Platform
1. Authentication System
1. Event Management System
1. Nepdial Listing Platform
1. Hidden Nepal Mobile App
1. NepTrek Travel Platform
1. Travelia Web App
1. Lost and Found System
1. My Portfolio

## Image Assets

Project images are loaded from the local `public/projects` directory so they display reliably without depending on external image hosts.

Examples:

- `public/projects/atm.png`
- `public/projects/tourism.png`
- `public/projects/hotel.jpg`
- `public/projects/grocery.png`
- `public/projects/event-ticketing.svg`
- `public/projects/auth-system.svg`
- `public/projects/event-management.svg`
- `public/projects/nepdial-listing.svg`
- `public/projects/hidden-nepal-mobile.svg`
- `public/projects/neptrek.svg`
- `public/projects/travelia-world-guide.svg`
- `public/projects/lost-found-system.svg`
- `public/projects/bijesh-portfolio.svg`

### Why local assets are used

- They load consistently in production and development.
- They match the project content more closely.
- They avoid broken images caused by unavailable remote services.

## Animation and Motion

The section uses motion in a few places:

- Fade-in-up entrance for the section heading and each project card.
- Hover lift on cards to give a floating effect.
- Scale and glow on images and CTA buttons.
- Smooth transitions on tags, buttons, and section accents.

## `/app` Route

The portfolio also includes a dedicated `/app` route in `src/pages/AppShowcase.tsx`.

That page is used for a more personal creative presentation and includes:

- Poetry highlights.
- Portfolio highlights.
- A compact creator profile panel.
- A layout that feels different from the main home page.

## Maintenance Notes

- Add a new project by appending an object in `src/components/Projects.tsx`.
- Add a matching image in `public/projects` and point the new card to it.
- Keep the description short and specific so the grid remains readable.
- If you need a new visual style, update `src/components/ProjectCard.tsx` first and then adjust the project data.

## Build Check

The app builds successfully with:

```bash
npm run build
```


