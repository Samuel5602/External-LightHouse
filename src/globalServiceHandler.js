export default class GlobalServiceHandler {

    url = 'http://18.198.246.61/'
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