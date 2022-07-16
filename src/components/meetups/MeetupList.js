import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css'

const MeetupList = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map((meetup) => {
        return <MeetupItem key={meetup.id} item={meetup}></MeetupItem>;
      })}
    </ul>
  );
};

export default MeetupList;
