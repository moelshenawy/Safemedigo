import React from 'react'
import styles from './index.module.scss'
import { Container, Typography, } from '@mui/material';
import imgs from "../../../assets/constants/imgs";
import { OurSafetyStanders, PlasticSurgeries, Dentistry, ToothImplants, HairTransplant, MedicalCheck, LaserEyeSurgery, Ivf, WeightLoss, Orthopedics, Rhinoplasty, Cardiology, Urology, Pediatrics, Oncology, BoneMarrow, Lung, Neurology, Analysis, SeeWhat } from "../../../assets/svgs/HoverIcons"

const TreatmentCategory = () => {
  const { QualityGuarantee, OnGuide, GetQuote, TravelAssist } = imgs;


  const cards = [
    { title: 'Plastic Surgeries', img: <PlasticSurgeries /> },
    { title: 'Hair Transplant', img: <HairTransplant /> },
    { title: 'Medical Check Up', img: <MedicalCheck /> },
    { title: 'Laser Eye Surgery', img: <LaserEyeSurgery /> },
    { title: 'Dentistry', img: <Dentistry /> },
    { title: 'Tooth Implants', img: <ToothImplants /> },
    { title: 'IVF (ICSI)', img: <Ivf /> },
    { title: 'Knee Replacement', img: <Ivf /> },
    { title: 'Weight Loss Treatments', img: <WeightLoss /> },
    { title: 'Orthopedics', img: <Orthopedics /> },
    { title: 'Rhinoplasty', img: <Rhinoplasty /> },
    { title: 'Cardiology', img: <Cardiology /> },
    { title: 'Urology', img: <Urology /> },
    { title: 'Oncology', img: <Oncology /> },
    { title: 'Pediatric', img: <Pediatrics /> },
    { title: 'Bone Marrow Transplant', img: <BoneMarrow /> },
    { title: 'Lung Surgeries', img: <Lung /> },
    { title: 'Neurology', img: <Neurology /> },
    { title: 'Alternative Medicine', img: <Analysis /> },
    { title: "Don't See What You Need?", img: <SeeWhat /> },

  ]

  return (
    <section id={styles.treatment_category}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>
          <div className={styles.sec_title}>
            <Typography variant='h2'>Treatment Category</Typography>
          </div>
          <div className={styles.boxes_container}>
            {cards.map((card, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.img_container}>
                  {card.img}
                </div>
                <div className={styles.title}>
                  <Typography variant='h6'>{card.title}</Typography>
                </div>


              </div>
            ))}
          </div>
          <div className={styles.btn_contianer}>
            <button>Find Out More</button>
          </div>
        </div>
      </Container>

    </section >)
}

export default TreatmentCategory