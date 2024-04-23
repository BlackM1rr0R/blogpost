import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Logo from "../../assets/images/logo.svg";
import MePP from "../../assets/images/me.png";
import {
  AboutIcon,
  BehanceIcon,
  ContactIcon,
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  ProjectIcon,
  TelegramIcon,
} from "../../icons";
import { Link } from "react-router-dom";
const LeftSide = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };
  const [active, setActive] = useState("home");
  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <div className={styles.images}>
          <div className={styles.fb}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.name}>
            <h2>FATIMA</h2>
          </div>
        </div>
        <div className={styles.time}>
          <h2>{formatTime(currentTime)}</h2>
        </div>
      </div>
      <div className={styles.fatima}>
        <div className={styles.mephoto}>
          <img src={MePP} alt="" />
        </div>
        <div className={styles.aboutme}>
          <h1>Fatima Bashirli</h1>
          <h3>Brand Designer</h3>
          <h2>
            <LocationIcon /> Azerbaijani
          </h2>
        </div>
      </div>
      <div className={styles.menu}>
        <a
          href="#1"
          onClick={() => setActive("home")}
          className={active == "home" ? styles.active : styles.menubackground}
        >
          <div className={styles.icon1}>
            <HomeIcon />
          </div>
          <h2>Home</h2>
        </a>
        <a
          href="#2"
          onClick={() => setActive("projects")}
          className={
            active == "projects" ? styles.active : styles.menubackground
          }
        >
          <div className={styles.icon1}>
            <ProjectIcon />
          </div>
          <h2>Projects</h2>
        </a>
        <a
          href="#3"
          onClick={() => setActive("about")}
          className={active == "about" ? styles.active : styles.menubackground}
        >
          <div className={styles.icon1}>
            <AboutIcon />
          </div>
          <h2>About</h2>
        </a>
        <a
          href="#4"
          onClick={() => setActive("contact")}
          className={
            active == "contact" ? styles.active : styles.menubackground
          }
        >
          <div className={styles.icon1}>
            <ContactIcon />
          </div>
          <h2>Contact</h2>
        </a>
      </div>
      <div className={styles.contacts}>
        <div className={styles.iconsbackground}>
          <Link target="_blank" to={"https://www.behance.net/fatimabashirli"}>
            <BehanceIcon />
          </Link>
          <Link target="_blank" to={"https://t.me/fbashirovaa"}>
            <TelegramIcon />
          </Link>
          <Link target="_blank" to={"https://www.instagram.com/fatya.ffe/"}>
            <InstagramIcon />
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/fatima-bashirli-104348286/"}
          >
            <LinkedinIcon />
          </Link>
        </div>
        <div className={styles.copyright}>
          <h1>©</h1>
          <h1>2024</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
