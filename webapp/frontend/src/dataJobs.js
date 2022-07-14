import {
  bairesDev,
  c,
  earlySec, elasticsearch, git, java,
  javaScript,
  jupyter, kafka, kibana, latex, linux, mkDocs, openTSDB,
  pandas, phabricator,
  pinterest,
  python, r, react, scikitLearn,
  seebot, shellScript, spark, sql,
  stateUniversityOfParana, systemd
} from "./dataEntities";

import { EN, PT_BR } from "./consts";

const commaSpace = {text: ", "}

export const dataJobs = [
  {
    id: 1,
    company: pinterest,
    current: true,
    description_: [],
    description: [
      {
        text: `We need to take care of our Ads Systems to be reliable for Pinterest's clients.
          This way, I work on monitoring, alerting & reporting for our Ads teams.
        `,
        link: null,
      }
    ],
    position: "Software Engineer",
    techs: [python, pandas, jupyter, javaScript, react, kibana, sql, openTSDB, phabricator],
    time: "1 year",
  },
  {
    id: 2,
    company: bairesDev,
    current: true,
    description: [
      {
        text: `We have to recruit great people using screening processes, and we also
        had a BairesDev Arena, a one-day championship to get the best candidates
        among many. We also provide mentorships for employees with some
        difficulties or for the new ones.
        `,
        link: null,
      }
    ],
    position: "Software Engineer",
    techs: [python],
    time: "1 year",
  },
  {
    id: 3,
    company: stateUniversityOfParana,
    current: false,
    description: [
      {
        text: `I thought that I would be a professor forever, but I gradually
        changed my mind, even before this experience. During this experience,
        I ministered the following subjects: `,
        link: null,
      },
      {
        text: "Algorithms",
        link: "https://en.wikipedia.org/wiki/Algorithm",
      },
      commaSpace,
      {
        text: "Data structures",
        link: "https://en.wikipedia.org/wiki/Data_structure#:~:text=In%20computer%20science%2C%20a%20data,be%20applied%20to%20the%20data.",
      },
      commaSpace,
      {
        text: "Relational database",
        link: "https://en.wikipedia.org/wiki/Relational_database",
      },
      commaSpace,
      {
        text: "Multi and hypermedia systems",
        link: "https://en.wikipedia.org/wiki/Hypermedia#:~:text=Hypermedia%2C%20an%20extension%20of%20the,presentations%20as%20well%20as%20hypermedia.",
      },
      commaSpace,
      {
        text: "Algorithm analysis",
        link: "https://en.wikipedia.org/wiki/Analysis_of_algorithms#:~:text=Algorithm%20analysis%20is%20an%20important,of%20search%20for%20efficient%20algorithms.",
      },
      commaSpace,
      {
        text: "Graph theory",
        link: "https://en.wikipedia.org/wiki/Graph_theory#:~:text=In%20mathematics%2C%20graph%20theory%20is,also%20called%20links%20or%20lines)."
      },
      {text: ", and "},
      {
        text: "Object-Oriented Programming.",
        link: "https://en.wikipedia.org/wiki/Object-oriented_programming"
      },
    ],
    position: "Assistant Professor",
    techs: [python, c, java, sql, mkDocs],
    time: "7 months",
  },
  {
    id: 4,
    company: seebot,
    current: false,
    description_: [],
    description: [
      {
        text: "We had to create an entire ",
        link: null,
      },
      {
        text: "smart traffic light (STL)",
        link: "https://en.wikipedia.org/wiki/Smart_traffic_light",
      },
      {
        text: `, a vast tech challenge. We designed and led software engineers
          to conceive this device that is a traffic light with cameras that see the streets.
          We also designed and developed traffic simulators for traffic optimization using
        `,
        link: null,
      },
      {
        text: "SUMO",
        link: "https://www.eclipse.org/sumo/",
      },
      {
        text: " (",
        link: null,
      },
      {
        text: "video 1",
        link: "https://www.youtube.com/watch?v=O3LeB9JBGdw",
      },
      {
        text: " and ",
        link: null,
      },
      {
        text: "video 2",
        link: "https://www.youtube.com/watch?v=SbJ0awuzen4",
      },
      {
        text: ")",
        link: null,
      },
      {
        text: ", dashboards, and ",
        link: null,
      },
      {
        text: "Digital Image Processing",
        link: "https://en.wikipedia.org/wiki/Digital_image_processing",
      },
      {
        text: ` systems. Our optimization algorithm on this simulator reduced
          200% to 400% waiting time on light to medium vehicle traffic.
          We also designed and developed hardware and software for non-smart
          traffic light controllers.
        `,
        link: null,
      },
    ],
    position: "Tech Lead & Software Engineer",
    techs: [python, linux, shellScript, systemd, r, git, latex],
    time: "4 years",
  },
  {
    id: 5,
    company: earlySec,
    current: false,
    description: [
      {
        text: `We created intelligent alert systems to tell companies about
          security risks using information from social media apps. We used 
        `,
        link: null,
      },
      {
        text: "Natural Language Processing (NLP)",
        link: "https://en.wikipedia.org/wiki/Natural_language_processing",
      },
      {
        text: " techniques to filter, train, classify, and cluster social media messages.",
        link: null,
      },
    ],
    position: "Data Scientist",
    techs: [python, scikitLearn, java, git, elasticsearch, kafka, spark, linux],
    time: "10 months",
  },
];

export const dataJobs_= {
  [PT_BR]: [
    {
      id: 1,
      company: pinterest,
      current: true,
      description_: [],
      description: [
        {
          text: `Precisamos cuidar do nossos Sistemas de Propaganda para serem 
            confiáveis aos clientes do Pinterest. Dessa forma, eu trabalho com
            monitoramento, alerta e relatórios para o time de Propaganda.
          `,
          link: null,
        }
      ],
      position: "Engenheiro de Software",
      techs: [python, pandas, jupyter, javaScript, react, kibana, sql, openTSDB, phabricator],
      time: "1 ano",
    },
    {
      id: 2,
      company: bairesDev,
      current: true,
      description: [
        {
          text: `Temos que recrutar ótimas pessoas no processo seletivo, também tivemos
          a Arena BairesDev, um campeonando de um dia para selecionar os melhores
          candidatos entre muitos. Também provemos mentoria para colaboradores com
          dificuldades ou para os novos.
          `,
          link: null,
        }
      ],
      position: "Engenheiro de Software",
      techs: [python],
      time: "1 ano",
    },
    {
      id: 3,
      company: stateUniversityOfParana,
      current: false,
      description: [
        {
          text: `Pensei que seria professor a vida inteira, mas gradualmente mudei
          de ideia, mesmo antes desta experiência. Durante esta, eu ministrei as
          seguintes disciplinas: `,
          link: null,
        },
        {
          text: "Algorithms",
          link: "https://en.wikipedia.org/wiki/Algorithm",
        },
        commaSpace,
        {
          text: "Data structures",
          link: "https://en.wikipedia.org/wiki/Data_structure#:~:text=In%20computer%20science%2C%20a%20data,be%20applied%20to%20the%20data.",
        },
        commaSpace,
        {
          text: "Relational database",
          link: "https://en.wikipedia.org/wiki/Relational_database",
        },
        commaSpace,
        {
          text: "Multi and hypermedia systems",
          link: "https://en.wikipedia.org/wiki/Hypermedia#:~:text=Hypermedia%2C%20an%20extension%20of%20the,presentations%20as%20well%20as%20hypermedia.",
        },
        commaSpace,
        {
          text: "Algorithm analysis",
          link: "https://en.wikipedia.org/wiki/Analysis_of_algorithms#:~:text=Algorithm%20analysis%20is%20an%20important,of%20search%20for%20efficient%20algorithms.",
        },
        commaSpace,
        {
          text: "Graph theory",
          link: "https://en.wikipedia.org/wiki/Graph_theory#:~:text=In%20mathematics%2C%20graph%20theory%20is,also%20called%20links%20or%20lines)."
        },
        {text: ", and "},
        {
          text: "Object-Oriented Programming.",
          link: "https://en.wikipedia.org/wiki/Object-oriented_programming"
        },
      ],
      position: "Professor Assistente",
      techs: [python, c, java, sql, mkDocs],
      time: "7 months",
    },
  ],

  [EN]: [
    {
      id: 1,
      company: pinterest,
      current: true,
      description_: [],
      description: [
        {
          text: `
          We keep Trust and Safety on Pinterest by creating and maintaining internal tools.
          To achieve this I work as a full-stack engineer.
          We also took care of our Ads Systems to be reliable for Pinterest's clients.
            This way, I also worked on monitoring, alerting & reporting for our Ads teams.
          `,
          link: null,
        }
      ],
      position: "Software Engineer",
      techs: [python, pandas, jupyter, javaScript, react, kibana, sql, openTSDB, phabricator],
      time: "2 years",
    },
    {
      id: 2,
      company: bairesDev,
      current: true,
      description: [
        {
          text: `We have to recruit great people using screening processes, and we also 
          provide mentorships for employees with some difficulties or for the new ones.
          `,
          link: null,
        }
      ],
      position: "Software Engineer",
      techs: [python],
      time: "2 years",
    },
    {
      id: 3,
      company: stateUniversityOfParana,
      current: false,
      description: [
        {
          text: `I thought that I would be a professor forever, but I gradually
          changed my mind, even before this experience. During this experience,
          I ministered the following subjects: `,
          link: null,
        },
        {
          text: "Algorithms",
          link: "https://en.wikipedia.org/wiki/Algorithm",
        },
        commaSpace,
        {
          text: "Data structures",
          link: "https://en.wikipedia.org/wiki/Data_structure#:~:text=In%20computer%20science%2C%20a%20data,be%20applied%20to%20the%20data.",
        },
        commaSpace,
        {
          text: "Relational database",
          link: "https://en.wikipedia.org/wiki/Relational_database",
        },
        commaSpace,
        {
          text: "Multi and hypermedia systems",
          link: "https://en.wikipedia.org/wiki/Hypermedia#:~:text=Hypermedia%2C%20an%20extension%20of%20the,presentations%20as%20well%20as%20hypermedia.",
        },
        commaSpace,
        {
          text: "Algorithm analysis",
          link: "https://en.wikipedia.org/wiki/Analysis_of_algorithms#:~:text=Algorithm%20analysis%20is%20an%20important,of%20search%20for%20efficient%20algorithms.",
        },
        commaSpace,
        {
          text: "Graph theory",
          link: "https://en.wikipedia.org/wiki/Graph_theory#:~:text=In%20mathematics%2C%20graph%20theory%20is,also%20called%20links%20or%20lines)."
        },
        {text: ", and "},
        {
          text: "Object-Oriented Programming.",
          link: "https://en.wikipedia.org/wiki/Object-oriented_programming"
        },
      ],
      position: "Assistant Professor",
      techs: [python, c, java, sql, mkDocs],
      time: "7 months",
    },
    {
      id: 4,
      company: seebot,
      current: false,
      description_: [],
      description: [
        {
          text: "We had to create an entire ",
          link: null,
        },
        {
          text: "smart traffic light (STL)",
          link: "https://en.wikipedia.org/wiki/Smart_traffic_light",
        },
        {
          text: `, a vast tech challenge. We designed and led software engineers
            to conceive this device that is a traffic light with cameras that see the streets.
            We also designed and developed traffic simulators for traffic optimization using
          `,
          link: null,
        },
        {
          text: "SUMO",
          link: "https://www.eclipse.org/sumo/",
        },
        {
          text: " (",
          link: null,
        },
        {
          text: "video 1",
          link: "https://www.youtube.com/watch?v=O3LeB9JBGdw",
        },
        {
          text: " and ",
          link: null,
        },
        {
          text: "video 2",
          link: "https://www.youtube.com/watch?v=SbJ0awuzen4",
        },
        {
          text: ")",
          link: null,
        },
        {
          text: ", dashboards, and ",
          link: null,
        },
        {
          text: "Digital Image Processing",
          link: "https://en.wikipedia.org/wiki/Digital_image_processing",
        },
        {
          text: ` systems. Our optimization algorithm on this simulator reduced
            200% to 400% waiting time on light to medium vehicle traffic.
            We also designed and developed hardware and software for non-smart
            traffic light controllers.
          `,
          link: null,
        },
      ],
      position: "Tech Lead & Software Engineer",
      techs: [python, linux, shellScript, systemd, r, git, latex],
      time: "4 years",
    },
    {
      id: 5,
      company: earlySec,
      current: false,
      description: [
        {
          text: `We created intelligent alert systems to tell companies about
            security risks using information from social media apps. We used 
          `,
          link: null,
        },
        {
          text: "Natural Language Processing (NLP)",
          link: "https://en.wikipedia.org/wiki/Natural_language_processing",
        },
        {
          text: " techniques to filter, train, classify, and cluster social media messages.",
          link: null,
        },
      ],
      position: "Data Scientist",
      techs: [python, scikitLearn, java, git, elasticsearch, kafka, spark, linux],
      time: "10 months",
    },
  ],
};
