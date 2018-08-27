import Rebase from 're-base';
// wes bos says it's okay to have the key here because firebase helps with the authentication
const base = Rebase.createClass({
    apiKey: "AIzaSyAiBQ9UG-1PL6r0QoSf7_UU09QM0h-4ADg",
    authDomain: "fish-market-catch-of-the-day.firebaseapp.com",
    databaseURL: "https://fish-market-catch-of-the-day.firebaseio.com",
});

export default base;