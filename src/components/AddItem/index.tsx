import { useState, KeyboardEvent } from 'react'
import * as S from './styles'


type Props = {
    onAddTask: (taskName: string) => void
}

export const AddItem = ({ onAddTask }: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (event: KeyboardEvent) => {
        if(event.code === "Enter" && inputText !== ''){
            onAddTask(inputText)
            setInputText('')
        }
    }

    return(
        <S.Container>
            <div className="icon">➕</div>
            <input 
                type="text" 
                placeholder="Adicione uma Tarefa"
                value={inputText}
                onChange={(event) => { setInputText(event.target.value)}}
                onKeyUp={handleKeyUp}
            />
        </S.Container>
    )
}