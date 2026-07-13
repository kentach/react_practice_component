import styled from "styled-components";
import Card from "../../atoms/card/Card";
import UserIconWithName from "../../molecules/user/UserIconWithName";

const UserCard = (props) => {
  const { name, image, email, phone, company } = props;
  return (
    <Card>
      <UserIconWithName image={image} name={name} />

      <SDL>
        <dt>メール</dt>
          <dd>{email}</dd>
        <dt>TEL</dt>
          <dd>{phone}</dd>
        <dt>会社名</dt>
          <dd>{company}</dd>  
      </SDL>
    </Card>
  )
}

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 1rem;
  dt {
    float: left;
  }
  dd {
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    overflow-wrap: break-word;
  }
`

export default UserCard
