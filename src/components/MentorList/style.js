import styled from "styled-components";

export const WrapperList = styled.div`
    display: flex;
    align-items: center;
    padding-right: 10px;
    justify-content: space-between;
    transition: 0.3s ease-in-out;
    &:hover {
        background: #dde6ed;
        border-radius: 10px;
    }
`;

export const WrapperListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const WrapperListDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: #526d82;
`;
