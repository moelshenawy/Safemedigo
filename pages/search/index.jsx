import React from 'react'
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import Link from 'next/link';
import { Typography, AppBar, Container } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { HiArrowSmRight } from 'react-icons/hi'

const Search = () => {
  const { logo, NavSearch, en, arrowDown, user, search, notifications, notificationsActive, burger } = imgs;

  const mostSearches = [
    { title: 'Treatment', name: 'Treatment Name', link: '/treatment' },
    { title: 'Doctors', name: 'Doctor Name', link: '/doctors' },
    { title: 'Clinic', name: 'Clinic Name', link: '/clinics' },
  ]

  return (
    <>
      <AppBar style={{ background: '#00F3BB' }}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <nav id={styles.navbar_search}>
            <div className={styles.logo}>
              <Link href='/'>
                <img src={logo.src} alt="" />
                <Typography variant='h1'>Safemedigo</Typography>
              </Link>
            </div>

            <div className={styles.input_container}>
              <input type="text" placeholder='Searching Treatment, Doctor, Clinic, Diseases' />
              <div className={styles.close_icon}>
                <CloseIcon />
              </div>
            </div>

          </nav>
        </Container>
      </AppBar>

      <div className={styles.search_bg}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div id={styles.search_wrapper}>

            <div className={styles.text_container}>
              <Typography>
                Find <br /> The Right & Safe <br /> Treatment <br /> For You In Turkey
              </Typography>
            </div>

            <div className={styles.results_card}>
              <div className={styles.card_header}>
                <Typography>Most Treatment Searched Right Now</Typography>
              </div>
              <div className={styles.card_inner}>
                {mostSearches.map((search, index) =>
                  <>
                    <Link href={search.link} key={index}>
                      <div className={styles.box}>
                        <div className={styles.title}>
                          <Typography variant='h4'>{search.title}</Typography>
                        </div>

                        <div className={styles.name}>
                          <Typography>
                            {search.name}
                          </Typography>
                          <div className={styles.page}>
                            <Typography>
                              To Treatment Page
                            </Typography>
                            <div className={styles.icon_container}>
                              <HiArrowSmRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>

  )
}

export default Search