import { useState } from 'react'

import * as S from './styles'
import { TodoType } from '../../types/Todo'

type PropsItem = {
    item: TodoType
    onRemove: (id: number) => void
}

export const ListItem = ({ item, onRemove }: PropsItem) => {
    const [ isChecked, setIsChecked ] = useState(item.completed)

    const handleRemoveItem = () => {
        onRemove(item.id)
    }

    return (
        <S.Container done={isChecked}>
        <div>
        <input
            type="checkbox"
            name="todo"
            id={`todo-${item.id}`}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor={`todo-${item.id}`}>{item.todo}</label>
        </div>
        <button onClick={handleRemoveItem}>❌</button>
        </S.Container>
    )
}
