import styled, {css} from "styled-components"

export const Button = styled.button`
  border: 1px solid lime;
  width: 100px;
  cursor: pointer;
  color: white;
  background: ${props => props.back};

  ${props => props.primary && css`background: transparent` }
`

const student = false

function printData() {
    console.log('This is a student')
} 

function someTest() {
    
    if (student) printData()

    student && printData()

}