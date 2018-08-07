import React, { Component }from 'react';
//import axios from 'axios';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
//import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import columnsTableUserInterfaces from '../../assets/json/columnsTableUserInterfaces.json';
import dataUserInterfaces from '../../assets/json/dataUserInterfaces.json';

//const URL = 'http://devel2.linea.gov.br/~singulani/pipelines.json'

export default class TablePipelines extends Component {
    constructor() {
        super();
        let columnsPipelines = columnsTableUserInterfaces;

        this.state = {
            colsPipelines: columnsPipelines,
            globalFilter: null,
            loading: false,
            first: 0,
            rows: 5,
            totalRecords: 0,
            rowsPerPageOptions: [5,10,20],
            itens: dataUserInterfaces
        };

        this.colOptionsPipelines = [];

        for(let col of columnsPipelines) {
            this.colOptionsPipelines.push({label: col.header, value: col});
        }

        this.onColumnTogglePipelines = this.onColumnTogglePipelines.bind(this);

        //this.onPage = this.onPage.bind(this);
    }

    onColumnTogglePipelines(event) {
        this.setState({colsPipelines: event.value});
    }

    /*componentDidMount() {
        axios.get(URL)
        .then(response => { 
            this.setState({ data: response.data}); 
        }).catch(() => { 
            console.log('Erro ao recuperar os dados'); 
        });
    }*/

    /*componentDidMount() {
        console.log('TESTANDO');
        this.datasource = this.state.itens;
        this.setState({
            totalRecords: this.datasource.length,           
            itens: this.datasource.slice(0, this.state.rows),
            loading: false
        });
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.state.rows;
    
            this.setState({
                first: startIndex,  
                itens: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 250);
    }*/

    render() {
        let header = <div style={{textAlign:'left'}}>
                        <MultiSelect value={this.state.colsPipelines} options={this.colOptionsPipelines} onChange={this.onColumnTogglePipelines} />
                        <br /><InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" />
                    </div>;

        let columnsPipelines = this.state.colsPipelines.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} sortable={true} />;
        });

        //let paginatorLeft = <Button icon="fa fa-refresh"/>;
        //let paginatorRight = <Button icon="fa fa-cloud-upload"/>;

        return (
            <DataTable 
                header={header} 
                value={this.state.itens} 
                resizableColumns={true} 
                columnResizeMode="expand" 
                reorderableColumns={true} 
                reorderableRows={true} 
                responsive={true} 
                selectionMode="single" 
                selection={this.state.selectedCar1} 
                onSelectionChange={(e) => this.setState({selectedCar1: e.data})}
                scrollable={true}
                paginator={true} 
                //paginatorLeft={paginatorLeft} 
                //paginatorRight={paginatorRight} 
                rows={this.state.rows} 
                rowsPerPageOptions={this.state.rowsPerPageOptions}
                totalRecords={this.state.totalRecords}
                //lazy={true} 
                //loading={this.state.loading}
                //first={this.state.first} 
                //onPage={this.onPage}                 
                globalFilter={this.state.globalFilter}
                paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            >
                {columnsPipelines}
            </DataTable>
        );
    }
}