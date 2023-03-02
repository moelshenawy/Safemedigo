import React from 'react'
import styles from './index.module.scss'
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaShieldAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { consts } from 'react-elastic-carousel';
import { Container, Typography, Rating, } from '@mui/material';
import Link from 'next/link';

const ContactDetails = () => {
  return (
    <section id='contact_details'>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false}>
        <div className="section_container">

          <div className="talk">
            <div className="title">

            </div>
          </div>


          <div className="personal_manger"></div>


          <div className="talk"></div>
        </div>
      </Container>

    </section>
  )
}

export default ContactDetails