import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Cyrus Lang Documentation</h1>
      <p className="text-xl mb-8">
        Welcome to the official documentation for Cyrus Lang. Here you'll find everything you need to get started with
        our modern, expressive, and efficient programming language.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">For Newcomers</h2>
          <p className="mb-4">
            If you're new to Cyrus Lang, start with our comprehensive tutorial to learn the basics and get up to speed
            quickly.
          </p>
          <Link href="/docs/tutorial/basic-syntax">
            <Button>Start Tutorial</Button>
          </Link>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Language Reference</h2>
          <p className="mb-4">
            For a detailed overview of Cyrus Lang's built-in types, functions, and modules, check out our language
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

