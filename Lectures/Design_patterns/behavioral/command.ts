// Command allows to incapsulate actions in objects. 
// The main idea of Command pattern is to provide a way of separating client from receiver. 

// Вы приходите в ресторан и делает заказ официанту. Он перенаправляет вашу Команду шеф-повару, который знает, что и как готовить.
// Паттерн Команда инкапсулирует некоторые действия и необходимые для них данные и позволяет отделить Клиента от Получателя.

// Пример реализации
// Это Получатель, который умеет совершать различные действия:
// Receiver
class Bulb {
  turnOn() {
      console.log('Bulb has been lit')
  }
  
  turnOff() {
      console.log('Darkness!')
  }
}

// А вот набор команд:
/*
Command interface :

    execute()
    undo()
    redo()
*/

// Command
class TurnOnCommand {
  bulb: any
  constructor(bulb) {
      this.bulb = bulb
  }
  
  execute() {
      this.bulb.turnOn()
  }
  
  undo() {
      this.bulb.turnOff()
  }
  
  redo() {
      this.execute()
  }
}

class TurnOffCommand {
  bulb: any
  constructor(bulb) {
      this.bulb = bulb
  }
  
  execute() {
      this.bulb.turnOff()
  }
  
  undo() {
      this.bulb.turnOn()
  }
  
  redo() {
      this.execute()
  }
}

// Это код Вызывающего (официанта из примера):
// Invoker
class RemoteControl {
  submit(command) {
      command.execute()
  }
}

// А вот пример использования:
const bulb = new Bulb()

const turnOn = new TurnOnCommand(bulb)
const turnOff = new TurnOffCommand(bulb)

const remote = new RemoteControl()
remote.submit(turnOn) // Bulb has been lit!
remote.submit(turnOff) // Darkness!


//-------------------- second example ------------------------
// In this example the Command pattern handles command execution history, 
// allows to cancel them if necessary. Commands, altering the editor state 
// (e.g. paste command), save a copy of editor state before execution. 
abstract class Command {
    protected app: Application;
    protected editor: Editor;
    protected backup: string;

    constructor (app: Application, editor: Editor) {
        this.app = app;
        this.editor = editor;
    }

    saveBackup() {
        this.backup = this.editor.text;
    }

    undo() {
        this.editor.text = this.backup;
    }

    abstract execute();
}

// Copies of executed commands are placed into command history, where they can be accessed for cancelling.  
// Classes of UI, command history and others don’t depend on concrete commands, since they work via common
// interface with them. Thus, new commands can be added to application without changing existing code. 
class CopyCommand extends Command {
  execute() {
      this.app.clipboard = this.editor.getSelection();
  }
}
class PasteCommand extends Command {
  execute() {
      this.saveBackup();
      this.editor.replaceSelection(this.app.clipboard);
  }
}
class CommandHistory {
  private history: Command[];

  push(c: Command) { this.history.push(c); }
  pop(): Command { return this.history[this.history.length -1]; }
}
class Editor {
  text: string;

  getSelection() { return 'some selection'; }
  replaceSelection(clipboard) { return `some ${clipboard} selection`; }
}

// The application class sets up object relations. It acts as a sender: 
// when something needs to be done, it creates a command object and executes it. 
class Application {
  clipboard: string;
  editor: Editor;
  activeEditor: Editor;
  history: CommandHistory;

  bindComands() {
      shortcuts.onkeypress('Ctrl+C', () => {
          return this.executeCommand(new CopyCommand(this, this.editor));
      });
      shortcuts.onkeypress('Ctrl+V', () => {
          return this.executeCommand(new PasteCommand(this, this.editor));
      });
  }

  executeCommand(command: Command) {
      this.history.push(command);
      command.execute();
  }

  undo() {
      const command = this.history.pop();
      command.undo();
  }
}
// Take the most recent command from the history and run its undo method. 
//Note that we don't know the class of that command. But we don't have to, 
//since the command knows how to undo its own action. 
