import '@/app/ui/global.css'
import { montserrat } from "./ui/fonts";

export default function RootLayout ({children}) {

    return (

        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Franco Pérez | Desarrollador Web & Diseñador UI/UX</title>
            </head>
            <body className={`${montserrat.className} antialiased`}>{children}</body>
        </html>

    )

}