import React from "react";
import Proptypes from "prop-types";

export class Hello extends React.Component {
  static propTypes = {
    name: Proptypes.string,
    birthday: Proptypes.string,
    friendNum: Proptypes.number,
    array: Proptypes.arrayOf(Proptypes.number).isRequired,
  };

  render() {
    return (
      <>
        <div>こんにちは。{this.props.name}さん。</div>
        <div>{this.props.name}の誕生日は{this.props.birthday}です。</div>
        <div>彼には友達が{this.props.friendNum}人しかいません。</div>
        <div>{this.props.array[1]}3</div>
      </>
    );
  }
}
