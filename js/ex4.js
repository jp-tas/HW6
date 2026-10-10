// Homework 6, Exercise 4: Insert the College of Business link before IS.
const addBusinessLink = () => {
  const links = document.getElementById("links");
  const informationSystems = document.getElementById("is");
  const businessItem = document.createElement("li");
  const businessLink = document.createElement("a");

  businessLink.href = "https://www.csulb.edu/college-of-business";
  businessLink.textContent = "College of Business";
  businessItem.appendChild(businessLink);
  links.insertBefore(businessItem, informationSystems);
};

addBusinessLink();
