import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  height: 100%;
  background: #ededed;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  section.ContentLogin {
    display: flex;
    height: 100%;
    background: #fff;
    width: 100%;
    box-shadow: 0px 0px 5px #cfcfcf;
  }
  div.BoxLoginImput {
    flex: 1;
    height: 100%;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    p.TextTermos {
      font-size: 15px;
      padding: 10px;
      text-align: center;
      span {
        color: blue;
      }
    }
    div {
      display: flex;
      justify-items: center;
      justify-content: center;
      align-items: center;
      flex: 1;
      flex-direction: column;
      width: 300px;
      .LinkPages {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }
      p {
        display: flex;
        width: 90%;
        justify-items: start;
      }
      p.title {
        font-size: 23px;
        font-weight: bold;
        margin: 0px 0px 5px 0px;
      }
      p.infor {
        font-size: 15px;
        color: gray;
      }
      img {
        width: 200px;
      }
    }
  }
  div.BoxLoginArt {
    display: flex;
    height: 100%;
    flex: 1;
    background: black;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    div {
      width: 100%;
      display: flex;
      flex: 1;
      padding: 10px;
      img {
        width: 100%;
      }
    }
    text {
      padding: 10px 40px 30px 40px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      span {
        font-weight: bold;
      }
    }
  }
`;
