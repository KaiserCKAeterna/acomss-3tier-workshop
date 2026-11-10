# POS Catalog Site - Core (Workshop Build)

A Next.js 14 application built with TypeScript, deployed on Vercel, and powered by Supabase.

The project includes a public landing page, a database-backed catalog, listing details, and an inquiry submission form. It is designed for a three-session hands-on web workshop.

You do not need to write the application from scratch. You will make your own copy, run it locally, customize it, deploy it, and connect your own Supabase database.

## Start Here

Open the step-by-step workshop guide:

[Workshop Guide](https://evergreen-pen-f2c.notion.site/Building-Technology-with-Purpose-Introduction-to-Building-a-3-Tier-Website-40dcb4c6989f80a4ad24c553e3b8e80e?source=copy_link)

Complete the [Prerequisites]([docs/workshop/guide/Prerequisites.md](https://app.notion.com/p/Pre-requisites-410cb4c6989f80259951c0f4a0d87ec1?source=copy_link)) before Session 1.

## What You Will Customize

| File | What it controls | When |
|---|---|---|
| `content/site.ts` | Site name, headline, intro, and branding | Session 1 |
| `content/listings.ts` | Local catalog fallback data | Session 1 |
| `public/images/` | Pictures used on the catalog cards | Session 1 |
| `content/payment.ts` | GCash payment label and configuration | Session 2 |
| `public/images/gcash-qr.png` | Your GCash QR code picture | Session 2 |

Listing images are stored in `public/images/` and referenced using paths such as `/images/example.png`.

Everything else is already built for you. You can explore the code, but you do not need to change it unless the workshop instructions ask you to.

## Technology

- Next.js 14 (App Router)
- TypeScript
- Supabase Database
- Supabase Storage
- Vercel
- GitHub

## Project Structure

| Folder | What it contains |
|---|---|
| `content/` | Text and settings you customize |
| `public/images/` | Images used on the website |
| `app/` | Website pages, components, and API routes |
| `lib/` | Shared application helpers |
| `db/` | SQL scripts for Supabase |
| `docs/workshop/guide/` | Workshop instructions |

## Run It Locally

Install the project dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Configuration

Your website uses Supabase for database operations and file storage.

### 1. Create a Supabase Project

Create a project at [Supabase](https://supabase.com).

### 2. Configure Environment Variables

Open your Supabase project and go to **Project Settings → API**.

Add the required Supabase credentials to your `.env.local` file. Follow the variable names in `.env.example`.

Keep private credentials secure. Never commit `.env.local` to GitHub or expose a service role key in client-side code.

### 3. Set Up the Database

Open **Supabase → SQL Editor**.

Run the SQL scripts in this order:

1. `db/setup.sql` creates the database tables, relationships, functions, and Row Level Security policies.
2. `db/seed.sql` inserts the initial sample catalog listings.

### 4. Configure Receipt Storage

In **Supabase → Storage**:

1. Create a bucket named `receipts`.
2. Keep the bucket private.
3. Set the file size limit to 10 MB.
4. Apply the receipt storage policies using the SQL script provided in `db/storage-policies.sql`.

The storage policies control which users can upload and access receipt files.

## Current Database Integration

The following features have been implemented and tested:

- Supabase database connection.
- Catalog listings fetched from Supabase.
- Public catalog displays published listings only.
- Listing detail pages fetched using database IDs.
- Inquiry form submits data through the API.
- Inquiry records are successfully saved to the Supabase `inquiries` table.
- Row Level Security is enabled for database access.

When Supabase environment variables are not configured, the catalog can use local content data as a fallback.

## Remaining Integration Work

The following features still need implementation or testing:

- Membership receipt uploads.
- Donation receipt uploads.
- User registration and authentication.
- Profile creation and role-based access.
- Membership and donation submissions.
- Staff and Admin dashboard operations.
- Receipt approval and rejection workflows.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/catalog` | Public catalog |
| `/catalog/[id]` | Listing details and inquiry form |
| `/login` | Authentication page |
| `/api/inquiries` | Inquiry submission API |

## Build

Run a production build:

```bash
npm run build
```

## Deploy to Vercel

1. Connect your GitHub repository to Vercel.
2. Add the required Supabase environment variables under **Vercel → Settings → Environment Variables**.
3. Deploy the application.

Pushing changes to the connected production branch triggers a new deployment.

## Security Notes

- Never commit `.env.local`.
- Never expose the Supabase service role key in client-side code.
- Keep the `receipts` bucket private.
- Use Row Level Security to control database access.
- Do not use real customer or payment information when testing the workshop project.
