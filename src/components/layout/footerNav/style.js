import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -0.33px 0px #BDC5CD;
  background: #FFFFFF;

  a.active {
    color: var(--link-color);
  }
  .icon-color {
    color: var(--second-color);
  }
`;
