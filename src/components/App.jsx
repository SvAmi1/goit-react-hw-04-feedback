import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout";


export const App = () => {
 
  const [ good, setGood ]  = useState(0);
  const [ neutral,  setNeutral]  = useState(0);
  const [ bad, setBad ]  = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = (good, neutral, bad) => {
    if ()
    setGood(prevState => prevState + 1);
    setNeutral(prevState => prevState + 1);
    setBad(prevState => prevState + 1);
  };


  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const persent = Math.round((good / countTotalFeedback()) * 100);
    return persent;
  };

  const  handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

   return (
    <Layout>
    <Section title="Please, leave your feedback">
      <FeedbackOptions
        onChange={handleFeedback} 
        onReset={handleReset} 
        options={options}
      />
    </Section>
    <Section title="Statistics">
    <Statistics
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={countTotalFeedback()} 
      positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
    <GlobalStyles/>
    </Layout>
  );
}