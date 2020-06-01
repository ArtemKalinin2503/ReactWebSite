import React, {Component} from "react";
import "./productItem.scss"

class ProductItem extends Component{

    selectProduct = () => {
        console.log(this.props.id)
    }

    render() {
        return (
            <div >
                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.img}/>
                            <span className="card-title">{this.props.title}</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red">
                                <i className="material-icons" onClick={this.selectProduct}>add</i>
                            </a>
                        </div>
                        <div className="card-content">
                            <p>{this.props.descriptions}</p>
                            <p>Price: {this.props.price} $</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem