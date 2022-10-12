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
      name: "62nd Polish National Physics Olympiad",
      date: "2013",
      degree: "Finalist (100% score on final high school physics exam)"
    },
    {
      name: "65th Polish National Maths Olympiad",
      date: "2014",
      degree: "Finalist (100% score on final high school maths exam)"
    },
    {
      name: "Poznań University of Technology",
      place: "Poznań",
      date: "10.2014 - 02.2018",
      degree: "B.Sc. - Bachelor of Science",
      gpa: "4.5/5.0"
    },
    {
      name: "MindsEater",
      place: "Poznań",
      date: "10.2017-03.2018",
      position: "Web Developer",
      description:
        "Commercial project written as a part of B.Sc. thesis",
      skills: ["PHP", "MySQL", "Git", "JS", "HTML/CSS", "Redmine"]
    },
    {
      name: "Poznań University of Technology",
      place: "Poznań",
      date: "03.2018 - 10.2019",
      degree: "M.Sc. - Master of Science",
      gpa: "5.0/5.0"
    },
    {
      name: "Poznań University of Technology",
      place: "Poznań",
      date: "10.2017-03.2018",
      position: "Web Developer",
      description:
        "M.Sc. thesis : Visualization of decision rules",
      skills: ["Vue.js", "JS", "D3.js", "Java", "Jersey", "HTML/CSS"]
    },
  ],
  experience: [
    {
      name: "Medhub / Nexus Polska",
      place: "Poznań",
      date: "07.2017-09.2019",
      position: "Database Developer",
      description:
        "Hospital management system: pharmacy, cytostatics",
      skills: ["PL/SQL", "SQL", "SVN", "SQL Developer", "Redmine", "Oracle Forms", "Oracle Reports"]
    },
    {
      name: "Kalasoft",
      place: "Poznań",
      date: "11.2019-07.2021",
      position: "Java Developer",
      description:
        "ERP system for universities: module deanery",
      skills: ["Java", "Swing", "Progress 4GL", "Ant", "Linux", "SOAP UI", "JasperReports", "SVN", "Redmine"]
    },
    {
      name: "PKO BP",
      place: "Poznań",
      date: "08.2021 - now",
      position: "Senior Java Developer / DevOps",
      description:
        "CRM system for bank employees.",
      skills: ["Java", "Spring Boot", "Hibernate", "JUnit", "Maven", "Microservices", "Jenkins",
        "Ansible", "Linux / Bash", "Grafana / Prometheus / InfluxDb","Telegraf / Node exporter", "Monitoring", "Swagger", "Postman", "JIRA", "Teams", "ELK / Kibana"]
    },
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
