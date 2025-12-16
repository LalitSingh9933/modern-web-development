//* 1. Lexical analysis
//? Lexical analyzer, also know as a lexer , is the first step in the process of compiling a Javascript program. 
// It breaks the program down into tokens , which are the basic building blocks of the language.

//* 2.Syntax analysis

//Takes the stream of tokens from lexical analysis and checks them for correct syntax.
//  If the syntax is correct, syntax analysis generates a tree-like structure called a parse tree or abstract syntax tree (AST). 
// The AST represent the hierarachical structure of the program.

//2. Compilation (JIT - Just-In-Time Compilation):
// After the AST is created, the Javascript engine typically goes through a compilation phase. In modern engines, like v8 in chrome, spiderMonkey in Firefox, or JavaScriptCore in Safari, this
//compilation often involves a cobination of two approaches:

//Parse and Compile: The engine  parses the code and compiles it into an intermediate from, such as 
// bytecode or machine code.

//Just-In-Time Compilation (JIT): Some engines use JIT compilation,
//  where the intermediate code is compiled just before execution. This allows the engine to optimize the code based on runtime information, improving performance.


//* 3. Execution:
// Onece the code is compiled , the Javascript engine executes it. During execution, the engine creates execution contexts, manages the scope chain, handles variable assignments, and calls functions.

//The execution context consists of two phases: the creation phase (Where variables and functions are  hoisted) and the execution phase(where the code is actually run).

//The Javascript engine uses a call stack to keep track of the execution context. When  a function is called , a new frame is addes to the stack , and the functions completes, it frame is removed (LIFO-Last In, First Out).

//*More on inside execution phase

//Call stack
//In order to manage the execution contexts, the JavaScript engine uses a call stack.
// The call stack is data structure that keeps tracks of the currently executing functions in a program. It operates on the Last In, First Out (LIFO) princeple, meaning that the last function added to the stack is  the first one to be executed and completed.

//Heap Memory
// The heap memory is where dynamically allocated memory resides. This is where objects, closures, and other dynamically allocated data are stored. While the call stack manages the flow of execution and function contexts, the heap memory holds data that is referenced by these execution contexts.

  