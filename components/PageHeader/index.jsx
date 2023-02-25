import React from "react";
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import { Container, Typography } from "@mui/material";

const PageHeader = () => {
  const { design } = imgs;
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
              {(window.location.pathname === "/blogs/1") |
                "/blogs/2" |
                "/blogs/3" |
                "/blogs/4" |
                "/blogs/5" |
                "/blogs/6" ? (
                <Typography variant='h4' >
                  acibadem Hospital (blog category)
                </Typography>
              ) : (
                <Typography variant='h4' >
                  All blogs
                </Typography>
              )}
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

            <div className={styles.review_by}>
              <p>Reviewed by Safemedigo team, July 28, 2020</p>
            </div>
          </div>

          <div className={styles.img_container}>
            <img src={design.src} alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageHeader;
