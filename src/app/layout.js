import ThemeRegistry from "@/components/ThemeRegistry";

export const metadata = {
  title: "Vapes",
  description: "Catalogode vapes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
