import Link from 'next/link'
import React from 'react'
import imgs from '../../assets/constants/imgs'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import { Container, Grid } from '@mui/material';
import styles from './index.module.scss'

const Navbar = () => {
  const navbarLinks = [
    { title: 'Procedures', link: '/', menuLink: null },
    { title: 'How It Works', link: '/', menuLink: null },
    {
      title: 'Reviews & Photos', link: '/', menuLink: [
        { title: "Reviews", link: "/reviews" },
        { title: "Before & After", link: "/Before-after" },
        { title: "Patient Stories", link: "/stories" },
        { title: "Doctor Q&A", link: "/Q&A" },
      ]
    },
    { title: 'Prices', link: '/', menuLink: null },
    { title: 'Blogs', link: '/blogs', menuLink: null },
    {
      title: 'About Us ', menuLink: [
        { title: "about Us", link: "/about-us" },
        { title: "Safety Standards", link: "/safety" },
        { title: "Contact Us", link: "/contact-us" }
      ]
    },
  ]


  const { logo, en, arrowDown, user, search, design } = imgs


  return (
    <>
      <AppBar component="nav">
        <div className={styles.navbar}>
          <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >

            <Grid container alignItems='center' className={styles.grid__container}>
              <Grid item xs={2} sx={2}>
                <Link href="/" className={styles.navbar__logo}>
                  <Box display='flex' alignItems='center'>
                    <img
                      src={logo.src}
                      alt="Picture of the author"
                      width="51.34px"
                      height="45px"
                    />
                    <h1>Safemedigo</h1>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={10} className={styles.navbar__links}>
                <Box >
                  <Box className={styles.links__container}>
                    <div className={styles.links}>
                      <ul >
                        {navbarLinks.map((link, index) => (
                          // ${styles.active}
                          <li key={index} className={`${styles.link__item} ${styles.active}`}>
                            <Link href={`${link.link}`} >{link.title}</Link>

                            <ul className={styles.menuLinks__container} >
                              {link.menuLink != null && link.menuLink.map((links, index) =>
                              (
                                <li key={index}>
                                  <Link href={`${links.title}`}>{links.title}</Link>
                                </li>
                              )
                              )}
                            </ul>

                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.auth_methods} >
                      <div className={styles.lang}>
                        <div className={styles.img_container}>
                          <img
                            src={en.src}
                            alt="Picture of the author"
                            width="20.7px"
                            height="12.88px"
                          />

                        </div>

                        <div className={styles.lang_type}><span>EN</span></div>

                        <div className={styles.icon_container}>
                          <img
                            src={arrowDown.src}
                            alt="Picture of the author"
                            width="14.84px"
                            height="8.49px"
                          />
                        </div>
                      </div>

                      <div className={styles.search_btn}>
                        <Link href="/">
                          <div className={styles.icon_container}>
                            <img
                              src={search.src}
                              alt="Picture of the author"
                              width="18.89px"
                              height="19px"
                            />
                          </div>
                          <button>
                            Search
                          </button>
                        </Link>
                      </div>

                      <div className={styles.login_btn}>
                        <Link href="/login">
                          <div className={styles.icon_container}>
                            <img
                              src={user.src}
                              alt="Picture of the author"
                              width="18.13px"
                              height="19.5px"
                            />
                          </div>
                          <button>
                            Sign In
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </Box>
              </Grid>
              <div className={styles.icons_container}>
                <div className={styles.menu}>
                  <div className={styles.icon_container}>
                    <MenuIcon />
                  </div>
                </div>
                <div className={styles.menu}>
                  <div className={styles.icon_container}>
                    <MenuIcon />
                  </div>
                </div>
                <div className={styles.menu}>
                  <div className={styles.icon_container}>
                    <MenuIcon />
                  </div>
                </div>


              </div>
            </Grid>


          </Container>
        </div>
      </AppBar>


      <nav id={styles.sec_nav}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
          <h2 >
            home / Blogs
          </h2>

        </Container>
      </nav>
    </>

  )
}

export default Navbar