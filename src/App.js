import React from 'react';
import './App.css';
import './index.css';
import { getPoem } from './fakePoemServic'
import { ChevronLeft } from './ChevronLeft'
import { Bookmark, Bookmark2 } from './Bookmark'
import { Search } from './Search'
import axios from 'axios'
import { Message } from './Message'



let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjA4OGI3OTg2M2E2NGRkMDUyMWQ1YSIsInVzZXJuYW1lIjoibm9yZWFkby01ZGIwODhiNzk4NjNhNjRkZDA1MjFkNTkiLCJyb2xlcyI6WyJ1c2VyIl0sInJlZnJlc2hUb2tlbklkSGFzaCI6ImYzYTM2MmJiLTJiODUtNDljNy1hOTMwLTQ0N2I4OGMzY2EzYiIsImlhdCI6MTU3NzI2MDIxMywiZXhwIjoxNTgxNDI5NDc0MTU2fQ.avGI47CHLK6XRi1-BbVDOZXhhrKdaGuie0lK-niYOyg';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poemList: [],
      is_loading: true
    };
  }
  // async UNSAFE_componentWillMount() {
  //   //why unsafe?

  //   let result = await getPoem()
  //   this.setState({ poemList: result })
  //   console.log(this.state.poemList.length)

  // }
  /*
    async UNSAFE_componentDidlMount() {
      //   //why unsafe?
      //   axios({
      //     method:'GET',
      //     url: 'http://185.120.220.213/api/v1/poem/5cffd9b7e38eaf7a54c59c43',
      //     headers: {
  
      //       //Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjA4OGI3OTg2M2E2NGRkMDUyMWQ1YSIsInVzZXJuYW1lIjoibm9yZWFkby01ZGIwODhiNzk4NjNhNjRkZDA1MjFkNTkiLCJyb2xlcyI6WyJ1c2VyIl0sInJlZnJlc2hUb2tlbklkSGFzaCI6ImYzYTM2MmJiLTJiODUtNDljNy1hOTMwLTQ0N2I4OGMzY2EzYiIsImlhdCI6MTU3NzI2MDIxMywiZXhwIjoxNTgxNDI5NDc0MTU2fQ.avGI47CHLK6XRi1-BbVDOZXhhrKdaGuie0lK-niYOyg'
      //     }
  
      //   })
      let array = []
      let data = await fetch('http://185.120.220.213/api/v1/poem/5cffd9b7e38eaf7a54c59c43', {
        method: 'GET',
        headers: {
          "Authorization": 'Bearer ' + token
        }
      })
      console.log(await data.json());
      this.setState({ is_loading: false });
      for (let i = 0; i < data.length; i++) {
        array.push( data.item[i])
      }
      console.log( array)
      this.setState({ poemList: array });
  
  
      // .then(function (response) {
      //   this.setState({ is_loading: false })
      //   this.setState({ poemList: response.data });
      //   console.log(response.status);
      // })
      // .catch(function (ex) {
      //   this.setState({ is_loading: false })
      //   console.log(ex);
      // })
    }
    */
  UNSAFE_componentWillMount() {

    fetch('http://185.120.220.213/api/v1/poem/5cffd9b7e38eaf7a54c59c43', {
      method: 'GET',
      headers: {
        "Authorization": 'Bearer ' + token
      }
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ poemList: result, is_loading: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, is_loading: true });
      });
      //console.log( data);
  }
  render() {
    console.log(this.state.is_loading);
    console.log(this.state.poemList)
    let view = <div className="load">
      <div className="loader"></div>
    </div>;
    if (this.state.is_loading === false) {
      view=(
        <div className="App">
          <this.Border
            title={this.state.poemList.title}

            test={
              this.state.poemList.hemistichs
              // ["می‌خواهمت چنان که شب خسته خواب را",
              //   "می‌جویمت چنان‌که لب تشنه آب را",
              //   "محو توام چنان‌که ستاره به چشم صبح",
              //   "یا شبنم سپیده‌دمان آفتاب را",
              //   "بی‌تابم آن‌چنان که درختان برای باد",
              //   "یا کودکان خفته به گهواره، خواب را",
              //   "ای خواهشی که خواستنی‌تر ز پاسخی",
              //   "با چون تو پرسشی چه نیازی جواب را"]
            }
            icon={["icon", "icon", "icon", "icon", "icon"]} />

        </div>
      );
    }
    return view;

  }
  Border = (props) => {
    return (
      <div className="border">
        <this.Header title={props.title} />
        <this.Top />
        <this.Body test={props.test} />
        <this.Footer icon={props.icon} />

      </div>

    )
  }
  Header = ({ title }) => {
    return (
      <div className="header">
        <ChevronLeft />
        <div className="title">{title}</div>
        <div className="searchAndDots">
          <Search />
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

      </div>
    )

  }
  Top = () => {
    return (
      <div className="top">
        <div className="poetContent">
          <this.PoetB poetB={this.state.poemList.poets[0].name} />
          <this.BookB bookB={this.state.poemList.book.name} />
        </div>

        <div className="icon"></div>
      </div>
    )
  }
  PoetB = ({ poetB }) => {
    return (
      <div className="poetB">{poetB}</div>
    )
  }
  BookB = ({ bookB }) => {
    return (
      <div className="bookB">{bookB}</div>
    )
  }
  Body = ({ test }) => {
    let temp = [];
    for (let i = 0; i < test.length; i += 1) {
      temp.push(test[i]);
    }
    console.log(temp);

    // if(test.length % 2 == 1){
    //   temp.push([test[test.length-1,""]])
    // }
    return (
      <div className="body">
        <div className="poems">
          {
            temp.map(item => {
              return (
                <div>
                  <div>{item.text[0]}</div>
                  <div>{item.text[1]}</div>
                </div>
              )
            })
          }
        </div>
        <div className="icons">
          <Bookmark className="icosContent" />
          <Bookmark className="icosContent2" />
        </div>
      </div>
    )
  }
  Footer = ({ icon }) => {

    return (
      <div className="footer">

        <Message />
        <Bookmark2 />

        {/* <div className ="icon"></div>
          <div className ="icon"></div>
          <div className ="icon"></div>
          <div className ="icon"></div>
          <div className ="icon"></div> */}
      </div>
    )
  }
}
