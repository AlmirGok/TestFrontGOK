import styled from "styled-components";

export const BtnBlack = styled.button`
  background-color: black;
  color: #fff;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 40px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0px 3px 7px gray;
  animation: 0.5s;
  transition: 0.5s;
  transform: scale(1);
  :hover {
    animation: 0.5s;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
export const BtnTags = styled.div`
  background-color: #0017ff1c;
  color: #0017ff;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 35px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  animation: 0.2s;
  transition: 0.2s;
  padding: 0px 10px;
  box-sizing: border-box;
  border: solid 2px Transparent;
  img {
    width: 20px;
    margin-left: 10px;
  }
  :hover {
    animation: 0.2s;
    transition: 0.2s;
    border: solid 2px #0017ff;
  }
`;
export const HeaderWhite = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 3px #a7a7a7c4;
  height: 70px;
  color: #fff;
  width: 100%;
  position: relative;
  justify-content: space-between;
  div {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 110px;
    }
  }
`;
export const ContainerPerfil = styled.div`
  background-color: #fff;
  width: 300px;
`;
export const BoxOnePerfil = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 4px #cdcdcd;
  padding-bottom: 12px;
  margin: 15px 15px 5px 15px;
  border-radius: 7px;
  span {
    width: 100%;
    height: 80px;
    background: black;
    display: flex;
  }
  div {
    background: transparent;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -42px;
    img {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      border: solid 4px #fff;
    }
  }
  h1 {
    color: #000;
    font-size: 20px;
    padding-left: 30px;
    margin-top: 0px;
  }
  h4 {
    color: gray;
    font-weight: 400;
    font-size: 14px;
    padding-left: 30px;
    margin-top: 2px;
    margin-bottom: 12px;
  }
  section {
    display: flex;
    justify-content: space-between;
    color: #000;
    font-size: 17px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 5px;
    h3 {
      font-size: 17px;
    }
  }
`;
export const BoxTwoPerfil = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 4px #cdcdcd;
  padding-bottom: 12px;
  margin: 15px 15px 5px 15px;
  border-radius: 7px;
  h1 {
    color: #000;
    font-size: 20px;
    padding-left: 30px;
    margin-top: 10px;
  }
  h5 {
    color: #000;
    font-size: 14px;
    padding-left: 30px;
    margin-top: 10px;
    margin-bottom: 12px;
    font-weight: 400;
  }
  section {
    color: #000;
    font-size: 14px;
    padding-left: 30px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    img {
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
    }
  }
`;
export const BoxTheePerfil = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 4px #cdcdcd;
  padding-bottom: 12px;
  margin: 15px 15px 5px 15px;
  border-radius: 7px;
  h1 {
    color: #000;
    font-size: 20px;
    padding-left: 30px;
    margin-top: 10px;
  }

  section {
    color: #000;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    img {
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
    }
  }
`;
export const ContainerInput = styled.div`
  background-color: #fff;
  height: 40px;
  width: 100%;
  position: relative;
  display: flex;
  img {
    position: absolute;
    width: 20px !important;
    height: 20px;
    left: 25px;
    fill: #fce57e;
  }
  input {
    background-color: #fff;
    height: 40px;
    width: calc(90% - 55px);
    display: flex;
    margin: 15px 0px;
    padding: 0px 10px 0px 35px;
    border: solid 1px gray;
    border-radius: 5px;
    animation: 0.5s;
    transition: 0.5s;
    font-size: 17px;
  }
`;
export const ContainerInputSeach = styled.div`
  background-color: #fff;
  height: 40px;
  width: calc(50% - 10px);
  position: relative;
  display: flex;
  img {
    position: absolute;
    width: 20px !important;
    height: 20px;
    left: 10px;
    top: 12px;
    fill: #fce57e;
  }
  input {
    background-color: #fff;
    height: 40px;
    width: 100%;
    display: flex;
    padding: 0px 10px 0px 35px;
    border: solid 2px #e7e7e7;
    border-radius: 5px;
    animation: 0.5s;
    transition: 0.5s;
    box-shadow: 0px 2px 5px #d5d5d5;
    outline: none;
    font-size: 16px;
    :focus-visible {
      border: 2px solid #0017ff;
    }
  }
`;
export const ContainerRepoUser = styled.div`
  display: flex;
  width: 100%;
  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    li {
      background-color: #fff;
      padding: 10px 15px;
      width: auto;
      border-radius: 10px;
      box-shadow: 0px 0px 4px #cdcdcd;
      margin: 0px 5% 15px 5%;
      display: flex;
      flex-direction: column;
      div.BoxInforStart {
        display: flex;
        flex-direction: row;
        div.BoxImgPerfil {
          width: 70px;
          height: 70px;
          margin-right: 15px;
          justify: center;
          align-items: center;
          img {
            width: 70px;
            height: 70px;
          }
        }
        div.BoxNome {
          display: flex;
          justify-content: center;
          flex-direction: column;
          h3 {
            font-size: 22px;
            line-height: 40px;
            color: #000;
          }
          svg {
            margin-left: 30px;
            height: 15px;
          }
          p {
            color: black;
            font-size: 16px;
            margin-bottom: 10px;
          }
          span.boxBtnBlue {
            display: flex;

            label {
              display: none;
            }
            label.True {
              display: block;
              margin-right: 15px;
            }
          }
        }
        div.BoxDelete {
          display: flex;
          flex: 1;
          justify-content: end;
          padding: 5px;
          span {
            background: #c5c5c5;
            display: flex;
            height: 35px;
            width: 35px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
          }
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
      //--------------------
      div.BoxInforEnd {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        div {
          display: flex;
          margin-right: 20px;
          flex-direction: row;
          align-items: center;
          svg {
            width: 16px;
            margin-right: 10px;
          }
          p {
            font-size: 15px;
            color: #7e7e7e;
          }
        }
      }
    }
  }
`;
export const ContainerListUser = styled.div`
  display: flex;
  width: 100%;
  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    li {
      background-color: #fff;
      padding: 10px 15px;
      width: auto;
      border-radius: 10px;
      box-shadow: 0px 0px 4px #cdcdcd;
      margin: 0px 5% 10px 5%;
      display: flex;
      flex-direction: column;
      div.BoxInforStart {
        display: flex;
        flex-direction: row;
        div.BoxImgPerfil {
          width: 70px;
          height: 70px;
          margin-right: 15px;
          justify: center;
          align-items: center;
          img {
            width: 70px;
            height: 70px;
          }
        }
        div.BoxNome {
          display: flex;
          justify-content: center;
          flex-direction: column;
          h3 {
            font-size: 22px;
            line-height: 40px;
            color: #000;
          }
          svg {
            margin-left: 30px;
            height: 15px;
          }
          p {
            color: black;
            font-size: 16px;
          }
        }
        div.BoxDelete {
          display: flex;
          flex: 1;
          justify-content: end;
          padding: 5px;
          span {
            background: #c5c5c5;
            display: flex;
            height: 35px;
            width: 35px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
          }
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
      //--------------------
      div.BoxInforEnd {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        div {
          display: flex;
          margin-right: 20px;
          flex-direction: row;
          align-items: center;
          svg {
            width: 16px;
            margin-right: 10px;
          }
          p {
            font-size: 15px;
            color: #7e7e7e;
          }
        }
      }
    }
  }
`;
export const ContainerModalAddTags = styled.section`
  background-color: #fff;
  color: #fff;
  width: 400px;
  height: auto;
  border-radius: 10px;
  display: flex;
  padding: 25px 30px;
  flex-direction: column;
  p {
    font-size: 25px;
    margin: 0px;
    padding: 0px;
    color: #000;
    font-weight: bold;
  }
  div.BoxInput {
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    div {
      width: 100% !important;
      input {
        border: solid 2px #c1c0c0;
        box-shadow: 0px 0px 0px #d5d5d5;
      }
    }
  }
  div.BoxTags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    box-shadow: 1px 1px 13px #cbcbcb;
    border-radius: 5px;
    padding: 8px;

    span {
      width: 90%;
      padding-bottom: 10px;
      padding-left: 10px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: start;
      color: #464a52;
      font-size: 20px;
    }
    div {
      background-color: #00000026;
      color: #000;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      height: 35px;
      border: none;
      border-radius: 40px;
      animation: 0.2s;
      transition: 0.2s;
      padding: 0px 10px;
      box-sizing: border-box;
      border: solid 2px Transparent;
      margin: 5px;
      img {
        width: 20px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  .BoxBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0px 0px 0px;
    flex-direction: column;
    label {
      width: 100%;
      height: 40px;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 17px;
      cursor: pointer;
    }
  }
`;
export const ContainerModalEditTags = styled.section`
  background-color: #fff;
  color: #fff;
  width: 450px;
  height: auto;
  border-radius: 10px;
  display: flex;
  padding: 25px 30px;
  flex-direction: column;
  p {
    font-size: 25px;
    margin: 0px;
    padding: 0px;
    color: #000;
    font-weight: bold;
  }
  div.BoxInput {
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    div {
      width: 100% !important;
      input {
        border: solid 2px #c1c0c0;
        box-shadow: 0px 0px 0px #d5d5d5;
      }
    }
  }
  div.BoxTagsSelect {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    border-radius: 5px;
    padding: 8px 8px 20px 8px;

    span {
      width: 90%;
      padding-bottom: 10px;
      padding-left: 10px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: start;
      color: #464a52;
      font-size: 20px;
    }
    div {
      background-color: #00000026;
      color: #000;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      height: 35px;
      border: none;
      border-radius: 40px;
      animation: 0.2s;
      transition: 0.2s;
      padding: 0px 10px;
      box-sizing: border-box;
      border: solid 2px Transparent;
      margin: 5px;
      img {
        width: 20px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  div.BoxTags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    box-shadow: 1px 1px 13px #cbcbcb;
    border-radius: 5px;
    padding: 8px;

    span {
      width: 90%;
      padding-bottom: 10px;
      padding-left: 10px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: start;
      color: #464a52;
      font-size: 20px;
    }
    div {
      background-color: #00000026;
      color: #000;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      height: 35px;
      border: none;
      border-radius: 40px;
      animation: 0.2s;
      transition: 0.2s;
      padding: 0px 10px;
      box-sizing: border-box;
      border: solid 2px Transparent;
      margin: 5px;
      img {
        width: 20px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  .BoxBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0px 0px 0px;
    flex-direction: column;
    label {
      width: 100%;
      height: 40px;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 17px;
      cursor: pointer;
    }
  }
`;
export const ContainerTagsGray = styled.button`
  background-color: #00000026;
  color: #000;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 35px;
  border: none;
  border-radius: 40px;
  animation: 0.2s;
  transition: 0.2s;
  padding: 0px 10px;
  box-sizing: border-box;
  border: solid 2px Transparent;
`;
