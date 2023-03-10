import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Share } from "@capacitor/share";
// import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar/index";
import {
  ContactDetails,
  Help,
  Hero,
  MostPopular,
  PatientStories,
  Safty,
  Search,
  TreatmentCategory,
  WhySafemedigo,
  WhyTurkey
} from '../components/Home'


export default function Home() {
  return (
    <>
      <Head>
        <title>Safemedigo</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 viewport-fit=cover"
        />


        <link rel="icon" href="/favicon.ico" />



      </Head>

      {/* Home Page Sections  */}
      <Hero />
      <Help />
      <WhySafemedigo />
      <TreatmentCategory />
      <MostPopular />
      <PatientStories />
      <Safty />
      <WhyTurkey />
      <ContactDetails />

    </>
  );
}
