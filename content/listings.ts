/**
 * listings.ts: YOUR CATALOG (you edit this file in Session 1)
 *
 * Each { ... } block below is one card in your catalog. Change the values,
 * add a block, or delete one. Put matching pictures in public/images/ and set
 * image_url to "/images/your-file-name.png".
 *
 * Before Session 2, the catalog shows these listings directly. In Session 2 you
 * copy them into your database from the /setup page, and from then on the
 * catalog reads from the database.
 *
 * Fields:
 *   - slug:         short name used in the page address (lowercase-with-dashes)
 *   - category:     CONSULTING | WEB_DEV | CUSTOM_SOFTWARE
 *   - inquiry_type: DEMO | QUOTE | INQUIRE  (decides which contact form shows)
 *   - image_url:    "/images/" + a file name in public/images/ (lowercase, exact)
 *
 * Editing tips (so the file keeps working):
 *   - Change only the words between the double quotes " ".
 *   - Keep the quotes, the comma at the end of each line, and the + that joins
 *     long text across lines.
 *   - Apostrophes are fine ("We're open"). For a quote inside your text, use
 *     single quotes ("Our 'quick start' plan").
 *   - Every slug must be different. When you copy a block to add a listing,
 *     change its slug first. Two listings with the same slug open the same page.
 *   - Red error screen after saving? You probably deleted a quote or a comma.
 *     Press Ctrl+Z (Cmd+Z on Mac), save, and it comes back.
 */

export type ListingCategory = "CONSULTING" | "WEB_DEV" | "CUSTOM_SOFTWARE";

export type InquiryType = "DEMO" | "QUOTE" | "INQUIRE";

export interface Listing {
  /** Stable slug used in the detail page URL. */
  slug: string;
  title: string;
  category: ListingCategory;
  description: string;
  inquiry_type: InquiryType;
  /** Site-relative path under /images/ (file must exist in public/images/). */
  image_url: string;
}

export const listings: Listing[] = [
  {
    slug: "prototype",
    title: "Alex Mercer",
    category: "CONSULTING",
    description:
      "'My name is Alex Mercer. I'm the reason for all of this. They call me a killer, a monster, a terrorist... I'm all of these things.'" +
      "",
    inquiry_type: "INQUIRE",
    image_url: "/images/074e1517cb_alex-mercer-prototype.webp",
  },
  {
    slug: "legend",
    title: "Rick",
    category: "WEB_DEV",
    description:
      "He never gonna give you up, never gonna let you down. " +
      "Never gonna run around and hurt you.",
    inquiry_type: "QUOTE",
    image_url: "/images/legend.jpg",
  },
  {
    slug: "samurai",
    title: "Johnny Silverhand",
    category: "CUSTOM_SOFTWARE",
    description:
      "Wake up, Samurai " +
      "Let's infiltrate Arasaka",
    inquiry_type: "DEMO",
    image_url: "/images/hell-yeah.jpg",
  },
  {
    slug: "krystal-fox",
    title: "Krystal Fox",
    category: "CUSTOM_SOFTWARE",
    description:
      "Blue Vixen is posing" +
      "",
    inquiry_type: "DEMO",
    image_url: "/images/Krystal.png",
  },
  {
    slug: "freya-crescent",
    title: "Freya Crescent",
    category: "CUSTOM_SOFTWARE",
    description:
      "Freya from Final Fantasy" +
      "",
    inquiry_type: "DEMO",
    image_url: "/images/Freya.png",
  },
  {
    slug: "ultramarines",
    title: "Ultramarines",
    category: "CUSTOM_SOFTWARE",
    description:
      "Courage and Honour!" +
      " In the name of the Primarch!",
    inquiry_type: "DEMO",
    image_url: "/images/trio-of-ultramarines-base.jpg",
  },
];
