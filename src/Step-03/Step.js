import React from 'react';
import Backbone from 'backbone';
import {Listener} from 'js/Helper/Listener';

class Person extends Backbone.Model {
    get defaults() {
        return {
            name: 'World'
        };
    }

    constructor(attributes, options) {
        super(attributes, options);
    }
}

class ReactView extends React.Component {
    constructor(props) {
        super(props);

        this.listener = new Listener();
    }

    componentWillUnmount() {
        this.listener.stopListening();
    }
}

class Greeter extends ReactView {
    componentDidMount() {
        this.listener.listenTo(this.props.person, 'change', function (model) {
            this.forceUpdate();
        }.bind(this));
    }

    setName() {
        this.props.person.set('name', this.refs.name.getDOMNode().value);
    }

    render() {
        return (
            <div>
                <p>Hello {this.props.person.get('name')}!</p>
                <input placeholder="new name" ref="name" onChange={this.setName.bind(this)} />
            </div>
        );
    }
}

export function doStep() {
    console.log('doStep v3');

    let piet = new Person({
        name: 'Piet'
    });

    window.person = piet;

    React.render(
        <Greeter person={piet} />,
        document.body
    );
}