import CourseGoalItem from "./CourseGoalItem";

const CourseGoalList = props => {

    //console.log(props.courseList);
    const testDelete = id => {
        console.log(id);
    }

    return (
        <ul className="goal-list">
            {props.courseList.map(courseGoal => (
                    <CourseGoalItem
                        key={courseGoal.id}
                        id={courseGoal.id}
                        //DeleteGoal_List={testDelete}
                        DeleteGoal_List={props.onDeleteItemAPP}
                    >
                        {courseGoal.text}
                    </CourseGoalItem>
                )
                )}
        </ul>
    );
}

export default CourseGoalList;