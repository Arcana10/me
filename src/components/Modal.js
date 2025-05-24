import modal from '@/styles/modal.module.css'
import { IconX } from '@tabler/icons-react'
import { useEffect, useState, useRef } from 'react';
export default function Modal ({ toogle }) {

    const fullMessages = [
        {
            q: "¿Haces páginas web?",
            a: "Sí. Diseño y desarrollo páginas web personalizadas y optimizadas."
        },
        {
            q: "¿Cuánto cobras por una web sencilla?",
            a: "Desde S/500, depende de lo que necesites exactamente."
        },
        {
            q: "¿En cuánto tiempo entregas una web?",
            a: "En promedio, entre 1 a 2 semanas."
        },
        {
            q: "¿También haces diseño gráfico?",
            a: "Sí. Diseños para redes, branding y más desde DLUX."
        },
        {
            q: "¿Puedo pagarte en partes?",
            a: "Sí. 50% al inicio y 50% al final del proyecto."
        },
        {
            q: "¿Trabajas con tiendas online?",
            a: "Sí. Desarrollo e-commerce desde cero o con plataformas como WooCommerce o Shopify."
        },
        {
            q: "¿Diseñas logos?",
            a: "Sí. El paquete básico incluye 3 propuestas y revisiones."
        },
        {
            q: "¿Das boleta o factura?",
            a: "Sí. Emito factura con RUC 20612123901 a nombre de ARCANA CORP."
        },
        {
            q: "¿Qué tecnologías usas?",
            a: "React, Next.js, Tailwind, Figma y más. Todo moderno y optimizado."
        },
        {
            q: "¿Podemos agendar una reunión?",
            a: "Claro, puedes hacerlo desde este link: https://calendar.app.google/qvNs9Mb4u8q89hAa9."
        }
    ];    

    const chatEndRef = useRef(null)
    
    const [available, setAvailable] = useState(fullMessages)
    const [visible, setVisible] = useState([])
    const [chat, setChat] = useState([])

    const getRandomQuestions = (source, count = 4) => {
        const shuffled = [...source].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    }

    // Inicializa con 4 preguntas aleatorias
    useEffect(() => {
        const initial = getRandomQuestions(fullMessages, 4)
        setVisible(initial)
        setAvailable(fullMessages.filter(q => !initial.includes(q)))
    }, [])

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [chat])
      
    const handleClick = (qObj) => {
        setChat(prev => [...prev, { q: qObj.q, a: qObj.a }])

        const newVisible = visible.filter(msg => msg.q !== qObj.q)

        if (newVisible.length === 0 && available.length > 0) {
            const nextSet = getRandomQuestions(available, 4)
            setVisible(nextSet)
            setAvailable(available.filter(q => !nextSet.includes(q)))
        } else {
            setVisible(newVisible)
        }
    }

    return (

        <div className={`${modal.overlay}`}>
            <div className={`${modal.modal}`}>
                <div className={`${modal.modal_head}`}>
                    <button className={modal.modal_close} onClick={toogle}><IconX/></button>
                </div>
                <div className={modal.modal_main} ref={chatEndRef}>
                    {chat.map((item, i) => (
                        <div key={i} className={modal.rowBurble}>
                            <p className={`${modal.burble} ${modal.burble_owner}`}>{item.q}</p>
                            <p className={`${modal.burble} ${modal.burble_client}`}>{item.a}</p>
                        </div>
                    ))}
                </div>
                <div className={modal.modal_msg}>
                    <div className={modal.questions}>
                        {visible.map((msg, index) => (
                            <div key={index} className={modal.question} onClick={() => handleClick(msg)}>
                                <span>{msg.q}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )

}