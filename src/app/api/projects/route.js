import { NextResponse } from "next/server";

export async function GET() {
    try {
        
        const data = [
            {
                "id": 1,
                "slug": "landing-ecommerce",
                "name": "Landing Page para E-commerce",
                "description": "Landing altamente optimizada para conversión y SEO para una tienda online.",
                "technologies": [
                    "React",
                    "Node.js",
                    "CSS Modules",
                    "Vercel"
                ],
                "type": [
                    "Frontend",
                    "UX/UI"
                ],
                "cover_image": "https://camo.githubusercontent.com/e8d0e30148be7730133ad8e385b2d539d0c346488e6de1674d5a1414155caa40/68747470733a2f2f692e706f7374696d672e63632f713778526d4e56702f46422d494d472d31363135383733303834313937323036372e6a7067",
                "preview_images": [
                    "https://cdn.tuweb.com/images/landing-ecommerce-1.jpg",
                    "https://cdn.tuweb.com/images/landing-ecommerce-2.jpg"
                ]
            },
            {
                "id": 2,
                "slug": "sistema-reservas-restaurante",
                "name": "Sistema de Reservas para Restaurante",
                "description": "App web + backend API para gestión de reservas en tiempo real.",
                "technologies": [
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB"
                ],
                "type": [
                    "Frontend",
                    "Backend",
                    "UX/UI"
                ],
                "cover_image": "https://cdn.tuweb.com/images/sistema-reservas-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/sistema-reservas-1.jpg",
                    "https://cdn.tuweb.com/images/sistema-reservas-2.jpg"
                ]
            },
            {
                "id": 3,
                "slug": "app-fitness-movil",
                "name": "App Móvil de Rutinas Fitness",
                "description": "App para seguimiento de rutinas de entrenamiento con recordatorios y notificaciones.",
                "technologies": [
                    "React Native",
                    "Expo",
                    "Firebase"
                ],
                "type": [
                    "Mobile App",
                    "UX/UI",
                    "Backend"
                ],
                "cover_image": "https://cdn.tuweb.com/images/app-fitness-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/app-fitness-1.jpg",
                    "https://cdn.tuweb.com/images/app-fitness-2.jpg"
                ]
            },
            {
                "id": 4,
                "slug": "dashboard-ventas-saas",
                "name": "Dashboard de Ventas para SaaS",
                "description": "Dashboard avanzado con métricas de ventas y análisis en tiempo real.",
                "technologies": [
                    "React",
                    "Node.js",
                    "Chart.js",
                    "PostgreSQL"
                ],
                "type": [
                    "Frontend",
                    "Backend",
                    "UX/UI"
                ],
                "cover_image": "https://cdn.tuweb.com/images/dashboard-ventas-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/dashboard-ventas-1.jpg",
                    "https://cdn.tuweb.com/images/dashboard-ventas-2.jpg"
                ]
            },
            {
                "id": 5,
                "slug": "portfolio-personal",
                "name": "Portfolio Personal Interactivo",
                "description": "Portfolio online animado para mostrar proyectos y skills.",
                "technologies": [
                    "React",
                    "Three.js",
                    "Framer Motion"
                ],
                "type": [
                    "Frontend",
                    "UX/UI"
                ],
                "cover_image": "https://cdn.tuweb.com/images/portfolio-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/portfolio-1.jpg",
                    "https://cdn.tuweb.com/images/portfolio-2.jpg"
                ]
            },
            {
                "id": 6,
                "slug": "api-rest-pagos",
                "name": "API REST para Procesamiento de Pagos",
                "description": "API segura para integración con gateways de pago.",
                "technologies": [
                    "Node.js",
                    "Express",
                    "JWT",
                    "Stripe API"
                ],
                "type": [
                    "Backend",
                    "API"
                ],
                "cover_image": "https://cdn.tuweb.com/images/api-pagos-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/api-pagos-1.jpg",
                    "https://cdn.tuweb.com/images/api-pagos-2.jpg"
                ]
            },
            {
                "id": 7,
                "slug": "plataforma-e-learning",
                "name": "Plataforma E-learning",
                "description": "Sistema completo para cursos online con video y quizzes.",
                "technologies": [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AWS S3"
                ],
                "type": [
                    "Frontend",
                    "Backend",
                    "UX/UI"
                ],
                "cover_image": "https://cdn.tuweb.com/images/e-learning-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/e-learning-1.jpg",
                    "https://cdn.tuweb.com/images/e-learning-2.jpg"
                ]
            },
            {
                "id": 8,
                "slug": "app-clima-movil",
                "name": "App Móvil del Clima",
                "description": "App simple para consultar el clima con geolocalización.",
                "technologies": [
                    "React Native",
                    "Expo",
                    "OpenWeatherMap API"
                ],
                "type": [
                    "Mobile App",
                    "UX/UI"
                ],
                "cover_image": "https://cdn.tuweb.com/images/app-clima-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/app-clima-1.jpg",
                    "https://cdn.tuweb.com/images/app-clima-2.jpg"
                ]
            },
            {
                "id": 9,
                "slug": "blog-headless-cms",
                "name": "Blog con Headless CMS",
                "description": "Blog ultra rápido con contenido administrable desde CMS externo.",
                "technologies": [
                    "React",
                    "Next.js",
                    "GraphQL",
                    "Contentful"
                ],
                "type": [
                    "Frontend",
                    "Backend",
                    "UX/UI"
                ],
                "cover_image": "https://cdn.tuweb.com/images/blog-cms-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/blog-cms-1.jpg",
                    "https://cdn.tuweb.com/images/blog-cms-2.jpg"
                ]
            },
            {
                "id": 10,
                "slug": "crm-ventas",
                "name": "CRM para Gestión de Ventas",
                "description": "Sistema CRM completo con gestión de clientes y seguimiento de oportunidades.",
                "technologies": [
                    "React",
                    "Node.js",
                    "PostgreSQL",
                    "Redis"
                ],
                "type": [
                    "Frontend",
                    "Backend",
                    "UX/UI"
                ],
                "cover_image": "https://cdn.tuweb.com/images/crm-ventas-cover.jpg",
                "preview_images": [
                    "https://cdn.tuweb.com/images/crm-ventas-1.jpg",
                    "https://cdn.tuweb.com/images/crm-ventas-2.jpg"
                ]
            }
        ]

        return NextResponse.json({success: true, data: data});
    } catch (error) {
        if (error.name === "AbortError") return NextResponse.json({ success: false, message: "Tiempo de espera agotado" }, { status: 504 });
        console.error("DOCUMENT API ERROR:", error);
        return NextResponse.json({ success: false, message: "Error interno del servidor" }, { status: 500 });
    }
}