import React from 'react'
import { useCounter } from '@/hooks/useCounter'

export function Home() {
  const { count, increment, decrement } = useCounter()

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to My App</h2>
          <p className="text-gray-600 mb-4">This is a sample counter component using custom hooks</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={decrement}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Decrease
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button
              onClick={increment}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}