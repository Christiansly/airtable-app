import "./App.css";
import Airtable from "airtable";
import { useEffect, useState } from "react";
import Goal from "./components/Goal.js";

const base = new Airtable({ apiKey: "keyBWm4AVqjzrCj6a" }).base(
  "appsv7USkkmRC6CRq"
);

function App() {
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        console.log(records);
        setGoals(records);
        fetchNextPage();
      });
    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        // console.log(records);
        setUpdates(records);
        fetchNextPage();
      });
  }, []);
  return (
    <>
      <h1>My Goals</h1>
      {goals.map((goal) => (
        <Goal key={goal.id} goal={goal} />
      ))}
    </>
  );
}

export default App;
