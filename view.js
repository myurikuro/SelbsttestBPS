export class View {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById("app");
    this._startButtonNode = document.getElementById("buttonStart");
    this.loadStart();
  }

  loadStart() {
    this._startButtonNode.addEventListener('click', event => {
      this.app.innerHTML = "";
      this.presenter.questionStart(0);
    });
  }

  renderQuestionView() {
    this.pNode = document.createElement("p");
    this.app.appendChild(this.pNode);
    this.divNode = document.createElement("div");
    this.app.appendChild(this.divNode);
    const html = `<ul>
    <li><button id="button1">Auf jeden Fall</button></li>
    <li><button id="button2">Trifft eher zu</button></li>
    <li><button id="button3">Weiß nicht</button></li>
    <li><button id="button4">Trifft eher nicht zu</button></li>
    <li><button id="button5">Stimmt nicht</button></li>
    </ul>
    `;
    this.divNode.innerHTML = html;
    window.onload = function () {
      this.buttonHandlers();
    };
  }

  displayQuestion(text) {
    this.pNode.innerHTML = text;
  }

  pageWrite(text) {
    this.app.innerHTML = text;
  }

  buttonHandlers() {
    this.button1 = document.getElementById('button1').addEventListener('click', () => {
      this.option(4);
    });

    this.button2 = document.getElementById("button2").addEventListener('click', () => {
      this.option(3);
    });

    this.button3 = document.getElementById("button3").addEventListener('click', () => {
      this.option(2);
    });

    this.button4 = document.getElementById("button4").addEventListener('click', () => {
      this.option(1);
    });

    this.button5 = document.getElementById("button5").addEventListener('click', () => {
      this.option(0);
    });
  }

  option(points) {
    this.presenter.optionClicked(points);
  }
}
