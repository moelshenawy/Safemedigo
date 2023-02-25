import React from "react";
import { Link } from "next/link";
import imgs from "../../assets/constants/imgs";
import { PageHeader, Tags } from "./../../components/";
import styles from "./[id].module.scss";
import { Container, Typography } from "@mui/material";
import { BsLink45Deg, BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go'

export default function BolgDetails(props) {
  const { art_vid, preparing, blog_detail, author, } = imgs;

  return (
    <>
      <PageHeader />

      {/* <h1>{props.post[0].title}</h1>
      <p>{props.post[0].desc}</p>
      <img src={post3.src} alt="" /> */}

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <div id={styles.blog_details}>
          <div className={styles.headline}>
            <div className={styles.img_container}>
              <img src={blog_detail.src} alt="Blog Name" />
            </div>

            <div className={styles.title}>
              <Typography variant="h2">Headline</Typography>
              <Typography >
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
                Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea
                Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
                Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea
                Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum{" "}
              </Typography>
            </div>
          </div>

          <article>
            <div className={styles.title}>
              <Typography variant="h2">Article Subline</Typography>
            </div>

            <div className={styles.article_container}>
              <div className={styles.video_container}>
                <img src={art_vid.src} alt="" />
              </div>

              <div className={styles.text_container}>
                <Typography >
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                  Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
                  Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No
                  Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem
                  Ipsum Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                  Sed Diam Nonumy
                </Typography>

                <div className={styles.links}>
                  <a href="#">Go To Treatment Page Link</a>
                  <a href="#">Doctor Category</a>
                </div>
              </div>

            </div>

            <div className={styles.boxes_container}>
              <div className={styles.box}>
                <div className={styles.box_title}>
                  <Typography variant="h6">Preparing</Typography>
                </div>
                <div className={styles.img_container}>
                  <img src={preparing.src} alt="" />
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.box_title}>
                  <Typography variant="h6">Preparing</Typography>
                </div>
                <div className={styles.img_container}>
                  <img src={preparing.src} alt="" />
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.box_title}>
                  <Typography variant="h6">Preparing</Typography>
                </div>
                <div className={styles.img_container}>
                  <img src={preparing.src} alt="" />
                </div>
              </div>
            </div>



          </article>

          <div className={styles.highlight}>
            <div className={styles.title}>
              <Typography variant='h2'>
                Highlighted Text
              </Typography>
              <Typography >
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
              </Typography>


            </div>

          </div>


          <div className={styles.share}>
            <Typography>
              <span>Helpful?</span>
              Share it.
            </Typography>
            <div className={styles.icons_container}>
              <BsTwitter />
              <FaFacebookSquare />
              <HiOutlineMail />
              <BsLink45Deg />
            </div>
            <hr />
          </div>
        </div>

        <div id={styles.related_tags}>
          <Tags />
        </div>

        <div id={styles.cards_container}>
          <div className={styles.comments_card}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Typography >
                  Comments <span>(12)</span>
                </Typography>
                <hr />
              </div>
              <div className={styles.card_body}>
                <div className={styles.user_comment}>
                  <div className={styles.user_data}>
                    <div className={styles.img_container}>
                      <img src={author.src} alt="" />
                    </div>
                    <div className={styles.name}>
                      <span>Sammer Mt,</span>
                    </div>



                  </div>
                  <div className={styles.comment}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nam Viverra Euismod Odio, Gravida Pellentesque Urna Varius Vitae, Gravida Pellentesque Urna Varius Vitae. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.

                    <div className={styles.date}>
                      Dec 6, 2017 - 18:55
                    </div>
                  </div>
                </div>

                <div className={styles.admin_comment}>
                  <div className={styles.admin_data}>
                    <div className={styles.img_container}>
                      <img src={author.src} alt="" />
                    </div>
                    <div className={styles.name}>
                      <span>Admin</span>
                    </div>
                  </div>

                  <div className={styles.comment}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nam Viverra Euismod Odio, Gravida Pellentesque Urna Varius Vitae, Gravida Pellentesque Urna Varius Vitae. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.

                    <div className={styles.date}>
                      Dec 6, 2017 - 18:55
                    </div>
                  </div>
                </div>

                <div className={styles.load_more_btn}>
                  <button>Load More</button>
                </div>
              </div>
            </div>


          </div>

          <div className={styles.leave_comment}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Typography >
                  Leave Comment
                </Typography>
                <hr />
              </div>

              <form action="">
                <div className={styles.name}>
                  <label htmlFor="">Name <span>*</span></label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>

                <div className={styles.email}>
                  <label htmlFor="">Email <span>*</span></label>
                  <input type="emal" placeholder="Enter Your Email" />
                </div>

                <div className={styles.comment}>
                  <label htmlFor="">Comments <span>*</span></label>
                  <textarea name="" rows="4" cols="50">
                    Enter Your Comment
                  </textarea>
                </div>


                <div className={styles.add_comment_btn}>
                  <button type="submit">
                    <GoPlus />
                    Add Your Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

// Every time that user click on the post it will call  API Request
// export async function getServerSideProps(context) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const data = await res.json()

//   return {
//     props: {
//       post: data
//     }
//   }
// }

// Error: getStaticPaths is required for dynamic SSG pages and is missing for
// it will get all Posts Id and save it as an id => if i have 10 posts and all i want is id's of the 10 posts it will get  all id's at once
// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://safemedigo.vercel.app/api/blogs/${context.params.id}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       post: data,
//     },
//   };
// }

{
  /*
  here to get all paths id's =>
   paths: [  
    {params : { id : 1 }},
    {params : { id : 2 }},
    {params : { id : 3 }},
    {params : { id : 4 }},
    {params : { id : 5 }},
   ]

*/
}
// export async function getStaticPaths() {
//   const res = await fetch(`https://safemedigo.vercel.app/api/blogs`);
//   const data = await res.json();

//   // here to get all paths id dynamic
//   const paths = data.map((path) => {
//     return { params: { id: `${path.id}` } };
//   });
//   return {
//     paths: paths,

//     // fallback used for => if we don't have id = 50 it will throw an error
//     fallback: false,
//   };
// }
