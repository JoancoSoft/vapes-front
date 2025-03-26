import ThemeRegistry from "@/components/ThemeRegistry";
import Head from "next/head";

export const metadata = {
  title: "Vapes",
  description: "Explora nuestro catálogo de vapes de alta calidad. Encuentra una amplia variedad de dispositivos y sabores para todos los gustos.",
  icons: {
    favicon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Vaperes Argentina, Vaper Precio Argentina, Vape shop Buenos Aires, Vapers baratos argentina, Vape descartable" />
        <meta name="author" content={metadata.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        {/* // TODO: Poner el dominio comprado por ellos */}
        <meta property="og:url" content="https://vapes-front.vercel.app" />
      </Head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
