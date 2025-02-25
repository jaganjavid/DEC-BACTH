import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    })

    useEffect(() => {

      fetchFeedback();

    }, []);

    // fetch Feedback

    const fetchFeedback = async () => {

      const response = await fetch("http://localhost:3000/posts");

      const data = await response.json();

      setFeedback(data);

    }

    

    const addFeedback = async (newFeedback) => {
      
      const response = await fetch("http://localhost:3000/posts", {
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body: JSON.stringify(newFeedback)
      })

      const data = await response.json();

      setFeedback([data, ...feedback]);
    }

    const updateFeedback = async(id, updItem) => {
      
      const response = await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json",
        },
        body: JSON.stringify(updItem)
      })

      const data = await response.json();


      setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item));

    }
    
    const deleteFeedback = async(id) => {

      if(window.confirm("Are you sure?")){
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
          method:"DELETE"
        })
        setFeedback(feedback.filter(item => item.id !== id))
      }
      
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
         item:item,
         edit:true
      })
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            editFeedback,
            deleteFeedback,
            addFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;



