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
    "I am software engineer. I am passionate about creating high quality software. I always do my best to provide maintainable and testable software with clean code and architecture.",
  links: {
    linkedin: undefined,
    github: "https://github.com/matlewan",
    resume: undefined,
  },
  education: [
    {
      name: "Poznań University of Technology",
      place: "Poznań",
      date: "2014-2018",
      degree: "B.Sc. - Bachelor of Science",
      gpa: "4.5/5.0"
    },
    {
      name: "Poznań University of Technology",
      place: "Poznań",
      date: "2018-2019",
      degree: "M.Sc. - Master of Science",
      gpa: "5.0/5.0"
    },
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
      title: "Language",
      info: [
        "Java","Python","C++","Javascript","Bash","Ansible"],
      icon: "fa fa-code"
    },
    // {
    //   title: "Front-end",
    //   info: [
    //     "HTML5","CSS3","Bootstrap3","Es6"],
    //   icon: "fa fa-cubes"
    // },
    // {
    //   title: "web technologies",
    //   info: ["Vue", "React", "Node"],
    //   icon: "fas fa-laptop-code"
    // },
  ],
};

export default info;
