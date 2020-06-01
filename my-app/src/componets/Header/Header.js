import React, {Component} from "react";
import {connect} from "react-redux";
import {onFilterProducts} from "../../actions";
import {Link} from "react-router-dom";

class Header extends Component {

    //Фильтр товаров
    filterProducts = (event) => {
        let filterValue = event.target.value;
        this.props.onFilter(filterValue);
    }

    render() {
        return (
            <div className="header__wrapper">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <Link to="/">Star DB</Link>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <div>
                                    <label htmlFor="first_name">Фильтр товара</label>
                                </div>
                                <input type="text"
                                       id="autocomplete-input"
                                       className="autocomplete"
                                       value={this.props.propsFilter}
                                       onChange={this.filterProducts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        propsFilter: state.productReducer.filterProducts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFilter: (payload) => dispatch(onFilterProducts(payload)) //Action который запишем value из Фильтра в state filterProducts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)