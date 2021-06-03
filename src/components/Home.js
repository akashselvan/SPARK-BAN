

import { css, jsx } from "@emotion/react";
import image from "./images/bg_bggenerator_com.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" css={CSS}>
      <div className="banner">
        <div className="headline">
          <h1>Welcome to spark bank </h1>
          
          
        </div>
        <div className="image">
          <i className="fa fa-university"></i>
        </div>
      </div>
      <div className="services__banner">
        <h1>Our WORKS</h1>
        <a className="button" href="#services">
          <ion-icon name="chevron-down-circle"></ion-icon>
        </a>
      </div>
      <div className="services" id="services">
        <Link to="/create-user">
          <div className="item">
            <div className="image">
              
            </div>
            <div className="title">
              <h3>Create User</h3>
            </div>
          </div>
        </Link>
        <Link to="/transfer">
          <div className="item">
            <div className="image">
              
            </div>
            <div className="title">
              <h3>Make Transaction</h3>
            </div>
          </div>
        </Link>
        <Link to="/transactions-history">
          <div className="item">
            <div className="image">
              
            </div>
            <div className="title">
              <h3>Transaction History</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

const CSS = css`
  font-family: "Roboto", sans-serif;
  background: url(${image}) no-repeat,
    
  background-size: cover, cover;

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 45vh;
    color: orange;

    .headline {
      margin-left: 100px;
      flex: 0.8;
      h1 {
        font-size: 38px;
        font-weight: 900;
      }
      p {
        color: var(--dark-cornflower-blue);
        font-size: 20px;
        font-weight: 500;
        text-decoration: underline;
      }
    }
    .h3{
      align-items:center;
      font-size: 50px   
      color:black;
     }

    .image {
      position: absolute;
      right: 120px;
      color:red;
      i::before {
        font-size: 180px;
      }
    }
  }

  @media screen and (max-width: 780px) {
    .banner {
      flex-direction: column;
      justify-content: space-around;
      height: 100vh;

      .headline {
        margin-left: 10px;
        flex: unset;
        h1 {
          font-size: 56px;
        }
      }

      .image {
        position: unset;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .services__banner {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(100, 255, 220, 0.3);

    h1 {
      font-size: 78px;
      font-family: "Marck Script", cursive;
      color: var(--navy-blue);
    }
    a {
      color: var(--powder-blue);
      padding: 0px 2.5px;
      border-radius: 180px;
      background: orange;
      box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      transition: all 0.3s ease;

      :hover {
        color: var(--navy-blue);
        background: var(--power-blue);
        transform: scale(1.4);
        box-shadow: unset;
        -webkit-box-shadow: unset;
        -moz-box-shadow: unset;
      }

      ion-icon {
        padding-top: 3px;
        font-size: 50px;
      }
    }
  }

  .services {
    padding-top: 45px;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      color: black;
      padding: 10px 0;
      .item {
        height: 100%;
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: rgb(0, 137, 0);
       
        border-radius: 4px;
        padding: 0 60px;
        transition: all 0.3s ease;

        .image {
          i::before {
            font-size: 130px;
            padding-left: 10px;
          }
        }

        .title {
          color: black;
          align-item: center;
        }
      }

      .item:hover {
        transform: scale(1.01);
        box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
      }

      @media screen and (max-width: 1100px) {
        .item {
          width: 200px;
        }
      }
    }
  }
  @media screen and (max-width: 625px) {
    .services__banner {
      h1 {
        font-size: 58px;
      }
    }
    .services {
      height: 110vh;
      flex-direction: column;
      padding-bottom: 30px;

      a {
        width: 100%;
        max-width: 350px;
        justify-content: center;

        .item {
          width: 100%;
        }
      }
    }
  }
`;

export default Home;
