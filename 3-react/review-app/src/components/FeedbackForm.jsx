import { use, useState } from "react";
import Button from "./sharder/Button";
import Card from "./sharder/Card";


const FeedbackForm = ({handleAdd}) => {


  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");


  const handelTextChange = (e) => {

    const trimmedText = e.target.value.trimStart();

    let textError = "";

    if(trimmedText.length < 10){

      textError = "Character must be at least 10"
      setMessage(textError);
      setBtnDisabled(true);

    }else{
      setMessage("");
      setBtnDisabled(false);
    }

    setText(trimmedText);
    

  }

  const handleSubmit = (e) => {
     e.preventDefault();

     handleAdd({text});

     setText("");
  }


  return (
   <Card>
     <h3>Add your reviews</h3>

     <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <input type="text" placeholder='Enter your ideas' value={text} onChange={handelTextChange}/>
        <Button version="primary" type="submit" isDisabled={btnDisabled}>Send</Button>
      </div>

      <p className="message">{message && message}</p>
     </form>
   </Card>
  )
}

export default FeedbackForm