import React from 'react';
import GreetUser from './components/Day-16_Ques-1_GreetUser';
import NameForm from './components/Day-16_Ques-2_NameForm';
import InputLengthChecker from './components/Day-16_Ques-3_InputLengthChecker';

// const App = () => {
//   return (
//     <div>
//       <GreetUser username="Ansh Gulati" />
//       <GreetUser />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Enter your name</h1>
//       <NameForm />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <h1>Check Input Length</h1>
      <InputLengthChecker />
    </div>
  );
};

export default App