# REPL

> REPL stands for Read-Eval-Print Loop, and it’s an interactive programming environment that allows developers to enter commands and see results immediately.

> In the context of Node.js and JavaScript, it’s a useful tool for testing code snippets, debugging, and experimenting with JavaScript commands.

# How REPL Works

1. Read: The REPL reads a line of input from the user.

2. Eval: It evaluates the input as JavaScript code.

3. Print: It prints the result of the evaluation to the console.

4. Loop: It repeats the process, allowing for continuous interaction.

# Features of the Node.js REPL

- Immediate Feedback: You can enter any valid JavaScript expression or command, and see the output instantly.

- Multiline Support: You can enter multiline code (like functions or loops) by using the Enter key without executing the command until you complete it (usually with a closing brace).

- Tab Completion: REPL supports tab completion for variables, functions, and built-in objects, making it easier to explore available options.

- Access to Global Objects: You have access to Node.js global objects (like global, process, etc.) and built-in modules directly.

# Common Commands

> ctrl + C: Exit the current command or exit the REPL.

> ctrl + D: Exit the REPL.

> .help: Display help information about the REPL.

> .exit: Exit the REPL.

> .load <filename>: Load and execute a JavaScript file.

> .save <filename>: Save the current REPL session to a file.

<!-- .break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file -->