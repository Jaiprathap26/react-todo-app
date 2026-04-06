import { useState, useRef, useEffect, type KeyboardEvent } from 'react'
import { Todo } from '../types/todo'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editing) { inputRef.current?.focus(); inputRef.current?.select() }
  }, [editing])

  function commitEdit() {
    const trimmed = editValue.trim()
    if (trimmed && trimmed !== todo.text) onEdit(todo.id, trimmed)
    else setEditValue(todo.text)
    setEditing(false)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') commitEdit()
    if (e.key === 'Escape') { setEditValue(todo.text); setEditing(false) }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      {editing ? (
        <input
          ref={inputRef}
          className="todo-edit-input"
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div className="todo-view">
          <input type="checkbox" className="todo-checkbox"
            checked={todo.completed} onChange={() => onToggle(todo.id)}
            id={`todo-${todo.id}`}
          />
          <label htmlFor={`todo-${todo.id}`} className="todo-label"
            onDoubleClick={() => setEditing(true)}>
            {todo.text}
          </label>
          <button className="todo-delete" onClick={() => onDelete(todo.id)}>×</button>
        </div>
      )}
    </li>
  )
}
