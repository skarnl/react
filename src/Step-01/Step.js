import React from 'react';

class HelleWorld extends React.Component {
    render() {
        return <p>Hello world!</p>
    }
}

export function doStep() {
    console.log('doStep v1');

    React.render(
        <HelleWorld />,
        document.body
    );
}