class App {
    constructor() {
        this.initBindingAndEventListeners();
        this.showInnerHtml()
    }

    initBindingAndEventListeners() {
        this.content = document.querySelector("#content")
    }

    showInnerHtml() {
        this.content.innerHTML = `<div>
            <h2>WORK?</h2>
            <h5>Try this</h5>
            <p>HELLO</p>
            </div>`
    }

}