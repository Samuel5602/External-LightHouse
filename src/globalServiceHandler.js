export default class GlobalServiceHandler {

    url = 'http://localhost:5000/feature'
    #data

    getData() {
        return this.#data
    }

    setData(data) {
        this.#data = data;
    }
}