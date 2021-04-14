import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
                            <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity In</th>
                        <th>value</th>
                        <th>Quantity Out</th>
                        <th>Stock</th>
                    </tr>
                </thead>
               )
    }
}


export default Header