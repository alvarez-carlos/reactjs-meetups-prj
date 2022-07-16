import { NewMeetupForm } from "../components/meetups"

//useNavigate hook
import { useNavigate  } from 'react-router-dom'

const NewMeetups = () => {

    const navigate = useNavigate()

    // http code
    // https://react-meetups-project-7aad0-default-rtdb.firebaseio.com/
    const createMeetup = (enteredData) => {
        // console.log(enteredData)
        // Fetch function  // alternative Axios
        const url = 'https://react-meetups-project-7aad0-default-rtdb.firebaseio.com/meetups.json'
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(enteredData),
            header: {
                'Content-Type': 'application/json'
            }
        })      
        .then(() => {
            navigate('/') //navigate us away w/o allowing us to navigate back to the prev
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm createMeetup={createMeetup}/>
        </section>
    )
}

export default NewMeetups