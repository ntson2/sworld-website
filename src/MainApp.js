import React, { Component } from 'react';
import './App.css';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataSource: "a"
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://mnlk6yozri.execute-api.us-east-1.amazonaws.com/dev/backend');
            let responseJson = await response.json();
            this.setState(
                {
                    isLoading: false,
                    dataSource: responseJson
                },
                function() {}
            );
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        let dataSource = this.state.dataSource;

        if (this.state.isLoading) {
            return <div>Loading...</div>;
        } else {
            return (<div> {dataSource.greetings} </div>);
        }
    }
}
export default MainApp;