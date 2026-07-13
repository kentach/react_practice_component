import styled from "styled-components";

const Input = (props) => {
  const { placeholder = "" } = props;
  return (
    <>
      <SInput type="text" placeholder={placeholder} />
    </>
  )
}

const SInput = styled.input`
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 100%;
  outline: none;
  box-sizing: border-box;
`

export default Input
