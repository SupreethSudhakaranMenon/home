// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Supreeth S",
  middleName: "",
  lastName: "Karan",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/SupreethSudhakaranMenon",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/supreethsudhakaran.menon.9/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/supreeth__sudhakaran__menon/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/supreeth-sudhakaran-menon-5aa282174/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/MenonSupreeth",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/SupreethSKaran.jpg"),
  imageSize: 385,
  message:
    "My name is Supreeth S Karan. I’m an undergraduate researcher from International Institute of Information Technology at Hyderabad with a dual degree in Electronics and Communication Engineering with MS in research. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: require("../editable-stuff/resume.pdf"),
};



// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SupreethSudhakaranMenon", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Scorecard-for-Credit-Risk-Assessment", "community-app", "Digital-Image-Processing-Project", "digital-logic-design-iiith", "web-app", "fineract", "Engineering-Systems", "Ultrasonic-proximity-sensor", "Tic-Tac-Toe-Game"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 75 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 75 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "supreethmenon14@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Student Software Developer',// Here Add Company Name
      companylogo: require('../assets/img/GSoC.png'),
      date: 'May 2019 – August 2019',
    },
    {
      role: 'Student Mentor', 
      companylogo: require('../assets/img/gci.png'), 
      date: 'December 2019 – January 2020'
    },
    {

      role: 'Open-Source Contributor',
      companylogo: require('../assets/img/mifos.png'),
      date: 'October 2018 – November 2019',
    },
    {
      role: 'Machine Learning Scorecard for Credit Risk Assessment',
      companylogo: require('../assets/img/badge_apache_re.png'),
      date: 'October 2018 - December 2019'
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
