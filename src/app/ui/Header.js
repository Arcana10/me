"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import constants from './constants.module.css'
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconFolder, IconMenu, IconSmartHome, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function Header () {

    const [ open, setOpen ] = useState(false)

    const toogleDialog = () => setOpen(!open)

    return (
        <>

            <div className={styles.__box_header}>
                <header className={styles.__header}>
                    <div className={styles.__colA}>
                        <Link href={'/'} className={styles.__a_logo}>
                            <Image src={'/LOGO_NAME.svg'} alt="Franco Pérez | Desarrollador web" width={35} height={35} />
                        </Link>
                        <nav className={styles.__nav_hidden} role="navigation">
                            <ul className={constants.flex}>
                                <li>
                                    <Link href={'/'}>Inicio</Link>
                                </li>
                                <li>
                                    <Link href={'/projects'}>Proyectos</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={constants.fcenter} style={{gap: 5}}>
                        <Link href={'/'} className={styles.__a_redes}><IconBrandGithub className={styles.__icon_redes}/></Link>
                        <Link href={'/'} className={styles.__a_redes}><IconBrandLinkedin className={styles.__icon_redes}/></Link>
                        <Link href={'/'} className={styles.__a_redes}><IconBrandX className={styles.__icon_redes}/></Link>
                        <button className={styles.__btn_menu} onClick={toogleDialog}><IconMenu/></button>
                    </div>
                </header>
            </div>

            <div role="dialog" className={`${styles.__dialog} ${open && styles.__dialog_active}`} id="dialog">
                <button type="button" className={styles.__closed_dialog} onClick={toogleDialog}><IconX/></button>
                <nav role="navigation" className={styles.__nav_dialog}>
                    <Link href={'/'} className={styles.__item_dialog}> <IconSmartHome className={styles.__icon_dialog}/> Inicio</Link>
                    <Link href={'/projects'} className={styles.__item_dialog}> <IconFolder className={styles.__icon_dialog}/> Proyectos</Link>
                </nav>
            </div>

        </>
    )

}