import React from "react";
import { Accordion, Heading } from "@chakra-ui/react";
import Paper from "./Paper";

export const ScientificPapers = () => {
  const papers = getPapers();

  return (
    <>
      <Heading mt={6} size="md" align="center">Scientific Papers</Heading>
      <Accordion mt={3} allowMultiple>
        { papers.map(paper => (
          <Paper
            institution={paper.institution}
            description={paper.description}
            time={paper.time}
          />
        )) }
      </Accordion>
    </>
  );
};


function getPapers() {
  return fakeRequest();
}

function fakeRequest() {
  return [
    {
      institution: {
        name: "Journal of Universal Computer Science",
        link: "http://www.jucs.org/",
      },
      description: [
        {
          text: `Solving a Large Real-world Bus Driver Scheduling Problem with a
            Multi-assignment based Heuristic Algorithm.`,
          link: "https://nottingham-repository.worktribe.com/output/862152/solving-a-large-real-world-bus-driver-scheduling-problem-with-a-multi-assignment-based-heuristic-algorithm",
        },
      ],
      time: "May 2017",
    },
    {
      institution: {
        name: "(PTBR) XLVIII SBPO - Simpósio Brasileiro de Pesquisa Operacional",
        link: "https://sbpo2016.ufes.br/",
      },
      description: [
        {
          text: `Algoritmos baseados na meta-heurística VNS aplicados ao Problema de
            Escalonamento de Motoristas de Ônibus.`,
          link: "http://repositorio.uem.br:8080/jspui/handle/1/2529",
        }
      ],
      time: "Sep 2016",
    },
    {
      institution: {
        name: "17th International Conference on Enterprise Information Systems (ICEIS-2015)",
        link: "http://www.iceis.org/?y=2015",
      },
      description: [
        {
          text: "Combining Heuristic and Utility Function for Fair Train Crew Rostering.",
          link: "https://www.researchgate.net/publication/296331375_Combining_Heuristic_and_Utility_Function_for_Fair_Train_Crew_Rostering",
        },
      ],
      time: "Jan 2015",
    },
  ];
}

export default ScientificPapers;
