import styled from "@emotion/styled";

export const LoginPageCon = styled.div`
  padding-top: 64px;

  text-align: center;

  & > h3 {
    margin-bottom: 24px;

    font-size: 36px;
    line-height: 1.5;

    color: #151515;
  }
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding-left: 24px;
  padding-right: 24px;

  text-align: left;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  & > span {
    margin-bottom: 8px;
  }

  & > input {

    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;

    border:1px solid #979797;
    border-radius: 12px;
  }
`;

export const SubmitBtn = styled.button`
margin-top: 24px;   

padding-top: 12px;
padding-bottom: 12px;
padding-left: 24px;
padding-right: 24px;

background-color: #151515;

color: #fff;

border-radius: 16px;

`