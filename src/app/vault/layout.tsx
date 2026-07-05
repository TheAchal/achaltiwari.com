import type { Metadata } from "next";

// Private area — never index, never follow.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
