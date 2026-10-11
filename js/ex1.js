// Homework 6, Exercise 1: Display all body nodes, including text nodes.
const bodyNodes = () => {
  const nodes = Array.from(document.body.childNodes);

  for (const node of nodes) {
    console.log(node);
  }
};

// Remove this script's own element before displaying the exercise body.
document.currentScript.remove();
bodyNodes();

// Add navigation after displaying the original eleven body nodes.
const navigation = document.createElement("div");
navigation.className = "back-link";
const homeLink = document.createElement("a");
homeLink.href = "../index.html";
homeLink.textContent = "Link to Start Page";
navigation.appendChild(homeLink);
document.body.appendChild(navigation);
