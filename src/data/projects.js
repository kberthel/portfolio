import niftyImg from '../assets/images/nifty.webp';
import weatherImg from '../assets/images/weather.webp';
import tictactoeImg from '../assets/images/tictactoe.webp';
const projects = [
  {
    title: 'Weather App',
    image: weatherImg,
    position: 'top',
    description:
      'A responsive weather application built with React, using the OpenWeather API to display real-time forecasts and dynamic weather data.',
    tech: ['React', 'Vite', 'CSS Grid'],
    live: 'https://kberthel.github.io/Weather-App/',
    github: 'https://github.com/kberthel/Weather-App',
  },

  {
    title: 'Nifty App',
    image: niftyImg,
    position: '50% 55%',
    description:
      'A responsive web app offers pregnancy and parenting expert advice & services for people in their parenting journey.',
    tech: ['Adobe XD', 'Photoshop', 'Usability Testing'],
    live: ['https://berthel.myportfolio.com'],
  },
  {
    title: 'Tic Tac Toe',
    image: tictactoeImg,
    position: '50% 15%',
    description:
      'A classic tic-tac-toe game built with React, focusing on state management, game logic, and user interaction.',
    tech: ['React', 'Vite', 'Vercel'],
    live: ['https://tic-tac-toe-kberthel.vercel.app/'],
    github: 'https://github.com/kberthel/react-tic-tac-toe',
  },
];

export default projects;
