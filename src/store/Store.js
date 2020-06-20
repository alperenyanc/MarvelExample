import {create} from "mobx-persist";
import AsyncStorage from '@react-native-community/async-storage';

const hydrate = create({
    storage: AsyncStorage,
    jsonify: true
});

// Base Store class
export default class Store {
    isReady = false;

    constructor(stores) {
        Object.defineProperty(this, 'stores', {value: stores, writable: true});
    }

    get stores() {
        return null;
    }

    get hydrate() {
        return hydrate;
    }

    async setup() {
    }
} 