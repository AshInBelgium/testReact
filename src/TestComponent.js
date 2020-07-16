import React, { Component } from "react";

class TestComponent extends Component {
  render() {
    const testStruct = {
      form: { a: { x: { z: 5, aaa: 100 }, y: 4 }, b: 2, c: 3 }
    };
    const myNames = { first: "a", second: "x" };
    return (
      <div>
        {testStruct.form?.[`${myNames?.first}`]?.[`${myNames?.second}`]?.aaa}
      </div>
    );
  }
}

export default TestComponent;
