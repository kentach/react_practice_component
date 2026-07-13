import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  )
}
const SHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #119992;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const SLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`

export default Header
