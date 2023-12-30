import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    background: #ffffff;
    display: block;
    overflow-y: scroll;
    padding: 10px 0px 70px 0px;
  }
`;
// export const NotificationTab = styled.div`
//   display: flex;
//   width: 100%;
//   height: 44px;
//   background: #ffffff;
//   box-shadow: 0px 0.33px 0px #ced5dc;

//   .active-tab {
//     width: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-bottom: 1.5px solid #4c9eeb;

//     &{
//       text-align: center;
//       font-style: normal;
//       font-weight: 600;
//       font-size: 16px;
//       line-height: 19px;
//       letter-spacing: -0.3px;
//       color: #4c9eeb;
//     }
//   }
//   .disable-tab {
//      {
//       width: 50%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }

//     & {
//       text-align: center;
//       font-style: normal;
//       font-weight: 600;
//       font-size: 16px;
//       line-height: 19px;
//       letter-spacing: -0.3px;
//       color: #687684;
//     }
//   }
// `;
export const ProfileBox = styled.div`
  width: 100%;
  height: 476px;
  box-shadow: 0px 0.33px 0px #ced5dc;
  display: flex;
  padding-top:10px;
`;
export const Left = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 10px;
  box-sizing: border-box;
`;
export const Right = styled.div`
  width: 80%;
  height: 100%;

  .liked-text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #687684;
    padding: 5px 0px 0px 0px;
  }
  .dropdown-both-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3px 0px;
  }

  .name-username-div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .profile-name {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
  }
  .username {
    color: #687684;
  }
  .time {
    color: #687684;
  }
  .dropdown-btn {
    background: url("images/dropdown.svg");
    background: url(images/dropdown.svg);
    width: 20px;
    height: 10px;
    border: none;
    outline: none;
    background-repeat: no-repeat;
    background-position: 1px;
    margin-right: 10px;
  }
  .bio-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: #141619;
    width: 302px;
  }

  .image-div {
    width: 311px;
    height: 236px;
    margin: 15px 0px;
    border: 0.33px solid #ced5dc;
    border-radius: 8px;

    background: #ffffff;
  }
  .card-img {
    border-radius: 8px 8px 0px 0px;
  }
  .card-description {
    margin: 10px;
    width: 287px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
  }


  .show-threads-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #4c9eeb;
  }
`;
