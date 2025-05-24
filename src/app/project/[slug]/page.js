"use client"
import { useParams } from "next/navigation"
import sub from "@/styles/slug.module.css";

export default function ProjectPage () {

    const { slug } = useParams();

    return (

        <main className={sub.main}>

            <h1 className={sub.tit}>Todos los proyectos</h1>

            <section className={sub.grid}>
                {Array.from({length: 10}).map((_, i) => (
                    <div key={i} className={sub.card}></div>
                ))}
            </section>

        </main>

    )

}