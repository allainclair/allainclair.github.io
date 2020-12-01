export function formatTechs(techs) {
  console.log(techs);
  const lastTech = techs[techs.length - 1];
  if (techs.length > 1) {
    const firstTechs = techs.slice(0, techs.length - 1);
    return firstTechs.join(", ") + ", and " + lastTech + ".";
  } else {
    return lastTech + ".";
  }
}
