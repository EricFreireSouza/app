import React, { Component } from 'react';

import FlowDiagram from "../components/FlowDiagram";

export default class Diagram extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FlowDiagram />
            </div>
        )
    }
}