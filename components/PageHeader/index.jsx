import React from "react";
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import { Container, Typography, Box } from "@mui/material";

const PageHeader = () => {
  const { design, designMobile, author } = imgs;
  return (
    <div id={styles.blogs}>
      <div className={styles.header_container}>
        <Container
          className={styles.sec_container}
          sx={{ maxWidth: "1239px" }}
          maxWidth={false}
        >
          <div className={styles.text_container}>
            <div className={styles.guide}>
              {window.location.pathname === '/' && <Typography variant='h4' >
                Home
              </Typography>}

              {window.location.pathname === '/blogs' && <Typography variant='h4' >
                All blogs
              </Typography>}
              {window.location.pathname === '/blogs/2' || '/blogs/1' && <Typography variant='h4' >
                acibadem Hospital (blog category)
              </Typography>}


            </div>

            <div className={styles.title}>
              {(window.location.pathname === "/blogs/1") |
                "/blogs/2" |
                "/blogs/3" |
                "/blogs/4" |
                "/blogs/5" |
                "/blogs/6" ? (
                <Typography variant='h2' className={styles.blog_h2} >
                  I Was Suffuring From Gas Issues For 3 Years! (Blog Title)
                </Typography>
              ) : (
                <Typography variant='h2'>
                  All Of The Latest Medical Travel And Healthcare Developments
                  In One Place.
                </Typography>
              )}


            </div>

            <Box display='flex' className={styles.review_by}>
              <div className={styles.author_img}>
                <img src={author.src} alt="" />
              </div>
              <div className={styles.info}>
                <p>Andrew Mackay, Medical Content Writer</p>
                <p className={styles.date}> Posted Apr 28, 2021,</p>
              </div>
            </Box>
          </div>

          <div className={styles.img_container}>
            <div className={styles.desk_top}>
              <img src={design.src} alt="" />
            </div>

            <div className={styles.mobile}>
              <img src={designMobile.src} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div >
  );
};

export default PageHeader;
