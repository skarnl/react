import React from 'react';
import Backbone from 'backbone';

class Time extends Backbone.Model {
    get defaults() {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    constructor(attributes, options) {
        super(attributes, options);

        setInterval(this.updateTime.bind(this), 300);
    }

    updateTime() {
        var d = new Date();

        this.set('hours', d.getHours());
        this.set('minutes', d.getMinutes());
        this.set('seconds', d.getSeconds());
    }
}

class Digit extends React.Component {
    constructor(attributes, options) {
        super(attributes, options);
    }

    componentDidMount() {
        this.listenTo(this.props.model, 'change:' + this.props.propertyName, function (model) {
            this.forceUpdate();
        }, this);
    }

    componentWillUnmount() {
        this.stopListening();
    }

    render() {
        var value = this.props.model.get(this.props.propertyName);

        if (parseInt(value) < 10) {
            value = '0' + value;
        }

        return <i>{value}</i>
    }

    update() {
        this.props.number =
        this.forceUpdate();
    }
}

class Clock extends React.Component {
    render() {
        return (
            <div>
                The time is:
                <Digit model={this.props.model} propertyName="hours" /> :
                <Digit model={this.props.model} propertyName="minutes" /> :
                <Digit model={this.props.model} propertyName="seconds" />
            </div>
        );
    }
}

//we need to extend this, so we can use this.listenTo / this.stopListening()
_.extend(Digit.prototype, Backbone.Events);

export function renderClock() {

    let d = new Date();

    let timeModel = new Time({
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds()
    });

    React.render(
        <Clock model={timeModel} />,
        document.body
    );
}