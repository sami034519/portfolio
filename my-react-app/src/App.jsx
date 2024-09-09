import React from "react";
import profilelogo from "./images/PROFILE.jpg";
import axios from "axios";


import backgroundImage1 from "./images/img-1.jpg";
import backgroundImage2 from "./images/img-2.jpg";
import moonicon from "./images/finalmoonicon.png";
import frontendicon from "./images/frontend.png";
import backendicon from "./images/backend.png";
import deployicon from "./images/deployment.png";
import aboutpic from "./images/about-bg.jpg";
import facebook from "./images/facebook white.png";
import insta from "./images/instawhite.png";
import twitter from "./images/twitterwhite.jpg";
import whatsapp from "./images/whatsappwhite.jpg";
import youtube from "./images/youtubewhite.jpg";
import skillimg from "./images/skill img.jpg";
import customweb from "./images/customweb.png";
import restapi from "./images/rest-api-icon.png";
import database from "./images/sql-database-icon.svg";
import security from "./images/security1.jpg";
import shouter from "./images/heroRightImage.svg";
import faqs from "./images/faq.jpeg";
import plus from "./images/collap-plus (1).svg";
import minus from "./images/collap-minus.svg";
import footer1 from "./images/footer1.svg"
import footer2 from "./images/footer2.svg"
import footer3 from "./images/footer3.svg"
import footer4 from "./images/footer4.svg"
import footer5 from "./images/footer5.svg"
import frontendvideo from "./images/frontend-video.gif";
import frontendvideo2 from "./images/frontend2finals.gif"
import backend1 from "./images/backend1-ezgif.com-crop.gif"
import backend2 from "./images/backend2-ezgif.com-crop.gif"
import menuopen from "./images/menu_open.svg"
import menuclose from "./images/menuclose.png"



import { useEffect, useState } from "react";
import "./HoverOverlay.css";
function App() {
  
//mailer code
const [fromemail,setfromemail]=useState('');
const [subject,setsubject]=useState('');
const [message,setmessage]=useState('');
const[username,setusername]=useState('');
const[finalmessage,setfinalmessage]=useState('');
const [formdata,setformdata]=useState({
  from:'',
  subject:'',
  message:'',
})
useEffect(()=>{
  setformdata({
    from:fromemail,
    subject:subject,
    message:message
  })
},[username,fromemail,subject,message]);

const mailer= async (e) => {
  e.preventDefault();
  console.log(fromemail);
  const finaldata=JSON.stringify(formdata);
 await axios.post('http://localhost:3000/api/mailer',finaldata,{
  headers: {
    "Content-Type": "application/json",
  },
}).then((res)=>{
 const mymessage=res.data.message;
 setfinalmessage(mymessage);
}).catch((err)=>{console.log(err)});
}
  
useEffect(()=>{
  const menuopen =document.getElementById('menuopen');
  const menuclose=document.getElementById('menuclose');
  const menu=document.getElementById('menu');
  menuopen.addEventListener('click',()=>{
    menu.style.transition='transform 1s ease';
    menu.style.transform='translateY(0px)';
  });
  menuclose.addEventListener('click',()=>{
    menu.style.transition='transform 1s ease';
    menu.style.transform='translateY(-100%)';
  });

})






  const images = [backgroundImage1, backgroundImage2];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [nextImage, setNextImage] = useState(images[1]);
  const [animationState, setAnimationState] = useState("slide-enter");

  const education = document.getElementById("education");
  const experience = document.getElementById("experience");
  const educationbutton = document.getElementById("educationbutton");
  const experiencebutton = document.getElementById("experiencebutton");

  function showexperience() {
    education.style.display = "none";
    experience.style.display = "flex";
    experiencebutton.style.backgroundColor = "#fef08a";
    educationbutton.style.backgroundColor = "#f59e0b";
    experiencebutton.style.color = "black";
    educationbutton.style.color = "white";
  }
  function showeeducation() {
    experience.style.display = "none";
    education.style.display = "flex";
    educationbutton.style.backgroundColor = "#fef08a";
    experiencebutton.style.backgroundColor = "#f59e0b";
    educationbutton.style.color = "black";
    experiencebutton.style.color = "white";
  }

  useEffect(() => {
    const header = document.getElementById("header");
    const css = document.getElementById("css");
    const javascript = document.getElementById("javascript");
    const talwind = document.getElementById("talwind");
    const react = document.getElementById("react");
    const next = document.getElementById("next");
    const nodejs = document.getElementById("nodejs");
    const mysql = document.getElementById("mysql");
    const mongo = document.getElementById("mongo");
    const express = document.getElementById("express");
    const html = document.getElementById("html");

    const handleScroll = () => {
      const scrolly = window.scrollY;
      console.log(scrolly);

      if (scrolly >= 300) {
        header.style.transition = "background-color 1s ease";
        header.style.backgroundColor = "black";
        header.style.opacity = "0.8";
      }

      if (scrolly >= 1400 || scrolly >= 2700) {
        html.style.transition = "transform 1.5s ease";
        html.style.transform = "translateX(0%)";
        css.style.transition = "transform 1.5s ease";
        css.style.transform = "translateX(0%)";
        javascript.style.transition = "transform 1.5s ease";
        javascript.style.transform = "translateX(0%)";
        react.style.transition = "transform 1.5s ease";
        react.style.transform = "translateX(0%)";
        next.style.transition = "transform 1.5s ease";
        next.style.transform = "translateX(0%)";
        talwind.style.transition = "transform 1.5s ease";
        talwind.style.transform = "translateX(0%)";
        nodejs.style.transition = "transform 1.5s ease";
        nodejs.style.transform = "translateX(0%)";
        mysql.style.transition = "transform 1.5s ease";
        mysql.style.transform = "translateX(0%)";
        mongo.style.transition = "transform 1.5s ease";
        mongo.style.transform = "translateX(0%)";
        express.style.transition = "transform 1.5s ease";
        express.style.transform = "translateX(0%)";
      }

      if (scrolly < 300) {
        header.style.backgroundColor = "";
        header.style.opacity = "";
      }

      if (scrolly < 1400) {
        html.style.transform = "translateX(-100%)";
        css.style.transform = "translateX(-100%)";
        javascript.style.transform = "translateX(-100%)";
        react.style.transform = "translateX(-100%)";
        next.style.transform = "translateX(-100%)";
        talwind.style.transform = "translateX(-100%)";
        nodejs.style.transform = "translateX(-100%)";
        mysql.style.transform = "translateX(-100%)";
        mongo.style.transform = "translateX(-100%)";
        express.style.transform = "translateX(-100%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState("slide-exit");

      setTimeout(() => {
        setCurrentImage(nextImage);
        const nextIndex = (images.indexOf(nextImage) + 1) % images.length;
        setNextImage(images[nextIndex]);
        setAnimationState("slide-enter");
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImage]);

  const words = [
    "WELCOME TO MY PORTFOLIO. ",
    "I AM SAMI. ",
    "FULL-STACK DEVELOPER. ",
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [hashVisible, setHashVisible] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseAfterCompleteWord = 2000;

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const typingTimeout = setTimeout(() => {
      handleTyping();

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseAfterCompleteWord);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, charIndex, words]);

  useEffect(() => {
    const hashBlinkInterval = setInterval(() => {
      setHashVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(hashBlinkInterval);
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };
  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };
  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
  };

  return (
    <>
      <div className="fixed">
        <img className="z-10 max-w-full h-screen" src={backgroundImage2} alt="" />
      </div>
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform ${animationState}`}
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform ${
            animationState === "slide-exit" ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${nextImage})` }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute top-0 left-0 h-full w-1/2 bg-opacity-80 bg-yellow-400 flex flex-col justify-center px-10 py-2 z-10">
          <div className="flex h-[70%] w-full items-center justify-center text-left flex-col gap-y-2">
            <p className="lg:text-[80px] text-4xl text-white font-medium">LET'S BEGIN</p>
            <p className="text-left lg:text-2xl mt-3 text-sm font-semibold">
              {text}
              {hashVisible ? " |" : ""}
            </p>
            <p className="lg:text-sm text-xs">I am here, feel free to contact me</p>
            <button className="border-2 border-white lg:px-6 lg:py-2 px-2 py-1 rounded-md mt-2 hover:scale-105 duration-700 hover:border-black text-white hover:text-black">
              <a className="lg:text-lg text-sm" href="#about">
                LEARN MORE
              </a>
            </button>
          </div>
        </div>

        <header
          id="header"
          className="lg:fixed relative top-0 left-0 w-full bg-opacity-50 z-50   text-white "
        >
          <div id="menu" className="absolute top-0 left-0 right-0 z-50  w-full bg-slate-100  translate-y-[-100%]">
            <div className="px-10 py-7 flex justify-between">
             
                <ul className="w-36 flex flex-col gap-2">
                <li className="font-medium text-black hover:text-yellow-500 hover:scale-105 duration-700 py-2 border-b-2 border-yellow-500">
                  <a href="#">Home</a>
                </li>
                
                
                <li className="font-medium text-black hover:text-yellow-500 hover:scale-105 duration-700 py-2 border-b-2 border-yellow-500">
                  <a href="#contact">Contact</a>
                </li>
                <li className="font-medium text-black hover:text-yellow-500 hover:scale-105 duration-700 py-2 border-b-2 border-yellow-500">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="font-medium text-black hover:text-yellow-500 hover:scale-105 duration-700 py-2 border-b-2 border-yellow-500">
                  <a href="#about">About</a>
                </li>
                <li className="font-medium text-black hover:text-yellow-500 hover:scale-105 duration-700 py-2 border-b-2 border-yellow-500">
                  <a href="#services">Services</a>
                </li>
                </ul>
                <img id="menuclose" className="w-16 h-12 rounded-full" src={menuclose} alt="" />
            </div>
          </div>
          <div className="container mx-auto flex justify-around">
            <div className="px-10 py-2 gap-x-5 lg:flex   items-center">
              <p className="z-0 lg:z-50">
                <span className="text-white lg:text-[50px] text-5xl font-bold hover:text-green-800 cursor-pointer animate-pulse">
                  {" "}
                  Sami
                </span>
                WD
              </p>
            </div>
            <div className="px-10 py-6">
              <ul className="lg:flex hidden gap-x-10">
                <li className=" text-yellow-500 font-medium hover:text-yellow-500 hover:scale-105 duration-700 py-2">
                  <a href="#">Home</a>
                </li>
                <li className="font-medium hover:text-yellow-500 hover:scale-105 duration-700 py-2">
                  <a href="#services">Services</a>
                </li>
                <li className="font-medium hover:text-yellow-500 hover:scale-105 duration-700 py-2">
                  <a href="#contact">Contact</a>
                </li>
                <li className="font-medium hover:text-yellow-500 hover:scale-105 duration-700 py-2">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="font-medium hover:text-yellow-500 hover:scale-105 duration-700 py-2">
                  <a href="#about">About</a>
                </li>
                <div>
                  <img
                    className="max-w-8 py-1 hover:scale-125 duration-500"
                    src={moonicon}
                    alt="Moon Icon"
                  />
                </div>
              </ul>
                <img id="menuopen" className="lg:hidden block h-8 w-8" src={menuopen} alt="" />
            </div>
          </div>
        </header>
      </section>

      <div>
        <div className="w-full flex lg:flex-row flex-col justify-center gap-7 pt-24 pb-14 px-3 cursor-pointer bg-white relative">
          <div className=" overlay  lg:w-[25%] w-full shadow-lg shadow-slate-300 bg-white">
            <div className=" flex lg:justify-between justify-evenly lg:gap-0 gap-5 items-center p-4  hover:text-white">
              <img
                className="max-w-8 z-10 bg-white"
                src={frontendicon}
                alt=""
              />
              <h1 className="  inner text-3xl font-medium ">
                Client-Side Developer
              </h1>
            </div>
            <div>
              <p className="text-wrap text-center text-sm p-5">
                I am a frontend developer and specializes in building the
                user-facing parts of websites and web applications. This role is
                primarily focused on translating design and wireframes into
                functional, interactive, and visually appealing interfaces that
                users interact with directly.
              </p>
            </div>
          </div>
          <div className=" overlay1 lg:w-[25%] w-full shadow-lg shadow-slate-300 bg-white">
            <div className=" flex lg:justify-between justify-evenly lg:gap-0 gap-5 items-center p-4  hover:text-white">
              <img className="max-w-8 bg-white z-10" src={backendicon} alt="" />
              <h1 className=" inner1 text-3xl font-medium">
                Server-Side Developer
              </h1>
            </div>
            <div>
              <p className="text-wrap text-center text-sm p-5">
                I am a server-side developer (or back-end developer) focuses on
                building and maintaining the server-side logic of a website or
                application. Unlike front-end development, which deals with what
                users see and interact with, server-side development is
                concerned.
              </p>
            </div>
          </div>
          <div className=" overlay2  lg:w-[25%] w-full shadow-lg shadow-slate-300 bg-white">
            <div className=" flex lg:justify-between justify-evenly lg:gap-0 gap-5 items-center p-4  hover:text-white">
              <img className="max-w-8 bg-white z-10" src={deployicon} alt="" />
              <h1 className=" inner2 text-3xl font-medium">
                Deployement Of Code
              </h1>
            </div>
            <div>
              <p className="text-wrap text-center text-sm p-5">
                Code deployment is the process of delivering code changes from a
                developer's local environment to a production environment where
                it becomes available to end users. This process is a critical
                aspect of the software development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  bg-slate-50 relative pb-20">
        
        <div className="w-full flex justify-center">
          <h1 id="about" className="pt-20 text-black text-3xl font-bold">ABOUT ME</h1>
        </div>
        <div className="flex justify-center mt-3">
          <div className="h-1 bg-yellow-500 w-14"></div>
          <div className="h-1 bg-black w-14"></div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <p className=" lg:max-w-[50%] max-w-[95%] text-center font-light">
            " I'm a Full Stack Developer with a passion for creating seamless
            web applications. I specialize in both frontend and backend
            development, using technologies like React, Node.js, and databases
            like MongoDB. My expertise includes building user-friendly
            interfaces, RESTful APIs, and scalable server-side solutions.
          </p>
        </div>
        <div className="w-full lg:flex-row    flex flex-col justify-center mt-14 llg:gap-14 gap-10">
          <div className="lg:max-w-[36%] max-w-[100%] lg:h-[438px] relative cursor-pointer">
            <img src={aboutpic} alt="" />
            <div className="w-full absolute bottom-0 h-[15%] bg-black bg-opacity-50 flex items-center justify-center gap-4">
              <img
                className="w-10 h-10 hover:rounded-full border-2 border-white p-1"
                src={facebook}
                alt=""
              />
              <img
                className="w-10 h-10 hover:rounded-full border-2 border-white p-1"
                src={whatsapp}
                alt=""
              />
              <img
                className="w-10 h-10 hover:rounded-full border-2 border-white p-1"
                src={twitter}
                alt=""
              />
              <img
                className="w-10 h-10 hover:rounded-full border-2 border-white p-1"
                src={insta}
                alt=""
              />
              <img
                className="w-10 h-10 hover:rounded-full border-2 border-white p-1"
                src={youtube}
                alt=""
              />
            </div>
          </div>
          <div className="lg:max-w-[40%] w-full lg:mt-0 ">
            <div className="w-full  flex lg:justify-start justify-center items-center lg:p-0 px-5 ">
              <p className="text-center flex lg:flex-row flex-col">
                <span className="text-black lg:text-3xl text-xl font-medium ">
                  HELLO I AM ,
                </span>{" "}
                <span className="text-yellow-500 lg:text-3xl text-xl font-medium">
                  MUHAMMAD SAMIULLAH
                </span>
              </p>
            </div>
            <div className="w-full lg:justify-start justify-center flex lg:mt-4 mt-2">
              <p className=" lg:gap-3 gap-2  text-center flex lg:flex-row l">
                <span className="lg:text-2xl text-black ">
                  Front-End Developer
                </span>
                <span className="lg:text-2xl text-lg text-green-600  ">&</span>{" "}
                <span className="lg:text-2xl  text-black ">Back-End Developer</span>
              </p>
            </div>
            <div className="lg:mt-9 mt-7 lg:p-0 px-5 text-center">
              <p className="font-thin">
                "Hi there! I'm a digital architect who brings ideas to life in
                the virtual world. As a
                <span className=""> Full Stack Developer,</span> I don't just
                build websites—I create immersive experiences that blend art and
                science. With the power of React on the frontend and{" "}
                <span className="">Node.js on the backend</span>, I craft
                responsive and dynamic applications that work seamlessly from
                the user's screen to the server. My toolkit includes everything
                from JavaScript and APIs to databases like{" "}
                <span className="">MongoDB and SQL,</span> making me a
                one-stop-shop for all things web development. Whether it's
                optimizing user interactions or designing scalable server
                infrastructures, I thrive on turning complex challenges into
                simple, elegant solutions. Let’s build something amazing
                together!"
              </p>
            </div>

            <div className="w-full flex gap-5 mt-7 flex-wrap lg:justify-start justify-center">
              <div className="bg-black text-yellow-400 rounded-2xl  flex justify-center items-center px-5 py-1 hover:rounded-none cursor-pointer">
                React
              </div>
              <div className="bg-black text-yellow-400 rounded-2xl flex justify-center items-center px-5 py-1  hover:rounded-none cursor-pointer">
                Next
              </div>
              <div className="bg-black text-yellow-400 rounded-2xl flex justify-center items-center px-5 py-1  hover:rounded-none cursor-pointer">
                Nodejs
              </div>
              <div className="bg-black text-yellow-400 rounded-2xl flex justify-center items-center px-5 py-1  hover:rounded-none cursor-pointer">
                MySQL
              </div>
              <div className="bg-black text-yellow-400 rounded-2xl flex justify-center items-center px-5 py-1  hover:rounded-none cursor-pointer">
                Mongo
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img className="  max-w-[100%] lg:h-[500px] h-[900px]" src={skillimg} alt="" />
        <div className="absolute left-0 top-0 right-0 bottom-0 inset-0 h-full w-full bg-black bg-opacity-75">
          <div className="w-full flex justify-center z-10 text-white font-medium text-4xl p-5">
            <p>MY SKILLS</p>
          </div>

          <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center mt-5 mb-5 ">
            <div className="lg:px-0 px-5 lg:w-[30%] w-[100%] flex flex-col gap-5">
              <div>
                <div>
                  <p className="text-white text-xl">HTML</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="html"
                    className="absolute left-0 h-full w-[100%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1 flex">
                    100%
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <p className="text-white text-xl">CSS</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="css"
                    className="absolute left-0 h-full w-[80%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    80%
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white text-xl">JAVASCRIPT</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="javascript"
                    className="absolute left-0 h-full w-[70%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    70%
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white text-xl">TALWIND CSS</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="talwind"
                    className="absolute left-0 h-full w-[80%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    80%
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white text-xl">EXPRESS JS</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="express"
                    className="absolute left-0 h-full w-[70%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    70%
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:px-0 px-5 lg:w-[30%] w-[100%] flex flex-col gap-5">
              <div>
                <div>
                  <p className="text-white text-xl">REACT</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="react"
                    className="absolute left-0 h-full w-[70%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    70%
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white text-xl">NEXT JS</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="next"
                    className="absolute left-0 h-full w-[55%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    55%
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white text-xl">NODE JS</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="nodejs"
                    className="absolute left-0 h-full w-[70%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    70%
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white text-xl">MYSQL</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="mysql"
                    className="absolute left-0 h-full w-[80%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    80%
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white text-xl">MONGO DB</p>
                </div>
                <div className="relative  w-full bg-white flex flex-col items-center overflow-hidden">
                  <div
                    id="mongo"
                    className="absolute left-0 h-full w-[55%] bg-yellow-500 translate-x-[-100%] transition-transform duration-500"
                  ></div>
                  <p className="relative text-white text-xl font-medium mt-1">
                    55%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full lg:h-[800px] relative lg:bg-white bg-slate-50">
        <div className="lg:absolute lg:top-[35%] flex flex-col lg:flex-row lg:p-0 px-5 w-full lg:gap-14 gap- ">

          <div className="optimization relative bg-white border lg:max-w-[20%] lg:mt-0 mt-4 max-w-[100%] h-[460px] overflow-hidden">
            <div className="absolute h-4 w-14 bg-yellow-500 right-0 top-10 z-10"></div>
            <div className="flex justify-center p-1 items-center gap-3">
              <img
                className="max-w-32 mt-5 bg-white rounded-2xl z-10"
                src={customweb}
                alt=""
              />
            </div>
            <div className="flex justify-center p-2 items-center">
              <p className="optimization1 text-3xl font-medium mb-2">
                Optimization
              </p>
            </div>
            <p className="optimization2 flex px-5 text-center font-thin text-sm z-10">
              Creating responsive, interactive, and user-friendly interfaces
              using technologies like React, Angular, Vue.js, or other
              frameworks. Ensuring compatibility across various devices and
              browsers. Developing robust, secure, and scalable server-side
              logic using Node.js, Django, Ruby on Rails.
            </p>

            <div className="w-full flex justify-center mt-5 mb-3">
              <button className="px-6 py-3 bg-yellow-500 text-white z-10">
                Read More
              </button>
            </div>
          </div>

          <div className="secondcard relative bg-white border lg:max-w-[20%] lg:mt-0 mt-4 max-w-[100%] h-[460px] overflow-hidden">
            <div className=" absolute h-4 w-14 bg-yellow-500 right-0 top-10 z-10"></div>
            <div className="flex justify-center p-1 items-center gap-3">
              <img
                className="max-w-36 mt-5 bg-white rounded-2xl z-10"
                src={restapi}
                alt=""
              />
            </div>
            <div className="flex justify-center p-2 items-center mt-2">
              <p className="secondcard1 text-3xl font-medium mb-2">
                API Development
              </p>
            </div>
            <p className="secondcard2 flex px-5 text-center font-thin text-sm z-10">
              Building RESTful or GraphQL APIs to enable communication between
              different parts of a system or between the system and third-party
              services Integrating third-party APIs, such as payment gateways
              (Stripe, PayPal), social media platforms, geolocation services,
              etc..
            </p>
            <div className="w-full flex justify-center mt-5 mb-3">
              <button className="px-6 py-3 bg-yellow-500 text-white z-10">
                Read More
              </button>
            </div>
          </div>
          <div className="thirdcard relative bg-white border lg:max-w-[20%] lg:mt-0 mt-4 max-w-[100%] h-[460px] overflow-hidden">
            <div className=" absolute h-4 w-14 bg-yellow-500 right-0 top-10 z-10"></div>
            <div className="flex justify-center p-1 items-center gap-3">
              <img
                className="max-w-40 mt-5 bg-white rounded-2xl z-10"
                src={database}
                alt=""
              />
            </div>
            <div className="flex justify-center p-2 items-center mt-3">
              <p className="thirdcard1 text-3xl font-medium mb-2">
                DB Management
              </p>
            </div>
            <p className="thirdcard2 px-5 text-center font-thin text-sm">
              Designing and implementing relational databases (like MySQL,
              PostgreSQL) or NoSQL databases (like MongoDB) to <br /> store and
              manage application data efficiently.Ensuring database security,
              optimization, and scalability to handle growing data and user
              demands.
            </p>
            <div className="w-full flex justify-center mt-5 mb-3">
              <button className="px-6 py-3 bg-yellow-500 text-white z-10">
                Read More
              </button>
            </div>
          </div>
          <div className="fourthcard relative bg-white border lg:max-w-[20%] lg:mt-0 mt-4 max-w-[100%] h-[460px] overflow-hidden mb-3">
            <div className=" absolute h-4 w-14 bg-yellow-500 right-0 top-10 z-10"></div>
            <div className="flex justify-center p-1 items-center gap-3">
              <img
                className="max-w-32 mt-5 bg-white z-10 rounded-2xl"
                src={security}
                alt=""
              />
            </div>
            <div className="flex justify-center p-2 items-center">
              <p className="fourthcard1 text-3xl font-medium mb-2">
                Security Enhance
              </p>
            </div>
            <p className=" fourthcard2 px-5 text-center font-thin text-sm mt-3">
              Implementing security best practices to protect applications
              against common threats like SQL injection, cross-site scripting
              (XSS), cross-site request forgery (CSRF), and data breaches.
              Setting up HTTPS/SSL certificates, secure authentication
              mechanisms, and regular security audits.
            </p>
            <div className="w-full flex justify-center mt-5 mb-3">
              <button className="px-6 py-3 bg-yellow-500 text-white z-10">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="h-[60%] lg:block hidden w-full bg-slate-50">
          <div className="w-full flex justify-center ">
            <p id="services" className="text-4xl text-black mt-20 font-bold">SERVICES</p>
          </div>

          <div className="w-full flex justify-center mt-1">
            <div className="h-1 w-[4%] bg-yellow-500"></div>
            <div className="h-1 w-[4%] bg-black"></div>
          </div>
          <div className="w-full flex justify-center mt-5">
            <p className="font-light max-w-[50%] text-center ">
              I am offering a range of valuable services to clients is
              essential. These services often span both frontend and backend
              development, ensuring complete, functional, and optimized
              applications. Here are some of the best services a full-stack
              developer can provide to clients.
            </p>
          </div>
        </div>
        <div className="h-[40%] lg:block hidden  w-full bg-yellow-500"></div>

      </div>

      <div className=" lg:h-[30vh] h-[10vh] lg:w-full bg-opacity-50   bg-black relative"></div>



      <div className=" bg-slate-50 relative pb-10">
        <div className="w-full justify-center flex pt-16 gap-14">
          <div
            onClick={() => showeeducation()}
            id="educationbutton"
            className="bg-[#fef08a] lg:px-10 lg:py-4 px-4 py-2 flex justify-center items-center text-black font-medium"
          >
            <button>My Education</button>
          </div>
          <div
            onClick={() => showexperience()}
            id="experiencebutton"
            className="bg-[#f59e0b] lg:px-10 lg:py-4 px-4 py-2 flex justify-center items-center text-white font-medium"
          >
            {" "}
            <button>My Experience</button>
          </div>
        </div>
        <div
          id="education"
          className=" h-[700px] w-full flex  justify-center gap-10  "
        >
          <div className="ml-8">
            <div className="mt-[90%]">
              <p className="lg:text-2xl text-lg font-medium "> March 2017 to 2019</p>
            </div>
            <div className="mt-[55%]">
              <p className="lg:text-2xl text-lg font-medium"> May 2019 to 2021</p>
            </div>
            <div className="mt-[65%]">
              <p className="lg:text-2xl text-lg font-medium"> August 2021 to 20..</p>
            </div>
          </div>
          <div className=" relative  flex flex-col justify-center w-10">
            <div className="h-40 w-1 bg-black"></div>
            <div className=" absolute h-5 w-5 bg-yellow-500 rounded-full lg:right-7 right-3 lg:top-[25%] top-[15%]"></div>

            <div className="h-40 w-1 bg-black"></div>
            <div className=" absolute h-5 w-5 bg-yellow-500 rounded-full lg:right-7 right-3 lg:top-[50%] top-[40%]"></div>

            <div className="h-40 w-1 bg-black"></div>
            <div className=" absolute h-5 w-5 bg-yellow-500 rounded-full lg:right-7 right-3 lg:top-[80%] top-[70%]"></div>

            <div className="h-40 w-1 bg-black"></div>
          </div>

          <div>
            <div className="mt-[60%] flex flex-col gap-4 ">
              <p className="font-bold lg:text-3xl text-lg">Matric</p>
              <p>Marks/Grade 92%</p>
              <p>The Learning School And College</p>
            </div>

            <div className="mt-[18%] flex flex-col gap-4 ">
              <p className="font-bold lg:text-3xl text-lg">Intermediate</p>
              <p>Marks/Grade 90%</p>
              <p>The Punjab Group Of Colleges</p>
            </div>

            <div className="mt-[20%] flex flex-col gap-4 ">
              <p className="font-bold lg:text-3xl text-lg">Computer Science</p>
              <p>CGPA/Grade 75%</p>
              <p>The University Of Lahore</p>
            </div>
          </div>
        </div>

        <div
          id="experience"
          className=" h-[700px] w-full flex justify-center gap-10 hidden "
        >
          <div className="ml-8">
            <div className="mt-[50%]">
              <p className="lg:text-2xl text-lg font-medium "> August 2023 to November</p>
            </div>
            <div className="mt-[55%]">
              <p className="lg:text-2xl text-lg font-medium "> December 2023 to Feb 2024</p>
            </div>
            <div className="mt-[55%]">
              <p className="lg:text-2xl text-lg font-medium "> April 2024 to August</p>
            </div>
          </div>
          <div className=" relative  flex flex-col justify-center w-10">
            <div className="h-40 w-1 bg-black"></div>
            <div className=" absolute h-5 w-5 bg-yellow-500 rounded-full lg:right-7 right-3 lg:top-[25%] top-[15%]"></div>

            <div className="h-40 w-1 bg-black"></div>
            <div className=" absolute h-5 w-5 bg-yellow-500 rounded-full lg:right-7 right-3 lg:top-[50%] top-[40%]"></div>

            <div className="h-40 w-1 bg-black"></div>
            <div className="absolute h-5 w-5 bg-yellow-500 rounded-full lg:right-7 right-3 lg:top-[80%] top-[70%]"></div>

            <div className="h-40 w-1 bg-black"></div>
          </div>

          <div>
            <div className="mt-[60%] flex flex-col gap-4 ">
              <p className="font-bold lg:text-3xl text-lg">Full-Stack Course</p>
              <p>Skill 52%</p>
              <p>The EVS Software Academy</p>
            </div>

            <div className="mt-[18%] flex flex-col gap-4 ">
              <p className="font-bold lg:text-3xl text-lg">Internship</p>
              <p>Skill 70%</p>
              <p>The Whetstonez Softwaren Company</p>
            </div>

            <div className="mt-[20%] flex flex-col gap-4 ">
              <p className="font-bold lg:text-3xl text-lg">Preparation/Job</p>
              <p>Skill 80%</p>
              <p>The Whetstonez Softwaren Company</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-500 relative  pb-20">
        <div className="w-full flex flex-col justify-center pt-20 gap-3 ">
          <p className="text-4xl font-bold text-center font-sans text-black">
            Frequently Asked Questions
          </p>
          <div className="flex justify-center w-full">
            <div className="h-[6px] w-14 bg-white"></div>
            <div className="h-[6px] w-14 bg-black"></div>
          </div>
          <div className="w-full flex justify-center mt-4">
            <p className="lg:max-w-[40%] max-w-[95%] text-center text-white  text-sm">
              Welcome to our Frequently Asked Questions section! Here, you'll
              find answers to the most common questions we receive. Whether
              you're looking for more information about our questions & Answers
              in interview..
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col justify-center gap-10 mt-20">
          <div className=" imgtooverlay relative">
            <img className="lg:max-w-[500px] z-10" src={faqs} alt="" />
            <div className=" overlaytoshow hidden absolute h-full w-full top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50">
              <div className="m-10 border border-white h-[82%] w-[82%] flex justify-center items-center gap-3 cursor-pointer">
                <div className="border border-white rounded-full hover:rounded-none ">
                  <img
                    className="w-8 h-8 p-1 rounded-full hover:rounded-none"
                    src={whatsapp}
                    alt=""
                  />
                </div>
                <div className="border border-white rounded-full hover:rounded-none">
                  <img
                    className="w-8 h-8 p-1 rounded-full hover:rounded-none"
                    src={insta}
                    alt=""
                  />
                </div>
                <div className="border border-white rounded-full hover:rounded-none">
                  <img
                    className="w-8 h-8 p-1 rounded-full hover:rounded-none"
                    src={facebook}
                    alt=""
                  />
                </div>
                <div className="border border-white rounded-full hover:rounded-none">
                  <img
                    className="w-8 h-8 p-1 rounded-full hover:rounded-none"
                    src={twitter}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:max-w-[50%] w-full flex flex-col justify-center gap-4 px-5">
            <div className="flex max-w-[600px]">
              <div className="flex flex-col bg-slate-800 items-center p-1 px-4 gap-1 max-w-[480px]">
                <p className="text-white lg:text-2xl text-lg">
                  What is front-end development?
                </p>
                <p
                  id="q1"
                  className={`text-xs font-thin text-white  overflow-hidden transition-all duration-1000 ${
                    isVisible ? "max-h-16 border-t border-t-white" : "max-h-0"
                  }`}
                >
                  Front-end development refers to the part of web development
                  that focuses on creating the user interface and experience. It
                  involves everything users see and interact with on a website,
                  such as the layout, design, and interactive elements.
                </p>
              </div>
              <div className="flex items-center justify-center bg-black p-1 lg:px-2 lg:w-10 w-16">
                <img
                  id="plus1"
                  className={`w-8 h-8 cursor-pointer ${
                    isVisible ? "hidden" : "block"
                  }`}
                  src={plus}
                  alt="Show content"
                  onClick={toggleVisibility}
                />
                <img
                  id="minus1"
                  className={`w-8 h-8 cursor-pointer ${
                    isVisible ? "block" : "hidden"
                  }`}
                  src={minus}
                  alt="Hide content"
                  onClick={toggleVisibility}
                />
              </div>
            </div>
            <div className="flex max-w-[600px]">
              <div className="flex flex-col bg-slate-800 items-center p-1 px-4 gap-1 max-w-[480px]">
                <p className="text-white lg:text-2xl text-lg">
                  What is back-end development?
                </p>{" "}
                <p
                  id="q2"
                  className={`text-xs font-thin text-white  overflow-hidden transition-all duration-1000 ${
                    isVisible1 ? "max-h-16 border-t border-t-white" : "max-h-0"
                  }`}
                >
                  back-end development is concerned with the server side of a
                  web application. It involves creating and managing the
                  database, server, and application logic that processes
                  requests from the front end. Back-end developers work with
                  server-side languages like Node.js
                </p>
              </div>
              <div className="flex items-center bg-black p-1 lg:px-2 justify-center lg:w-10 w-16">
                <img
                  id="plus2"
                  className={`w-8 h-8 cursor-pointer ${isVisible1 ? "hidden" : "block"} `}
                  src={plus}
                  alt=""
                  onClick={toggleVisibility1}
                />
                <img
                  id="minus2"
                  className={`h-8 w-8 cursor-pointer ${isVisible1 ? "block" : "hidden"}`}
                  src={minus}
                  alt=""
                  onClick={toggleVisibility1}
                />
              </div>
            </div>
            <div className="flex max-w-[600px]">
              <div className="flex flex-col bg-slate-800 items-center p-1 px-4 gap-1 max-w-[480px]">
                <p className="text-white lg:text-2xl text-lg">
                  What is REST API in Development ?
                </p>{" "}
                <p
                  id="q3"
                  className={`text-xs font-thin text-white  overflow-hidden duration-1000 transition-all ${
                    isVisible2 ? "max-h-16 border-t border-t-white" : "max-h-0"
                  }`}
                >
                  A REST (Representational State Transfer) API is an
                  architectural style that defines a set of constraints for
                  building web services. It allows the front end of a web
                  application to interact with the back end by making HTTP
                  requests (such as GET, POST, PUT, DELETE).
                </p>
              </div>
              <div className="flex items-center bg-black p-1 lg:px-2 justify-center lg:w-10 w-16">
                <img
                  id="plus3"
                  className={`h-8 w-8 cursor-pointer ${isVisible2 ? "hidden" : "block"}`}
                  src={plus}
                  alt=""
                  onClick={toggleVisibility2}
                />
                <img
                  id="minus3"
                  className={`h-8 w-8 cursor-pointer ${isVisible2 ? "block" : "hidden"}`}
                  src={minus}
                  alt=""
                  onClick={toggleVisibility2}
                />
              </div>
            </div>
            <div className="flex max-w-[600px]">
              <div className="flex flex-col bg-slate-800 items-center p-1 px-4 gap-1 max-w-[480px]">
                <p className="text-white lg:text-2xl text-lg">
                  What is the role of a database ?
                </p>{" "}
                <p
                  id="q4"
                  className={`text-xs font-thin text-white  overflow-hidden duration-1000 transition-all ${
                    isVisible3 ? "max-h-16 border-t border-t-white" : "max-h-0"
                  }`}
                >
                  A database is used to store, manage, and retrieve data for web
                  applications. In the context of back-end development,
                  databases hold essential information such as user data.
                  Developers use database management systems (DBMS) like MySQL
                </p>
              </div>
              <div className="flex items-center bg-black p-1 lg:px-2  justify-center lg:w-10 w-16">
                <img
                  id="plus3"
                  className={`h-8 w-8 cursor-pointer ${isVisible3 ? "hidden" : "block"}`}
                  src={plus}
                  alt=""
                  onClick={toggleVisibility3}
                />
                <img
                  id="minus3"
                  className={`h-8 w-8 cursor-pointer ${isVisible3 ? "block" : "hidden"}`}
                  src={minus}
                  alt=""
                  onClick={toggleVisibility3}
                />
              </div>
            </div>

            <div className="flex max-w-[600px]">
              <div className="flex flex-col bg-slate-800 items-center p-1 px-4 gap-1 max-w-[480px]">
                <p className="text-white lg:text-2xl text-lg">
                  Why FS Developers high demand?
                </p>{" "}
                <p
                  id="q4"
                  className={`text-xs font-thin text-white  overflow-hidden duration-1000 transition-all ${
                    isVisible4 ? "max-h-16 border-t border-t-white" : "max-h-0"
                  }`}
                >
                  They can handle multiple parts of a project, reducing the need
                  to hire separate front-end and back-end developers. They bring
                  versatility to a team, making it easier to transition between
                  different phases of development.
                </p>
              </div>
              <div className="flex items-center bg-black p-1 lg:px-2 justify-center lg:w-10 w-16">
                <img
                  id="plus3"
                  className={`h-8 w-8 cursor-pointer ${isVisible4 ? "hidden" : "block"}`}
                  src={plus}
                  alt=""
                  onClick={toggleVisibility4}
                />
                <img
                  id="minus3"
                  className={`h-8 w-8 cursor-pointer ${isVisible4 ? "block" : "hidden"}`}
                  src={minus}
                  alt=""
                  onClick={toggleVisibility4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10  w-full bg-gradient-to-r from-slate-200 to-slate-50 relative ">
        <div className="w-full flex justify-center pt-24">
          <p id="contact" className="text-3xl font-bold">CONTACT ME</p>
           </div>
           <div className="flex w-full justify-center mt-3">
            <div className="h-[6px] w-14 bg-yellow-500"></div>
            <div className="h-[6px] w-14 bg-white"></div>
            <div className="h-[6px] w-14 bg-black"></div>
          </div>
          <div className="w-full flex justify-center pt-4">
          <p className=" lg:max-w-[50%] text-center font-thin max-w-[95%]">"Whether you're looking to discuss a new project, collaborate on an exciting idea, or just have a tech-related question, I’m here to help! As a full-stack developer with a passion for building dynamic and responsive web applications, I'm always excited to connect with like-minded individuals and explore new opportunities".</p>
           </div>
        <div className="w-full flex lg:flex-row flex-col justify-center mt-20 gap-20">
          <form onSubmit={mailer} action="" className="cursor-pointer">
           <div>
            <div className="flex gap-7 px-2">
              <div><input className="py-4 px-3 lg:w-56 w-40 border focus:border-none focus:outline-none" type="text" placeholder="Name*"
              required
              onChange={(e)=>{setusername(e.target.value)}}
              
              /></div>
              <div><input className="py-4 px-3 lg:w-56 w-40 border focus:border-none focus:outline-none" type="text" placeholder="Email*"
              onChange={(e)=>{setfromemail(e.target.value)}} 
              required
              /></div>
            </div>
            <div className="lg:px-0 px-2">
    <input className="w-full  mt-4 py-4 px-3 border focus:border-none focus:outline-none" type="text" placeholder="Subject"
    onChange={(e)=>{setsubject(e.target.value)}}
    required
    />
</div>
<div className="lg:px-0 px-2">
    <textarea 
        className="w-full mt-4 h-52 p-3 border focus:border-none focus:outline-none" 
        placeholder="Enter your message here..."
        onChange={(e)=>{setmessage(e.target.value)}}
        required
    ></textarea>
</div>
          <div className="w-full flex justify-center lg:px-0 px-2"><input className=" bg-yellow-500 hover:bg-yellow-600 hover:scale-105 duration-1000 text-xl text-white p-3 cursor-pointer mt-2 w-full" type="submit" name="" id="" /></div>
          <p className="text-green-600">{finalmessage}</p>
           </div>
           </form>
           <div className="">
          <div className="w-full flex justify-center lg:justify-start"><p className="text-4xl  font-medium">Muhammad Sami</p></div>
          <div className="mt-2  text-slate-500 w-full flex justify-center lg:justify-start "><p className=" ">FE/BE Developer</p></div>
          <div className="mt-6 w-full flex justify-center lg:justify-start"><p className="text-2xl font-medium text-slate-700  ">Phone</p></div>
          <div className="mt-2 w-full flex justify-center lg:justify-start text-slate-500 "><p className=" ">+92345 1946032</p></div>
          <div className=" text-slate-500 w-full flex justify-center lg:justify-start"><p className=" ">+92333 0685543</p></div>
          <div className="mt-6 w-full flex justify-center lg:justify-start"><p className="text-2xl font-medium text-slate-700  ">Email</p></div>
          <div className="mt-2 w-full flex justify-center lg:justify-start text-slate-500 "><p className=" ">sami430ullah@gmail.com</p></div>
          <div className="mt-6 w-full flex justify-center lg:justify-start"><p className="text-2xl font-medium text-slate-700  ">Website</p></div>
          <div className="mt-2 w-full flex justify-center lg:justify-start text-slate-500 "><p className=" ">www.samiDeveloper.com</p></div>
          <div className="w-full    justify-center lg:justify-start flex  gap-5 mt-6">
            <img className="w-5" src={footer1} alt="" />
            <img className="w-5" src={footer2} alt="" />
            <img className="w-5" src={footer3} alt="" />
            <img className="w-5" src={footer4} alt="" />
            <img className="w-5" src={footer5} alt="" />
          
          </div>


           </div>
        </div>
      </div>
      <div className="bg-slate-800 relative  pb-11 ">
        <div className="w-full justify-center flex "><p id="portfolio" className="text-white text-4xl font-medium pt-16 ">MY PORTFOLIO</p></div>

       

        <div className="w-full justify-center flex mt-3 pb-5"><div  className="w-16 h-2 bg-yellow-500"></div><div className="w-24 h-2 bg-white"></div><div  className="w-16 h-2 bg-yellow-500"></div></div>

        <div className="w-full justify-center flex pb-28 "><p className="text-white  lg:max-w-[50%] max-w-[95%] text-center font-thin">"Hi, I'm SAMI, a Full-Stack Developer! With a passion for creating seamless digital experiences, I specialize in both front-end and back-end development. From designing interactive and responsive user interfaces to building robust server-side applications, I bring ideas to life through code. My toolkit includes [mention key technologies, e.g., JavaScript, React, Node.js, Express, MongoDB, etc.], and I’m always eager to learn new skills and frameworks." </p></div>
       <div className=" w-full flex lg:flex-row flex-col justify-center gap-10">
          
        <div className=" lg:w-[35%] max-w-[100%]  ">
       <div className="  port1 relative overflow-hidden mx-auto text-center max-h-[270px] p-4 bg-slate-500  rounded-lg shadow-md  mb-5">
      <img src={frontendvideo} alt="Frontend Animation" className="w-full  h-[230px] rounded-lg" />
      <div className=" port1show h-full w-full absolute bg-black top-0 bottom-0 left-0 right-0 bg-opacity-70 flex justify-center items-center">
           <p className="text-white text-2xl"> ADVANCED UI DEVELOPMENT</p>
      </div>
    </div>
    <div className=" port2 relative overflow-hidden mx-auto text-center p-4 max-h-[300px] bg-slate-500  rounded-lg shadow-md ">
      <img src={backend1} alt="Frontend Animation" className="w-full  rounded-lg  h-[230px]" />
      <div className=" port2show h-full w-full absolute bg-black top-0 bottom-0 left-0 right-0 bg-opacity-70 flex justify-center items-center">
           <p className="text-white text-2xl">FAST SERVER DEVELOPMENT</p>
      </div>
    </div>
    </div>

<div className="lg:w-[35%] max-w-[100%] ">

<div className="port3 overflow-hidden mx-auto text-center p-4 mb-5  max-h-[300px] bg-slate-500 rounded-lg shadow-md relative">
      <img src={backend2} alt="Frontend Animation" className="w-full rounded-lg h-[230px]" />
      <div className=" port3show h-full w-full absolute bg-black top-0 bottom-0 left-0 right-0 bg-opacity-70 flex justify-center items-center">
           <p className="text-white text-2xl "> UNIQUE BACKEND DEVELOPMENT</p>
      </div>
    </div>

    <div className=" port4 overflow-hidden mx-auto text-center p-4  max-h-[270px] bg-slate-500 rounded-lg shadow-md relative ">
      <img src={frontendvideo2} alt="Frontend Animation" className="w-full  h-[230px] rounded-lg " />
      <div className=" port4show h-full w-full absolute bg-black top-0 bottom-0 left-0 right-0 bg-opacity-70 flex justify-center items-center">
           <p className="text-white text-2xl"> FRONTEND/BACKEND DEVELOPMENT</p>
      </div>
    </div>
 </div>
    



       </div>
     </div>
    <div className='pb-2 w-full bg-slate-100 relative lg:pt-28 pt-14'>
    <div className="">
        <div className="flex  flex-col w-fulljustify-center items-center gap-4">
          
          <div className='rounded-full flex items-center gap-3 cursor-pointer'>
            
              <p className='text-center text-xl font-bold  hover:text-blue-500 line-clamp-2'><span className='text-yellow-500 animate-pulse'>Web</span> <br /> <span className='text-green-700 animate-pulse'>Developer</span></p>
               
               </div>
            
               <p className="lg:w-[30%] w-[95%] text-center text-sm">I am a full-stack developer with unique thinking skills. I develops both client side and server side using different environments for javascript </p>
          </div>
        

        <div className="w-full flex justify-center mt-8">
          <div className=" w-[80%] border-t-2 border-slate-500 bg-blue-100"></div>
        </div>
      </div>
      <div className=" flex lg:justify-evenly lg:flex-row flex-col-reverse w-full pt-2 mb-8">
        <div>
          <p className="text-nowrap text-center text-base ">
            © 2024 Sami Ullah. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center  mb-2 gap-x-5 ">
          <img className="w-7 rounded-xl" src={footer1} alt="" />
          
          <img className="w-7 rounded-xl " src={footer3} alt="" />
          <img className="w-7 rounded-xl " src={footer4} alt="" />
          <img className="w-7 rounded-xl " src={footer5} alt="" />
        </div>
        <div className=" flex justify-center  mb-2 gap-x-5 text-base ">
          <a href="">Privacy-Policy</a>
          <a href="">Terms and Conditions</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
