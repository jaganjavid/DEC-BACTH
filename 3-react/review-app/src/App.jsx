import { useState } from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";




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

  const deleteFeedback = (id) => {
    
    setFeedback(feedback.filter(item => item.id !== id))

  }


  return (
    <div>
      <Header/>
      

      <div className="container">
         <FeedbackForm/>
         <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>

    </div>
  )
}





export default App

