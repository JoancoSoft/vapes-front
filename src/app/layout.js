import ThemeRegistry from "@/components/ThemeRegistry";
import Head from "next/head";

export const metadata = {
  title: "Vapes",
  description: "Explora nuestro catálogo de vapes de alta calidad. Encuentra una amplia variedad de dispositivos y sabores para todos los gustos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="vapes, catálogo de vapes, comprar vapes, dispositivos de vapeo, sabores de vapeo" />
        <meta name="author" content={metadata.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vapes-front.vercel.app/" />
        {/* TODO: poner imagen del logo */}
        <meta property="og:image" content="https://vapes-front.vercel.app/imagen_del_logo" />
      </Head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
