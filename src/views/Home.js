import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import HomeCard from '../components/HomeCard';

export default class Home extends Component {
    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => browserHistory.push('/releases')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => browserHistory.push('/backlog')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => browserHistory.push('/sprints')
    }

    render() {
        return (
            <div className="row">
                <HomeCard 
                    title={this.homeCardReleases.title}
                    text={this.homeCardReleases.text}
                    action={this.homeCardReleases.action} 
                />
                <HomeCard {...this.homeCardBacklog} />
                <HomeCard {...this.homeCardSprints} />
            </div>
        );
    }
}