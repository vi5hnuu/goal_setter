import './GoalList.css'

function GoalList(props) {
    return <div className='goal_container'>
        <div className='goalList_header'>
            <p>Your Goals</p>
        </div>
        <ul className='goal_list'>
            {props.items.map(goal => <li key={goal.id} className='goal_item'>{goal.text}</li>)}

        </ul>
    </div>
}

export default GoalList