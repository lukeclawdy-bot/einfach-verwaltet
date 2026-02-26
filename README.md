# einfach verwaltet.

Die moderne Hausverwaltung, die funktioniert. 

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Resend account (for email)
- Neon PostgreSQL database
- Vercel account (for deployment)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lukeclawdy-bot/einfach-verwaltet-next.git
   cd einfach-verwaltet-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and fill in your values (see table below).

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the site.

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add environment variables in Vercel dashboard → Project Settings → Environment Variables
5. Deploy!

## 🔧 Environment Variables

| Variable | Required | Description | Get it from |
|----------|----------|-------------|-------------|
| `RESEND_API_KEY` | ✅ | Email API key | [resend.com](https://resend.com) |
| `DATABASE_URL` | ✅ | PostgreSQL connection | [neon.tech](https://neon.tech) |
| `ADMIN_SECRET_KEY` | ✅ | Access to /admin/leads | Create a random string |
| `NEXT_PUBLIC_GA_ID` | ❌ | Google Analytics 4 ID | [analytics.google.com](https://analytics.google.com) |
| `NEXT_PUBLIC_GADS_CONVERSION_ID` | ❌ | Google Ads Conversion ID | [ads.google.com](https://ads.google.com) |
| `NEXT_PUBLIC_SITE_URL` | ❌ | Production site URL | Your domain |

## 📁 Project Structure

```
app/
├── api/
│   ├── contact/      # Contact form endpoint
│   ├── health/       # Health check endpoint
│   ├── inngest/      # Inngest workflow engine
│   └── leads/        # Lead submission endpoint
├── db/
│   ├── index.ts      # Database connection
│   └── schema.ts     # Drizzle schema
├── lib/
│   └── utils.ts      # Utility functions
└── [pages]/          # Next.js pages
components/
├── ui/               # UI components (buttons, inputs)
└── sections/         # Page sections
public/
└── images/           # Static assets
```

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run db:push  # Push schema to database
npm run db:studio # Open Drizzle Studio
```

## 🏥 Health Check

The health endpoint is available at `/api/health`:

```bash
curl https://einfach-verwaltet.de/api/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2026-02-26T10:30:00.000Z",
  "version": "1.0.0",
  "db": "connected"
}
```

## 📧 Email Setup (Resend)

We use [Resend](https://resend.com) for transactional emails.

1. Create account at resend.com (free tier: 3,000 emails/month)
2. Add and verify your domain (einfach-verwaltet.de)
3. Create these sender addresses:
   - `anfrage@einfach-verwaltet.de` — Lead notifications
   - `kontakt@einfach-verwaltet.de` — General contact
   - `mieter@einfach-verwaltet.de` — Tenant communications
   - `nachfolge@einfach-verwaltet.de` — M&A outreach
4. Copy your API key to `RESEND_API_KEY`

See full setup guide in Mission Control.

## 🗄️ Database

We use [Neon](https://neon.tech) serverless PostgreSQL with [Drizzle ORM](https://orm.drizzle.team/).

Schema location: `app/db/schema.ts`

To sync schema:
```bash
npm run db:push
```

## 📄 License

© RVLT Ventures GmbH. All rights reserved.

---

Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Vercel](https://vercel.com).
