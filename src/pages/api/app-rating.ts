// pages/api/app-rating.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  rating: number | null;
  count: number | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const APP_ID = "6744608500";
  const lookupUrl = `https://itunes.apple.com/lookup?id=${APP_ID}&country=us`;

  try {
    const lookup = await fetch(lookupUrl);
    if (!lookup.ok) {
      console.error("iTunes lookup failed:", lookup.status);
      return res.status(502).json({ rating: null, count: null });
    }

    const { results } = await lookup.json();
    if (!Array.isArray(results) || results.length === 0) {
      return res.status(404).json({ rating: null, count: null });
    }

    const info = results[0];
    const rating =
      info.averageUserRatingForCurrentVersion ?? info.averageUserRating ?? null;
    const count =
      info.userRatingCountForCurrentVersion ?? info.userRatingCount ?? null;

    return res.status(200).json({ rating, count });
  } catch (err) {
    console.error("Error in /api/app-rating:", err);
    return res.status(500).json({ rating: null, count: null });
  }
}
