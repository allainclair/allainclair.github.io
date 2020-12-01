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

const commaSpace = {text: ", "}

export const dataJobs = [
  {
    company: pinterest,
    current: true,
    description_: [],
    description: [
      {
        text: "Work on monitoring, alerting & reporting for Ads teams.",
        link: null,
      }
    ],
    position: "Software Engineer",
    techs: [python, pandas, jupyter, javaScript, react, kibana, sql, openTSDB, phabricator],
    time: "1 year",
  },
  {
    company: bairesDev,
    current: true,
    description: [
      {
        text: "Work on screening process and mentorship.",
        link: null,
      }
    ],
    position: "Software Engineer",
    techs: [python],
    time: "1 year",
  },
  {
    company: stateUniversityOfParana,
    current: false,
    description: [
      {
        text: "I ministered the following subjects: ",
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
    company: seebot,
    current: false,
    description_: [],
    description: [
      {
        text: "Leading software engineers to develop: a ",
        link: null,
      },
      {
        text: "smart traffic light (STL)",
        link: "https://en.wikipedia.org/wiki/Smart_traffic_light",
      },
      {
        text: `, hardware and software controllers, traffic simulators for traffic
          optimization, and dashboards. Designing hardware and software for traffic
          light controllers. Designing and developing a traffic simulator using `,
        link: null,
      },
      {
        text: "SUMO",
        link: "https://www.eclipse.org/sumo/",
      },
      {
        text: `. Our algorithm on this simulator had 200% to 400% waiting time
        optimization on light to medium vehicle traffic.`,
        link: null,
      },
    ],
    position: "Tech Lead & Software Engineer",
    techs: [python, linux, shellScript, systemd, r, git, latex],
    time: "4 years",
  },
  {
    company: earlySec,
    current: false,
    description: [
      {
        text: "We used ",
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
