import { useCallback } from "react";
import { Category } from "../../types/CategoryTypes";
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";

import styles from "./featured-categories.module.scss";

type FeaturedCategoriesTypes = {
    categories: Category[]
}

export default function FeaturedCategories({categories}: FeaturedCategoriesTypes) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        containScroll: "trimSnaps"
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    return (
    <div>
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {categories.map(cat => {
                    const cover = Math.floor(Math.random() * 3) + 1;

                    return (
                        <div className={styles.embla__slide} key={cat.id}>
                            <div className={`cover ${styles['cover-' + cover]}`}>
                                <h1>{cat.name}</h1>
                                <Image src={cat.iconUrl} width={30} height={30} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className={styles.embla__prev} onClick={scrollPrev}>
                <Image src="/assets/icons/arrow-back.svg" width={90} height={90}/>
            </button>
            <button className={styles.embla__next} onClick={scrollNext}>
                <Image src="/assets/icons/arrow-next.svg" width={90} height={90}/>
            </button>
        </div>
    </div>)
}
