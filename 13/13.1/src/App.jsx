import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'}`}>
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={reactLogo} className="h-12 w-12 animate-spin" alt="React logo" />
            <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              React + Tailwind + Vite
            </h1>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-white hover:bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl'
            }`}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Your Demo App
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A beautiful, responsive demo built with React, Tailwind CSS, and Vite. 
            Experience modern web development at its finest.
          </p>
        </div>

        {/* Counter Card */}
        <div className="max-w-md mx-auto mb-12">
          <div className={`rounded-2xl p-8 shadow-xl transition-all duration-300 ${
            isDark ? 'bg-gray-800 shadow-gray-900/50' : 'bg-white shadow-gray-200/50'
          }`}>
            <h3 className="text-2xl font-semibold mb-4 text-center">Interactive Counter</h3>
            <div className="text-center mb-6">
              <span className="text-6xl font-bold text-blue-600">{count}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setCount(count - 1)}
                className="flex-1 py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Decrease
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Increase
              </button>
            </div>
            <button
              onClick={() => setCount(0)}
              className="w-full mt-4 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className={`rounded-xl p-6 transition-all duration-300 ${
            isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
          } shadow-lg hover:shadow-xl`}>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with Vite for instant hot module replacement and blazing fast builds.
            </p>
          </div>
          
          <div className={`rounded-xl p-6 transition-all duration-300 ${
            isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
          } shadow-lg hover:shadow-xl`}>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Styled with Tailwind CSS for consistent, responsive, and modern design.
            </p>
          </div>
          
          <div className={`rounded-xl p-6 transition-all duration-300 ${
            isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
          } shadow-lg hover:shadow-xl`}>
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-semibold mb-2">React Powered</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with React for component-based architecture and excellent developer experience.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className={`inline-block rounded-2xl p-8 transition-all duration-300 ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } shadow-xl`}>
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Edit <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to see HMR in action!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              Start Building
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-16">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Built with ❤️ using React, Tailwind CSS, and Vite</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
              React Docs
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
              Tailwind Docs
            </a>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
              Vite Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
