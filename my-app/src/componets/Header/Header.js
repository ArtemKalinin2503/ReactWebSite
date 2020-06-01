import React, {Component} from "react";
import {connect} from "react-redux";
import {onFilterProducts} from "../../actions";

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
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
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
        onFilter: (payload) => dispatch(onFilterProducts(payload)) //
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)