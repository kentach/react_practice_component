import styled from 'styled-components';

const Card = (props) => {
  const { children } = props;
  return (
    <SCard>
      {children}
    </SCard>
  )
}

const SCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`

export default Card
