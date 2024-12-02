abstract class TaskManager {
    protected tasks: Set<string>;
  
    constructor() {
      this.tasks = new Set<string>();
    }
  
    abstract addTask(task: string): void;
  
    listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  
  class Project extends TaskManager {
    private projectName: string;
  
    constructor(projectName: string) {
      super();
      this.projectName = projectName;
    }
  
    addTask(task: string): void {
      const projectTask = `Projeto ${this.projectName}: ${task}`;
      if (!this.tasks.has(projectTask)) {
        this.tasks.add(projectTask);
        console.log(`Tarefa adicionada no projeto "${this.projectName}": ${task}`);
      } else {
        console.log(`A tarefa "${task}" já existe no projeto "${this.projectName}".`);
      }
    }
  }
  
  class DailyTasks extends TaskManager {
    constructor() {
      super();
    }
  
    addTask(task: string): void {
      const dailyTask = `Tarefa de hoje: ${task}`;
      if (!this.tasks.has(dailyTask)) {
        this.tasks.add(dailyTask);
        console.log(`Tarefa diária adicionada: ${task}`);
      } else {
        console.log(`A tarefa diária "${task}" já foi adicionada.`);
      }
    }
  }
  
  const project = new Project("Novo Site");
  project.addTask("Criar layout");
  project.addTask("Definir paleta de cores");
  project.addTask("Criar layout"); // Tarefa duplicada
  
  const dailyTasks = new DailyTasks();
  dailyTasks.addTask("Fazer café");
  dailyTasks.addTask("Responder e-mails");
  dailyTasks.addTask("Fazer café"); // Tarefa duplicada
  
  console.log("Tarefas do projeto:");
  console.log(project.listTasks());
  
  console.log("Tarefas diárias:");
  console.log(dailyTasks.listTasks());
  