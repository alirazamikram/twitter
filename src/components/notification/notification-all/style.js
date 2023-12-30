import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom:70px;
`;
// export const Header = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 80px;
//   height: 88px;

//   h1 {
//     font-family: "SF Pro Text";
//     font-style: normal;
//     font-weight: 800;
//     font-size: 17px;
//     line-height: 20px;
//     text-align: center;
//     letter-spacing: -0.3px;
//   }
// `;
export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0.33px 0px #ced5dc;

  .left-div {
    width: 20%;
    padding: 15px 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-right: 10px;
  }

  .right-div {
    /* height: 255px; */
    width: 80%;
    /* background: #ffffff; */
    /* box-shadow: 0px 0.33px 0px #ced5dc; */
    padding: 15px 0;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .inner-div {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    width: 90%;
  }
  span {
    font-weight: 900;
  }
`;
