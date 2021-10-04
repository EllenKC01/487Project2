new Splide(".splide", {
  cover: true,
  focus: "center",
  height: "100vh",
}).mount();

var myEvents = [
  {
    date: "1917",
    content: "Cheerwine is invented by L.D. Peeler.",
  },
  {
    date: "1920",
    content: "The first delivery truck is purchased for the company.",
  },
  {
    date: "1931",
    content: "L.D. Peeler passes away and his son takes over the company.",
  },
  {
    date: "1967",
    content:
      "The Cheerwine company moves to its current location. The first canned Cheerwines are produced soon afterwards.",
  },
  {
    date: "1970",
    content: "Diet Cheerwine is released.",
  },
  {
    date: "1992",
    content:
      "Cheerwine celebrates 75 years of business with a commemorative bottle.",
  },
  {
    date: "2002",
    content: "Cheerwine and Food Lion partner to create Cheerwine Ice Cream.",
  },
  {
    date: "2010",
    content:
      "Cheerwine and Krispy Kreme partner to create the Cheerwine Donut.",
  },
  {
    date: "2012",
    content:
      'Cheerwine and the Avett Brothers partner for their "Legendary Giveback" concert series to raise money for charity.',
  },
  {
    date: "2017",
    content:
      "Cheerwine celebrates their centennial with a festival of local music and food, and unlimited Cheerwine. This becomes the first annual Cheerwine Festival.",
  },
  {
    date: "2020",
    content:
      "The annual festival becomes virtual to continue the tradition during COVID-19.",
  },
  {
    date: "2022",
    content:
      "Though the 2021 Cheerwine Festival was canceled due to COVID, the next annual Cheerwine festival is set to take place in person in May of 2022.",
  },
];

$("#my-timeline").roadmap(myEvents);

$("#my-timeline").roadmap(myEvents, {
  eventsPerSlide: 6,
});

$("#my-timeline").roadmap(myEvents, {
  slide: 1,
});

$("#my-timeline").roadmap(myEvents, {
  // default: 'prev'
  prevArrow: '<i class="fas fa-chevron-left"></i>',
  // default: 'next'
  nextArrow: '<i class="fas fa-chevron-right"></i>',
});

$("#my-timeline").roadmap(myEvents, {
  eventTemplate:
    '<li class="timeline__events__event">' +
    '<div class="event">' +
    '<div class="event__date">####DATE###</div>' +
    '<div class="event__content">####CONTENT###</div>' +
    "</div>" +
    "</li>",
});

$("#my-timeline").roadmap(myEvents, {
  orientation: "auto",
});

$("#my-timeline").roadmap(myEvents, {
  rootClass: "roadmap",
});

$("#my-timeline").roadmap(myEvents, {
  onBuild: function () {
    console.log("on build event");
  },
});

const myQuiz = [
  {
    q: "Who is the creator of Cheerwine?",
    options: [
      "Caleb Brandham",
      "L.D. Peeler",
      "Charles Grigg",
      "Bill Salisbury",
    ],
    correctIndex: 1,
    correctResponse: "This answer is correct.",
    incorrectResponse: "This answer is incorrect.",
  },
  {
    q: "Cheerwine celebrated its centennial in what year?",
    options: ["2017", "2013", "2018", "2020"],
    correctIndex: 0,
    correctResponse: "This answer is correct.",
    incorrectResponse: "This answer is incorrect.",
  },
  {
    q: "Why was the wild cherry flavor of Cheerwine originally so attractive?",
    options: [
      "The sweetness allowed for less sugar",
      "The flavor was the easiest to get rights for",
      "Cherry was the most popular flavor of the time",
      "Wild cherry was a very nostalgic taste",
    ],
    correctIndex: 0,
    correctResponse: "This answer is correct.",
    incorrectResponse: "This answer is incorrect.",
  },
  {
    q: "What is the name for the combination of barbecue and Cheerwine?",
    options: [
      "North Carolina Marriage",
      "Southern Handshake",
      "Carolina Connection",
      "Southern Sisters",
    ],
    correctIndex: 1,
    correctResponse: "This answer is correct.",
    incorrectResponse: "This answer is incorrect.",
  },
  {
    q: "What is the name of the company that makes Cheerwine?",
    options: [
      "Peeler Soft Drinks",
      "North Carolina Cola",
      "Salisbury Soda Makers",
      "Carolina Beverage Company",
    ],
    correctIndex: 3,
    correctResponse: "This answer is correct.",
    incorrectResponse: "This answer is incorrect.",
  },
];

$("#quiz").quiz({
  questions: myQuiz,
});

$("#quiz").quiz({
  // allows incorrect options
  allowIncorrect: true,

  // counter settings
  counter: true,
  counterFormat: "%current/%total",

  // default selectors & format
  startScreen: "#quiz-start-screen",
  startButton: "#quiz-start-btn",
  homeButton: "#quiz-home-btn",
  resultsScreen: "#quiz-results-screen",
  resultsFormat: "You got %score out of %total correct!",
  gameOverScreen: "#quiz-gameover-screen",

  // button text
  nextButtonText: "Next",
  finishButtonText: "Finish",
  restartButtonText: "Restart",
});
