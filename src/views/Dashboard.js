import React, { Component }from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';

import ReleaseFilter from '../components/ReleaseFilter';

import '../assets/css/dashboard.css';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        let columns = [
            {field: 'pipeline', header: 'Pipeline'},
            {field: 'start', header: 'Start'},
            {field: 'duration', header: 'Duration'},
            {field: 'runs', header: 'Runs'},
            {field: 'status', header: 'Status'}
        ];

        let columns2 = [
            { field: 'pipeline', header: 'Pipeline' },
            { field: 'start', header: 'Start' },
            { field: 'duration', header: 'Duration' },
            { field: 'runs', header: 'Runs' },
            { field: 'status', header: 'Status' }
        ];

        this.state = {
            cols: columns,
            cols2: columns2,
            data: [
                {
                    "pipeline": "Item 1",
                    "start": "Item 1",
                    "duration": "Item 1",
                    "runs": "Item 1",
                    "status": "Item 1"
                },
                {
                    "pipeline": "Item 2",
                    "start": "Item 2",
                    "duration": "Item 2",
                    "runs": "Global Item 2",
                    "status": "Item 2"
                },
                {
                    "pipeline": "Login Item 3",
                    "start": "Item 3",
                    "duration": "Item 3",
                    "runs": "Item 3",
                    "status": "Item 3"
                },
                {
                    "pipeline": "Item 4",
                    "start": "Item 4",
                    "duration": "Item 4",
                    "runs": "Item 4",
                    "status": "Item 4"
                },
                {
                    "pipeline": "Item 5",
                    "start": "Item 5",
                    "duration": "Item 5",
                    "runs": "Item 5",
                    "status": "Item 5"
                },
                {
                    "pipeline": "Item 6",
                    "start": "Server Item 6",
                    "duration": "Item 6",
                    "runs": "Item 6",
                    "status": "Item 6"
                },
                {
                    "pipeline": "Item 7",
                    "start": "Server Item 7",
                    "duration": "Item 7",
                    "runs": "Item 7",
                    "status": "Item 7"
                },
                {
                    "pipeline": "Item 8",
                    "start": "Server Item 8",
                    "duration": "Item 8",
                    "runs": "Item 8",
                    "status": "Item 8"
                },
                {
                    "pipeline": "Item 9",
                    "start": "Server Item 9",
                    "duration": "Item 9",
                    "runs": "Item 9",
                    "status": "Item 9"
                },
                {
                    "pipeline": "Item 10",
                    "start": "Server Item 10",
                    "duration": "Item 10",
                    "runs": "Item 10",
                    "status": "Item 10"
                }
            ]
        };

        this.colOptions = [];
        this.colOptions2 = [];

        for(let col of columns) {
            this.colOptions.push({label: col.header, value: col});
        }

        for (let col of columns2) {
            this.colOptions2.push({ label: col.header, value: col });
        }

        this.onColumnToggle = this.onColumnToggle.bind(this);
        this.onColumnToggle2 = this.onColumnToggle2.bind(this);
    }

    onColumnToggle(event) {
        this.setState({cols: event.value});
    }

    onColumnToggle2(event) {
        this.setState({ cols2: event.value });
    }

    handleSubmit(e, {name, date}) {
        e.preventDefault();
        var state = this.state;
        var myRelease = {
            id: state.data.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({data: state.data.concat(myRelease)});
    }

    render() {
        let header = <div style={{textAlign:'left'}}>
                        <MultiSelect value={this.state.cols} options={this.colOptions} onChange={this.onColumnToggle} />
                    </div>;

        let header2 = <div style={{ textAlign: 'left' }}>
            <MultiSelect value={this.state.cols2} options={this.colOptions2} onChange={this.onColumnToggle2} />
        </div>;

        let columns = this.state.cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} sortable={true} />;
        });

        let columns2 = this.state.cols2.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header} sortable={true} />;
        });

        return (
            <div className="container-fluid">
                <p className="h6 text-center headerTitle">DES Science Portal Dashboard</p>
                <div className="row">
                    <div className="filter">
                        <ReleaseFilter submitHandler={this.handleSubmit} />
                    </div>
                </div>
                <div className="a01 row">
                    <div className="a01-1 col-sm-12 col-md-6 px-0">
                        <DataTable
                            header={header}
                            //header="Data Instalation"
                            value={this.state.data}
                            resizableColumns={true}
                            columnResizeMode="expand"
                            reorderableColumns={true}
                            reorderableRows={true}
                            responsive={true}
                            selectionMode="single"
                            selection={this.state.selectedCar1}
                            onSelectionChange={(e) => this.setState({selectedCar1: e.data})}
                            scrollable={true}
                            scrollHeight="200px"
                        >
                            {columns}
                        </DataTable>
                        <DataTable
                            header={header}
                            //header="Data Preparation"
                            value={this.state.data}
                            resizableColumns={true}
                            columnResizeMode="expand"
                            reorderableColumns={true}
                            reorderableRows={true}
                            responsive={true}
                            selectionMode="single"
                            selection={this.state.selectedCar2}
                            onSelectionChange={(e) => this.setState({selectedCar2: e.data})}
                            scrollable={true}
                            scrollHeight="200px"
                        >
                            {columns}
                        </DataTable>
                        <DataTable
                            header={header}
                            //header="Science-ready Catalogs"
                            value={this.state.data}
                            resizableColumns={true}
                            columnResizeMode="expand"
                            reorderableColumns={true}
                            reorderableRows={true}
                            responsive={true}
                            selectionMode="single"
                            selection={this.state.selectedCar3}
                            onSelectionChange={(e) => this.setState({selectedCar3: e.data})}
                            scrollable={true}
                            scrollHeight="200px"
                        >
                            {columns}
                        </DataTable>
                    </div>
                    <div className="a01-2 col-sm-12 col-md-6 px-0">
                        <DataTable
                            header={header}
                            //header="Special Samples"
                            value={this.state.data}
                            resizableColumns={true}
                            columnResizeMode="expand"
                            reorderableColumns={true}
                            reorderableRows={true}
                            responsive={true}
                            selectionMode="single"
                            selection={this.state.selectedCar4}
                            onSelectionChange={(e) => this.setState({selectedCar4: e.data})}
                            scrollable={true}
                            scrollHeight="200px"
                        >
                            {columns}
                        </DataTable>
                        <DataTable
                            header={header}
                            //header="Science Workflows"
                            value={this.state.data}
                            resizableColumns={true}
                            columnResizeMode="expand"
                            reorderableColumns={true}
                            reorderableRows={true}
                            responsive={true}
                            selectionMode="single"
                            selection={this.state.selectedCar5}
                            onSelectionChange={(e) => this.setState({selectedCar5: e.data})}
                            scrollable={true}
                            scrollHeight="200px"
                        >
                            {columns}
                        </DataTable>
                        <DataTable
                            header={header}
                            //header="Parameter stimation"
                            value={this.state.data}
                            resizableColumns={true}
                            columnResizeMode="expand"
                            reorderableColumns={true}
                            reorderableRows={true}
                            responsive={true}
                            selectionMode="single"
                            selection={this.state.selectedCar6}
                            onSelectionChange={(e) => this.setState({selectedCar6: e.data})}
                            scrollable={true}
                            scrollHeight="200px"
                        >
                            {columns}
                        </DataTable>
                        <DataTable
                            header={header2}
                            //header="Utilities"
                            value={this.state.data}
                            resizableColumns={true}
                            columnResizeMode="expand"
                            reorderableColumns={true}
                            reorderableRows={true}
                            responsive={true}
                            selectionMode="single"
                            selection={this.state.selectedCar7}
                            onSelectionChange={(e) => this.setState({selectedCar7: e.data})}
                            scrollable={true}
                            scrollHeight="200px"
                        >
                            {columns2}
                        </DataTable>
                    </div>
                </div>
            </div>
        )
    }
}