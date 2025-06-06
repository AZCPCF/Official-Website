export default function BasicSyntaxPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Basic Syntax</h1>
      <p className="text-xl mb-8">
        In this tutorial, we'll cover the basic syntax of Cyrus to get you started with writing your first
        programs.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Hello, World!</h2>
      <p className="mb-4">Let's start with the classic "Hello, World!" program:</p>
      <pre className="bg-muted p-4 rounded-md mb-6">
        <code>{`import std::io;

fn main() {
    io::println("Hello, World!")
}`}</code>
      </pre>
      <p className="mb-4">This simple program demonstrates a few key elements of Cyrus syntax:</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          Functions are declared using the <code>fn</code> keyword.
        </li>
        <li>
          The <code>main()</code> function is the entry point of the program.
        </li>
        <li>
          Curly braces <code>{}</code> are used to define code blocks.
        </li>
        <li>
          <code>println()</code> is a built-in function for printing to the console.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Variables</h2>
      <p className="mb-4">
        Cyrus uses type inference to determine variable types. Here's how you declare variables:
      </p>
      <pre className="bg-muted p-4 rounded-md mb-6">
        <code>{`let name = "Alice"
let age = 30
let pi = 3.14159`}</code>
      </pre>
      <p>In the next section, we'll dive deeper into variables and types in Cyrus.</p>
    </div>
  )
}

