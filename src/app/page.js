import main from "./ui/home.module.css";
import Avvvatars from 'avvvatars-react'
import Header from "./ui/Header";
import Link from "next/link";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";

export default function Page () {

    return (

        <>

            <Header/>

            <main role="main" className={main.main}>

                <section role="article" className={main.section}>
                    <div className={main.rowA}>
                        <figure className={main.avatar}>
                            <Avvvatars size={50} value="Franco Pérez" style="shape" />
                        </figure>
                        <div>
                            <h2 className={main.txt_name}>Franco Pérez</h2>
                            <p className={main.txt_position}>Desarrollador web & UI/UX</p>
                        </div>
                    </div>
                    <div className={main.rowB}>
                        <p className={main.parragraph}>
                            🚀 Soy Desarrollador de Software y Diseñador UI/UX. Transformo ideas en productos digitales memorables, 
                            combinando código limpio con diseño estratégico para generar impacto real.
                        </p>
                        <p className={main.parragraph}>💬 Preguntame sobre Desarrollo web, Diseño o como puedo ayudarte</p>
                        <p className={main.parragraph}>Actualmente trabajo en <Link href={'https://arcana.codes/?source_page=francodev'} target="_blank" className={main.currently_link}>ARCANA <IconExternalLink size={18} className={main.icon_currently_link}/></Link></p>
                        <button type="button" role="button" className={main.btn_chat}>
                            <span className={main.icon_btn_chat}>🪄</span>
                            <span>Pregúntale a la IA algo sobre mí...</span>
                        </button>
                    </div>
                </section>

                <section role="article" className={main.section}>
                    <div className={main.section_header}>
                        <h1 className={main.subtit}>Proyectos</h1>
                        <button type="button" role="button" className={main.btn_more}>Ver todos <IconArrowRight/></button>
                    </div>
                    <div></div>
                </section>

            </main>

        </>

    )

}