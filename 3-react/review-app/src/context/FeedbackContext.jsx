import { createContext, useState } from "react";


const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
          id:1,
          text:'This is a sample is from context 1'
        },
        {
          id:2,
          text:"This is a sample is from context 2"
        },
        {
          id:3,
          text:"This is a sample is from context 3"
        }
    ]);
    
    const deleteFeedback = (id) => {
    
      setFeedback(feedback.filter(item => item.id !== id))
  
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;



