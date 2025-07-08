import styled from "@emotion/styled";

export const AuthBoardCon = styled.ul`
  text-align: center;

  & a {
    font-size: 14px;
    line-height: 1.1;
    font-weight: 500;

    color: #686868;
  }

  & > li {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  & > li:last-of-type {
    width: 195px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 12px;
    padding-bottom: 12px;

    border: 1px solid #686868;
    border-radius: 14px;
  }
`;
