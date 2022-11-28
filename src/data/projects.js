const projects = [
  {
    id: 1,
    name: "Ultimate Notification",
    slug: "ultimate-notification",
    description:
      "A platform for streamers to send notifications to their viewers in real time through discord and telegram",
    longDescription: `
        Ultimate Notification is a platform for streamers to send notifications to their viewers in real time through discord and telegram.     
I had an idea, inspired by many services that offered a similar service but without a real stylization of the message, a high speed and above all 100% only offered a notification when a live started.
Taking note of this, I created this platform that not only instantly allows users of a streamer to receive a notification when a live starts, but also when the game changes and when the live ends.
Another point where I focused was the personalization of messages. Through the message editor it is possible to create the best notification also aided by a real-time preview. The 100% operational platform currently supports sending notifications via telegram and discord. In the future I plan to add alexa and instagram as well.
        `,
    image: "ultimate.png",
    link: "https://ultimatenotification.com",
    github: "https://github.com/FrancescoGentileDev/ultimate-notification",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Twitch API",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "React",
      "React Router",
      "Material UI",
      "Bootstrap",
      "JSON Web Tokens",
      "passport.js",
      "bcrypt.js",
      "Axios",
      "SendGrid",
      "Google Fonts",
      "Font Awesome",
      "Heroku",
    ],
    extraImagesPath: "ultimate",
    extraImages: [
      {
        image: "ultimate-3.png",
        description: "User Dashboard",
      },
      {
        image: "ultimate-2.png",
        description: "Message Telegram Editor",
      },
      {
        image: "ultimate-1.png",
        description: "Message Discord Editor",
      }
    ],
  },
  {
    id: 2,
    name: "Netflix Clone",
    slug: "netflix-clone",
    description:
      "A Netflix clone that allows users to browse through movies and TV shows and watch trailers.",
    image: "netflix.png",
    link: "https://francescogentiledev.github.io/vue-vite-netflix-clone/",
    github: "https://github.com/FrancescoGentileDev/vue-vite-netflix-clone",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Vite",
      "Vue Router",
      "Axios",
      "TMDB API",
      "Google Fonts",
      "Font Awesome",
    ],
  },
  {
    id: 3,
    name: "spotify clone",
    slug: "spotify-clone",
    description:
      "A Spotify layout clone that allows users to browse in homepage and play a song.",
    image: "spotify.png",
    link: "https://htmlpreview.github.io/?https://github.com/FrancescoGentileDev/html-css-spotifyweb/blob/main/index.html",
    github: "https://github.com/FrancescoGentileDev/html-css-spotifyweb/",
    technologies: ["HTML", "CSS", "JavaScript", "Google Fonts", "Font Awesome"],
  },
  {
    id: 4,
    name: "boolPress",
    slug: "boolpress",
    description:
      "A blog platform where users can create, read, update and delete posts.",
    image: "boolpress.png",
    link: "https://github.com/FrancescoGentileDev/laravel-boolpress",
    github: "https://francescogentiledev.github.io/laravel-boolpress/",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "MySQL",
      "Bootstrap",
      "vue.js",
      "Axios",
      "Font Awesome",
      "Heroku",
      "VS Code",
    ],
  },
  {
    id: 5,
    name: "whatsapp poll bot",
    slug: "whatsapp-poll-bot",
    description:
      "A bot that allows users to create polls in chat groups BEFORE whatsapp introduced the poll feature.",
    image: "pollbot.png",
    link: "https://github.com/FrancescoGentileDev/Whatsapp-Poll-Bot",
    github: "https://github.com/FrancescoGentileDev/Whatsapp-Poll-Bot",
    technologies: [
      "Node.js",
      "JavaScript",
      "Whatsapp Web API",
      "Express.js",
      "MongoDB",
      "Digital Ocean",
    ],
  },
];

export default projects;
