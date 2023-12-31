import { Title, Wrapper } from "./Section.styled";

export const Section = ({ title, children }) => {
    return (
      <Wrapper>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    );
  };