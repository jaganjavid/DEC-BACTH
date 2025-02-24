import { useState } from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from 'uuid';



const App = () => {


  // let name = "jagan";

  const [feedback, setFeedback] = useState([
    {
      id:1,
      text:'This is a sample 1'
    },
    {
      id:2,
      text:"This is a sample 2"
    },
    {
      id:3,
      text:"This is a sample 3"
    }
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    
  }

 


  return (
    <div>
      <Header/>
      

      <div className="container">
         <FeedbackForm handleAdd={addFeedback}/>
         <FeedbackList/>
      </div>

    </div>
  )
}





export default App

