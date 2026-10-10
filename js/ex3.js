// Homework 6, Exercise 3: Make every paragraph bold with a yellow background.
const styleParagraphs = () => {
  const paragraphs = document.getElementsByTagName("p");

  for (const paragraph of paragraphs) {
    paragraph.style.fontWeight = "bold";
    paragraph.style.backgroundColor = "yellow";
  }
};

styleParagraphs();
