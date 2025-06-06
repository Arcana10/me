import '@/app/ui/global.css'
import { montserrat } from "./ui/fonts";
import Header from './ui/Header';

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Franco Pérez",
    "alternateName": "Jhans Franco Pérez Caro",
    "url": "https://franco.arcana.codes",
    "image": "https://franco.arcana.codes/og_image.png",
    "jobTitle": "Desarrollador Web y Diseñador UI/UX",
    "worksFor": {
        "@type": "Organization",
        "name": "ARCANA CORP SAC"
    },
    "sameAs": [
        "https://github.com/JFrancodev12",
        "https://www.linkedin.com/in/jhans-perez-caro-252623207/",
        "https://x.com/Franco30712726",
        "https://www.tiktok.com/@francoperezcaro"
    ],
    "description": "Soy Franco Pérez, desarrollador web y diseñador UI/UX especializado en crear experiencias digitales impactantes.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jauja",
        "addressRegion": "Junín",
        "addressCountry": "PE"
    },
    "email": "mailto:j1h2a3n4s@gmail.com",
    "telephone": "+51995984231",
};

export default function RootLayout ({children}) {

    return (

        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />

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
                <meta property="og:image" content="https://franco.arcana.codes/og_image.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Franco Pérez | Desarrollador Web & Diseñador UI/UX" />
                <meta name="twitter:description" content="Desarrollo software con estilo. Diseño interfaces con impacto. Conoce mi trabajo aquí." />
                <meta name="twitter:image" content="https://franco.arcana.codes/og_image.png" />
                <meta name="twitter:creator" content="@Franco30712726" />

                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <link rel="apple-touch-icon" href="/logo-192.png" />

                {/* PWA + UX */}
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/manifest.json" />

                {/* Accesibilidad y rendimiento */}
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <meta name="google-site-verification" content="S1JDbA89n-_cSYc22VJzdFXPKPtXNBsnLiPhUmK2v00" />

                {/* Datos estructurados */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            </head>
            <body className={`${montserrat.className} antialiased`}>
                <Header/>
                {children}
            </body>
        </html>

    )

}