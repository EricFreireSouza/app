import React, { Component }from 'react';

import Menu from '../components/userInterfaces/Menu';
import TablePipelines from '../components/userInterfaces/TablePipelines';

import '../assets/css/userInterfaces.css';

class UserInterfaces extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-md-block bg-light sidebar">
                        <h1 className="titUserIntefaces">User Interfaces</h1>
                        <div className="sidebar-sticky">
                            <Menu />
                        </div>
                    </div>

                    <div className="col-md-9 ml-sm-auto col-lg-9 px-1">
                        <TablePipelines />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInterfaces;