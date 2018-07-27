import React, { Component }from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
//import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import '../assets/css/userInterfaces.css';

export default class UserInterfaces extends Component {
    constructor() {
        super();
        //this.carservice = new CarService();
        let columns = [
            {field: 'pipeline_name', header: 'Pipeline Name'},
            {field: 'name', header: 'Name'},
            {field: 'version_date', header: 'Version Date'},
            {field: 'owner', header: 'Owner'},
            {field: 'group', header: 'Group'},
            {field: 'stage', header: 'Stage'},
            {field: 'readme', header: 'Readme'}
        ];

        this.state = {
            cols: columns,
            globalFilter: null,
            loading: true,
            first: 0,
            rows: 5,
            totalRecords: 0,
            rowsPerPageOptions: [5,10,20],
            data: [
                {               
                    "pipeline_name": "Item 1",
                    "name": "Item 1",
                    "version_date": "Item 1",
                    "owner": "Item 1",
                    "group": "Item 1",
                    "stage": "Item 1",
                    "readme": "Archive Item 1"
                },
                {               
                    "pipeline_name": "Item 2",
                    "name": "Item 2",
                    "version_date": "Item 2",
                    "owner": "Global Item 2",
                    "group": "Item 2",
                    "stage": "Item 2",
                    "readme": "Item 2"
                },
                {               
                    "pipeline_name": "Login Item 3",
                    "name": "Item 3",
                    "version_date": "Item 3",
                    "owner": "Item 3",
                    "group": "Item 3",
                    "stage": "Item 3",
                    "readme": "Item 3"
                },
                {               
                    "pipeline_name": "Item 4",
                    "name": "Item 4",
                    "version_date": "Item 4",
                    "owner": "Item 4",
                    "group": "Item 4",
                    "stage": "Item 4",
                    "readme": "Item 4"
                },
                {               
                    "pipeline_name": "Item 5",
                    "name": "Item 5",
                    "version_date": "Item 5",
                    "owner": "Item 5",
                    "group": "Item 5",
                    "stage": "Service Item 5",
                    "readme": "Item 5"
                },
                {               
                    "pipeline_name": "Item 6",
                    "name": "Server Item 6",
                    "version_date": "Item 6",
                    "owner": "Item 6",
                    "group": "Item 6",
                    "stage": "Item 6",
                    "readme": "Item 6"
                },
                {               
                    "pipeline_name": "Item 7",
                    "name": "Server Item 7",
                    "version_date": "Item 7",
                    "owner": "Item 7",
                    "group": "Item 7",
                    "stage": "Item 7",
                    "readme": "Item 7"
                },
                {               
                    "pipeline_name": "Item 8",
                    "name": "Server Item 8",
                    "version_date": "Item 8",
                    "owner": "Item 8",
                    "group": "Item 8",
                    "stage": "Item 8",
                    "readme": "Item 8"
                },
                {               
                    "pipeline_name": "Item 9",
                    "name": "Server Item 9",
                    "version_date": "Item 9",
                    "owner": "Item 9",
                    "group": "Item 9",
                    "stage": "Item 9",
                    "readme": "Item 9"
                },
                {               
                    "pipeline_name": "Item 10",
                    "name": "Server Item 10",
                    "version_date": "Item 10",
                    "owner": "Item 10",
                    "group": "Item 10",
                    "stage": "Item 10",
                    "readme": "Item 10"
                }
            ]
        };

        this.colOptions = [];

        for(let col of columns) {
            this.colOptions.push({label: col.header, value: col});
        }

        this.onColumnToggle = this.onColumnToggle.bind(this);

        this.onPage = this.onPage.bind(this);
    }

    onColumnToggle(event) {
        this.setState({cols: event.value});
    }

    componentDidMount() {
        console.log('TESTANDO');
        this.datasource = this.state.data;
        this.setState({
            totalRecords: this.datasource.length,           
            data: this.datasource.slice(0, this.state.rows),
            loading: false
        });
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.state.rows;
    
            this.setState({
                first: startIndex,
                //rowsPerPageOptions: this.state.data,
                data: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 250);
    }

    render() {
        let header = <div style={{textAlign:'left'}}>
                        <MultiSelect value={this.state.cols} options={this.colOptions} onChange={this.onColumnToggle} />
                        <br /><InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" />
                    </div>;

        let columns = this.state.cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} sortable={true} />;
        });

        //let paginatorLeft = <Button icon="fa fa-refresh"/>;
        //let paginatorRight = <Button icon="fa fa-cloud-upload"/>;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-md-block bg-light sidebar">
                        <h1 className="titUserIntefaces">User Interfaces</h1>
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Pipelines</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/">Components</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/">Packages</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9 ml-sm-auto col-lg-9 px-1">
                        <DataTable 
                            header={header} 
                            value={this.state.data} 
                            resizableColumns={true} 
                            columnResizeMode="expand" 
                            reorderableColumns={true} 
                            reorderableRows={true} 
                            responsive={true} 
                            selectionMode="single" 
                            selection={this.state.selectedCar1} 
                            onSelectionChange={(e) => this.setState({selectedCar1: e.data})}
                            paginator={true} 
                            //paginatorLeft={paginatorLeft} 
                            //paginatorRight={paginatorRight} 
                            rows={this.state.rows} 
                            rowsPerPageOptions={this.state.rowsPerPageOptions}
                            totalRecords={this.state.totalRecords}
                            lazy={true} 
                            first={this.state.first} 
                            onPage={this.onPage} 
                            loading={this.state.loading}
                            globalFilter={this.state.globalFilter}
                            paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        >
                            {columns}
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }
}