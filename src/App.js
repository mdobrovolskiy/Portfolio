import { useState } from 'react'
import './sass/App.sass'
import Skills from './components/Skills/Skills'
import Header from './components/Header/Header'

import Project from './components/Project/Project'
import alias from './assets/images/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.webp'
import aliasGif from './assets/images/123.png'
import insta from './assets/images/Screenshot_6-removebg-preview.png'
import pizza from './assets/images/Screenshot_7.png'
import Me from './components/Me/Me'

const projects = [
  {
    name: 'Alias',
    img: aliasGif,
    gif: alias,
    text: 'Multiplay game for companies with real-time updates',
  },
  {
    name: 'Insta clone',
    img: insta,
    gif: alias,
    text: 'Web Instagram clone with a live chat',
  },
  {
    name: 'Pizza delivery',
    img: pizza,
    gif: alias,
    text: 'Service for ordering pizza using REST api',
  },
]

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className="container">
        <Me />
        <Skills />
        <h1 className="projects">My last projects</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
