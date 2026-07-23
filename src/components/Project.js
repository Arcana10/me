import card from '@/styles/card.module.css'
import { useRouter } from 'next/navigation'
export default function Project ({ project }) {

    const router = useRouter();

    return (
        <div className={card.box} style={{backgroundImage: `url(${project.cover_image})`}} onClick={() => router.push(`/project/${project.slug}`)}>
            <img className={card.image} src={project.cover_image} alt={project.description} />
            <div className={card.info}>
                <div className={card.title}>
                    <h2 style={{textAlign: 'center'}}>Proyecto {project.name}</h2>
                </div>
            </div>
        </div>
    )

}