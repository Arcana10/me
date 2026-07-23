"use client";
import main from "./ui/home.module.css";
import modal from '@/styles/modal.module.css'
import Avvvatars from 'avvvatars-react'
import Header from "./ui/Header";
import Link from "next/link";
import { IconArrowRight, IconBrandWhatsapp, IconCalendar, IconChevronRight, IconExternalLink, IconMail, IconX } from "@tabler/icons-react";
import Slider from "@/components/Slider";
import Image from "next/image";
import { useRef, useState } from "react";
import Modal from "@/components/Modal";

export default function Page () {

    const [ toogleModal, setToogleModal ] = useState(false);

    const text = `Hola *Franco*,\nQuiero que me ayudes con mi página web.`
    const message = encodeURIComponent(text)
    const handleSendWhatsapp = () => window.open(`https://wa.me/+51995984231?text=${message}`)
    const handleCalendar = () => window.open('https://calendar.app.google/qvNs9Mb4u8q89hAa9')
    const handleSendMail = () => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=j1h2a3n4s@gmail.com')

    const handleToogleModal = () => {
        setToogleModal(!toogleModal)
        document.body.style.overflowY = toogleModal ? 'auto' : 'hidden';
    }

    return (

        <>

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
                        <button type="button" role="button" className={main.btn_chat} onClick={handleToogleModal}>
                            <span className={main.icon_btn_chat}>🪄</span>
                            <span>Pregúntale a la IA algo sobre mí...</span>
                        </button>
                    </div>
                </section>

                {toogleModal && ( <Modal toogle={handleToogleModal} /> )}

                <section role="article" className={`${main.section} ${main.section_top}`}>
                    <div className={main.section_header}>
                        <h1 className={main.subtit}>Proyectos</h1>
                        <Link href={'/project/all'} role="button" className={main.btn_more}>Ver todos <IconArrowRight/></Link>
                    </div>
                </section>

                <section role="slider" className={main.section_projects}>
                    <Slider/>
                </section>

                <section role="article" className={main.section_currently}>
                    <div className={main.rowA}>
                        <figure className={main.avatar}>
                            <Avvvatars size={50} value="Franco Pérez" style="shape" />
                        </figure>
                        <div>
                            <h2 className={main.txt_name}>Franco Pérez</h2>
                            <p className={main.txt_position}><span className={main.dot_avaible}></span> Disponible para trabajos freelance.</p>
                        </div>
                    </div>
                    <h1 className={main.txt_call}>Actualmente trabajo como Desarrollador Freelance y Diseñador UI/UX</h1>
                    <div className={main.txt_info}>
                        <p className={main.headquarter}>Con sede en Perú <span className={main.country}>PE</span></p>
                        <p className={main.timezone}>Timezone (GMT-5)</p>
                    </div>
                </section>

                <section role="article" className={`${main.section_currently} ${main.section_say}`}>
                    <Image src={'/burble.png'} alt="Image de chat con Franco Pérez" className={main.image} width={100} height={100} />
                    <h1 className={main.tit}>Dime Hola!</h1>
                    <p className={main.txt_secondary}>¿Dime quieres crear algo increíble? ¿Tienes alguna pregúnta? Escríbeme.</p>
                    <div className={main.tabler}>
                        <button className={main.tabler_item} onClick={handleSendWhatsapp}>
                            <span><IconBrandWhatsapp/></span>
                            <span>Envíame un mensaje</span>
                        </button>
                        <div className={main.tabler_line}></div>
                        <button className={main.tabler_item} onClick={handleSendMail}>
                            <span><IconMail/></span>
                            <span>Envíame un correo</span>
                        </button>
                        <div className={main.tabler_line}></div>
                        <button className={main.tabler_item} onClick={handleCalendar}>
                            <span><IconCalendar/></span>
                            <span>Agenda un cita</span>
                        </button>
                    </div>
                </section>

            </main>

        </>

    )

}