import { useTodos } from './hooks/useTodos'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoFooter } from './components/TodoFooter'
import './App.css'

export default function App() {
  const {
    todos, totalCount, activeCount, completedCount,
    filter, setFilter, addTodo, toggleTodo, deleteTodo,
    editTodo, clearCompleted, toggleAll,
  } = useTodos()

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">todos</h1>
      </header>
      <main className="todo-card">
        <TodoForm onAdd={addTodo} totalCount={totalCount} onToggleAll={toggleAll} />
        <TodoList todos={todos} filter={filter}
          onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
        {totalCount > 0 && (
          <TodoFooter activeCount={activeCount} completedCount={completedCount}
            filter={filter} onFilterChange={setFilter} onClearCompleted={clearCompleted} />
        )}
      </main>
      <p className="app-hint">Double-click a todo to edit it</p>
    </div>
  )
}
