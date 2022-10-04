export default class GlobalServiceHandler {

    url = 'http://18.198.246.61/'
    #NLdata
    #ENdata
    #studentNumber
    #language

    getData(lang) {
        if (lang == "NL") {
            return this.NLdata;
        } else {
            return this.ENdata;
        }
    }

    setData(data) {
        // data is loaded in by default in dutch
        this.NLdata = data;

        // so we also translate it to english should the student want the dashboard in english
        let myJSON = JSON.stringify(data);
        myJSON = myJSON.replaceAll('Schrijven', 'Writing');
        myJSON = myJSON.replaceAll("Niet Gedetecteerd", 'Not detected');
        myJSON = myJSON.replaceAll("Orientatie", 'Orientation');
        myJSON = myJSON.replaceAll("Plannen", 'Planning');
        myJSON = myJSON.replaceAll("Monitoren", 'Monitoring');
        myJSON = myJSON.replaceAll("Evaluatie", 'Evaluation');
        myJSON = myJSON.replaceAll("Lezen", 'Reading');
        myJSON = myJSON.replaceAll("Herlezen", 'Rereading');
        let newJSON = JSON.parse(myJSON);
        this.ENdata = newJSON;
    }

    getStudentNumber() {
        return this.#studentNumber
    }

    setStudentNumber(data) {
        this.#studentNumber = data;
    }

    getLanguage() {
        return this.#language
    }

    setLanguage(data) {
        this.#language = data;
    }
}