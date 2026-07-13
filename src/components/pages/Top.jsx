import styled from 'styled-components'; 
import SearchInput from '../molecules/SearchInput';

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

const Top = () => {
  return (
    <SContainer>
      <STitle>トップページ</STitle>
      <SearchInput/>
    </SContainer>
  )
}

export default Top
