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
                margin-right: 16px;
                height: 20px;
                min-width: 20px;
            }
            label {
                font-size: 18px;
                text-decoration: ${ done ? 'line-through': 'initial'};
            }
        }

        button {
            display: flex;
            border: none;
            padding: 16px;
            align-self: flex-end;
            cursor: pointer;
            margin-left: 10px;
            background-color: transparent;
            border-radius: 5px;
            transition: all 0.5s ease-out;
        }
        &:hover {
          button {
            background-color: #495057;
            transition: all 0.3s;

          }
        }
    `
    )
})
