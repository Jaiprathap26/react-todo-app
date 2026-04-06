import { useState, type FormEvent } from 'react'

interface Props {
  onAdd: (text: string) => void
  totalCount: number
  onToggleAll: () => void
}

export function TodoForm({ onAdd, totalCount, onToggleAll }: Props) {
  const [value, setValue] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (value.trim()) { onAdd(value); setValue('') }
  }

  return (
    <div className="todo-form">
      {totalCount > 0 && (
        <button className="toggle-all-btn" onClick={onToggleAll} title="Toggle all">❯</button>
      )}
      <form onSubmit={handleSubmit} style={{ flex: 1 }}>
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={e => setValue(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  )
}
