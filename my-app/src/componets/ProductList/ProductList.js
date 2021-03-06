import React, {Component} from "react";
import ProductItem from "../ProductItem/ProductItem";
import {connect} from "react-redux";
import {addProduct} from "../../actions";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import PreLoader from "../PreLoader/PreLoader";

class ProductList extends Component{

    componentDidMount() {
        console.log('componentDidMount')
        this.props.onAddProduct(); //Получим данные о товаре
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('componentDidUpdate')
    //     this.props.onAddProduct();
    // }

    //Функция которая выводит товары
    renderListData() {
        //Если ошибка при загрузке
        if (this.props.propsError) {
            return <ErrorIndicator/>
        }
        //Если данные пришли
        if (this.props.propsProduct.length) {
            //Фильтр товаров
            let products = this.props.propsProduct;
            console.log(products)
            let filterProducts;
            if (products.length) {
                for (let i = 0; i < products.length; i++) {
                    filterProducts = products[i].filter(
                        (product) => {
                            return product.title.toLowerCase().indexOf(this.props.propsFilter.toLowerCase()) !== -1;
                        }
                    )
                }
            }
            return (
                <>
                    {filterProducts.map((item, index) => {
                        return (
                            <div className="productItem__wrapper">
                                <ProductItem
                                    key={item.id}
                                    id={index}
                                    title={item.title}
                                    descriptions={item.description}
                                    price={item.price}
                                    img={item.img}
                                />
                            </div>
                        )
                    })}
                </>
            )
        //Пока данных нет Preloader
        } else {
            return <PreLoader/>
        }
    }

    render() {
        return (
            <>
                <div className="productList__wrapper">
                    {this.renderListData()}
                </div>
            </>
        )
    }
}

//Здеь получаем state из reducer (который передан в store)
function mapStateToProps(state) {
    return {
        propsProduct: state.productReducer.products, //Все продукты
        propsFilter: state.productReducer.filterProducts, //Value - из поля Фильтра
        propsError: state.productReducer.error
    }
}

//Здесь получаем action
function mapDispatchToProps(dispatch) {
    return {
        onAddProduct: () => dispatch(addProduct()) //Получили action addProduct и записали его в props onAddProduct
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)