export class Store {
    constructor() {
        this.contents = {}
    }

<<<<<<< HEAD
    add(key, value) {
        this.contents[key] = value
    }

    remove(key) {
        delete this.contents[key]
    }

    get(key) {
        return this.contents[key]
=======
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
>>>>>>> 99c966266a6786231bb216f16355fdd188733163
    }
}