import '@/app/ui/global.css'
import { montserrat } from "./ui/fonts";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Franco Pérez",
    "alternateName": "Jhans Franco Pérez Caro",
    "url": "https://franco.arcana.codes",
    "image": "https://franco.arcana.codes/tu-foto.jpg",
    "jobTitle": "Desarrollador Web y Diseñador UI/UX",
    "worksFor": {
        "@type": "Organization",
        "name": "ARCANA CORP SAC"
    },
    "sameAs": [
        "https://github.com/tuusuario",
        "https://www.linkedin.com/in/tuusuario",
        "https://x.com/tuusuario"
    ],
    "description": "Soy Franco Pérez, desarrollador web y diseñador UI/UX especializado en crear experiencias digitales impactantes.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jauja",
        "addressRegion": "Junín",
        "addressCountry": "PE"
    }
};

export default function RootLayout ({children}) {

    return (

        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* SEO Básico */}
                <title>Franco Pérez | Desarrollador Web & Diseñador UI/UX</title>
                <meta name="description" content="Soy Franco Pérez, desarrollador web y diseñador UI/UX. Transformo ideas en experiencias digitales impactantes." />
                <meta name="keywords" content="Franco Pérez, desarrollador web, diseñador UI/UX, programación, diseño web, Jauja, software, frontend, interfaces, React, Perú" />
                <meta name="author" content="Franco Pérez" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph (Facebook, LinkedIn, etc.) */}
                <meta property="og:title" content="Franco Pérez | Desarrollador Web & Diseñador UI/UX" />
                <meta property="og:description" content="Transformo ideas en experiencias digitales memorables. Descubre mi portafolio de desarrollo web y diseño UI/UX." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://franco.arcana.codes" />
                <meta property="og:image" content="https://franco.arcana.codes/og-image.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Franco Pérez | Desarrollador Web & Diseñador UI/UX" />
                <meta name="twitter:description" content="Desarrollo software con estilo. Diseño interfaces con impacto. Conoce mi trabajo aquí." />
                <meta name="twitter:image" content="https://franco.arcana.codes/og-image.jpg" />
                <meta name="twitter:creator" content="@tuUsuarioTwitter" />

                {/* PWA + UX */}
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* Accesibilidad y rendimiento */}
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/* Datos estructurados */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            </head>
            <body className={`${montserrat.className} antialiased`}>{children}</body>
        </html>

    )

}