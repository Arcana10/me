import notfound from "@/styles/notfound.module.css";
import Link from "next/link";
export default function NotFound () {

    return (

        <div className={notfound.box}>
            <div className={notfound.row}>
                <h1 className={notfound.tit}>404 | Página no encontrada</h1>
                <Link href={'/'} className={notfound.link}>Volver al inicio</Link>
            </div>
        </div>

    )

}