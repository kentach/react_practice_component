import styled from "styled-components";

const BaseButton = styled.button`
color: white;
border: none;
padding: 0.5rem 1rem;
border-radius: 0.25rem;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
    background-color: #2563eb;
}
`

export default BaseButton
