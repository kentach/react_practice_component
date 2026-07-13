import styled from "styled-components";

const UserIconWithName = ({ image, name }) => {
  return (
    <>
      <SContainer>
        <Img src={image} alt={name} />
        <SName>{name}</SName>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const SName = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 1.2rem;
  color: #40514e;
`;

export default UserIconWithName;
