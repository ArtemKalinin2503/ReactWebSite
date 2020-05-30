import React, {Component} from "react";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueFilterInp: "Введите название товара"
        }
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
                                <input type="text" id="autocomplete-input" className="autocomplete" placeholder={this.state.valueFilterInp}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header