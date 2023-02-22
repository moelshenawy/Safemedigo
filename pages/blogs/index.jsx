import imgs from '../../assets/constants/imgs'
import Link from 'next/link'
import Head from 'next/head'
import styles from './index.module.scss'
import { Container, Grid, Typography } from '@mui/material';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Blogs = () => {
  const { post0,
    post1,
    post2,
    post3,
    post4,
    post5,
    author
  } = imgs

  const posts = [
    { authorName:'Majd Khaled',
    authorJob:'Medical Content Writer',
    authorImg:author.src
    ,img: post0.src, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { authorName:'Majd Khaled',
    authorJob:'Medical Content Writer',
    authorImg:author.src
    ,img: post1.src, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { authorName:'Majd Khaled',
    authorJob:'Medical Content Writer',
    authorImg:author.src
    ,img: post2.src, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { authorName:'Majd Khaled',
    authorJob:'Medical Content Writer',
    authorImg:author.src
    ,img: post3.src, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { authorName:'Majd Khaled',
    authorJob:'Medical Content Writer',
    authorImg:author.src
    ,img: post4.src, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { authorName:'Majd Khaled',
    authorJob:'Medical Content Writer',
    authorImg:author.src
    ,img: post5.src, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },

  ]
  const tags = [
    { tag: 'Acibadem' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
  ]

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name='blogs' content='blogs for doctors' />
      </Head>
      <div id={styles.blogs}>
        <div className={styles.header_container}>
        <Container sx={{maxWidth:'1239px'}}  maxWidth={false} >
            <div className={styles.text_container}>
              <div className={styles.guide}>
                <h4>All blogs</h4>
              </div>

              <div className={styles.title}>
                <p>All Of The Latest Medical Travel And Healthcare Developments In One Place.</p>
              </div>

              <div className={styles.review_by}>
                <p>
                  Reviewed by Safemedigo team, July 28, 2020
                </p>

              </div>
            </div>
          </Container>
        </div>
      </div>

      <div id={styles.tags_filter}>
      <Container sx={{maxWidth:'1239px'}}  maxWidth={false} >

          <div className={styles.title}>
            <Typography variant="h4">All Articles</Typography>
          </div>

          <div className={styles.filter}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">Articles</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                IconComponent={ExpandMoreOutlinedIcon}
                label="Articles"
                style={{backgroundColor: "#E7EDEC", color:"#000000",fontSize:"18px",fontWeight:'bold'}}
              >
                <MenuItem value='Acibadem'>Acibadem Articles</MenuItem>
                <MenuItem value='Acibadem'>Acibadem Articles</MenuItem>
                <MenuItem value='Acibadem'>Acibadem Articles</MenuItem>
              </Select>
            </FormControl>
          </div>


        </Container>
      </div>



      <section id={styles.blogs_sec}>
      <Container sx={{maxWidth:'1239px'}}  maxWidth={false} >
          <div className={styles.title}>
            <Typography variant="h6">
              Most Recent Posts
            </Typography>
          </div>

          <div className={styles.boxes_container}>
            {posts.map((post, idx) => (
              <>
                <div className={styles.box} key={idx}>
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
                      <div className={styles.user_name}>{post.authorName}</div>
                      <div className={styles.user_job}>{post.authorJob}</div>
                    </div>
                  </div>
                  
                  <div className={styles.btns_container}>
                    <div className={styles.trans_btn}>
                      <button>Hair transplant</button>
                    </div>
                    <div className={styles.turk_btn}>
                      <button>Turkey</button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Container>
      </section>

      <section id={styles.tags}>
      <Container sx={{maxWidth:'1239px'}}  maxWidth={false} >
          
          <div className={styles.title}>
            <Typography variant="h6">Popular Tags</Typography>
          </div>

          <div className={styles.tags_container}>
            {tags.map((tag, idx) => (
              <>
                <div className={styles.tag}key={idx}>
                  <Link href={tag.tag}>
                    <button>{tag.tag}</button>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </Container>

      </section>
    </>

  )
}

export default Blogs