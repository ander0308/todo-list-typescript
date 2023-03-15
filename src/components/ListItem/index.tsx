import { useState, useContext } from 'react'

import * as S from './styles'
import { TodoType } from '../../types/Todo' 
// import { TaskContext } from '../../contexts/TaskContext'


type PropsItem = {
    item: TodoType
    onRemove: (id: number) => void
}

export const ListItem = ({ item, onRemove }: PropsItem) => {

    // const data = useContext(TaskContext)
    const [ isChecked, setIsChecked ] = useState(item.completed)

    const handleRemoveItem = () => {
        onRemove(item.id)
    }

    return (
        <S.Container done={isChecked}>
        <div>
        <input 
            type="checkbox" 
            name="name"  
            checked={isChecked}
            onChange={(event) => {
                setIsChecked(event.target.checked)
            }}
        />
        <label htmlFor="name">{item.todo}</label>
        </div>
        <button onClick={handleRemoveItem}>remove</button>
        </S.Container>
    )
}