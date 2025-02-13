import styled from 'styled-components';

const MyButton = styled.button`
    background-color: {props => props.color};
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.3rem;
    cursor: pointer;
`;

export default MyButton;