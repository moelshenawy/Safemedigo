import { MostPopular } from '@/components/Home'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import imgs from "../../assets/constants/imgs";
import styles from './index.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const ProceduresSymptoms = () => {
  const [result, setResult] = useState(null)
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const [breakPoints] = useState([
    { width: 1, pagination: false, itemsToShow: 2, },
    { width: 300, pagination: false, itemsToShow: 2, },
    { width: 400, pagination: false, itemsToShow: 2, },
    { width: 800, pagination: false, itemsToShow: 8, itemsToScroll: 1, transitionMs: 1000 },


  ])

  const { Dermatology, Dermatology_1 } = imgs;

  const cards = [
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 1 },
    { title: 'Treatment', img: Dermatology.src, sec_img: Dermatology_1.src, id: 2 },
    { title: 'Hair Transplant', img: Dermatology.src, sec_img: Dermatology_1.src, id: 3 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 4 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 5 },
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 6 },
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 7 },
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 8 },
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 9 },
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 10 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 11 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 12 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 13 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 14 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 15 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 16 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 17 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 18 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 19 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 20 },
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

  const handleResult = (card) => {
    const filterResult = cards.find((item) => item.id === card.id)

    if (filterResult) {
      setResult(filterResult)
    }

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
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: { sm: '400px', md: '400px' }, justifyContent: 'space-between' }}>
                    <div onClick={() => handleResult(card)} className={styles.box} key={index}>

                      <div className={styles.img_container}>

                        {
                          result !== null &&
                            result.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />

                        }

                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.title}</Typography>
                      </div>

                    </div>

                    <div className={styles.mobile_slider}>
                      <div onClick={() => handleResult(card)} className={styles.box} key={index}>

                        <div className={styles.img_container}>

                          {
                            result !== null &&
                              result.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />

                          }

                        </div>

                        <div className={styles.box_title}>
                          <Typography variant="h6">{card.title}</Typography>
                        </div>

                      </div>
                    </div>

                    <div className={styles.mobile_slider}>
                      <div onClick={() => handleResult(card)} className={styles.box} key={index}>

                        <div className={styles.img_container}>

                          {
                            result !== null &&
                              result.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />

                          }

                        </div>

                        <div className={styles.box_title}>
                          <Typography variant="h6">{card.title}</Typography>
                        </div>

                      </div>
                    </div>

                  </Box>
                ))}



              </Carousel>

            </div>


          </div>
        </Container>
      </section>

      <section id={styles.proceduresSymptoms}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          {result !== null &&
            <motion.div
              animate={{
                y: [-40, 0],
                opacity: 1
              }}
              transition={{ duration: 0.80, ease: "easeOut" }}

              className={styles.section_container}>
              <div className={styles.filter_section}>
                <div className={styles.car_title}>
                  <Typography variant='h3'>
                    Procedures & Symptoms
                  </Typography>
                </div>


                <Accordion elevation={0}
                  square={false} sx={{
                    '&:before': {
                      display: 'none',
                    }
                  }}
                  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary

                    sx={expanded === 'panel1' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded === 'panel1' ? { color: '#FFFFFF', transform: 'rotate(180deg)', width: '30px', height: "30px" } : { color: '#000000', width: '30px', height: "30px", transform: 'rotate(270deg)' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Loss
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      All Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      6 Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Sorted By Popularity
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  elevation={0}
                  square={false} sx={{
                    '&:before': {
                      display: 'none',
                    },
                    marginTop: "20px"
                  }}
                  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary

                    sx={expanded === 'panel2' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded === 'panel2' ? { color: '#FFFFFF', transform: 'rotate(180deg)', width: '30px', height: "30px" } : { color: '#000000', width: '30px', height: "30px", transform: 'rotate(270deg)' }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Loss
                      <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      All Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      6 Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Sorted By Popularity
                    </Typography>
                  </AccordionDetails>
                </Accordion>


                <Accordion
                  elevation={0}
                  square={false} sx={{
                    '&:before': {
                      display: 'none',
                    },
                    marginTop: "20px"
                  }}
                  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary

                    sx={expanded === 'panel3' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded === 'panel3' ? { color: '#FFFFFF', transform: 'rotate(180deg)', width: '30px', height: "30px" } : { color: '#000000', width: '30px', height: "30px", transform: 'rotate(270deg)' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Loss
                      <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      All Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      6 Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Sorted By Popularity
                    </Typography>
                  </AccordionDetails>
                </Accordion>


                <Accordion
                  elevation={0}
                  square={false} sx={{
                    '&:before': {
                      display: 'none',
                    },
                    marginTop: "20px"
                  }}
                  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary

                    sx={expanded === 'panel4' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded === 'panel4' ? { color: '#FFFFFF', transform: 'rotate(180deg)', width: '30px', height: "30px" } : { color: '#000000', width: '30px', height: "30px", transform: 'rotate(270deg)' }} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Loss
                      <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      All Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      6 Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Sorted By Popularity
                    </Typography>
                  </AccordionDetails>
                </Accordion>


                <Accordion
                  elevation={0}
                  square={false} sx={{
                    '&:before': {
                      display: 'none',
                    },
                    marginTop: "20px"
                  }}
                  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary

                    sx={expanded === 'panel5' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded === 'panel5' ? { color: '#FFFFFF', transform: 'rotate(180deg)', width: '30px', height: "30px" } : { color: '#000000', width: '30px', height: "30px", transform: 'rotate(270deg)' }} />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Loss
                      <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      All Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      6 Procedures
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Sorted By Popularity
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <div className={styles.btn_container}>
                  <button>Load More</button>
                </div>

              </div >

              <div className={styles.info}>
                <div className={styles.info_inner}>
                  <div className={styles.info_header}>
                    <div className={styles.img_container}>
                      <img src={result.img} alt="" />
                    </div>

                    <div className={styles.title}>
                      <Typography variant='h3'>
                        {result.title}
                      </Typography>

                    </div>
                  </div>
                  <div className={styles.desc}>
                    <Typography>

                      Dermatology Is The Branch Of Medicine Dealing With The Skin. It Is A Speciality With Both Medical And Surgical Aspects Related To Skin, Hair, Nails, And Some Cosmetic Problems.
                    </Typography>
                  </div>
                </div>
              </div>
            </motion.div >
          }
        </Container >

      </section >
    </>
  )
}

export default ProceduresSymptoms