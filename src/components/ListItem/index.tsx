import { useState } from 'react'

import * as S from './styles'
import { Item } from '../../types/Item' 

type PropsItem = {
    item: Item
}

export const ListItem = ({ item }: PropsItem) => {

    const [ isChecked, setIsChecked ] = useState(item.done)

    return (
        <S.Container done={isChecked}>
            <input 
                type="checkbox" 
                name="name"  
                checked={isChecked}
                onChange={(event) => {
                    setIsChecked(event.target.checked)
                }}
                />
            <label htmlFor="name">{item.name}</label>
        </S.Container>
    )
}