import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import FeaturedCategories from '../components/featured-categories'
import API_CLIENT from '../hooks/useApi'
import styles from '../styles/Home.module.scss'
import { Category } from '../types/CategoryTypes'

type HomeTypes = {
  categories: Category[]
}

const Home = ({ categories }: HomeTypes) => {

  const [bannerImage, setBannerImage] = useState<number>();

  useEffect(() => {
    const img = Math.floor((Math.random() * 3)) + 1;
    setBannerImage(img);
  }, [])

  console.log(categories)

  return (
    <>
      <Head>
        <title>Home - BookStore</title>
      </Head>

      <section id={styles.coverContainer}>
        {bannerImage &&
          <Image src={`/assets/img/cover-${bannerImage}.jpeg`} layout='fill' alt='Person reading in grass' />}
          <section 
          className={`${styles.textContainer} ${bannerImage ? styles["cover-" + bannerImage] : ""}`}>
            <h1>BookStore</h1>
            <h2>Your next reading is here!</h2>
            <section id={styles.features}>
              <div>
                <Image src="/assets/icons/startup.svg" width={40} height={40} />
                <p>Fast shipping</p>
              </div>
              <div>
                <Image src="/assets/icons/cube.svg" width={40} height={40} />
                <p>Specialized transportation</p>
              </div>
            </section>
          </section>
      </section>

      <section id={styles.categories_container}>
        <h2>Browse by category</h2>
        <FeaturedCategories categories={categories} />
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const {data} = await API_CLIENT.get("/genres");
  return {
    props: {
      categories: data
    }
  }
}

export default Home