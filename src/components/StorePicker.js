import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event) {
        event.preventDefault();
        console.log('Url has been changed');
        // Es6 doesn't need a comma after this
        // First grab text from input box
        console.log(this.storeInput.value);
        // second, transition from / to /store/:storeId

    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
            {/* Dont put comments at top level!*/}
            {/* render is tied to the class and so "this" referrs to StorePicker class*/}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;