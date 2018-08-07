import React from 'react';

class AddFishForm extends React.Component {

    createFish(event) {
        event.preventDefault();
        console.log('Gonna make some fish 🐠');
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
                <input type="text" placeholder="Fish Name"></input>
                <input type="text" placeholder="Fish Price"></input>
                <select>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea placeholder="Fish Description"></textarea>
                <input type="text" placeholder="Fish Image"></input>
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}

export default AddFishForm;