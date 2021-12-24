import React, { Component } from 'react';
export default class Check extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.node.selected
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        //state的状态跟随node的selected值
        const {selected} = nextProps.node
        if (prevState.checked != selected) {
            return {
                checked: selected
            }
        }
        return prevState
    }

    shouldComponentUpdate(nextProps, nextState) {
        //必选的不更新UI，但更新选中状态
        if (nextProps.data.required) {
            this.selectNode(nextProps.node, true)
            return false
        }
        return true
    }

    selectNode = (node, selected) => {
        let myEvent = new Event('change')
        node.selected = selected
        myEvent.node = node
        node.beans.selectionService.onRowSelected(myEvent)
    }

    componentDidMount() {
        //如果默认是选中的，需要通过selectionService更新选中的数据源
        if (this.props.node.selected) {
            this.selectNode(this.props.node, true)
        }
    }
    onChange = (event) => {
        //勾选对话框
        this.selectNode(this.props.node, event.target.checked)
        this.setState({
            checked: event.target.checked
        })

        //选中后增加改变行高
        if (event.target.checked) {
            this.props.node.setRowHeight(100)
        } else {
            this.props.node.setRowHeight(40)
        }
        this.props.node.beans.gridApi.onRowHeightChanged()
    }

    render() {
        return (
            <input type='checkbox' checked={this.state.checked} disabled={this.props.data.required} onChange={this.onChange}></input>
        )
    }
}