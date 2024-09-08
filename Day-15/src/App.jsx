import React from 'react';
import ButtonClicker from './components/Day-15_Ques-1_ButtonClicker';
import LikeButton from './components/Day-15_Ques-2_LikeButton';
import TrafficLight from './components/Day-15_Ques-3_TrafficLight';
import "./components/TrafficLight.css"
import GreetUser from './components/GreetUser';
import NameForm from './components/NameForm';

const App = () => {
  return (
    <div>
      {/* <ButtonClicker />
      <LikeButton /> */}

      {/* <TrafficLight /> */}

      <GreetUser username = "Ansh"/>
      {/* <GreetUser /> */}

      {/* <NameForm /> */}

    </div>
  )
}

export default App;