import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <SFooter>
         &copy; 2024 My Company. All rights reserved.
      </SFooter>
    </>
  )
}

const SFooter = styled.header`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #119992;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
`

export default Footer
