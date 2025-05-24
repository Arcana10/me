import card from '@/styles/card.module.css'
export default function Project ({ i }) {

    return (
        <div className={card.box}>
            <div></div>
            <div>
                <h2>Proyecto {i}</h2>
            </div>
        </div>
    )

}