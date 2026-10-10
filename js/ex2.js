// Homework 6, Exercise 2: Display only the text of 400-level courses.
const displayText400 = () => {
  const courses = document.getElementsByClassName("400level");

  for (const course of courses) {
    console.log(course.textContent);
  }
};

displayText400();
