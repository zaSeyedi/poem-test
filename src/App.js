import React from 'react';
import './App.css';
import './index.css';
import { getPoem } from './fakePoemServic'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poemList: []
    };
  }
  UNSAFE_componentWillMount() {
    //why unsafe?

    this.setState({ poemList: getPoem() })

  }
  render() {
    return (
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
        <div className="circle"></div>
        <div className="title">{title}</div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
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
          <div className="icosContent"></div>
          <div className="icosContent2"></div>
        </div>
      </div>
    )
  }
  Footer = ({ icon }) => {

    return (
      <div className="footer">
        {
          icon.map(item => {
            return (
              <div className={item}></div>
            )
          })
        }
        {/* <div className ="icon"></div>
          <div className ="icon"></div>
          <div className ="icon"></div>
          <div className ="icon"></div>
          <div className ="icon"></div> */}
      </div>
    )
  }
}
