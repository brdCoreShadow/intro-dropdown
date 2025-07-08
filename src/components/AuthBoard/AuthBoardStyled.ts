import styled from "@emotion/styled";

export const AuthBoardCon = styled.ul`
  text-align: center;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & a {
    font-size: 14px;
    line-height: 1.1;
    font-weight: 500;

    color: #686868;
  }

  & > li {
    padding-top: 16px;
    padding-bottom: 16px;

    @media (min-width: 1280px) {
      padding: 0;

      &:hover, &:focus, &:active{
        cursor: pointer;

          & > a{
            color: #151515;
        }
      }
    }
  }

  & > li:last-of-type {
    width: 195px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 12px;
    padding-bottom: 12px;

    border: 1px solid #686868;
    border-radius: 14px;

    @media (min-width: 1280px) {
      width: 104px;

      margin-left: 40px;
      margin-right: 0;

        &:hover, &:focus, &:active{
        border: 1px solid #151515;

      
      }
    }
  }
`;
