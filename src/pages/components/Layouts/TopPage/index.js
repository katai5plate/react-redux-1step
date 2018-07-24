import React from 'react';
import Button from '../../Tools/Button';
import Label from '../../Tools/Label';

export default class TopPage extends React.Component {
    render() {
        return (
            <div>
                <Button event={() => this.props.handleClick("addNumber")}>+1</Button>
                <Button event={() => this.props.handleClick("subNumber")}>-1</Button>
                <Label>{this.props.num}</Label>
            </div>
        );
    }
}