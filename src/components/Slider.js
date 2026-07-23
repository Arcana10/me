import slider from '@/styles/slider.module.css'
import Project from './Project'
import { useEffect } from 'react';
import { useProjects } from '@/context/DBContext';

export default function Slider() {

    const { projects, fetchProjects, loading } = useProjects()

    useEffect(() => {

        fetchProjects();

    }, [])

    return (

        <>
            {loading ? (
                <div className={slider.projectSkeleton}>
                    <span className={slider.loader}></span>
                </div>  
            ) : (
                <div className={slider.sliderWrapper}>
                    <div className={slider.sliderTrack}>
                        {projects.concat(projects).map((project, index) => (
                            <Project key={index} project={project} />
                        ))}
                    </div>
                </div>
            )}
        </>
        
    )
}