import { students } from "./data"
import Score from "./Score"

const Student = (props) => {
  return (
    <div>
      <h1>Student Name: {props.student.name}</h1>
      <h3>Bio: <p>{props.student.bio}</p></h3>
      {props.student.scores.map(score => 
        <Score key={props.student.name} scores={score}/>
      )}
    </div>
  );
}

export default Student;