import React from 'react'
import imgs from "../../../assets/constants/imgs";
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material';
import Link from 'next/link';


const Safty = () => {
  const { OurSafetyStandards00, OurSafterStanders01, left01,
    right01,
    right02,
    middle, left02, } = imgs;

  return (
    <section id={styles.safty}>

      <Container sx={{ maxWidth: '1239px' }} maxWidth={false}>
        <div className={styles.section_container}>
          <div className={styles.title}>
            <Typography variant='h2'>Our Safety Standards</Typography>
          </div>

          <div className={styles.desc}>
            <Typography>Apart From Good Medical Results, We Highly Rate General Safety. Our Patient`S Have To Be Lifted Through The Various Downs That Come With Medical Care. It Is Important That The Patient Is Fully Aware Of All The Factors That Will Collectively Ensure They Receive Satisfactory Treatment In And Out Of Hospital. By Emphasizing On All Aspects Concerning Safety, We Leave No Space For Substandard Treatment And Outside Care. Get Full Benefits Of Your Medical Trip Through Our Safety Standards Structure That Entails:</Typography>

          </div>


          <div className={styles.content}>



            <div className={styles.text_container}>
              <div className={styles.right_side}>
                <Typography>
                  Satisfactory Patient Feedback
                  <img src={left01.src} className={styles.left1} alt="" />
                </Typography>
                <Typography>
                  Affordable Treatment Charges

                  <img src={left02.src} className={styles.left2} alt="" />
                </Typography>
                <Typography>
                  Clarity Concerning All Matters
                </Typography>
              </div>

              <div className={styles.images_container}>
                <img src={OurSafterStanders01.src} className={styles.logo} alt="" />
                <img src={OurSafetyStandards00.src} className={styles.ground} alt="" />
              </div>


              <div className={styles.left_side}>
                <Typography>
                  <img src={right01.src} className={styles.right1} alt="" />

                  Highly Reviewed Experts
                </Typography>
                <Typography>
                  <img src={right02.src} className={styles.right2} alt="" />
                  Modern Healthcare Facilities
                </Typography>
                <Typography>
                  <img src={middle.src} className={styles.middle} alt="" />
                  First-Class Medical Services
                </Typography>
              </div>
            </div>

            <div className={styles.btn_container}>
              <Link href='/safty'>
                <button>Explore Our Safety Standards</button>
              </Link>
            </div>
          </div>


        </div>
      </Container>


    </section >
  )
}

export default Safty