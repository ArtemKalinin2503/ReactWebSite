import React, {Component} from "react";
import {connect} from "react-redux";
import {addProduct} from "../../actions";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import PreLoader from "../PreLoader/PreLoader";
import "./productCard.scss"

class ProductCard extends Component{

    componentDidMount() {
        this.props.onAddProduct(this.props.selectProduct) //Получим данные по выбраному продукту
    }

    //Функция для вывода данных о выбраном товаре
    renderProductData() {
        //Если ошибка
        if (this.props.propsError) {
            return <ErrorIndicator/>
        }
        //Если данные пришли
        if (this.props.propsProduct.length) {
            return (
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={this.props.propsProduct[0].img}/>
                                <span className="card-title">{this.props.propsProduct[0].title}</span>
                            </div>
                            <div className="card-action">
                                <p>Price: {this.props.propsProduct[0].price} $</p>
                            </div>
                        </div>
                        <div className="card-content">
                            <p>{this.props.propsProduct[0].description}</p>
                            <div className="card-action">
                                <a className="waves-effect waves-light btn-large">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                </div>

        )
        } else {
            return <PreLoader/>
        }
    }

    render() {
        return (
            <div className="productCard__wrapper">
                {this.renderProductData()}
            </div>
        )
    }
}

//Здеь получаем state из reducer (который передан в store)
function mapStateToProps(state) {
    return {
        propsProduct: state.productReducer.products, //Все продукты
        selectProduct: state.productReducer.selectProduct, //Выбраный продукт
        propsError: state.productReducer.error
    }
}

//Здесь получаем action
function mapDispatchToProps(dispatch) {
    return {
        onAddProduct: (payload) => dispatch(addProduct(payload)) //Получили action addProduct и записали его в props onAddProduct
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)