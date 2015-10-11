import React from 'react';
import Backbone from 'backbone';

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

class Greeter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.listenTo(this.props.person, 'change', function (model) {
            this.forceUpdate();
        }, this);
    }

    componentWillUnmount() {
        this.stopListening();
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

_.extend(Greeter.prototype, Backbone.Events);

export function doStep() {
    console.log('doStep v2');

    let piet = new Person({
            name: 'Piet'
        });

    window.person = piet;

    React.render(
        <Greeter person={piet} />,
        document.body
    );
}