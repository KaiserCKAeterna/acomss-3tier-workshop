
import Link from "next/link";

import { listings as localListings } from "@/content/listings";
import { getVisibleListings } from "@/lib/listings";
import { Card, EmptyState, StatusBadge } from "@/app/_components/ui";
import { isSupabaseConfigured } from "@/lib/env";
import { categoryLabel } from "@/lib/labels";

export const dynamic = "force-dynamic";

export default async function CatalogPage() {
  const supabaseConfigured =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Use Supabase when configured. Otherwise, use local listings for Day 1.
  const listings = supabaseConfigured
    ? (await getVisibleListings()).map((listing) => ({
        id: listing.id,
        title: listing.title,
        category: listing.category,
        inquiry_type: listing.inquiry_type,
        image_url: listing.image_url,
        is_published: listing.is_published,
      }))
    : localListings.map((listing) => ({
        id: listing.slug,
        title: listing.title,
        category: listing.category,
        inquiry_type: listing.inquiry_type,
        image_url: listing.image_url,
        is_published: true,
      }));

  const hasListings = listings.length > 0;

  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Catalog</h1>
        <p className="section__lead">
          Browse what we offer. Open a listing to see the details and send us a
          request. No account needed.
        </p>

        {hasListings ? (
          <ul className="card-grid stack-6">
            {listings.map((listing) => (
              <li key={listing.id}>
                <Card as={Link} href={`/catalog/${listing.id}`} interactive>
                  <img
                    className="card__media"
                    src={listing.image_url}
                    alt={listing.title}
                    width={640}
                    height={400}
                  />
                  <h2 className="card__title">{listing.title}</h2>
                  <p className="card__meta">
                    {categoryLabel(listing.category)}{" "}
                    {listing.is_published ? null : (
                      <StatusBadge status="DRAFT" />
                    )}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <div className="stack-6">
            <EmptyState title="No listings yet">
              {isSupabaseConfigured()
                ? "Your database has no published listings yet. Open /setup on this site, copy the SQL it shows, and run it in the Supabase SQL Editor."
                : "Add your listings to content/listings.ts and save the file. They show up here."}
            </EmptyState>
          </div>
        )}

        <p className="stack-6">
          <Link href="/">← Back to home</Link>
        </p>
      </div>
    </section>
  );
}
