import { MeetupList } from "../components/meetups";
import useFetch from "../components/hooks/useFetch";

const AllMeetups = () => {  

  const url = "https://react-meetups-project-7aad0-default-rtdb.firebaseio.com/meetups.json";  
  const { isLoading, data } = useFetch({ url: url }) 


  if (isLoading){
    return(
      <section>
        <h2>Loading...</h2>
      </section>
    )
  }    

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={data} />
    </section>
  );
};

export default AllMeetups;
