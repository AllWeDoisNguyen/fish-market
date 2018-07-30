import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    goToStore() {
        console.log('Url has been changed');
        // Es6 doesn't need a comma after this
        // First grab text from input box
        // second, transition from / to /store/:storeId

    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
            {/* Dont put comments at top level!*/}
            {/* render is tied to the class and so "this" referrs to StorePicker class*/}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;