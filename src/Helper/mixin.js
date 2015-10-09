import Backbone from 'backbone';
import _ from 'underscore';

let mixin = {
    componentDidMount() {
        // listen to changes
        // is it a model or a collection?
    },

    componentWillUnmount() {
        // stop listening to changes
        this.stopListening();
    },

    componentWillReceiveProps(props) {
        // stop listening
        this.stopListening();
        // start listening
    }
};

_.extend(mixin, Backbone.Events);

export { mixin };