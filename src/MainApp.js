import React, { Component } from 'react';
import './App.css';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: {}
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch('https://mnlk6yozri.execute-api.us-east-1.amazonaws.com/dev');
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
        let { dataSource } = this.state;
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {dataSource.Items.map(item => (
                        <div key={item.CardId}>
                            <h1>{item.CardId}</h1>
                            <li>{item.CastingCost}</li>
                            <li>{item.TextBox}</li>
                        </div>
                    ))}
                </div>
            );
        }
    }
}
export default MainApp;