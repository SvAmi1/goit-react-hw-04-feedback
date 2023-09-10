import { NotificationMessage } from "components/NotificationMes/NotificationMes";
import { Items } from "./Statistics.styled";


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <NotificationMessage />;
  }

  return (
    <div>
        <ul>
        <Items>
          <p>
            Good: <span>{good}</span>
          </p>
        </Items>
        <Items>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
        </Items>
        <Items>
          <p>
            Bad: <span>{bad}</span>
          </p>
        </Items>
        <Items>
          <p>
            Total: <span>{total}</span>
          </p>
        </Items>
        <Items>
          <p>
            Positive feedback: <span>{positivePercentage}%</span>
          </p>
        </Items>
      </ul>
    </div>
  );
};