import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import imgs from "../../assets/constants/imgs";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import styles from "./index.module.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLinks, setShowMenuLinks] = useState(false);
  const menuLniks = [
    {
      category: "Procedures & Symptoms",
      cateLink: '/procedures',
      links: [
        {
          title: "Patients Reviews",
          link: "/Reviews",
        },
        {
          title: "Patients Stories",
          link: "/stories",
        },

        {
          title: "Before & After",
          link: "/before&after",
        },
        {
          title: "Doctor Q&A",
          link: "q&a",
        },
        {
          title: "Prices",
          link: "/prices",
        },

        {
          title: "Blogs",
          link: "/blogs",
        },

      ],
    },
    {
      category: "About Safemedigo",
      links: [
        {
          title: "Safety Standards",
          link: "/safety",
        },
        {
          title: "About Us",
          link: "/about-us",
        },
        {
          title: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "How It Works",
          link: "/how-it-works",
        },
      ],
    },


  ];

  const navbarLinks = [
    { title: "Procedures", link: "/", menuLink: null },
    { title: "How It Works", link: "/", menuLink: null },
    {
      title: "Reviews & Photos",
      link: "/",
      menuLink: [
        { title: "Reviews", link: "/reviews" },
        { title: "Before & After", link: "/Before-after" },
        { title: "Patient Stories", link: "/stories" },
        { title: "Doctor Q&A", link: "/Q&A" },
      ],
    },
    { title: "Prices", link: "/", menuLink: null },
    { title: "Blogs", link: "/blogs", menuLink: null },
    {
      title: "About Us ",
      menuLink: [
        { title: "about Us", link: "/about-us" },
        { title: "Safety Standards", link: "/safety" },
        { title: "Contact Us", link: "/contact-us" },
      ],
    },
  ];

  const { logo, en, arrowDown, user, search, design } = imgs;


  // Toggle outside to close menu
  const menuRef = useRef();
  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [showMenu]);

  return (
    <>
      <AppBar style={{ background: 'transparent' }}>
        <div className={styles.navbar}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <Grid
              container
              alignItems="center"
              className={styles.grid__container}
            >
              <Grid item xs={2} sx={2}>
                <Link href="/" className={styles.navbar__logo}>
                  <Box display="flex" alignItems="center">
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
                <Box>
                  <Box className={styles.links__container}>
                    <div className={styles.links}>
                      <ul>
                        {navbarLinks.map((link, index) => (
                          // ${styles.active}
                          <li
                            key={index}
                            className={`${styles.link__item} ${styles.active}`}
                          >
                            <Link href={`${link.link}`}>{link.title}</Link>

                            <ul className={styles.menuLinks__container}>
                              {link.menuLink != null &&
                                link.menuLink.map((links, index) => (
                                  <motion.li
                                    animate={{ y: [300, 0] }}
                                    transition={{ duration: 0.80, ease: "easeOut" }}

                                    key={index}>
                                    <Link href={`${links.title}`}>
                                      {links.title}
                                    </Link>
                                  </motion.li>
                                ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.auth_methods}>
                      <div className={styles.lang}>
                        <div className={styles.img_container}>
                          <img
                            src={en.src}
                            alt="Picture of the author"
                            width="20.7px"
                            height="12.88px"
                          />
                        </div>

                        <div className={styles.lang_type}>
                          <span>EN</span>
                        </div>

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
                          <button>Search</button>
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
                          <button>Sign In</button>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </Box>
              </Grid>

              <div className={styles.icons_container} ref={menuRef}>
                <div className={styles.menu} onClick={() => setShowMenu(true)}>
                  <div className={styles.icon_container}>
                    <MenuIcon />
                  </div>
                </div>

                {showMenu && (
                  <motion.div
                    animate={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    className={styles.side_bar}
                  >
                    <div className={styles.side_bar_container}>
                      <div
                        className={styles.close}
                        onClick={() => setShowMenu(false)}
                      >
                        <CloseIcon />
                      </div>
                      <div className={styles.links_container}>
                        <Link className="link" href="/login">
                          <div className={styles.icon_container}>
                            <PersonRoundedIcon />
                          </div>
                          <div className={styles.btn_container}>
                            <Typography>Sign In</Typography>
                          </div>
                        </Link>

                        <div className={styles.categories_container}>
                          <div className={styles.category}>
                            <div className={styles.title}>
                              <Typography variant="h4">
                                <a href={menuLniks[0].cateLink}>
                                  {menuLniks[0].category}
                                </a>
                              </Typography>
                            </div>
                            <div className={styles.category_links}>
                              {menuLniks[0].links.map((link, idx) => (
                                <>
                                  <a
                                    className={
                                      window.location.pathname === link.link &&
                                      styles.active
                                    }
                                    key={idx}
                                    href={link.link}
                                  >
                                    {link.title}
                                  </a>
                                </>
                              ))}

                              <div className={styles.special_links}>
                                <a href="/reveiw">Start Your Review</a>
                                <a href="q&a">Ask A Doctor</a>
                              </div>

                              <Box className={styles.lang} display='flex'>
                                <div className={styles.img_container}>
                                  <img
                                    src={en.src}
                                    alt="Picture of the author"
                                    width="20.7px"
                                    height="12.88px"
                                  />
                                </div>
                                <div className={styles.lang_type}>
                                  <span>EN</span>
                                </div>

                                <div className={styles.icon_container}>
                                  <BiChevronDown />
                                </div>
                              </Box>


                            </div>
                            <div className={`${styles.title}`} onClick={() => setShowMenuLinks((prev) => !prev)}>
                              <Typography variant="h4">
                                {menuLniks[1].category}
                              </Typography>
                              <div className={`${styles.icon_container} ${showMenuLinks && styles.active}`} >
                                <ExpandMoreOutlinedIcon color="red" />
                              </div>
                            </div>
                            {showMenuLinks &&
                              <motion.div
                                animate={{ y: [100, 0] }}
                                transition={{ duration: 0.80, ease: "easeOut" }}

                                className={styles.category_links}>
                                {menuLniks[1].links.map((link, idx) => (
                                  <>
                                    <a key={idx} href={link.link}>
                                      {link.title}
                                    </a>
                                  </>
                                ))}
                              </motion.div>

                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </Grid>
          </Container>
        </div>
      </AppBar>

      <nav id={styles.sec_nav}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>

          {window.location.pathname === '/blogs/1' | '/blogs/2' | '/blogs/3' | '/blogs/4' | '/blogs/5' | '/blogs/6' ? <h2>home / Signle blog</h2> : <h2>home / Blogs</h2>}
          {console.log(window.location.pathname)}
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
