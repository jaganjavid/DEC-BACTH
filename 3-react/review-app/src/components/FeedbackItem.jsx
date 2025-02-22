import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const FeedbackItem = ({item,handleDelete}) => {

  
  return (
    <div className='card'>
       <div className='card-wrapper'>
         <h4>{item.text}</h4>
         
         <div>
           <div className='edit'>
              <FiEdit size="20px" color="#ee8c68"/>
           </div>

           <div className='delete'>
              <MdDeleteOutline size="20px" color="red" onClick={() => handleDelete(item.id)}/>
           </div>

         </div>
       </div>
    </div>
  )
}

export default FeedbackItem

