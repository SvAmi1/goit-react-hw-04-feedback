import { nanoid } from 'nanoid';
import { Btn, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onChange, onReset, options }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Btn
          key={nanoid()}
          type="button"
          onClick={() => onChange(option)}
        >
          {option}
        </Btn>
      ))}

      <Btn type="button" onClick={onReset}>
        reset
      </Btn>
    </Wrapper>
  );
};