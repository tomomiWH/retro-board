import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/cards/card";
import Button from "./components/Button/Button";

///function to pass items in each category
// function ItemCategory(props){
//   return()
//   }

class App extends Component {
  // constructor, and initialing state inside of the constructor
  constructor(props) {
    super(props);
    this.state = {
      data: {
        wentWell: [
          "I coded my first React component and it worked",
          "another item",
          "third"
        ],
        toImprove: ["adding to improve"],
        actionItem: ["adding to actionItem"]
      },
      userInput: ""
    };
  }

  //text to put in item
  textInput = (activity, userInput, index) => {
    console.log("here");
    console.log(activity);
    console.log(userInput);
    const { data } = this.state;

    const newActivity = { ...data };
    newActivity[activity][index] = userInput;

    this.setState(
      {
        data: newActivity
      },
      () => console.log(this.state)
    );
  };

  //adding items using - push?
  addItem = (activity, item) => {
    const { data } = this.state;

    const newActivity = { ...data };
    newActivity[activity].push(item);

    this.setState({
      data: newActivity
    });
  };

  //add empty item
  addEmptyItem = item => {
    const { data } = this.state;
    const emptyItem = { ...data };

    emptyItem[item].push("");
    this.setState({
      data: emptyItem
    });
  };

  //move items using map - ??? not sure this will work
  moveItem = (category, categoryIndex) => {
    const { data } = this.state;

    const newMovedItem = { ...data };
    let moveArr = newMovedItem[category].map((moveItem, index) => {
      console.log(moveItem);
      return categoryIndex === index;
    });

    newMovedItem[category] = moveArr;
    console.log(newMovedItem);
    this.setState({
      data: newMovedItem
    });
    // this.setState({
    //   items: this.state.items.map(item => {
    //     if (item.index === index) item.category = category;
    //     return item;
    //   })
    // });
  };

  //deleting items and show new array  - filter? Should also remove from state
  deleteItem = (item, itemIndex) => {
    const { data } = this.state;

    const newDeleteItem = { ...data };
    let arr = newDeleteItem[item].filter((deleteItem, index) => {
      console.log(deleteItem);
      return itemIndex !== index;
    });

    newDeleteItem[item] = arr;
    console.log(newDeleteItem);

    this.setState({
      data: newDeleteItem
    });
    // console.log("Delete item is working");
    // console.log(item);
    // this.setState({
    //   items: this.state.data[item].filter((activity, index) => {
    //     return activity.item !== item;
    //   })
    // });
  };

  render() {
    ///const { items } = this.state; //when to use?

    return (
      <main className="content">
        <h1>Retro Board</h1>
        <div className="RetroBoad">
          <div className="RetroBoardCategory RetroBoardCategory-1">
            <h2>Went Well</h2>
            <Button addEmptyItem={this.addEmptyItem} item={"wentWell"} />

            {this.state.data.wentWell.map((item, index) => {
              return (
                <Card
                  addItem={this.addItem}
                  deleteItem={() => this.deleteItem("wentWell", index)}
                  textInput={this.textInput}
                  index={index}
                />
              );
            })}
          </div>

          <div className="RetroBoardCategory RetroBoardCategory-2">
            <h2>To Improve</h2>
            <Button addEmptyItem={this.addEmptyItem} item={"toImprove"} />

            {this.state.data.toImprove.map((item, index) => {
              return (
                <Card
                  addItem={this.addItem}
                  deleteItem={() => this.deleteItem("toImprove", index)}
                />
              );
            })}
          </div>

          <div className="RetroBoardCategory RetroBoardCategory-3">
            <h2>Action Items</h2>
            <Button addEmptyItem={this.addEmptyItem} item={"actionItem"} />

            {this.state.data.actionItem.map((item, index) => {
              return (
                <Card
                  addItem={this.addItem}
                  deleteItem={() => this.deleteItem("actionItem", index)}
                />
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
