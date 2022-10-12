import { students } from "./data"

const Student = (props) => {
  return (
    <div>
      <h1>Student Name: {props.student.name}</h1>
      <h3>Bio: <p>{props.student.bio}</p></h3>
    </div>
  );
}
 
export default Student;