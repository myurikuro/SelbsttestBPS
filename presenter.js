import { View } from "./view.js";
import { Model } from "./model.js";
export class Presenter {
  constructor() {
    this.view = new View(this);
    this.Model = new Model();
    this.questionNumber = 1;
  }

  questionStart(number) {
    this.view.renderQuestionView();
    this.view.displayQuestion(this.Model.getQuestion(0));
    this.view.buttonHandlers();
  }

  optionClicked(points) {
    this.Model.addPointsToArray(points, this.questionNumber-1);
    if (this.questionNumber <= 14) {
      this.view.displayQuestion(this.Model.getQuestion(this.questionNumber++));
    } else {
      this.view.pageWrite(this.Model.evualuation())
    }
  }
}
