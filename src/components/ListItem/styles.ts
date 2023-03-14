import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({done}: ContainerProps) => {
    return (
        `
        background-color: #343a40;
        margin: 10px 0;
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 18px;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
            
            input {
                margin-right: 10px;
                height: 20px;
                width: 20px;
            }
    
            label {
                font-size: 20px;
                text-decoration: ${ done ? 'line-through': 'initial'}
            }
        }

        button {
            display: flex;
            border: none;
            padding: 8px;
            align-self: flex-end;
            cursor: pointer;
        }
    `
    )
})