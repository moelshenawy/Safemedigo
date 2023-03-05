import React from 'react'
import { Container, Typography, Box } from "@mui/material";
import { PageHeader } from '@/components';
import { ContactDetails, Help, WhySafemedigo } from '@/components/Home';
import imgs from "../../assets/constants/imgs";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
// import '../../styles/'

const AboutUs = () => {

  const { author, youComeFirst,
    safeHealthcare,
    allInclusiveCare,
    stressFreeTreatment, } = imgs;

  const howItWorksData = [
    { id: 1, title: 'Safe Healthcare', desc: 'At safemedigo, we aim to ensure patient safety and satisfaction. Be exposed to reliable information on different medical conditions and procedures through our platform; choose from any of the highly evaluated doctors, clinics and hospitals. By being your trusted healthcare assistant, Safemedigo will be right by your side throughout your experience. Get access to quality healthcare.', img: safeHealthcare.src },

    { id: 2, title: 'You Come First', desc: 'We have identified the following safety elements to ensure the patient gets the kind of treatment they deserve: Highly reviewed experts, Modern healthcare facilities, First-class medical services, Satisfactory patient feedback, Affordable treatment charges and Clarity concerning all matters.', img: youComeFirst.src },

    { id: 3, title: 'Stress Free Treatment', desc: 'When it comes to treatment, Safemedigo representatives strive to get you a specified fit establishment that allows you to be in your comfort zone. Safemedigo works round the clock to get timely treatment appointments for the patient; they`ll be given full decision-making authority. All in all, we will pave way for you to access the highest quality healthcare available that suits all your specifications from resources, comfort, appointment schedules, location, just to mention a few.', img: stressFreeTreatment.src },

    { id: 4, title: 'All Inclusive Care', desc: 'Our service will leave the patient with a personal feel as we will not abandon them halfway. Get all your medical information without the hustle and at no cost. Count on us for full board support that will cover all your medical needs under one umbrella, the Safemedigo umbrella.', img: allInclusiveCare.src },


  ]


  const SafeHealthcare = howItWorksData.filter((item) => item.title === 'Safe Healthcare')
  const YouComeFirst = howItWorksData.filter((item) => item.title === 'You Come First')
  const StressFreeTreatment = howItWorksData.filter((item) => item.title === 'Stress Free Treatment')
  const AllInclusiveCare = howItWorksData.filter((item) => item.title === 'All Inclusive Care')

  const doctors = [
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
  ]

  const team = [
    { name: 'Majd Khaled', desc: 'Medical Content Writer', img: author.src },
    { name: 'Name', desc: 'Medical Content Writer And Reviewer', img: author.src },
    { name: 'Majd Khaled', desc: 'Medical Content Writer', img: author.src },
    { name: 'name', desc: 'Medical Content Writer And Reviewer', img: author.src },
    { name: 'Majd Khaled', desc: 'Medical Content Writer', img: author.src },

  ]

  const patientMangers = [
    { name: 'Majd Khaled', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'Name', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'Majd Khaled', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'name', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'Majd Khaled', desc: 'Name@Safemedigo.Com', img: author.src },
  ]

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



      <section id={styles.who_is_safemedigo}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>Who Is Safemedigo?</Typography>
            </div>

            <div className={styles.desc}>
              <Typography>We are a multilingual, multicultural, and multiskilled team that includes experts in customer service, marketing, law, writing, data science, engineering, and yes, even doctors. We all have different backgrounds, but we all bring to Safemedigo a desire to change how our international patients get healthcare.</Typography>

            </div>



          </div>
        </Container>
      </section>

      <Help />
      <WhySafemedigo />

      <section id={styles.founders}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>
                FOUNDERS
              </Typography>
              <Typography>We Take Pleasure In Offering The Greatest Patient Experience Possible In Keeping With Our Commitment To Always Put Patients First. Our Medical Board Is Composed Of Specialists In Medicine Who Back Us Up In What We Do. For You To Have Access To Reliable And Factual Information, Our Medical Board Places A Specific Emphasis On Treatment And Clinic Assessments And Assessing Medical Material. Please Take Notice That No Member Personally Counsels Safemedigo Patients, Despite The Fact That They Are All Medical Authorities In Their Professions.</Typography>
            </div>
            <div className={styles.boxes_container}>
              <div className={styles.founder}>
                <div className={styles.img_container}>
                  <img src={author.src} alt="" />
                </div>

                <div className={styles.name}>
                  <Typography>Founder Name</Typography>
                </div>

                <div className={styles.job}>
                  <Typography>CEO & Founder</Typography>
                </div>
              </div>
            </div>
          </div>

        </Container>

      </section>




      <section id={styles.medical_councilors}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>Medical Councilors</Typography>
            </div>

            <div className={styles.desc}>
              <Typography>We Take Pleasure In Offering The Greatest Patient Experience Possible In Keeping With Our Commitment To Always Put Patients First. Our Medical Board Is Composed Of Specialists In Medicine Who Back Us Up In What We Do. </Typography>
              <Typography>For You To Have Access To Reliable And Factual Information, Our Medical Board Places A Specific Emphasis On Treatment And Clinic Assessments And Assessing Medical Material. Please Take Notice That No Member Personally Counsels Safemedigo Patients, Despite The Fact That They Are All Medical Authorities In Their Professions.</Typography>

            </div>

            <div className={styles.boxes_container}>
              {doctors.map((doctor, idx) => (
                <div className={styles.box} key={idx}>
                  <div className={styles.img_container}>
                    <img src={doctor.img} alt="" />
                  </div>
                  <div className={styles.name}>
                    <Typography>{doctor.name}</Typography>
                  </div>
                  <div className={styles.desc}>
                    <Typography>{doctor.desc}</Typography>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      <section id={styles.team}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>Safemdigo Team</Typography>
            </div>
            <div className={styles.boxes_container}>
              {team.map((team, idx) => (
                <div className={styles.box} key={idx}>
                  <div className={styles.img_container}>
                    <img src={team.img} alt="" />
                  </div>
                  <div className={styles.name}>
                    <Typography>{team.name}</Typography>
                  </div>
                  <div className={styles.desc}>
                    <Typography>{team.desc}</Typography>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id={styles.patient_mangers}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>PATIENT MANAGERS</Typography>
            </div>
            <div className={styles.boxes_container}>
              {patientMangers.map((team, idx) => (
                <div className={styles.box} key={idx}>
                  <div className={styles.img_container}>
                    <img src={team.img} alt="" />
                  </div>
                  <div className={styles.name}>
                    <Typography>{team.name}</Typography>
                  </div>
                  <div className={styles.desc}>
                    <Typography>{team.desc}</Typography>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>



      <ContactDetails />

    </>
  )
}

export default AboutUs