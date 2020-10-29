export class Store {
    constructor() {
        this.contents = {}
    }

    /*
        const obj = {
            prop: val
        }

        obj.prop -> val
        obj["prop"] -> val
    */
    /*
        const store = new Store()
        store.add('myKey', 10)
        store.get('myKey') -> 10
        store.remove('myKey')
    */

    add(key, value) {
        this.contents["key"] = value
        return this.contents  
    }

    remove(key) {
        // const storeRemove = {key}
        // this.store.contents = 
        delete this.contents["key"]

    }

    get(key) {
        return this.contents["key"]
    }
}