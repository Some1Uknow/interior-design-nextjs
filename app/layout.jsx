import "./globals.css";

export const metadata = {
  title: "ICRAVE",
  description: "ICRAVE Interior Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
