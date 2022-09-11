export default class GlobalServiceHandler {

    url = 'http://localhost:5000/'
    #data
    #studentNumber

    getData() {
        return this.#data
    }

    setData(data) {
        this.#data = data;
    }

    getStudentNumber() {
        return this.#studentNumber
    }

    setStudentNumber(data) {
        this.#studentNumber = data;
    }

}