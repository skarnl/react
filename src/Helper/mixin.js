import Backbone from 'backbone';
import _ from 'underscore';

let mixin = {
    componentDidMount() {
        // listen to changes
    },

    componentWillUnmount() {
        // stop listening to changes
    },

    componentWillReceiveProps(props) {
        // stop listening
        // start listening
    }
};

_.extend(mixin, Backbone.Events);

export { mixin };