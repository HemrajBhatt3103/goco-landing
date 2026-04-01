import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoWholesale - Wholesale Commerce System | GOCO",
  description:
    "GoWholesale is a B2B digital operating layer for wholesalers. Digitize inventory, manage store credit, track payments, and process bulk orders.",
};

export default function GoWholesaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
