import ThemeRegistry from "@/components/ThemeRegistry";
import { Typography } from "@mui/material";

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
