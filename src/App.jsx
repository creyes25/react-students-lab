import './App.css'
import { students } from './data'
import Student from './Student'


function App() {
  return (
    <div>
      {students.map(student => 
       <Student key={student.name} student={student} /> 
      )}
    </div>
  )
}

export default App
