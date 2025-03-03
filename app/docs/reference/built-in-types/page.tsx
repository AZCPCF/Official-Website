export default function BuiltInTypesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Built-in Types</h1>
      <p className="text-xl mb-8">
        Cyrus Lang provides a set of built-in types to cover most common programming needs. Here's an overview of the
        fundamental types available in the language.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Numeric Types</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <code>Int</code>: 64-bit signed integer
        </li>
        <li>
          <code>Float</code>: 64-bit floating-point number
        </li>
        <li>
          <code>Bool</code>: Boolean value (true or false)
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Text Types</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <code>String</code>: UTF-8 encoded string of characters
        </li>
        <li>
          <code>Char</code>: Single Unicode character
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Collection Types</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <code>Array&lt;T&gt;</code>: Fixed-size array of elements of type T
        </li>
        <li>
          <code>List&lt;T&gt;</code>: Dynamic-size list of elements of type T
        </li>
        <li>
          <code>Set&lt;T&gt;</code>: Unordered collection of unique elements of type T
        </li>
        <li>
          <code>Map&lt;K, V&gt;</code>: Key-value pairs with keys of type K and values of type V
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Other Types</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <code>Option&lt;T&gt;</code>: Represents an optional value of type T
        </li>
        <li>
          <code>Result&lt;T, E&gt;</code>: Represents either a success value of type T or an error of type E
        </li>
      </ul>
      <p>
        These built-in types form the foundation of Cyrus Lang's type system. In the following sections, we'll explore
        how to use these types effectively in your programs.
      </p>
    </div>
  )
}

