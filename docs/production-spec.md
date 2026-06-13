# Cello Restaurant & Bar Production Spec

## Objective

Ship a responsive and production-ready React website for Cello Restaurant & Bar Ghana that is visually close to the reference site https://marlund.framer.website/, mobile-first, and built for discovery and conversion.

## Stack

- React
- Next.js for routing, rendering, and deployment
- TypeScript
- Tailwind CSS
- Markdown-based planning docs

## Production Principles

- Keep the site fast on mobile.
- Keep the interface simple and premium.
- Make core actions visible above the fold.
- Avoid overbuilding backend features that belong in Odoo.
- Treat content as launch-critical data.

## Core Routes

- `/`
- `/menu`
- `/order`
- `/booking`
- `/events`
- `/gallery`
- `/about`
- `/venue`
- `/contact`

## Component System

- Header
- Navigation
- Hero
- CTA group
- Content section
- Menu card
- Event card
- Gallery grid
- Booking form
- Contact block
- Footer

## Content Model

- Brand copy
- Menu categories and items
- Event records
- Gallery assets
- Location data
- Social links
- Contact details
- Odoo order links

## Functional Requirements

- Menu browsing
- PDF fallback for the menu
- Odoo order redirect for self orders 
- Reservation enquiry submission
- Google Maps CTA
- Event listing
- Private booking enquiry
- SEO metadata
- Analytics tracking

## Non-Functional Requirements

- Mobile-first layout
- Responsive with different breakpoints 
- Fast first load
- Optimized images
- Good contrast and readable type
- Keyboard-friendly forms
- Secure form handling
- Clear error and success states

## Integration Notes

- Odoo remains the system of record for ordering and restaurant operations.
- The website should only link into Odoo for ordering flow.
- Analytics should track menu clicks, booking clicks, order clicks, directions clicks.

## SEO Requirements

- Page titles and descriptions for each public page
- Local restaurant keywords for Accra
- Open Graph metadata
- Proper headings and semantic structure
- Image alt text

## Analytics

- Google Analytics 4
- Google Search Console
- Optional heatmap tool later

## Launch Inputs

- Domain
- Hosting
- Final brand name
- Verified address
- Verified opening hours
- WhatsApp number
- Email address
- Social links
- Menu source
- Event schedule
- Odoo URLs

## Production Phases

### Phase 1: Structure

- Set routes
- Define sections
- Confirm content fields
- Lock navigation and CTA order

### Phase 2: Build

- Implement React UI
- Add responsive layouts
- Wire menu and booking flows
- Add SEO metadata

### Phase 3: Integrate

- Connect Odoo links
- Add Google Maps
- Add WhatsApp link
- Add analytics

### Phase 4: Validate

- Mobile testing
- Link testing
- Form testing
- Performance check
- SEO check

### Phase 5: Launch

- Deploy
- Verify domain
- Confirm analytics
- Final smoke test

## Acceptance Criteria

- Site matches the reference direction closely in feel and visually https://marlund.framer.website/.
- Main pages exist and are linked.
- Menu and booking actions are easy to find.
- Order at Table routes into Odoo.
- Site is usable and polished on mobile.
- Production checklist is complete before launch.

