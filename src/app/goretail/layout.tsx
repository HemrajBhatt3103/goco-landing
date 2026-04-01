import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoRetail - Digital Catalog for Your Store | GOCO",
  description:
    "GoRetail turns your physical store into a digital catalog. Customers scan a QR code and browse your products instantly.",
};

export default function GoRetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
