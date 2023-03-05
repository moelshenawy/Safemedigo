import React from 'react'
import { Container, Typography, Box } from "@mui/material";
import { PageHeader } from '@/components';
import { ContactDetails, Help } from '@/components/Home';
import imgs from "../../assets/constants/imgs";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
// import '../../styles/'

const AboutUs = () => {

  const { howItIworks_search } = imgs;

  const howItWorksData = [
    { id: 1, title: 'Safe Healthcare', desc: 'At safemedigo, we aim to ensure patient safety and satisfaction. Be exposed to reliable information on different medical conditions and procedures through our platform; choose from any of the highly evaluated doctors, clinics and hospitals. By being your trusted healthcare assistant, Safemedigo will be right by your side throughout your experience. Get access to quality healthcare.', img: howItIworks_search.src },

    { id: 2, title: 'You Come First', desc: 'We have identified the following safety elements to ensure the patient gets the kind of treatment they deserve: Highly reviewed experts, Modern healthcare facilities, First-class medical services, Satisfactory patient feedback, Affordable treatment charges and Clarity concerning all matters.', img: howItIworks_search.src },

    { id: 3, title: 'Stress Free Treatment', desc: 'When it comes to treatment, Safemedigo representatives strive to get you a specified fit establishment that allows you to be in your comfort zone. Safemedigo works round the clock to get timely treatment appointments for the patient; they`ll be given full decision-making authority. All in all, we will pave way for you to access the highest quality healthcare available that suits all your specifications from resources, comfort, appointment schedules, location, just to mention a few.', img: howItIworks_search.src },

    { id: 4, title: 'All Inclusive Care', desc: 'Our service will leave the patient with a personal feel as we will not abandon them halfway. Get all your medical information without the hustle and at no cost. Count on us for full board support that will cover all your medical needs under one umbrella, the Safemedigo umbrella.', img: howItIworks_search.src },


  ]


  const SafeHealthcare = howItWorksData.filter((item) => item.title === 'Safe Healthcare')
  const YouComeFirst = howItWorksData.filter((item) => item.title === 'You Come First')
  const StressFreeTreatment = howItWorksData.filter((item) => item.title === 'Stress Free Treatment')
  const AllInclusiveCare = howItWorksData.filter((item) => item.title === 'All Inclusive Care')


  return (
    <>
      <PageHeader />

      <section id={styles.about_us}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.boxes_container}>

            <div className={styles.SafeHealthcare}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {SafeHealthcare[0].title}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {SafeHealthcare[0].desc}
                  </Typography>
                </div>
              </div>

              <div className={styles.img_container}>
                <img src={SafeHealthcare[0].img} alt="" />
              </div>
            </div>

            <div className={styles.YouComeFirst}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {YouComeFirst[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {YouComeFirst[0].desc}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={YouComeFirst[0].img} alt="" />
              </div>
            </div>

            <div className={styles.StressFreeTreatment}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {StressFreeTreatment[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {StressFreeTreatment[0].desc}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={StressFreeTreatment[0].img} alt="" />
              </div>
            </div>

            <div className={styles.AllInclusiveCare}>
              <div className={styles.text_container}>
                <div className={styles.title}>

                  <Typography variant='h3'>
                    {AllInclusiveCare[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {AllInclusiveCare[0].desc}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={AllInclusiveCare[0].img} alt="" />
              </div>
            </div>


          </div>
        </Container>
      </section>
      <Help />
      <ContactDetails />

    </>
  )
}

export default AboutUs