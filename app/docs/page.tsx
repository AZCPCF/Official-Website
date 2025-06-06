import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="mb-8 flex items-center rounded-md border border-yellow-300 bg-yellow-50 p-4 text-primary"
        role="alert"
        aria-live="polite"
      >
        <svg
          className="h-5 w-5 mr-3 flex-shrink-0 text-yellow-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
          />
        </svg>
        <span>
          <strong>Notice:</strong> Consider that Cyrus is under heavy development and is not stable yet.
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <p className="text-xl mb-8">
        Welcome to the official documentation for Cyrus. Here you'll find everything you need to get started with
        our modern, expressive, and efficient programming language.
      </p>


      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">For Newcomers</h2>
          <p className="mb-4">
            If you're new to Cyrus, start with our comprehensive tutorial to learn the basics and get up to speed
            quickly.
          </p>
          <Link href="/docs/tutorial/basic-syntax">
            <Button>Start Tutorial</Button>
          </Link>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Language Reference</h2>
          <p className="mb-4">
            For a detailed overview of Cyrus's built-in types, functions, and modules, check out our language
            reference.
          </p>
          <Link href="/docs/reference/built-in-types">
            <Button variant="outline">Explore Reference</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

