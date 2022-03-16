import styled from "@emotion/styled";

export const AtInquiryWrapper = styled.div`
    width: 1200px;
    height: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const SysDate = styled.div`
    font-weight: 600;
    font-size: 24px;
    display: flex;
    align-items: center;
`;
export const AtInquiryBox = styled.div`
    width: 100%;
    height: 730px;
    display: flex;
    justify-content: space-between;
`;
export const Filter = styled(AtInquiryWrapper)`
    width: 130px;
    height: 730px;
    box-shadow: 0px 2px 10px 0px #8C8C8C40;
    border-radius: 10px;
    align-items: center;
`
export const StatusFilterBox = styled(Filter)<{isBig:boolean}>`
    height:${props=>props.isBig ? "300px" : "200px"};
    box-shadow: none;
    margin-bottom: 15px;
`
export const StudentStatus = styled(Filter)`
    width: 735px;
    font-size: 22px;
    color: #6E6E6E;
    text-align: center;
`
export const StatusBox = styled(StudentStatus)`
    width: 250px;
    justify-content: space-between;
    box-shadow: none;
`
export const Calendar = styled(StudentStatus)`
    height:270px;
    width: 250px;
`
export const Place = styled(StudentStatus)`
    width: 250px;
    height: 425px;
`
export const Btn = styled(AtInquiryWrapper)<{isCheked:boolean}>`
    width: 80px;
    height: 35px;
    margin:none;
    background-color: ${props=>props.isCheked ? "#FF6E04": "#EDEDED"};
    box-shadow: 0px 2px 8px rgba(196, 196, 196, 0.25);
    border-radius: 20px;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: ${props=>props.isCheked ? "#EEEEEE" : "#6B6B6B"};
    :hover{
        cursor: pointer;
    }
`;
export const FilterTitle = styled(SysDate)`
    font-size: 18px;
    color: #6B6B6B;
`