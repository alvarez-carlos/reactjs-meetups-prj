import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

// useRef Hook
import { useRef } from 'react'

const NewMeetupForm = ({ createMeetup }) => {

  const titleInputRef =  useRef()
  const imageInputRef =  useRef()
  const addressInputRef =  useRef()
  const descriptionInputRef =  useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredData =  {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value
    }
    
    // console.log(enteredData)

    createMeetup(enteredData)

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type='text' required id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='image'>Meetup Image</label>
            <input type='url' required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='address'>Meetup Address</label>
            <input type='text' required id='address' ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='description'>Meetup Description</label>
            <textarea required id='description' rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add meetup</button>    
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
