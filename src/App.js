import { useState } from 'react';
import './App.css';
import GoalInput from './GoalInput';
import GoalList from './GoalList';

function App() {
  const INITIAL_GOALS = [
    {
      id: 'g1',
      text: 'Buy grocery'
    }, {
      id: 'g2',
      text: 'Buy grocery'
    }
  ]
  const [goals, setGoals] = useState(INITIAL_GOALS)
  function addGoaHandler(goal) {
    setGoals((prevGoals) => { return [goal, ...prevGoals] })
  }
  return (
    <div className="App">
      <GoalInput onAddGoal={addGoaHandler} />
      <GoalList items={goals} />
    </div>
  );
}

export default App;
