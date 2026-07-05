import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/ogCard";

export const alt =
  "Achal Tiwari — AI-native Product Manager who ships real products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgCard />, { ...size });
}
