import {useState} from 'react'; 

import './App.css';

import CourseGoalList from './components/CourseGoals/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput';

function App() {
  const [courseGoalsList, setCourseGoalsList] = useState([
    {text: 'Do all exercises!', id: 'g1' },
    {text: 'Finish the course!', id: 'g2'}
  ]);

  
  const addGoalHandler = enteredValue => {
    setCourseGoalsList(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text: enteredValue, id: Math.random.toString()});
      return updatedGoals;
    })
    //console.log(enteredValue);
  }

  const deleteFromCourseList = idCourse => {
    //console.log(idCourse);
    setCourseGoalsList(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== idCourse);
      return updatedGoals;
    });
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoalsList.length > 0) {
    content = (
      <CourseGoalList courseList={courseGoalsList} onDeleteItemAPP={deleteFromCourseList} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput addGoal={addGoalHandler}/>
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
