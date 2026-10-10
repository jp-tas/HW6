// Homework 6, Exercise 6: Display the given terms and definitions.
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const dictionary = document.createElement("dl");

for (const word of words) {
  const term = document.createElement("dt");
  const strong = document.createElement("strong");
  strong.textContent = word.term;
  term.appendChild(strong);

  const definition = document.createElement("dd");
  definition.textContent = word.definition;

  dictionary.appendChild(term);
  dictionary.appendChild(definition);
}

document.getElementById("content").appendChild(dictionary);
