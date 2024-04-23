import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Container from "../UI/container";
import FatimaPP from "../../assets/images/fatima.svg";
import {
  AdressIcon,
  ArrowIcon,
  BrandingIcon,
  ClockIcon,
  ContactInfoIcon,
  DevelopmentIcon,
  GraphicDesignIcon,
  LocationIcon,
  MediaManagerIcon,
  OnlineIcon,
  PaintIcon,
  UxIcon,
} from "../../icons";
import MapPP from "../../assets/images/az.svg";
import LogoMarks from "../../assets/images/logo 1.png";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/googlelogo.png";
import UpworkIcon from "../../assets/images/upworklogo.png";
import SlackIcon from "../../assets/images/slacklogo.png";
import LinkedinIcon from "../../assets/images/linkedinlogo.png";
import NetflixIcon from "../../assets/images/netflixlogo.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import AdobeCloud from "../../assets/images/adobecloud.png";
import Spotify from "../../assets/images/spotify.png";
import IBM from "../../assets/images/ibm.png";
import Figma from "../../assets/images/figma.png";
import Larsen from "../../assets/images/larsen.png";
import Mandro from "../../assets/images/mandro.png";
import LarryPP from "../../assets/images/larry1.png";
import { HomeIcon } from "../../icons";
const RightSide = () => {
  const [data, setData] = useState([
    {
      images: `${LogoMarks}`,
      name: "Retro Remix",
      overview: "Ux Design",
    },
    {
      images: `${LogoMarks}`,
      name: "Retro Remix",
      overview: "Ux Design",
    },
    {
      images: `${LogoMarks}`,
      name: "Retro Remix",
      overview: "Ux Design",
    },
    {
      images: `${LogoMarks}`,
      name: "Retro Remix",
      overview: "Ux Design",
    },
    {
      images: `${LogoMarks}`,
      name: "Retro Remix",
      overview: "Ux Design",
    },
    {
      images: `${LogoMarks}`,
      name: "Retro Remix",
      overview: "Ux Design",
    },
  ]);
  const [education, setEducation] = useState([
    {
      year: "2007-2017",
      educationname: "Web Designer & Developer",
      appeducation: "Adobe Creative Cloud",
      appphoto: `${AdobeCloud}`,
    },
    {
      year: "2017-2020",
      educationname: "Front-End Developer",
      appeducation: "Spotify",
      appphoto: `${Spotify}`,
    },
    {
      year: "2020-2024",
      educationname: "Webflow Developer & Co-Founder",
      appeducation: "IBM Technologies",
      appphoto: `${IBM}`,
    },
  ]);
  const [experience, setExperience] = useState([
    {
      year: "2007-2017",
      educationname: "Figma Designing & Prototyping",
      appeducation: "Bluebase Designs",
      appphoto: `${Figma}`,
    },
    {
      year: "2017-2020",
      educationname: "Full Stack Developer",
      appeducation: "Larsen & Toubro",
      appphoto: `${Larsen}`,
    },
    {
      year: "2020-2024",
      educationname: "Cloud Development Operation",
      appeducation: "Mandro Studio",
      appphoto: `${Mandro}`,
    },
  ]);
  const [services, setServices] = useState([
    {
      servicesname: "Website Design",
      servicesoverview:
        "I created digital products with unique ideas use Figma",
      servicesprojects: "38 Projects",
      servicesicon: <PaintIcon />,
    },
    {
      servicesname: "Social Media Manager",
      servicesoverview: "The best privacy policy online network.",
      servicesprojects: "42 Projects",
      servicesicon: <MediaManagerIcon />,
    },
    {
      servicesname: "Graphic Design",
      servicesoverview:
        "I created digital products with unique ideas use Photoshop",
      servicesprojects: "13 Projects",
      servicesicon: <GraphicDesignIcon />,
    },
    {
      servicesname: "Development",
      servicesoverview: "I build website go live with Framer, Webflow",
      servicesprojects: "8 Projects",
      servicesicon: <DevelopmentIcon />,
    },
    {
      servicesname: "Branding",
      servicesoverview: "The best privacy policy online network.",
      servicesprojects: "24 Projects",
      servicesicon: <BrandingIcon />,
    },
    {
      servicesname: "UX/UI Design",
      servicesoverview:
        "I created digital products with unique ideas use Figma",
      servicesprojects: "34 Projects",
      servicesicon: <UxIcon />,
    },
  ]);
  const [counterOn, setCounterOn] = useState(false);
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
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  };
  return (
    <div id="1" className={styles.background}>
      <Container position="fixed">
        <div className={styles.fixedcontrol}>
          <div className={styles.control}>
            <div className={styles.leftphoto}>
              <img src={FatimaPP} alt="" />
            </div>
            <div className={styles.controlright}>
              <div className={styles.righthero}>
                <div className={styles.heroheader}>
                  <div className={styles.online}>
                    <h2>
                      <OnlineIcon /> Available for freelance work
                    </h2>
                  </div>
                  <div className={styles.online}>
                    <h2>
                      <ClockIcon /> {formatTime(currentTime)}
                    </h2>
                  </div>
                  <div className={styles.online}>
                    <a href="#4">Contact Me</a>
                  </div>
                </div>
              </div>
              <div className={styles.aboutme}>
                <div className={styles.leftabout}>
                  <div className={styles.jobtitle}>
                    <h2>A UX/UI Designer</h2>
                  </div>
                  <div className={styles.myname}>
                    <h1>Fatima Bashirli 👋</h1>
                  </div>
                  <div className={styles.experience}>
                    <p>
                      Experienced UX/UI Designer specializing in crafting
                      appealing user interfaces. My approach revolves around
                      creating intuitive and visually striking designs,
                      utilizing modern technologies and tools
                    </p>
                  </div>
                </div>
                <div className={styles.rightabout}>
                  <div className={styles.locations}>
                    <div className={styles.baku}>
                      <h2>Baku</h2>
                    </div>
                    <div className={styles.azerbaijan}>
                      <LocationIcon />
                      <h2>Azerbaijan</h2>
                    </div>
                  </div>
                  <div className={styles.screenphoto}>
                    <img src={MapPP} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container position="fixed">
        <div id="2" className={styles.projects}>
          <div className={styles.projecttitle}>
            <div className={styles.projectname}>
              <h2>Projects</h2>
            </div>
            <div className={styles.projectoverview}>
              <p>
                ⌘ It is a long established fact that a reader will distracted by
                the readable content of a page when looking an its readable ⌘
              </p>
            </div>
          </div>
          <div className={styles.maps}>
            {data?.map((item) => (
              <div className={styles.border}>
                <div className={styles.images}>
                  <img src={item.images} alt="" />
                </div>
                <div className={styles.mapsname}>
                  <div className={styles.mapstext}>
                    <h1>{item.name}</h1>
                    <h2>{item.overview}</h2>
                  </div>
                  <Link to={"/"} className={styles.mapsicon}>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container position="fixed">
        <div className={styles.customers}>
          <div className={styles.customerstitle}>
            <div className={styles.customersname}>
              <h2>Customers</h2>
            </div>
            <div className={styles.customersoverview}>
              <p>
                ⌘ It is a long established fact that a reader will distracted by
                the readable content of a page when looking an its readable ⌘
              </p>
            </div>
          </div>
          <div className={styles.customersmarke}>
            <div className={styles.google}>
              <img src={GoogleIcon} alt="" />
            </div>
            <div className={styles.google}>
              <img src={UpworkIcon} alt="" />
            </div>
            <div className={styles.google}>
              <img src={SlackIcon} alt="" />
            </div>
            <div className={styles.google}>
              <img src={LinkedinIcon} alt="" />
            </div>
            <div className={styles.google}>
              <img src={NetflixIcon} alt="" />
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h1>
                  {counterOn && <CountUp duration={2} delay={0} end={2} />}+
                </h1>
                <h3>Years of experience</h3>
              </div>
              <div className={styles.line}></div>
              <div className={styles.stat}>
                <h1>
                  {counterOn && <CountUp duration={2} delay={0} end={84} />}+
                </h1>
                <h3>Completed Projects</h3>
              </div>
              <div className={styles.line}></div>
              <div className={styles.stat}>
                <h1>
                  {counterOn && <CountUp duration={2} delay={0} end={75} />}+
                </h1>
                <h3>Clients Worldwide</h3>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </Container>
      <Container position="fixed">
        <div id="3" className={styles.abouteducation}>
          <div className={styles.education}>
            <div className={styles.educationtitle}>
              <h2>Education</h2>
            </div>
            {education?.map((item) => (
              <div className={styles.educationinfo}>
                <div className={styles.educationimage}>
                  <img src={item.appphoto} alt="" />
                </div>
                <div className={styles.educationabout}>
                  <h3>{item.year}</h3>
                  <h1>{item.educationname}</h1>
                  <h3>{item.appeducation}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.aboutexperience}>
            <div className={styles.experiencetitle}>
              <h2>Experience</h2>
            </div>
            {experience?.map((item) => (
              <div className={styles.experienceinfo}>
                <div className={styles.experienceimage}>
                  <img src={item.appphoto} alt="" />
                </div>
                <div className={styles.experienceabout}>
                  <h3>{item.year}</h3>
                  <h1>{item.educationname}</h1>
                  <h3>{item.appeducation}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container position="fixed">
        <div className={styles.services}>
          <div className={styles.servicestitle}>
            <div className={styles.servicesname}>
              <h2>Services</h2>
            </div>
            <div className={styles.servicesoverview}>
              <p>
                ⌘ It is a long established fact that a reader will distracted by
                the readable content of a page when looking an its readable ⌘
              </p>
            </div>
          </div>
          <div className={styles.servicesboxs}>
            {services?.map((item) => (
              <div className={styles.servicesborder}>
                <div className={styles.servicescontrol}>
                  <div className={styles.servicestext}>
                    <h1>{item.servicesname}</h1>
                    <p>{item.servicesoverview}</p>
                    <h3>{item.servicesprojects}</h3>
                  </div>
                  <div className={styles.servicesicon}>{item.servicesicon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container position="fixed">
        <div className={styles.testimonial}>
          <div className={styles.testimonialtitle}>
            <div className={styles.testimonialname}>
              <h2>Testimonial</h2>
            </div>
            <div className={styles.testimonialoverview}>
              <p>
                ⌘ It is a long established fact that a reader will distracted by
                the readable content of a page when looking an its readable ⌘
              </p>
            </div>
          </div>
          <div className={styles.testimonialboxs}>
            <div className={styles.larry}>
              <div className={styles.larryimages}>
                <img src={LarryPP} alt="" />
              </div>
              <div className={styles.larrytext}>
                <div className={styles.larryinfo}>
                  <div className={styles.larryname}>
                    <h1>Larry Daley</h1>
                    <h3>Product Designer</h3>
                  </div>
                  <div className={styles.larryicon}>
                    <HomeIcon />
                  </div>
                </div>
                <div className={styles.larryoverview}>
                  <p>
                    I am a San francisco-based product designer with a focus on
                    web design, illustration, a visual development. I have a
                    diverse range of experience and industries.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.larry}>
              <div className={styles.larryimages}>
                <img src={LarryPP} alt="" />
              </div>
              <div className={styles.larrytext}>
                <div className={styles.larryinfo}>
                  <div className={styles.larryname}>
                    <h1>Larry Daley</h1>
                    <h3>Product Designer</h3>
                  </div>
                  <div className={styles.larryicon}>
                    <HomeIcon />
                  </div>
                </div>
                <div className={styles.larryoverview}>
                  <p>
                    I am a San francisco-based product designer with a focus on
                    web design, illustration, a visual development. I have a
                    diverse range of experience and industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container position="fixed">
        <div id="4" className={styles.contact}>
          <div className={styles.contacttitle}>
            <div className={styles.contactname}>
              <h2>Contact</h2>
            </div>
            <div className={styles.contactoverview}>
              <p>
                ⌘ It is a long established fact that a reader will distracted by
                the readable content of a page when looking an its readable ⌘
              </p>
            </div>
          </div>
          <div className={styles.contactboxs}>
            <form className={styles.leftboxs}>
              <input
                className={styles.inputname}
                placeholder="Name"
                type="text"
                required
              />
              <input
                className={styles.inputname}
                placeholder="Email"
                type="email"
                required
              />
              <input className={styles.overviewinput} type="text" required />
              <button>Submit</button>
            </form>
            <div className={styles.adress}>
              <div className={styles.adressname}>
                <h2>Adress</h2>
              </div>
              <div className={styles.adresscontrol}>
                <div className={styles.firstadress}>
                  <div className={styles.adressicon}>
                    <AdressIcon />
                  </div>
                  <div className={styles.adresslocation}>
                    <h1>Location</h1>
                    <h2>Baku,Azerbaijan</h2>
                  </div>
                </div>
                <div className={styles.contactadress}>
                  <div className={styles.contactadressicon}>
                    <ContactInfoIcon />
                  </div>
                  <div className={styles.contactadresslocation}>
                    <h1>Contact Info</h1>
                    <h2>fathimabashirli@gmail.com</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RightSide;
