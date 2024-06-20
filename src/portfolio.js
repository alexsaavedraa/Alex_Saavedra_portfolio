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
    name: "Uncovering the Hidden Prompt: Predicting Inputs for Large Language Models (Gold Medal, Google's Prompt Recovery Challenge)",
    description:
      "Can you decipher a large language model's secret prompt from its generated text? This project tackles that very challenge, achieving a top 13th place finish (out of 2175 entries) at Google's Prompt Recovery Challenge. Explore the full write-up and explanation (link below) to discover the innovative approach using Python, Genetic Algorithms, Large Language Models, and Vectorizers.",
    stack: ['Python', 'Genetic Algorithms', 'LLMS', 'Vectorizors'],
    sourceCode: 'https://github.com/alexsaavedraa/Prompt-Recovery-Challenge',
    livePreview: 'https://www.kaggle.com/competitions/llm-prompt-recovery',
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
