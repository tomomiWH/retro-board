import React from "react";

const card = props => {
  //console.log(props);
  return (
    <div className="Retro">
      <label className="sr-only" for="retro-label-1">
        Enter retro text
      </label>
      <textarea
        id="retro-label-1"
        className="textbox"
        placeholder="Enter text here"
        rows="1"
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.textInput("wentWell", e.target.value, props.index);
          }
        }}
      >
        {props.item}
      </textarea>

      <div className="ButtonGroup wentWell">
        <button type="button" className="button button-left">
          <span className="sr-only">Move Left</span>
          &lt;
        </button>
        <button
          type="button"
          className="button button-delete"
          onClick={e => props.deleteItem(props.item, props.index)}
        >
          <span className="sr-only">Delete</span>×
        </button>
        <button
          type="button"
          className="button button-right"
          //onClick={this.moveItem}
        >
          <span className="sr-only">Move Right</span>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default card;
