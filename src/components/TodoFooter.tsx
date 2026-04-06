import { FilterType } from '../types/todo'

interface Props {
  activeCount: number
  completedCount: number
  filter: FilterType
  onFilterChange: (f: FilterType) => void
  onClearCompleted: () => void
}

const FILTERS: FilterType[] = ['all', 'active', 'completed']

export function TodoFooter({ activeCount, completedCount, filter, onFilterChange, onClearCompleted }: Props) {
  return (
    <footer className="todo-footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeCount === 1 ? 'item' : 'items'} left
      </span>
      <div className="filter-group">
        {FILTERS.map(f => (
          <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => onFilterChange(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed ({completedCount})
        </button>
      )}
    </footer>
  )
}
