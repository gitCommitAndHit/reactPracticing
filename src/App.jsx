import React from "react";
import * as DOM from "react-dom";
import './App.css';
import {Carousel, Row} from "react-materialize";
import {ALPHABET} from "./constants/alphabet.js"
import {CARD_STYLES} from "./constants/cardStyles.js";
import AdSense from 'react-adsense';

class App extends React.Component {
  carousel;

  constructor() {
    super();
    this.state = {
      bgColor: "",
      itemColor: "",
      selected: []
    }
  }

  onChangeColor() {
    const activeElem = DOM.findDOMNode(this.carousel).querySelector(".active");
    console.log(activeElem)
    if (this.state.bgColor) activeElem.style.backgroundColor = `${this.state.bgColor.trim()}`;
    const letter = activeElem.querySelector("span");
    if (this.state.itemColor) letter.style.color = `${this.state.itemColor.trim()}`;
  }

  onClear() {
    this.setState({
      bgColor: "",
      itemColor: ""
    })
  }

  onSave() {
    const selected = this.state.selected;
    selected.push({bg: this.state.bgColor, color: this.state.itemColor});
    this.setState({
      selected
    });
  }

  render() {
    return (
        <div className="App">
          <Row>
            <AdSense.Google
                client='ca-pub-7292810486004926'
                slot='7806394673'
            />
          </Row>
          <Row>
            <Carousel ref={(ref) => this.carousel = ref}
                      options={{padding: 100}}
                      className={"car"}>
              {ALPHABET.map(letter => {
                let index = Math.floor(Math.random() * (CARD_STYLES.length));
                let cardStyle = CARD_STYLES[index];
                return (
                    <div className="Card"
                         key={letter}
                         style={{backgroundColor: `${cardStyle.bg}`}}>
                      <div className={"letterWrapper"}>
                        <span className={"letter"} style={{color: `${cardStyle.color}`}}>{letter}</span>
                      </div>
                    </div>)
              })}
            </Carousel>
          </Row>
          {/*<Row className={"Tools"}>*/}
          {/*<Col l={8} offset={"l2"}>*/}
          {/*<Input l={3}*/}
          {/*label={"Фон буквы"}*/}
          {/*onChange={(event) => this.setState({bgColor: event.target.value})}*/}
          {/*value={this.state.bgColor}*/}
          {/*/>*/}
          {/*<Input l={3}*/}
          {/*label={"Цвет Буквы"}*/}
          {/*onChange={(event) => this.setState({itemColor: event.target.value})}*/}
          {/*value={this.state.itemColor}*/}
          {/*/>*/}
          {/*<Button large onClick={() => this.onChangeColor()}>Применить</Button>*/}
          {/*<Button large onClick={() => this.onSave()}>Сохранить</Button>*/}
          {/*<Button className={"red"} large onClick={() => this.onClear()}>Очистить</Button>*/}
          {/*</Col>*/}
          {/*</Row>*/}
          {/*<Row className={"saved-list"}>*/}
          {/*<Collection>*/}
          {/*{*/}
          {/*this.state.selected.map(item => <CollectionItem>*/}
          {/*<Col className={"saved"} l={2} style={{backgroundColor: item.bg, color: item.color}}>*/}
          {/*{`${item.bg} и  ${item.color}`}*/}
          {/*</Col>*/}
          {/*</CollectionItem>)*/}
          {/*}*/}
          {/*</Collection>*/}
          {/*</Row>*/}
        </div>
    );
  }
}

export default App;
