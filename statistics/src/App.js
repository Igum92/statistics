import React, {Component} from 'react';
import flower from '../public/flower.jpg';
import './App.css';
import {connect} from "react-redux";
import {userAction} from "./actions/actions";

const mapDispatchToProps = (dispatch) => ({
    onAction: (action, element) => {
        //Возможно также получать IP клиента или идентифицировать его иным образом (куки, сессии, юзерагент)
        // и отправлять в redux или на сервер
        dispatch(userAction(action, element));
        // здесь можно не только сохранять state, но и сразу отправлять данные на сервер с помощью Fetch API:
        //let formData = new FormData();
        // formData.append("action", (action));
        // formData.append("element", (element));
        // fetch('http://serverAddress/statistics', {
        //     method: 'POST',
        //     body: formData
        // })
    }
});

class App extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <img onMouseOver={()=>this.props.onAction('hover','img')} onClick={()=>this.props.onAction('click','img')} src={flower} alt="flowwow"/>
                </div>
                <div>
                    <button onMouseOver={()=>this.props.onAction('hover','button')} onClick={()=>this.props.onAction('click','button')}>
                        Заказать цветы
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);
