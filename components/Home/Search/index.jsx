import React, { useState } from 'react'
import styles from './index.module.scss'
import { Container, Typography, } from '@mui/material';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';

const Search = () => {
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 2.5 },
    { width: 400, itemsToShow: 3 },
  ])

  const tags = [
    { tag: "All" },
    { tag: "Hair Treatment" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
  ];
  return (
    <div id={styles.search}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.searc_card}>
          <div className={styles.searc_input}>
            <Link href='/search'>
              <label htmlFor="">I’m Looking For</label>
              <input type="text" disabled placeholder='Searching Treatment, Doctor, Clinic, Diseases' />
            </Link>
          </div>

          <div className={styles.tags}>
            <div className={styles.title}>
              <Typography>Popular Searched Treatments</Typography>
            </div>
            <div className={styles.tags_container}>
              {tags.map((tag, index) => (
                <Link href='/' key={index}>
                  <button>
                    {tag.tag}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </Container>
      <div className={styles.tags_slider}>

        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
          <div className={styles.title}>
            <Typography variant='h3'>Treatment Popular</Typography>
          </div>
        </Container>


        <Carousel breakPoints={breakPoints}
          pagination={false}
          showArrows={false}
          itemsToScroll={1}
        >
          {tags.map((tag, index) => (
            <Link href='/' key={index}>
              <button>
                {tag.tag}
              </button>
            </Link>
          ))}


        </Carousel>

      </div>
    </div>
  )
}

export default Search



