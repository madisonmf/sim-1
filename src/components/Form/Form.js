import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleNameUpdate = this.handleNameUpdate.bind(this);
        this.handlePriceUpdate = this.handlePriceUpdate.bind(this);
        this.handleImgUpdate = this.handleImgUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleNameUpdate(value) {
        this.setState({
            name: value
        });
    }

    handlePriceUpdate(value) {
        this.setState({
            price: value
        });
    }

    handleImgUpdate(value) {
        this.setState({
            imgurl: value
        });
    }

    handleCancel(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="Form">Form
                <p>Image URL:</p><input className="text-field" value={ this.state.imgurl } onChange={ event => this.handleImgUpdate(event.target.value)} />
                <p>Product Name:</p><input className="text-field" value={ this.state.name } onChange={ event => this.handleNameUpdate(event.target.value)} />
                <p>Price:</p><input className="text-field" value={ this.state.price } onChange={ event => this.handlePriceUpdate(event.target.value)}/>
                <br/><br/>
                <span> 
                    <button className="btn" onClick={ this.handleCancel }>Cancel</button>
                    <button className="btn">Add to Inventory</button>
                </span>
                <br/><br/><br/>
            </div>
        )
    }
}