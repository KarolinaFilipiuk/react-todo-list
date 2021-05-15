import React, { useState } from "react";

import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  const INITIAL_GOALS = [
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ];
  const [courseGoals, setCourseGoals] = useState(INITIAL_GOALS);

  const addGoalHandler = (entryText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: entryText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalID) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalID);
    });
    console.log(goalID);
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one? :)</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
