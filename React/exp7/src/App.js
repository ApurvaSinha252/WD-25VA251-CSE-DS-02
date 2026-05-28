import './App.css';

function Student(props) {

  return (

    <div className="card">

      <h2>{props.name}</h2>

      <p>Course: {props.course}</p>

      <p>Marks: {props.marks}</p>

    </div>

  );

}

function App() {

  return (

    <div>

      <h1>Student Details</h1>

      <Student
        name="Rahul"
        course="B.Tech"
        marks="90"
      />

      <Student
        name="Priya"
        course="BCA"
        marks="85"
      />

      <Student
        name="Aman"
        course="BSc"
        marks="88"
      />

    </div>

  );

}

export default App;