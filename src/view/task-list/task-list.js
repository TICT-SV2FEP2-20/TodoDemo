import { LitElement, html, css } from "lit";
import { TaskService } from '../../service/TaskService';

export class TaskList extends LitElement {

  static styles = css`
    :host {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
      grid-template-areas: 
        "header"
        "list";
    }
    h1 {
      justify-self: center;
      grid-area: header;
    }
    div {
      grid-area: list;
      width: 100%;
      justify-self: start;
      align-self: start;
    }
  `;

  constructor() {
    super();
    this.taskService = new TaskService();
    this.tasks = [];
  }

  connectedCallback() {
    super.connectedCallback();

    // listen for task-added emitted by the add-task web component
    const addTaskElement = document.querySelector('add-task');
    addTaskElement.addEventListener('task-added', (e) => this.updateTasks(e));

    // listen for delete events emitted by the task-item within this component.
    this.addEventListener('task-deleted', (e) => this.updateTasks(e));
  }

  disconnectedCallback() {
    // cleanup by removing the listeners
    const addTaskElement = document.querySelector('add-task');
    addTaskElement.removeEventListener('task-added', (e) => this.updateTasks(e));

    this.removeEventListener('task-deleted', (e) => this.updateTasks(e));

    super.disconnectedCallback();
  }

  updateTasks(event) {
    // calling a lit function to force the element to be rendered again.
    this.tasks = this.taskService.getTasks();
    this.requestUpdate();
  }

  render() {
    return html`
    <h1>Taken</h1>
    <div>
      ${
        this.tasks.map((task) => {
          return html`<task-item id="${task.id}" task="${task.task}" ?done=${task.done}></task-item>`
        })
      }
    </div>
  `;
  }
}

customElements.define('task-list', TaskList);
