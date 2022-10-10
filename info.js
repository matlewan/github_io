let info = {
  name: "Mateusz Lewandowski",
  logo_name: "Mateusz L",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: true
    }
  },
  description:
    "I am software engineer. I am passionate about creating high quality software. I always do my best to provide maitanable and testable software with clean code and architecture.",
  links: {
    linkedin: undefined,
    github: "https://github.com/matlewan",
    resume: undefined,
  },
  education: [
    // {
    //   name: "KFS University",
    //   place: "Kafr Elsheikh",
    //   date: "sep, 2018 - present",
    //   degree: "bachelor in software engineering",
    //   gpa: "3.1/4.0",
    //   description:
    //     "",
    //   skills: [
    //     "Software Engineering",
    //     "web programming",
    //     "UI/UX design",
    //     "Front-end developing",
    //   ]
    // },
  ],
  experience: [
    // {
    //   name: "Udacity",
    //   place: "Egypt",
    //   date: "Jun 2021 - Jan 2022",
    //   position: "React Web Developer",
    //   description:
    //     "",
    //   skills: ["Javascript", "Typescript", "ReactJS", "React-Redux", "webpack", "NLP"]
    // },
  ],
  skills: [
    {
      title: "UX/UI Design",
      info: ["Figma", "Illustrator", "XD", "Photoshop", "Gimp"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "Language",
      info: [
        "Python","Javascript","TypeScript","Java","C#"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3","Es6"],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "Node"],
      icon: "fas fa-laptop-code"
    },
  ],
};

export default info;
