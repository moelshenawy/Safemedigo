import { MostPopular } from '@/components/Home'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import imgs from "../../assets/constants/imgs";
import styles from './index.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProceduresSymptoms = () => {
  const [result, setResult] = useState(null)
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 2, },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 2, },
    { width: 400, pagination: true, showArrows: false, itemsToShow: 2, },
    { width: 800, pagination: false, itemsToShow: 9, itemsToScroll: 8, transitionMs: 1000 },


  ])

  const { Dermatology, Dermatology_1 } = imgs;

  const cards = [
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 1 },
    { title: 'Treatment', img: Dermatology.src, sec_img: Dermatology_1.src, id: 2 },
    { title: 'Hair Transplant', img: Dermatology.src, sec_img: Dermatology_1.src, id: 3 },
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 4 },
    { title: 'Pulmonary & Thoracic Surgery Lung Surgeries', img: Dermatology.src, sec_img: Dermatology_1.src, id: 5 },
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
                <div className="header">
                  <Typography variant='h3'>All Medical Department</Typography>
                  <Typography sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'none',
                      lg: 'block'
                    }
                  }} variant='h6'>Sorted By Popularity</Typography>
                </div>

                <div className={styles.procedures_num}>
                  <Typography sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'block',
                      lg: 'none'
                    }
                  }} variant='h6'>Sorted By Popularity</Typography>
                  <Typography>10.500 Procedures</Typography>
                </div>
              </div>



            </div>
            <div className={styles.slider_container}>
              <Carousel breakPoints={breakPoints}
                itemsToScroll={1}
                renderArrow={myArrow}


              >
                {cards.map((card, index) => (
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, justifyContent: 'center' }}>
                    <div onClick={() => handleResult(card)} className={styles.box} key={index}>

                      <div className={styles.img_container}>

                        {
                          result !== null &&
                            result?.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />

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
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} className={styles.card_title}>
            <Typography variant='h3'>
              Procedures & Symptoms
            </Typography>
          </Box>

          <motion.div
            animate={{
              y: [-40, 0],
              opacity: 1
            }}
            transition={{ duration: 0.80, ease: "easeOut" }}

            className={styles.section_container}>

            <div className={styles.filter_section}>

              <div className={styles.card_title}>
                <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} variant='h3'>
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

                  sx={expanded !== 'panel1' ? { height: '55px', backgroundColor: '#004747', borderRadius: '5px', color: '#FFFFFF' }
                    : { backgroundColor: '#E7EDEC', color: '#000000', height: '55px', borderRadius: '5px' }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#000000', width: '30px', height: "30px", }} />}
                  aria-controls="panel1d-content" id="panel1d-header"                >
                  <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    All {result?.title}

                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{}}>

                  <List sx={{
                    listStyleType: 'disc',
                    padding: '0px',

                    '& .MuiListItem-root': {
                      display: 'list-item',
                      listStylePosition: 'inside',
                      padding: '0px',
                      cursor: 'pointer'
                    },
                  }}
                  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      PRP Injections
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Beard Transplany
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Ozon Therapy
                    </ListItem  >

                  </List>
                </AccordionDetails>
              </Accordion>

              <Box sx={{ marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  All Procedures
                </Typography>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  6 Procedures
                </Typography>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  Sorted By Popularity
                </Typography>
              </Box>

              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#e7edec80',
                        transform: 'scale(1.1)',
                        'svg': { marginRight: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href='/' style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>


              </Accordion>
              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#e7edec80',
                        transform: 'scale(1.1)',
                        'svg': { marginRight: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href='/' style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>


              </Accordion>
              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#e7edec80',
                        transform: 'scale(1.1)',
                        'svg': { marginRight: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href='/' style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>


              </Accordion>
              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#e7edec80',
                        transform: 'scale(1.1)',
                        'svg': { marginRight: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href='/' style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>


              </Accordion>
              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#e7edec80',
                        transform: 'scale(1.1)',
                        'svg': { marginRight: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href='/' style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>


              </Accordion>
              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#e7edec80',
                        transform: 'scale(1.1)',
                        'svg': { marginRight: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href='/' style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>


              </Accordion>




              <div className={styles.btn_container}>
                <button>Load More</button>
              </div>

            </div >

            <div className={styles.info}>
              <div className={styles.info_inner}>
                <div className={styles.info_header}>
                  <div className={styles.img_container}>
                    {result === null ?
                      <img src={cards[0]?.img} alt="" />

                      : <img src={result?.img} alt="" />
                    }
                  </div>

                  <div className={styles.title}>
                    <Typography variant='h3'>
                      {result === null ?
                        cards[0]?.title
                        :
                        result?.title

                      }
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
        </Container >


      </section >
    </>
  )
}

export default ProceduresSymptoms