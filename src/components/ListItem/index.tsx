import { useState } from 'react'

import * as S from './styles'
import { Item } from '../../types/Item' 

type PropsItem = {
    item: Item
    onRemove: (id: number) => void
}

export const ListItem = ({ item, onRemove }: PropsItem) => {

    const [ isChecked, setIsChecked ] = useState(item.done)

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
        <label htmlFor="name">{item.name}</label>
        </div>
        <button onClick={handleRemoveItem}>remove</button>
        </S.Container>
    )
}