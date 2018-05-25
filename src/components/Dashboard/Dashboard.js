import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            inventory: []
        }
    }

    render() {
        const inventoryList = this.state.inventory.map( list => {
            return (
                <div key={ list.id }>
                    { list.imgurl }
                    { list.name }
                    { list.price }
                </div>
            )
        })

        return (
            <div className="Dashboard">Dashboard
                <Product />
            </div>
        )
    }
}