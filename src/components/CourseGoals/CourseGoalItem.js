import './CourseGoalItem.css';

const CourseGoalItem = props => {
    
    const deleteCourseById = () => {
        props.DeleteGoal_List(props.id);
        //props.DeleteGoal_List(props.id);
    };
    
    return (
        <li className="goal-item" onClick={deleteCourseById}>
            {props.children}
        </li>
    );
}

export default CourseGoalItem;