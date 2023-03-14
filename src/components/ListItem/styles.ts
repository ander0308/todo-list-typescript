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
        padding: 10px;

        input {
            margin-right: 10px;
            height: 20px;
            width: 20px;
        }

        label {
            font-size: 20px;
            text-decoration: ${ done ? 'line-through': 'initial'}
        }
    `
    )
})