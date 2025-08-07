# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Econova is an SEO-optimized business service website for an insulation company. The primary mission is to attract leads and rank #1 on Google search results for insulation-related keywords. The website connects homeowners with certified insulation contractors through a trusted partner network.

## Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **SEO**: Built-in Next.js SEO features with sitemap and robots.txt
- **Development**: Turbopack for fast development builds

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx           # Homepage with services, partners, contact
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # XML sitemap generation
│   └── robots.ts          # Robots.txt configuration
└── components/            # Reusable components (to be added)
```

## SEO Strategy

The website is optimized for lead generation with:
- Professional insulation services focus
- Local SEO for partner network
- Energy efficiency and cost savings messaging
- Clear call-to-actions throughout
- Semantic HTML structure
- Meta tags and Open Graph data

## Common Commands

- `npm run dev` - Start development server (uses Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Development Notes

- The site uses a green color scheme (#16a34a) representing eco-friendly values
- Mobile-first responsive design with Tailwind CSS
- Focus on conversion optimization with prominent CTA buttons
- Partner network section for local contractor connections