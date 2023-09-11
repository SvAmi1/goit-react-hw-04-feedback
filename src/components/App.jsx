import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout";


export const App = ({
  good: 0,
  neutral: 0,
  bad: 0,
}) => {
 

  // const { good, neutral, bad } = this.state;
  // const options = ['good', 'neutral', 'bad'];

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
}