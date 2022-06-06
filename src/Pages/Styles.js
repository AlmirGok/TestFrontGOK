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
    height: 474px;
    background: #fff;
    width: 800px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #cfcfcf;
  }
  div.BoxLoginImput {
    flex: 1;
    height: 100%;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0px 0px 10px;
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
    border-radius: 0px 10px 10px 0px;
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
export const ContainerPerfil = styled.div`
  color: #fff;
  background: #ededed;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  section.ContentPerfil {
    background-color: #ebebeb;
    box-shadow: 0px 0px 5px #b3b3b3;
    color: #fff;
    display: flex;
    position: relative;
    flex-direction: row;
    overflow: hidden;
    width: calc(100% - 10%);
    padding: 0px 5%;
    height: 100%;
    .BoxScrollList {
      height: 100%;
      padding-top: 20px;
      overflow-y: scroll;
      display: flex;
      flex: 1;
      flex-direction: column;
      .BottomMargin {
        width: 100%;
        margin-bottom: 30px;
        display: block;
      }
    }
    header {
      width: 90%;
      margin: 0px 5% 15px 5%;
      height: 60px;
      display: flex;
      justify-content: space-between;
    }
  }
  div.BoxModalAddTags {
    input.InputModal {
      display: none;
    }
    input:checked + div.BoxModal {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div.BoxModal {
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      display: none;
      align-items: center;
      justify-content: center;
      background: #00000096;
      position: fixed;
    }
  }
  div.BoxModalEditTags {
    input.InputModal {
      display: none;
    }
    input:checked + div.BoxModal {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div.BoxModal {
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      display: none;
      align-items: center;
      justify-content: center;
      background: #00000096;
      position: fixed;
    }
  }
`;
export const ContainerUsers = styled.div`
  color: #fff;
  background: #ededed;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  section.ContentUsers {
    background-color: #ebebeb;
    box-shadow: 0px 0px 5px #b3b3b3;
    color: #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .BoxScrollList {
      height: 100%;
      width: calc(100% - 10%);
      padding: 0px 5%;
      padding-top: 20px;
      padding-bottom: 20px;
      overflow-y: scroll;
    }
    .LinkPages {
      text-decoration: none;
    }
  }
`;
