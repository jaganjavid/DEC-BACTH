
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
  
  const {feedback} = useContext(FeedbackContext);

  console.log(feedback);
  
  if(feedback.length === 0) return <h3>There is no items</h3>  

  return (
    feedback.map(item => (
        <FeedbackItem key={item.id} item={item}/>
    ))
  )
}

export default FeedbackList