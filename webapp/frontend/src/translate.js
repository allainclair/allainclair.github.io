import { PT_BR, EN } from "./consts";

const ALL = {
  "Software Engineer": {
    [PT_BR]: "Engenheiro de Software",
    [EN]: "Software Engineer",
  },
  "and": {
    [PT_BR]: "e",
    [EN]: "and",
  },
  "at": {
    [PT_BR]: "no",
    [EN]: "at",
  },
  "Computer Scientist": {
    [PT_BR]: "Cientista da Computação",
    [EN]: "Computer Scientist",
  },
  "My resume": {
    [PT_BR]: "Meu currículo",
    [EN]: "My resume",
  },
  "Hi": {
    [PT_BR]: "Oi",
    [EN]: "Hi",
  },
  "intro": {
    [PT_BR]: `
      Eu sou Allainclair ou Allain para abreviar. Desde minha adolescência
      sou um entusiasta por computadores, eu me impressionei com a internet,
      construí alguns sites, joguei online e conheci pessoas de vários
      lugares. Antes da internet, nosso alcance era muito limitado, depois tornou-se
      ilimitado. Desde essa época eu sigo diariamente o caminho para me tornar um
      profissional de tecnologia melhor. Eu tenho base em ciência da computação,
      e alcancei significantes posições profissionais até agora. Agradeço minha família
      e todos responsáveis por isso.
    `,
    [EN]: `
      I am Allainclair or Allain for short. Since my adolescence, I am a
      computer enthusiast; I was amazed by the internet, I built some websites,
      played games, and met people from many places. Before the internet,
      our reach was too limited; after, unlimited. Since that time,
      I follow every day, the path to becoming a better tech professional.
      I have a computer science background, and I have achieved significant professional
      positions so far. I thank my family and all people responsible for this.
    `,
  },
  "Job History": {
    [PT_BR]: "Histórico de trabalho",
    [EN]: "Job History",
  },
  "Techs used:": {
    [PT_BR]: "Tecnologias usadas:",
    [EN]: "Techs used:",
  },
  "Current": {
    [PT_BR]: "Atual",
    [EN]: "Current",
  },
};

export const t = (texts, lang) => {
  const translatedTexts = texts.map(text => ALL[text][lang]);
  return translatedTexts.join(" ");
};
