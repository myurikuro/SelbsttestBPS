import { fragen } from "./fragen.js";

export class Model {
    constructor() {
        this.choices = [];
        this.PERFEKTIONISMUS = 0;
        this.MACHTWILLE = 0;
        this.NEUGIER = 0;
        this.GESTALTUNG = 0;
        this.Extrinsische_Motivation = 0;
    }

    addPointsToArray(selection, questionNumber) {
        console.log(fragen[questionNumber].asc)
        if(fragen[questionNumber].asc === false){
            selection = 4 - selection;
        }
        this.choices.push(selection);
    }

    evualuation() {
        this.addPointsToCategory();
        let answer = '<ul><li>Perfektionismus: ' + this.PERFEKTIONISMUS + ' </li></ul>' 
        + '<ul><li>Machtwille: ' + this.MACHTWILLE + ' </li></ul>' 
        + '<ul><li>Neugier: ' + this.NEUGIER + ' </li></ul>'
        + '<ul><li>Gestaltung: ' + this.GESTALTUNG+ ' </li></ul>'
        + '<ul><li>Extrinsiche Motivation: ' + this.Extrinsische_Motivation + ' </li></ul>';
        return answer;
    }

    getQuestion(question) {
        return fragen[question].text;
    }

    addPointsToCategory() {
        for (let i = 0; i < 3; i++) {
            this.PERFEKTIONISMUS += this.choices[i];
        }
        for (let i = 3; i < 6; i++) {
            this.MACHTWILLE += this.choices[i];
        }
        for (let i = 6; i < 9; i++) {
            this.NEUGIER += this.choices[i];
        }
        for (let i = 9; i < 12; i++) {
            this.GESTALTUNG += this.choices[i];
        }
        for (let i = 12; i < 15; i++) {
            this.Extrinsische_Motivation += this.choices[i];
        }
    }
}