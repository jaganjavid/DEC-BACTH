import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Card from "./sharder/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({item}) => {


  const {deleteFeedback} = useContext(FeedbackContext);

  
  return (
    <Card>
       <div className='card-wrapper'>
         <h4>{item.text}</h4>
         
         <div>
           <div className='edit'>
              <FiEdit size="20px" color="#ee8c68"/>
           </div>

           <div className='delete'>
              <MdDeleteOutline size="20px" color="red" onClick={() => deleteFeedback(item.id)}/>
           </div>

         </div>
       </div>
    </Card>
  )
}

export default FeedbackItem

