export const metadata = {
  title: "Vapes",
  description: "Catalogo de vapes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
