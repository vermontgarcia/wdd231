console.log("Hello class from console!");

// Content
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

const courseWork = [
  {
    name: "Course Home Page",
    status: "current",
  },
  {
    name: "Chamber Directory Page",
    status: "pending",
  },
  {
    name: "Chamber Home Page",
    status: "pending",
  },
  {
    name: "Chamber Join Page",
    status: "pending",
  },
  {
    name: "Project Proposal",
    status: "pending",
  },
  {
    name: "Project Site Plan",
    status: "pending",
  },
  {
    name: "Project Completion",
    status: "pending",
  },
];

// Helper Funtions

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getLastUpdate = () => {
  const date = document.lastModified;
  return date.toLocaleString();
};

const handleMenu = () => {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("menu-icon");
  if (menu.classList.contains("menu-open")) {
    menu.classList.remove("menu-open");
    icon.classList.replace("fa-times", "fa-bars");
  } else {
    menu.classList.add("menu-open");
    icon.classList.replace("fa-bars", "fa-times");
  }
};

/** DOM Manipulation */

// Main: Course Work Section
document.getElementById("course-work").append(
  ...courseWork.map((activity) => {
    // Course Work List elements
    const li = document.createElement("li");
    li.innerHTML = activity.name;
    return li;
  })
);

// Main: Courses Section
const setCourses = (set = "all") => {
  let newCoursesSet = [...courses];
  if (set !== "all") {
    newCoursesSet = courses.filter(
      (course) => course.subject.toLowerCase() === set
    );
  }

  const coursesContainer = document.getElementById("certificate-courses");
  coursesContainer.innerHTML = "";

  coursesContainer.append(
    ...newCoursesSet.map((course) => {
      // Courses Elements
      const div = document.createElement("div");
      div.innerHTML = `${course.subject} ${course.number}`;
      div.classList.add(course.completed ? "completed" : "current");
      return div;
    })
  );

  document.getElementById("total-credits").innerHTML = newCoursesSet.reduce(
    (credits, course) => credits + course.credits,
    0
  );
};

setCourses();

// Footer
document.getElementById("current-year").innerHTML = getYear();
document.getElementById(
  "last-modified"
).innerHTML = `Last Modification: ${getLastUpdate()}`;
