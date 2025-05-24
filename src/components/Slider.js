import slider from '@/styles/slider.module.css'
import Project from './Project'

export default function Slider() {
  const items = Array.from({ length: 10 });

    return (
        <div className={slider.sliderWrapper}>
            <div className={slider.sliderTrack}>
                {items.concat(items).map((_, i) => (
                    <Project key={i} i={i % items.length} />
                ))}
            </div>
        </div>
    )
}