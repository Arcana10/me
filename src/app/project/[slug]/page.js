"use client";

import { useParams } from "next/navigation";
import sub from "@/styles/slug.module.css";
import Projects from "@/components/Projects";

export default function ProjectPage() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    return (
        <main className={sub.main}>
            <h1 className={sub.tit}>
                {slug === "all" ? "Todos los proyectos" : slug}
            </h1>

            <section className={sub.grid}>
                {slug === "all" ? <Projects /> : <h2>Proyecto: {slug}</h2>}
            </section>
        </main>
    );
}