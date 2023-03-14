import * as S from './styles'

export const AddItem = () => {
    return(
        <S.Container>
            <div className="icon">➕</div>
            <input 
                type="text" 
                placeholder="Adicione uma Tarefa"
            />
        </S.Container>
    )
}