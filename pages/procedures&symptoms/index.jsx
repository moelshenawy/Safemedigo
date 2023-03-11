import { MostPopular } from '@/components/Home'
import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import imgs from "../../assets/constants/imgs";
import styles from './index.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const ProceduresSymptoms = () => {
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false },
    { width: 400, pagination: false, itemsToShow: 9 },

  ])
  const { Dermatology, Dermatology_1 } = imgs;

  const cards = [
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1 },
  ]



  // Change Arrow in react-elastic-carousel Lirbrary
  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ?
      <div className='left_arrow'>
        <HiChevronLeft />
      </div>

      :
      <div className='right_arrow'>
        <  HiChevronRight />
      </div>

      ;
    return (
      <button className='main_btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }

  return (
    <>
      <MostPopular />

      <section id={styles.medical_department}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.sec_header}>
              <div className={styles.title}>
                <Typography variant='h3'>All Medical Department</Typography>
                <Typography variant='h6'>Sorted By Popularity</Typography>
              </div>

              <div className={styles.procedures_num}>
                <Typography>10.500 Procedures</Typography>
              </div>



            </div>
            <div className={styles.slider_container}>
              <Carousel breakPoints={breakPoints}
                itemsToScroll={1}
                renderArrow={myArrow}
              >
                {cards.map((card, index) => (
                  <>
                    <div className={styles.box} key={index}>


                      <div className={styles.img_container}>
                        <img className={styles.main_img} src={card.img} alt="" />
                        <img className={styles.sec_img} src={card.sec_img} alt="" />
                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.id} {card.title}</Typography>
                      </div>

                    </div>

                  </>
                ))}

              </Carousel>

            </div>

          </div>
        </Container>
      </section>

    </>
  )
}

export default ProceduresSymptoms