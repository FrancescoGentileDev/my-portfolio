const projects = [
  {
    id: 0,
    locales: {
      en: {
        description: ' Boover is a platform where freelancers can sign up and receive commissions. ',
        longDescription: `Boover is a high-quality freelance search platform, inspired by Fiverr. We have developed a perfectly functioning platform where our clients can find the right professional for their needs, send messages and leave reviews.

        Freelancers can sign up, publish their profile and receive feedback from clients. Thanks to our "choice" program, freelancers can choose to pay a fee to appear at the top of search results and in their category, increasing their visibility and attractiveness to clients.
        
        Our goal is to offer an easy-to-use and intuitive platform for both freelancers and clients, making the process of searching and selecting professionals as simple as possible.We are proud of the final result and hope that Boover will become a valuable addition to our portfolio.  `
      },
      it: {
        description: 'Boover è una piattaforma dove i freelance possono iscriversi e ricevere commissioni.',
        longDescription: `Boover è una piattaforma per la ricerca di freelancer di alta qualità, ispirata a Fiverr. Abbiamo sviluppato una piattaforma perfettamente funzionante dove i nostri clienti possono trovare il professionista giusto per ogni loro esigenza, inviare messaggi e lasciare recensioni.

        I freelancer possono iscriversi, pubblicare il loro profilo e ricevere feedback dai clienti. Grazie al nostro programma "choice", i freelancer possono scegliere di pagare una quota per comparire in cima ai risultati di ricerca e nella loro categoria, aumentando così la loro visibilità e attrattiva per i clienti.
        
        Il nostro obiettivo è quello di offrire una piattaforma facile da usare e intuitiva sia per i freelancer che per i clienti, rendendo il processo di ricerca e selezione dei professionisti il più semplice possibile.iamo orgogliosi del risultato finale e speriamo che Boover possa diventare una preziosa aggiunta al nostro portfolio. `
      }
    },
    name: 'Boover',
    slug: 'boover',
    description: ' Boover is a platform where freelancers can sign up and receive commissions. ',
    longDescription: `Boover is a high-quality freelance search platform, inspired by Fiverr. We have developed a perfectly functioning platform where our clients can find the right professional for their needs, send messages and leave reviews.`,
    image: 'boover.png',
    link: 'https://boover-project.000webhostapp.com/',
    github: 'https://github.com/FrancescoGentileDev/Boover-project',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'tailwindcss', 'laravel', 'vuejs', 'axios', 'fontawesome', 'daisyUI', 'merakiUI', 'Unsplash', 'brainTree', 'Google Fonts'],
    extraImagesPath: 'boover',
    extraImages: [
      {
        image: 'home.jpeg',
        description: 'Home page',
      },
      {
        image: 'skillricerca.jpeg',
        description: 'Search page',
      },
      {
        image: 'dashboard.jpeg',
        description: 'User dashboard',
      },
      {
        image: 'sponsor.png',
        description: 'Sponsor select buy page',
      },
      {
        image: 'sponsor-countDown.jpeg',
        description: 'Countdown for sponsorships',
      },
      {
        image: 'team.png',
        description: 'Team page',
      },
    ]
  },
  {
    id: 1,
    locales: {
      en: {
        description:
          "A platform for streamers to send notifications to their viewers in real time through discord and telegram",
        longDescription: `
        Ultimate Notification is a platform for streamers to send notifications to their viewers in real time through discord and telegram.     
I had an idea, inspired by many services that offered a similar service but: without a real stylization of the message, a high speed and they only offered a notification when a live started.
Taking note of this, I created this platform that not only instantly allows users of a streamer to receive a notification when a live starts, but also when the game changes and when the live ends.
Another point where I focused was the personalization of messages. Through the message editor it is possible to create the best notification also aided by a real-time preview. The 100% operational platform currently supports sending notifications via telegram and discord. In the future I plan to add alexa and instagram as well.
        `,
      },
      it: {
        description:
          "Una piattaforma per streamer per inviare notifiche ai propri spettatori in tempo reale, tramite discord e telegram",
        longDescription: `
        
Avevo un idea, ispirato anche da molti servizi che offrivano un sistema simile ma senza: una vera e propria stilizzazione delle notifiche, un'alta reattività ad inviare, soprattutto offrivano solo una notifica quando iniziava una diretta.

Prendendo atto di questo, ho creato questa piattaforma che non solo consente istantaneamente agli utenti di uno streamer di ricevere una notifica quando inizia una diretta, ma anche quando lo streamer cambia gioco e quando termina la diretta.

Un altro punto su cui mi sono concentrato è stata la personalizzazione dei messaggi.

Attraverso l'editor di messaggi è possibile modificare ogni aspetto della modifica aiutati anche da un'anteprima in tempo reale.

La piattaforma è attualmente operativa al 100% e supporta l'invio di notifiche tramite telegram e discord.

In futuro ho intenzione di aggiungere anche Alexa e Instagram. `,
      },
    },
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
      },
    ],
  },
  {
    id: 2,
    name: "Netflix Clone",
    slug: "netflix-clone",
    locales: {
      it: {
        description:
        "Un clone di Netflix che consente agli utenti di sfogliare film e programmi TV e guardare trailer.",
      },
      en: {
        description:
        "A Netflix clone that allows users to browse through movies and TV shows and watch trailers.",
      }
    },
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
    locales: {
      it: {
        description:
        "A Spotify layout clone that allows users to browse in homepage and play a song.",
      },
      en: {
        description:
        "Un clone del layout di Spotify che consente agli utenti di navigare nella home page e riprodurre un brano.",
      }
    },
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
    locales: {
      it: {
        description:
        "Una piattaforma blog in cui gli utenti possono creare, leggere, aggiornare ed eliminare post.",
      },
      en: {
        description:
        "A blog platform where users can create, read, update and delete posts.",
      }
    },
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
    locales: {
      it: {
        description:
        "Un bot che consente agli utenti di creare sondaggi nei gruppi di chat PRIMA che whatsapp introducesse la funzione di sondaggio.",
      },
      en: {
        description:
        "A bot that allows users to create polls in chat groups BEFORE whatsapp introduced the poll feature.",
      }
    },
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
