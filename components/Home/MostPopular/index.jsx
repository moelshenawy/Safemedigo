import React, { useState } from 'react'
import styles from './index.module.scss'
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaShieldAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { consts } from 'react-elastic-carousel';
import { Container, Typography, Rating, } from '@mui/material';
import Link from 'next/link';
import { motion } from "framer-motion";

const MostPopular = () => {
  const { post1, post2, post3, post4, post5, } = imgs;

  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: false, itemsToShow: 1.1, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000 },

  ])

  const [treatment, setTreatment] = useState(true)
  const [doctors, setDoctors] = useState(false)
  const [clinic, setClinic] = useState(false)


  // Handle changes 
  const handleTreatment = () => {
    setTreatment(true)
    setDoctors(false)
    setClinic(false)
  }

  const handleDoctors = () => {
    setDoctors(true)
    setTreatment(false)
    setClinic(false)
  }

  const handleClinic = () => {
    setClinic(true)
    setDoctors(false)
    setTreatment(false)
  }


  const treatmentData = [
    { title: 'Treatment Name', price: '1200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod TemAliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet  Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet  o Duo Dolores Et Ea Rebum. Stet  Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet ", img: post3.src },
    { title: 'Treatment Name', price: '1000', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore E Stet Clipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore E Stet Clita Kasd", img: post1.src },
    { title: 'Treatment Name', price: '3700', desc: "Lorebore o Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post2.src },
    { title: 'Treatment Name', price: '6800', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et  Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et  Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et  Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post4.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },

  ]

  const doctorsData = [
    { name: 'Dr Ahmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '10000' },
    { name: 'Dr John doe', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '5000' },
    { name: 'Dr Ibrahim Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '3000' },
    { name: 'Dr Esmaiel Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '2000' },
    { name: 'Dr Mahmoud Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '1000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
  ]

  const clinicData = [
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '1000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '2000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '3000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
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
    <section id={styles.most_popular}>
      <Container sx={{ maxWidth: '1239px', }} maxWidth={false}  >
        <div className={styles.section_container}>
          <div className={styles.title}>
            <Typography variant='h2'>Most Popular</Typography>
          </div>

          <div className={styles.navigation}>
            <div className={styles.header}>
              <div className={`${styles.treatment} ${treatment && styles.active}`} onClick={handleTreatment}>
                <Typography variant='h6'>
                  <button>Treatment</button>
                </Typography>
              </div>
              <div className={`${styles.doctors} ${doctors && styles.active}`} onClick={handleDoctors}>
                <Typography variant='h6'>
                  <button>Doctors</button>
                </Typography>
              </div>
              <div className={`${styles.clinic} ${clinic && styles.active}`} onClick={handleClinic}>
                <Typography variant='h6'>
                  <button>Clinic</button>
                </Typography>

              </div>
            </div>

            <hr />

          </div>

          <div className={styles.content}>

            <div className={styles.text_container}>
              <div className={styles.desc}>
                <Typography>We Are An Independent Organisation And Only Ever Provide Fully Honest And Unbiased Information About Doctors That Have Been Thoroughly And Professionally Vetted.</Typography>
              </div>

              <div className={styles.btn_container}>

                <Link href='/'>
                  <button>
                    Get Started
                  </button>
                </Link>
              </div>
            </div>



            <div className={styles.slider_container}>

              {treatment &&
                <motion.div
                  animate={{ x: [300, 0] }}
                  transition={{ duration: 0.95, ease: "easeOut" }}
                  className={styles.treatment}>

                  <div className={styles.shadow_box} />

                  <Carousel
                    breakPoints={breakPoints}
                    itemsToScroll={2}
                    renderArrow={myArrow}


                  >
                    {treatmentData.map((card, index) => (
                      <div className={styles.box} key={index}>
                        <div className={styles.img_container}>
                          <img src={card.img} alt={card.title} />
                        </div>

                        <div className={styles.box_text_container}>

                          <div className={styles.title}>
                            <Typography variant='h5'>
                              {card.title}
                            </Typography>
                          </div>

                          <div className={styles.price}>
                            <Typography variant='h6'>
                              Cost Start From  {card.price} &euro;
                            </Typography>
                          </div>

                          <div className={styles.rating}>
                            <Rating name="size-small" defaultValue={4} size="small" />
                            <span className={styles.reviews_num}>90 Reviews</span>
                          </div>

                          <div className={styles.desc}>


                            <Typography>{card.desc}</Typography>
                          </div>

                          <div className={styles.btn_container}>
                            <Link href='/'>
                              More
                            </Link>
                          </div>

                        </div>



                      </div>
                    ))}
                  </Carousel>
                </motion.div>
              }


              {doctors &&
                <motion.div
                  animate={{ x: [300, 0] }}
                  transition={{ duration: 0.95, ease: "easeOut" }}

                  className={styles.doctors}
                >
                  <div className={styles.shadow_box} />

                  <Carousel
                    breakPoints={breakPoints}
                    itemsToScroll={1}
                    renderArrow={myArrow}



                  >
                    {doctorsData.map((doc, index) => (
                      <div className={styles.box} key={index}>
                        <div className={styles.img_container}>
                          <img src={doc.img} alt={doc.name} />
                          <div className={styles.verified}>
                            <FaShieldAlt />
                            <Typography >
                              Safemedigo verified
                            </Typography>
                          </div>
                        </div>

                        <div className={styles.box_text_container}>

                          <div className={styles.name}>
                            <Typography variant='h5'>
                              {doc.name}
                            </Typography>
                          </div>

                          <div className={styles.job_title}>
                            <Typography variant='h6'>
                              {doc.job_title}
                            </Typography>
                          </div>

                          <div className={styles.rating}>
                            <Rating name="size-small" defaultValue={4} size="small" />
                            <span className={styles.reviews_num}>90 Reviews</span>
                          </div>

                          <div className={styles.location}>
                            <MdLocationOn />
                            <Typography >
                              Istanbul, Turkey
                            </Typography>
                          </div>

                          <div className={styles.patient_num}>
                            <span>{doc.patients_num}</span>
                            <Typography>Patients Treated Last Year</Typography>
                          </div>

                          <div className={styles.experience}>
                            <span>{doc.experience}</span>
                            <Typography> Years Of Experience</Typography>
                          </div>

                          <div id={styles.price}>
                            <Typography>Knee Replacement Starting From </Typography>
                            <span>{doc.price}$</span>
                          </div>

                          <div className={styles.btn_container}>
                            <Link href='/'>See Doctor Profile</Link>
                          </div>

                        </div>
                      </div>
                    ))}
                  </Carousel>
                </motion.div>
              }

              {clinic &&
                <motion.div
                  animate={{ x: [300, 0] }}
                  transition={{ duration: 0.95, ease: "easeOut" }}

                  className={styles.clinic}>
                  <div className={styles.shadow_box} />

                  <Carousel
                    breakPoints={breakPoints}
                    itemsToScroll={1}
                    renderArrow={myArrow}


                  >
                    {clinicData.map((clinic, index) => (
                      <div className={styles.box} key={index}>
                        <div className={styles.img_container}>
                          <img src={clinic.img} alt={clinic.title} />
                          <div className={styles.verified}>
                            <FaShieldAlt />
                            <Typography >
                              Safemedigo verified
                            </Typography>
                          </div>
                        </div>

                        <div className={styles.box_text_container}>

                          <div className={styles.name}>
                            <Typography variant='h5'>
                              {clinic.title}
                            </Typography>
                          </div>

                          <div className={styles.type}>
                            <Typography variant='h6'>
                              {clinic.type}
                            </Typography>
                          </div>

                          <div className={styles.rating}>
                            <Rating name="size-small" defaultValue={4} size="small" />
                            <span className={styles.reviews_num}>90 Reviews</span>
                          </div>

                          <div className={styles.location}>
                            <MdLocationOn />
                            <Typography >
                              Istanbul, Turkey
                            </Typography>
                          </div>

                          <div className={styles.founded}>
                            <span>{clinic.founded}</span>
                            <Typography>Founded Year</Typography>
                          </div>

                          <div className={styles.employess}>
                            <span>{clinic.employess}</span>
                            <Typography> Doctors & Employees</Typography>
                          </div>

                          <div className={styles.yearly_patient}>
                            <span>{clinic.yearly_patient}</span>
                            <Typography>Yearly Patient</Typography>
                          </div>

                          <div className={styles.btn_container}>
                            <Link href='/'>See Hospital Profile</Link>
                          </div>

                        </div>



                      </div>
                    ))}


                  </Carousel>
                </motion.div>
              }


            </div>




          </div>
        </div>
      </Container>

    </section >
  )
}

export default MostPopular