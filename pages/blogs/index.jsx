import { useContext } from "react";
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

export default function Blogs() {
  const { post0, post1, post2, post3, post4, post5, author, design } = imgs;


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

  const { name, setName } = useContext(appContext)

  console.log(name)

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="blogs" content="blogs for doctors" />
      </Head>
      {/* Header Component */}
      <PageHeader />

      <div id={styles.tags_filter}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.title}>
            <Typography variant="h4">All Articles</Typography>
          </div>

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
          </Container>
        </section>

        {/* Tag Component */}
        <Tags />
      </div>


    </>
  );
};

// Data is in view Page Source (SSR) Great for SEO but every time user Request this page the server has to call an additional api request ,Up to date data
// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=100")
//   const data = await res.json()

//   return {
//     props: {
//       posts: data
//     }
//   }
// }


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