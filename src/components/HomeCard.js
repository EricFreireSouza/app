import React from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const HomeCard = (props) => (
    <div className="col-12 col-sm-4">
        <Card title={props.title}>
            <p className="card-text">{props.text}</p>
            <Button label={props.title} onClick={props.action} />
        </Card>
    </div>
);

export default HomeCard;