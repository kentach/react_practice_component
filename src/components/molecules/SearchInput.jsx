import Input from "./../atoms/input/Input";
import styled from "styled-components";
import SecondaryButton from "./../atoms/buttons/SecondaryButton";

const SearchInput = () => {
  return (
    <>
      <SButtonWrapper>
        <Input type="text" placeholder="検索条件を入力" />
        <SecondaryButton>検索</SecondaryButton>
      </SButtonWrapper>
    </>
  )
}
const SButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export default SearchInput
