import { Todo, FilterType } from '../types/todo'
import { TodoItem } from './TodoItem'

interface Props {
  todos: Todo[]
  filter: FilterType
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export function TodoList({ todos, filter, onToggle, onDelete, onEdit }: Props) {
  if (todos.length === 0) {
    const messages: Record<FilterType, string> = {
      all: 'No todos yet — add one above!',
      active: 'No active todos. Great job!',
      completed: 'No completed todos yet.',
    }
    return <p className="empty-state">{messages[filter]}</p>
  }
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}
          onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  )
}
