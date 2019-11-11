import React, {Component} from 'react'
import Search from './search'
import Main from "./main";

export default class App extends Component {

    state = {
        searchName : ''
    }

    setSearchName = (searchName) => {
        this.setState({searchName})

        // 下面的方法也可以修改状态
        console.log("app, setstate", this.searchName)
    }


    render() {
        return (
            <div className="container">
                <Search setSearchName = {this.setSearchName}/>
                <Main searchName = {this.state.searchName}/>
            </div>
        )
    }
}

