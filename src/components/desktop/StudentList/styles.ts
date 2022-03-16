import styled from '@emotion/styled'

export const Container = styled.div`
    width: 45vw;
    height: 60vh;
    overflow-y: scroll;
    padding-top: 10px;
`;
export const StudentListTitle = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
// custom checkBox
export const CheckBoxContainer = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    :hover{
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    input[type='checkbox']:checked+label {
    background-color:#ff6e04;
}
    input[type="checkbox"]+label{
        width : 20px;
    height: 20px;
    border-radius: 5px;
    }
    input[type="checkbox"]{
        display:none;
    }
`;
export const CheckPoint = styled.input`
    width : 20px;
    height: 20px;
    border-radius: 5px;
    outline:none;
    border:none;
`;
export const Title = styled.div`
    font-size: 18px;
    width: 140px;
    text-align: center;
`;
export const StudentList = styled(StudentListTitle)`
font-size: 18px;
 span{
     width: 140px;  
     text-align: center;
 }
`;
export const StudentSelect = styled.select`
    width: 140px;
    height: 30px;
    appearance: none;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    outline: none;
`