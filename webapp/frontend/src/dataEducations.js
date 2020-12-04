import {
  latex,
  linux,
  python, shellScript,
  stateUniversityOfParana,
} from "./dataEntities";

export const dataEducations = [
  {
    id: 1,
    institution: stateUniversityOfParana,
    thesis: [
      {
        text: "Algorithms based on ",
        link: null,
      },
      {
        text: "Variable Neighborhood Search (VNS)",
        link: "https://en.wikipedia.org/wiki/Variable_neighborhood_search",
      },
      {
        text: " ",
        link: null,
      },
      {
        text: "meta-heuristic",
        link: "https://en.wikipedia.org/wiki/Metaheuristic#:~:text=In%20computer%20science%20and%20mathematical,incomplete%20or%20imperfect%20information%20or",
      },
      {
        text: " applied in the ",
        link: null,
      },
      {
        text: "Bus Driver Scheduling Problem.",
        link: "https://en.wikipedia.org/wiki/Driver_scheduling_problem#:~:text=The%20driver%20scheduling%20problem%20(DSP,transportation%20of%20passengers%20or%20goods."
      }
    ],
    graduation: "Master's degree in CS",
    techs: [python, linux, shellScript, latex],
    time: "2 years",
  },
  {
    id: 2,
    institution: stateUniversityOfParana,
    thesis: [
      {
        text: "A ",
        link: null,
      },
      {
        text: "genetic algorithm",
        link: "https://en.wikipedia.org/wiki/Genetic_algorithm",
      },
      {
        text: " for the ",
        link: null,
      },
      {
        text: "Feedback Arc Set Problem.",
        link: "https://en.wikipedia.org/wiki/Feedback_arc_set",
      },
    ],
    graduation: "Bachelor's degree in CS",
    techs: [python, linux, shellScript, latex],
    time: "4 years",
  },
];
