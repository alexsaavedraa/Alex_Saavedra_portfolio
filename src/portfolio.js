import githubicon from './assets/GitHub-Mark.png'
import kaggleicon from './assets/kaggle-ico.png'
import kaggleimg from './assets/dataset-diversity.png'
import chatbox from './assets/Friendly-Chat.png'
import friendlyicon from './assets/friendlychat-logo.png'
import documenticon from './assets/document-icon.jpg'
import ludogif from './assets/LudoBots.gif'
import plant from './assets/plant.jpeg'

const header = {
  // all the properties are optional - can be left empty or deleted

}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alexander Saavedra',
  role: 'Full Stack Software Engineer',
  description:
    ' Full-stack software developer with a strong foundation in data science and artificial intelligence, holding a B.A. in Computer Science from Northwestern University.',
  details: '  I have proven expertise in developing and deploying innovative solutions, such as financial report parsers and alternative credit scoring models, using a diverse technology stack including Python, Java, Go, React, and Kubernetes.',
   resume: 'https://drive.google.com/file/d/1SjV0E30j-DM_oglbJ51f4t8XW2AD_jwH/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/saavedraa/',
    github: 'https://github.com/alexsaavedraa',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "LLM Prompt Recovery",
    subtitle: "Gold Medal Submission in Google Sponsored Competition",
    
    title: "LLM Prompt Recovery Challenge",
    tagline: "Placed 12/2175: Genetic Adversial Attack Against Google's Transformer Model",
    description: ["The Reverse Prompt Engineering Competition was a Kaggle machine learning challenge focused on recovering prompts used to generate text with large language models. Sponsored by google, it boasted a $100,000 grand prize and over 2000 team competing.",
       "My approach involved meticulous dataset generation with strict quality metrics, followed by optimizing prompts through an original language genetic algorithm. Finally, integration of clustering with BERTopic, was aimed at giving my submission its final edge in a competition with razor thin majors. This strategic blend of data science and algorithmic refinement culminated in a competitive performance, reflecting a deep exploration into effective machine learning, prompt engineering strategies, and NLP workflows.",
      ],
    stack: ['Python', 'Genetic Algorithms', 'LLMS', 'Vectorizors'],
    links: {
    "Full Writeup ": ['https://github.com/alexsaavedraa/Prompt-Recovery-Challenge/blob/main/README.md', documenticon],
    "Source Code ": ['https://github.com/alexsaavedraa/Prompt-Recovery-Challenge', githubicon, ],

    "Competition Website ": ['https://www.kaggle.com/competitions/llm-prompt-recovery', kaggleicon],
    },
    image: kaggleimg,

  },
  {
    name: "Friendly Chat",
    subtitle: "Live Chat Service using Typescript-Golang-PostgreSQL",
    
    title: "Friendly Chat",
    tagline: "Feature Complete Live Chat Service that supports 100 concurrent users.",
    description: ["This project was originally built as part of a hackathon, but more recently, I have updated it and deployed it to teach myself more about production environments and best practices.",
       "Friendly Chat is built with a Typescript frontend, and a Golang backend that utilizes websockets in order to handle low latency concurrency. The backend interfaces with a PostgresSQL server for data storage. You can find a full database description in the readme of the sourcecode. ",
       "It features account creation, login, salted and hashed password storage, automatically expiring authentification cookies, and live updating chat, likes, and dislikes. Friendly Chat is deployed on my rasberry pi in a single-node kubernetes cluster, and proxied by Nginx, all run on Ubuntu Server."
      ],
    stack: ['Golang', 'Typescript', 'PostgreSQL', 'Kubernetes', 'Docker', 'Linux'],
    links: {
    "Source Code": ['https://github.com/alexsaavedraa/Prompt-Recovery-Challenge', githubicon],
    "Try it out! ": ['http://Chat.leapingspider.com', friendlyicon],
    },
    image: chatbox,

  },
  {
    name: "Ludobots",
    subtitle: "Physically Simulated Robot Learning",
    
    title: "Ludobots- Virtual Robot Evolution",
    tagline: "And several observations on learning algorithms and reward functions",
    description: ["From popular robotics simulation course, r/ludobots, This project builds up the framework to simulate randomly generated 'robots' controlled by neural networks in python, with the ability to mix these networks and bodies in an evolutionary process. ",
       "The final project seeks to solve the problem, how can we make the evolutionary process more algorithmicly efficient? As part of the course, we were asked to run as many as 100,000 simulations on our laptop computers, which would often mean running the program for days at a time.",
      "I approached this problem by visualizing all of the data that I had collected, and realized that in this case (and many other learning algorithm cases - see LLM prompt recovery), you can predict final fitness by the gradient of initial fitness improvement. This would allow you to select only the best individuals of each run, and reduce computational rescources by up to 5x and get the same result.",
    "You can see a full writeup, including pictures and videos of it in action, in the readme of the source code.",
  ],
    stack: ['Python', 'Genetic Algorithms', 'LLMS', 'Vectorizors'],
    links: {
    "Source Code": ['https://github.com/alexsaavedraa/Prompt-Recovery-Challenge', githubicon],

    },
    image: ludogif,

  },
  {
    name: "Plant 2.0",
    subtitle: "Automating Plant Care with I2C devices.",
    
    title: "Plant 2.0: Automated Plant Care",
    tagline: "A Microbit Project written in C with custom device drivers",
    description: ["Plant 2.0 is a project where a low power microcontroller controls a plant's light level and water based on input from light, temperature, humidity, and moisture sensors connected via I2C.",
       "",
       
      ],
    stack: ['C', 'I2C', 'Integrated Devices', 'Electronics'],
    links: {
    "Source Code": ['https://github.com/prachipatil7/plant-monitoring-embedded-system/', githubicon],
    },
    image: plant,

  }

   
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C++',
  'JavaScript',
  'TypeScript',
  'React',
  'Pandas',
  'Transformers',
  'Material UI',
  'Git',
  'CI/CD',
  'Google Cloud',
  'NextJS',
  'AWS',
  'Kubernetes',
  'Docker'
]

const contact = {
  email: 'alexander.jsaavedra@gmail.com',
}

export { header, about, projects, skills, contact }
