import React from 'react';
import Button from '../../Tools/Button';
import Label from '../../Tools/Label';

export default class TopPage extends React.Component {
    render() {
        console.log("props:", this.props.handleClick);
        return (
            <div>
                <Button event={() => this.props.handleClick()}>PUSH-IT!</Button>
                <Label>{this.props.num}</Label>
            </div>
        );
    }
}