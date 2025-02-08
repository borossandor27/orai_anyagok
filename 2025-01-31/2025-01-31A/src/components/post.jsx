import styled from 'styled-components';

const PostDiv = styled.div`
    background-color: #333;
    color: white;
    font-family: Arial, sans-serif;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
function Post(props) {
   let {title, content} = props;
    return (
       <>
        <PostDiv>
            <h2>{title}</h2>
            <p>{content}</p>
        </PostDiv>
        </>
            )
    

}
export default Post