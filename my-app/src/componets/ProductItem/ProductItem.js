import React, {Component} from "react";
import "./productItem.scss"
import {connect} from "react-redux";
import {onSelectProduct} from "../../actions";
import {Link} from "react-router-dom";

class ProductItem extends Component{

    //Клик по кнопке Выбрать товар
    selectProduct = () => {
        this.props.onProduct(this.props.id); //Вызов action onSelectProduct - который запишет id выбраного товара в state selectProduct
    }

    render() {
        return (
            <div className="col s4 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.img}/>
                        <span className="card-title">{this.props.title}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                            <Link to="/productCar">
                                <i className="material-icons" onClick={this.selectProduct}>add</i>
                            </Link>
                        </a>
                    </div>
                    <div className="card-content">
                        <p>{this.props.descriptions}</p>
                        <p>Price: {this.props.price} $</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onProduct: (payload) => dispatch(onSelectProduct(payload))
    }
}

export default connect(null,mapDispatchToProps)(ProductItem)