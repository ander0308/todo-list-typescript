
import { useState } from "react"

import { GlobalStyled } from "./globalStyles"
import * as S from './App.styles'

import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddItem } from "./components/AddItem"

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar React', done: false },
    { id: 2, name: 'Comprar Mouse', done: true },
    { id: 3, name: 'Fazer exercicio', done: false }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  const handleRemoveTask = (id: number) => {
    let newlist = list.filter((item) => {
      return item.id !== id
    })

    setList(newlist)
  }

  return (
    <>
      <GlobalStyled />
      <S.Container>
        <S.Content>
          <S.TitleHeader>Todo List</S.TitleHeader>
          
          <AddItem onAddTask={handleAddTask} />
          {list.map( item => <ListItem key={item.id} item={item} onRemove={handleRemoveTask}/> )}
        </S.Content>
      </S.Container>
    </>
  ) 
}

export default App
