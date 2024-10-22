import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){
  return (<div>
    <Card />
  </div>)
}

function Card(){
  return (<div className='card'>
    <img src="images/1671663990490.jpg" alt="Profile" />
    <Text/>
    <LanguagesSection/>
  </div>)
}

function Text(){
  return (<div className='name'>
    Muhammad Saad Ur Rehman
    <p>I am a Professional Software Engineer working as Game and Web Developer. For Web Development, I use tech stack like Django + React. For Game Dev, I use Unity Engine.
    </p>
  </div>)
}

function LanguagesSection(){
  let languages = [
    {
      programmingLanguage: "JavaScript",
      color: "yellow",
      emoji: "🟡"
    },
    {
      programmingLanguage: "Python",
      color: "blue",
      emoji: "🔵"
    },
    {
      programmingLanguage: "Java",
      color: "orange",
      emoji: "🟠"
    },
    {
      programmingLanguage: "C++",
      color: "green",
      emoji: "🟢"
    },
    {
      programmingLanguage: "Ruby",
      color: "pink",
      emoji: "🟣"
    }
  ];
  return (<div className='languages'>
    {languages.map((language)=>{
      return <Language programmingLanguage={language.programmingLanguage} color={language.color} emoji={language.emoji} />
    })}
  </div>)
}

function Language(props){
  return <div className='langCard'style={{backgroundColor:props.color}} >
    <p>{props.programmingLanguage}</p>
    <p>{props.emoji}</p>
  </div>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

