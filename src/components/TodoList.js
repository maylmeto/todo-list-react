import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <p>Todo Item</p>
        <Item></Item>
      </div>
    );
  }
}
