import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {

    static propTypes = {
        searchName: PropTypes.string
    }

    // 在这儿直接发送请求， 可更改state
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }


    render() {
        // 多情况讨论
        const {initView, loading, users, errorMsg} = this.state

        // 搜索的关键词
        const {searchName} =  this.props
        console.log(searchName)
        if (initView) {
            return <h2>请输入关键词进行搜索！</h2>
        } else if (loading) {
            return <h2>正在请求中...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {   // () => { return..}
                        users.map((user, index) => (
                            <div className="card">
                                <a href={user.url} target="_blank">
                                    {searchName}
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }

    }
}