import { useState } from 'react'
import styled from 'styled-components'
import './GoalInput.css'


//style only for this component [internally it assign random class so that if same type of container in web page found styles do not colllide]
const GoalForm = styled.form`
    text-align: start;
    background-color: #f3ccff;
    width: 50rem;
    margin: auto;
    max-width: 90%;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

  .goal_heading {
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
  .goal_title {
    display: block;
    border: none;
    width: 75%;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid ${props => props.isFormValid ? '#0f0' : '#f00'};
  }
  .goal_title:focus {
    outline: none;
    }
  .btn_addGoal {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 1s;
}
  .error {
    color: #f00;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}
  .btn_addGoal:hover {
    background-color: #d09cfa;
}
`

function GoalInput(props) {
    const [goalText, setGoalText] = useState(' ')
    const [isValid, setIsValid] = useState(false)
    function updateGoalText(event) {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
        setGoalText(event.target.value)
    }
    function addGoal(event) {
        event.preventDefault()
        if (!goalText.trim().length) {
            setIsValid(false)
            return
        }
        const goal = { id: Math.random(), text: goalText }
        props.onAddGoal(goal)
    }
    return <GoalForm isFormValid={isValid} onSubmit={addGoal}>
        <p className='goal_heading'>Course Goal</p>
        <input onChange={updateGoalText} className='goal_title' type='text' placeholder='Enter Goal Title'></input>
        {!isValid && <p className='error'>Please Enter valid goal.</p>}
        <button type='submit' className='btn_addGoal'>Add Goal</button>
    </GoalForm>
}

export default GoalInput