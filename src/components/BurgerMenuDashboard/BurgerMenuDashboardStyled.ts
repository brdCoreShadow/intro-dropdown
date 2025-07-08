import styled from "@emotion/styled";

type Props = {
    isFeatures: boolean;
    isCompany: boolean;
}

export const BurgerMenuDashboardCon = styled.div`
  padding-top: 22px;
  padding-bottom: 124px;
  padding-left: 24px;
  padding-right: 20px;
`;

export const BurgerMenuDashboardBtnCon = styled.div`
  text-align: right;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;

  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='26' height='26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23151515' fill-rule='evenodd'%3E%3Cpath d='M2.393 0.98L25.021 23.608l-1.414 1.414L0.979 2.395z'/%3E%3Cpath d='M0.98 23.607L23.609 0.979l1.414 1.414L2.395 25.021z'/%3E%3C/g%3E%3C/svg%3E");
`;
export const DashboardList = styled.ul`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const Item = styled.li`

&:not(:last-of-type){
    margin-bottom: 24px;
}

& > a{
    font-size: 16px;
    line-height: 1.6;
    font-weight: 500;

    color: #686868;
}
`

export const ItemTitleCon = styled.div<Partial <Props>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & > h3 {
    margin-right: 24px;

    font-size: 16px;
    line-height: 1.6;
    font-weight: 500;

    color: #686868;
  }

  & img {
  transform: ${({ isFeatures, isCompany }) => isFeatures || isCompany ? "rotate(180deg)" : "rotate(0deg)"};
}

`;

export const SubList = styled.ul<Partial <Props>>`

display: ${({isFeatures, isCompany}) => isFeatures || isCompany ? "block" : "none"};


padding-top: 24px;

`

export const SubItem = styled.li`

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

padding-left: 24px;

&:not(:last-of-type){
    margin-bottom: 16px;
}

& > img{
    margin-right: 16px;
}

& > a{
    font-size: 16px;
    line-height: 1.6;
    font-weight: 500;

    color: #686868;
}
`
