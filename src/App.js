import React, {Component} from "react"
import "./App.css"
import {Query} from "react-apollo"
import gql from "graphql-tag"

const GET_TARGET_VALUE = gql`
  query { value: getNewValue @client }
  `

class App extends Component {

    constructor(props) {
        super(props)
        const {data: {value}, refetch} = props
        this.state = {
            targetVal: value,
            refetch,
            currentVal: 0,
        }
    }

    counterChange = (val) => {
        this.setState({currentVal: val}, this.handleReset)
    }

    handleReset = () => {
        const {currentVal, targetVal, refetch} = this.state
        if (currentVal === targetVal) {
            refetch()
        }
    }

    render() {
        const {currentVal, targetVal} = this.state
        const isDisabled = currentVal === targetVal
        return (

            <div className="App">
                <div>
                    {currentVal} of {targetVal}
                </div>
                <div>
                    <button disabled={isDisabled} onClick={() => this.counterChange(currentVal - 1)}>dec</button>
                    <button disabled={isDisabled} onClick={() => this.counterChange(currentVal + 1)}>inc</button>
                </div>
            </div>
        )
    }
}

const Loading = () => <div>...loading</div>

const AppQuery = () =>
    <Query query={GET_TARGET_VALUE}>
        {(apolloData) => {
            return apolloData.loading ? <Loading/> : <App {...apolloData} key={Date.now()}/>
        }}
    </Query>

export default AppQuery
