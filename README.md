# DLUXX Detailing

Premium mobile car detailing website for DLUXX Detailing, serving San Antonio & surrounding areas.

![DLUXX Detailing](public/dluxx-logo.png)

## Features

- **Homepage** – Hero section, services overview, why choose us, testimonials, gallery, quote form, service areas map, and contact
- **Quote/Book Page** – Full quote questionnaire with service selection, add-ons, and mail-to form submission
- **Request a Free Quote** – Inline quote form on homepage (horizontal layout)
- **Services Page** – Categorized service breakdown (Interior, Exterior, Packages, Add-Ons) with pricing
- **About Page** – Founder story and company background
- **Service Areas Map** – Interactive map with San Antonio region selection
- **Contact Form** – Get in Touch form with mail-to submission and success feedback
- **Google Reviews** – Review summary with "Review us on Google" CTA
- **Responsive Design** – Mobile-friendly across all pages

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI, shadcn/ui
- **Fonts:** Geist

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

# Clone the repository
git clone https://github.com/AltUser44/dluxxdetailing.git
cd dluxxdetailing

# Install dependencies
npm install
# or
pnpm install
# or
yarn install


Development
# Run the development servernpm run dev# orpnpm dev# oryarn dev
Open http://localhost:3000 in your browser.
Build
# Create production buildnpm run build# Start production servernpm run start
Lint
npm run lint


Project Structure
dluxx-detailing/
├── app/
│   ├── about/          # About page
│   ├── quote/          # Quote/Book page
│   ├── services/       # Services page with categories
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── about.tsx       # About section (legacy)
│   ├── contact.tsx     # Get in Touch form
│   ├── footer.tsx      # Site footer
│   ├── gallery.tsx     # Our Work gallery
│   ├── hero.tsx        # Hero section
│   ├── navigation.tsx  # Top navigation
│   ├── quote-form.tsx  # Request a Free Quote form
│   ├── service-areas-map.tsx  # Service areas & map
│   ├── services.tsx    # Homepage services section
│   ├── testimonials.tsx # Customer testimonials
│   └── why-choose-us.tsx
├── public/             # Static assets (images, logo)
└── styles/



Pages
Route	Description
/	Homepage
/about	About the founder
/quote	Full quote request form
/services	Services by category (Interior, Exterior, Packages, Add-Ons)
Contact & Links
Email: dluxxdetailing.sa@gmail.com
Phone: (830) 475-5744
Facebook: DLUXX Detailing
TikTok: @raynemaxwell22
Deployment
This project can be deployed to Vercel, Netlify, or any platform that supports Next.js.
Vercel (Recommended)
Push your code to GitHub
Import the project at vercel.com/new
Deploy with default settings
License
Private – DLUXX Detailing © 2026
