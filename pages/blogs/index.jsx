import imgs from "../../assets/constants/imgs";
import Link from "next/link";
import Head from "next/head";
import styles from "./index.module.scss";
import { Container, Typography } from "@mui/material";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PageHeader, Tags } from './../../components/';
import { appContext } from "@/context/store";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";



// export async function getServerSideProps(context) {
//   console.log(context.query, "COntext Over hereee")

//   const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "lang": 'ar',
//       "blogCategoryId": 0,
//       "currentPage": 1
//     })
//   })
//   const data = await res.json()

//   return {
//     props: {
//       blogs: data
//     }
//   }
// }

export default function Blogs({ page }) {
  const { post0, post1, post2, post3, post4, post5, author } = imgs;





  const posts = [
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post0.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 1,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post1.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 1,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post2.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 2,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post3.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 3,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post4.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 4,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 5,
    },
  ];

  useEffect(() => {


    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: {
    //     lang: "en",
    //     blogCategoryId: 0,
    //     currentPage: 1
    //   }
    // };
    // fetch('', requestOptions)
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    // const myData = async () => {

    //   const data = await axios.post(`http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage`, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'accept': 'text/plain'
    //     },
    //     data: {
    //       "lang": "en",
    //       "blogCategoryId": 0,
    //       "currentPage": 1
    //     }
    //   })

    //   console.log(data, "WITH MEEE")
    // }
    // }
    // myData()

    const dataFun = async () => {

      // const data = JSON.stringify({
      //   "lang": "en",
      //   "blogCategoryId": 0,
      //   "currentPage": 1
      // });

      // const config = {
      //   method: 'post',
      //   maxBodyLength: Infinity,
      //   url: 'http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'accept': 'text/plain'
      //   },
      //   data: data
      // };

      // const res = await axios(config)
      // const myData = await res.json()




    }

    dataFun();


  }, [])

  const router = useRouter();
  const handleChangePage = (event, newPage) => {
    router.push(`/blogs/page/${newPage}`);
    console.log(newPage)
    if (newPage === 1) {
      router.push(`/blogs/`);
    }
  };


  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="blogs" content="blogs for doctors" />
      </Head>

      <div id={styles.tags_filter}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>


          <div className={styles.filter}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Articles
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                IconComponent={ExpandMoreOutlinedIcon}
                label="Articles"
                style={{
                  backgroundColor: "#E7EDEC",
                  color: "#000000",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <MenuItem value="Acibadem">Acibadem Articles</MenuItem>
                <MenuItem value="Acibadem">Acibadem Articles</MenuItem>
                <MenuItem value="Acibadem">Acibadem Articles</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Container>
      </div>




      <div className={styles.sections_container}>
        <section id={styles.blogs_sec}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.title}>
              <Typography variant="h6">Most Recent Posts</Typography>
            </div>

            <div className={styles.boxes_container}>
              {posts.map((post, idx) => (
                <>
                  <Link href={`/blogs/${post.id}`} className={styles.box} key={idx}>
                    <div className={styles.img_container}>
                      <img
                        src={post.img}
                        alt="Picture of the author"
                        width="width: 344px"
                      />
                    </div>
                    <div className={styles.box_title}>
                      <Typography variant="h5">{post.title}</Typography>
                    </div>

                    <div className={styles.desc}>
                      <p>{post.desc}</p>
                    </div>

                    <div className={styles.author_container}>
                      <div className={styles.img_container}>
                        <img src={post.authorImg} alt="" />
                      </div>

                      <div className={styles.author_data}>
                        <div className={styles.user_name}>
                          {post.authorName}
                        </div>
                        <div className={styles.user_job}>{post.authorJob}</div>
                      </div>
                    </div>

                    <div className={styles.btns_container}>
                      <div className={styles.trans_btn}>
                        <button>Tag Name</button>
                      </div>

                    </div>
                  </Link>
                </>
              ))}
            </div>

            <div className="pagination">
              {/* <Pagination
                page={1}
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              /> */}

            </div>
          </Container>
        </section>

        {/* Tag Component */}
        <Tags />
      </div>

      <div>
        <h1>Blog Page {page}</h1>
        <Pagination
          count={10}
          page={parseInt(page)}
          onChange={handleChangePage}
        />
      </div>



    </>
  );
};

// Data is in view Page Source (SSR) Great for SEO but every time user Request this page the server has to call an additional api request ,Up to date data


export async function getServerSideProps(context) {
  const { params } = context;
  return {
    props: {
      page: null,
    },
  };
}


// Data is in view Page Source (ISR) => when user Request the page it will render HTML from  the previous  Request in (10 secounds)
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/blogs")
//   const data = await res.json()

//   return {
//     props: {
//       posts: data
//     },
//     revalidate: 10,
//   }
// }