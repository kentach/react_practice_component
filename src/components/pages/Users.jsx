import styled from 'styled-components';
import UserCard from '../organizms/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val + 1,
    name: `山田太郎 ${val + 1}`,
    image: `${import.meta.env.BASE_URL}dog.avif`,
    email: "yamada.tarou@example.com",
    phone: "090-1234-5678",
    company: "Acme Corp",
  };
});

const SUserArea = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const SContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`;

const STitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const Users = () => {
  return (
    <SContainer>
      <STitle>Users 一覧</STitle>
      <SUserArea> 
      { 
      users.map((user) => (
        <UserCard {...user} />
      )) 
      }
      </SUserArea>
    </SContainer>
  )
}

export default Users