import {useState} from 'react';

import Button from '../UI/Button';

import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setValue] = useState();

    const getInputValue = event => {
        setValue(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        //console.log(event.target);
        props.addGoal(enteredValue);

    }
    return (
    <form onSubmit={formSubmitHandler}>
        <div className="form-control">
            <label>Course Goal</label> 
            <input type="text" onChange={getInputValue}></input>
        </div>
        <Button type="submit">Add Goal</Button>
    </form>
    );
}

export default CourseInput;