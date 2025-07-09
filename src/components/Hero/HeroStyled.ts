import styled from "@emotion/styled";

export const HeroCon = styled.div`
  margin-bottom: 48px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    margin-bottom: 0;
  }
`;

export const HeroPicThumb = styled.div`
  margin-bottom: 48px;

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const HeroDashboard = styled.div`
  text-align: center;

  @media (min-width: 1280px) {
    padding-right: 110px;

    text-align: left;
  }
`;

export const HeroContentCon = styled.div`
  margin-bottom: 48px;

  padding-left: 16px;
  padding-right: 16px;

  text-align: center;

  @media (min-width: 1280px) {
    margin-bottom: 52px;

    text-align: left;
  }

  & > h3 {
    margin-bottom: 16px;

    font-size: 36px;
    line-height: 1.2;
    letter-spacing: -0.5px;

    color: #000;

    @media (min-width: 1280px) {
      margin-bottom: 48px;

      font-size: 80px;
    }
  }

  & > p {
    font-size: 16px;
    line-height: 1.6;
    font-weight: 500;
    color: #686868;

    @media (min-width: 1280px) {
      font-size: 18px;
    }
  }
`;

export const HeroBtn = styled.button`
  width: 120px;

  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.22px;

  background-color: #151515;
  color: #fafafa;

  border-radius: 16px;

  @media (min-width: 1280px) {
    width: 164px;

    margin-bottom: 52px;

    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
      background-color: #fff;
      color: #151515;

      border: 1px solid #151515;

      cursor: pointer;

      transition: all 0.3s;
    }
  }
`;
