import phpEcommerce from "../assets/projects/phpEcommerce.png";
import dateCalculator from "../assets/projects/dateCalculator.png";
import budget from "../assets/projects/budget.png";
import myPortfolio from "../assets/projects/myPortfolio.png";
import findBooks from "../assets/projects/findBooks.png";
export default {
  HERO_CONTENT: `Sou estudante de TI e desenvolvedor Full Stack, com experiência em tecnologias de front-end como ReactJS e back-end usando Java com Spring Framework, além de bancos de dados como MySQL, PostgreSQL e outras ferramentas. Meu objetivo é aplicar e expandir meus conhecimentos, e estou aberto a oportunidades de freelance e estágio.`,

  EDUCATION: [
    {
      year: "2023 - Presente",
      formation: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Fatec Antonio Russo",
      description: `Até o momento, na minha formação, aprendi Programação Orientada a Objetos em Java, participei de um projeto em grupo com JavaFX utilizando MVC e DAO para acesso a banco de dados. Também desenvolvi aplicações web com PHP, aplicando a mesma abordagem orientada a objetos e padrão MVC, utilizando Scrum para criar um E-commerce com PDO. Além disso, estudei Excel, VBA e outras ferramentas.`,
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
      formation: "Curso Técnico em Desenvolvimento de Sistemas",
      institution: "Centro Paula Souza",
      description: `Durante o meu curso, aprendi Lógica de Programação com Java, desenvolvi CRUDs com MySQL, criei aplicações web com PHP e me familiarizei com Scrum e modelagem de dados.`,
      technologies: ["Java", "MySQL", "PHP", "Scrum", "Modelagem de Dados"],
    },
  ],

  PROJECTS: [
    {
      title: "Site de controle pessoal de despesas",
      image: budget,
      description:
        "Uma aplicação FullStack para gerir e registar as suas despesas",
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
      title: "Site de busca de livros",
      image: findBooks,
      description:
        "Um site para pesquisar detalhes de livros utilizando a API do OpenLibrary.",
      technologies: ["React", "Typescript", "TailwindCSS"],
      source: "https://github.com/Lr0cha/search-books",
      live: "https://lr0cha-find-books.vercel.app/",
    },
    {
      title: "Site de E-Commerce",
      image: phpEcommerce,
      description:
        "Um site de e-commerce totalmente funcional com recursos como gerenciamento de sessão de usuários, listagem de produtos, carrinho de compras e autenticação de usuário.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      source: "https://github.com/Lr0cha/ecommerce-mvc-php",
      live: "",
    },
    {
      title: "Site Diferença entre Datas",
      image: dateCalculator,
      description:
        "Um site para calcular a diferença entre duas datas, exibindo o resultado em anos, meses, semanas e dias.",
      technologies: ["HTML", "CSS", "JavaScript"],
      source: "https://github.com/Lr0cha/date-calculator",
      live: "https://lr0cha.github.io/date-calculator/",
    },
    {
      title: "Site de Portfólio",
      image: myPortfolio,
      description:
        "Um site de portfólio pessoal apresentando educação, projetos e informações de contato, com um design limpo e responsivo.",
      technologies: ["React", "Tailwind CSS"],
      source: "https://github.com/Lr0cha/my-portfolio-website",
      live: "https://lr0cha-portfolio.vercel.app/",
    },
  ],

  SHOW_MORE: "Mostrar mais",
  SHOW_LESS: "Mostrar menos",

  CONTACT: {
    country: "Brasil",
    phone: "+55 11 985353732",
    email: "ldrocha16@gmail.com",
  },

  GITHUB_PROFILE: {
    url: "https://github.com/Lr0cha",
  },

  LINKEDIN_PROFILE: {
    url: "https://www.linkedin.com/in/lucas-bianchin/",
  },
};
