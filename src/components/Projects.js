import { useProjects } from '@/context/DBContext'
import sub from '@/styles/slug.module.css'
export default function Projects() {

    const { projects } = useProjects();

    return (

        projects.map((_, i) => (
            <div key={i} className={sub.card}></div>
        ))

    )
}