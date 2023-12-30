import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    background: var(--main-bg-color);
    display: block;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffff;
  /* height:300px */
`;

// export const SearchDiv = styled.div`
//   width: 80%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background-color: pink; */

//   h1 {
//     color: red;
//   }
// `;
export const MiddDiv = styled.div`
  width: 100%;
  border-top: 1px solid #ced5dc;
  border-bottom: 1px solid #ced5dc;
  padding: 15px 0;
  background: #ffffff;

  h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 23px;
    margin-left: 20px;
    color: var(--main-color);
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  flex-wrap: wrap;

  h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.15px;
  }
  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.3px;
  }

  button {
    background: var(--btn-bg-color);
    border-radius: 16px;
    width: 136px;
    height: 34px;
    border: none;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.1px;
    padding: 8px;
    color: var(--btn-text-color);
    margin: 10px 0;
  }
`;
