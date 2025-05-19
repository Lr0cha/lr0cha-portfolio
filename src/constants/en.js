import phpEcommerce from "../assets/projects/phpEcommerce.png";
import dateCalculator from "../assets/projects/dateCalculator.png";
import budget from "../assets/projects/budget.png";
import findBooks from "../assets/projects/findBooks.png";
import mediaPage from "../assets/projects/mediaPage.png";
export default {
  HERO_CONTENT: `I'm an IT student and Full Stack developer, with experience in front-end technologies such as ReactJS and back-end using Java with Spring Framework, as well as databases such as MySQL, PostgreSQL and other tools. My goal is to apply and expand my knowledge, and I'm open to freelance and internship opportunities.`,

  EDUCATION: [
    {
      year: "2023 - Present",
      formation: "Associate's Degree in Systems Analysis and Development",
      institution: "Fatec Antonio Russo",
      description: `So far in my education, I have learned Object-Oriented Programming in Java, participated in a group project with JavaFX using MVC and DAO for database access. I also developed web applications with PHP, applying the same object-oriented approach and MVC pattern, using Scrum to create an E-commerce with PDO. Additionally, I studied Excel, VBA, and other tools.`,
      technologies: [
        "Java",
        "JavaFX",
        "PHP",
        "MVC",
        "Scrum",
        "Python",
        "Excel",
        "VBA",
      ],
    },
    {
      year: "2022 - 2023",
      formation: "Technical Course in Systems Development",
      institution: "Centro Paula Souza",
      description: `During my course, I learned Programming Logic with Java, developed CRUDs with MySQL, built web applications with PHP, and became familiar with Scrum and data modeling.`,
      technologies: ["Java", "MySQL", "PHP", "Scrum", "Data Modeling"],
    },
  ],

  PROJECTS: [
    {
      title: "Media Tracker website",
      image: mediaPage,
      description: "Site to track your progress on your favorite content.",
      technologies: ["Nextjs", "Typescript", "Supabase"],
      source: "https://github.com/Lr0cha/media-tracker",
      live: "https://media-tracker-inky.vercel.app/",
    },
    {
      title: "Personal Budget Website",
      image: budget,
      description:
        "A FullStack application to manage and record your expenses.",
      technologies: [
        "Java",
        "Spring",
        "PostgreSQL",
        "React",
        "Typescript",
        "TailwindCSS",
      ],
      source: "https://github.com/Lr0cha/personal-budget",
      live: "https://lr0cha-personal-budget.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      image: phpEcommerce,
      description:
        "A fully functional e-commerce website with features such as product listing, shopping cart and user authentication.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      source: "https://github.com/Lr0cha/ecommerce-mvc-php",
      live: "",
    },
    {
      title: "Find Books Website",
      image: findBooks,
      description:
        "A site to search for book details using the OpenLibrary API.",
      technologies: ["React", "Typescript", "TailwindCSS"],
      source: "https://github.com/Lr0cha/search-books",
      live: "https://lr0cha-find-books.vercel.app/",
    },
    {
      title: "Date Calculator Website",
      image: dateCalculator,
      description:
        "A website to calculate the difference between two dates, displaying the result in years, months, weeks, and days",
      technologies: ["HTML", "CSS", "JavaScript"],
      source: "https://github.com/Lr0cha/date-calculator",
      live: "https://lr0cha.github.io/date-calculator/",
    },
  ],

  SHOW_MORE: "Show more",
  SHOW_LESS: "Show less",

  CONTACT: {
    country: "Brazil ",
    phone: "+55 11 985353732",
    email: "ldrocha16@gmail.com",
  },
};
