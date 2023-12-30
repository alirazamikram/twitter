import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;

  .tweeting-btn {
    width: 56px;
    height: 56px;
    background: var(--btn-bg-color);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    border-radius: 50%;
    background-image: url("images/add-text-icon.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;
