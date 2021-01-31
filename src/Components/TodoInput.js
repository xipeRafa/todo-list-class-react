import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { handleSubmit, handleChange, item, editItem } = this.props;

    return (
      
        <form onSubmit={handleSubmit}>
    
            <input
              type="text"
              className="form-control
              text-capitalize"
              onChange={handleChange}
              value={item}
              placeholder="add a todo item"
            />
    
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block mt-3 text-capitalize btn-success"
                : "btn btn-block mt-3 text-capitalize btn-primary"
            }
            disabled={!item ? true : false}
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
     
    );
  }
}
