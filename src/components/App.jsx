
import { Component } from "react"
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = type => {
    this.setState(prevState => {
      return {
      [type]: prevState[type] + 1
  }})
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const persent = Math.round((good / this.countTotalFeedback()) * 100);
    return persent;
  };

  handleReset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
  })
  };

  render () {
  const { good, neutral, bad } = this.state;
  const options = ['good', 'neutral', 'bad'];
   return (
    <Layout>
    <Section title="Please, leave your feedback">
      <FeedbackOptions
        onChange={this.handleFeedback} 
        onReset={this.handleReset} 
        options={options}
      />
    </Section>
    <Section title="Statistics">
    <Statistics
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={this.countTotalFeedback()} 
      positivePercentage={this.countPositiveFeedbackPercentage()}
      />
    </Section>
    <GlobalStyles/>
    </Layout>
  );
};
}