import React from 'react';

class HelleWorld extends React.Component {
    render() {
        return <p>Hello world!</p>
    }
}

export function doStep() {
    React.render(
        <HelleWorld />,
        document.body
    );
}