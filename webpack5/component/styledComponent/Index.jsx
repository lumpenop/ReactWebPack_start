import React from 'react'
import styled from 'styled-components'


const ButtonStyle = {
    'background':'black',
    'border':'none',
    'color':'#fff',
    'padding':'7px 14px'
}

const Button = styled.button`
    background:#000;
    border:none;
    color:#fff;
    padding:7px 14px;
`
const ButtonHover = styled(Button)`
    background:#007bff;
    :hover{
        background:#0069d9;
    }
`

const Index = () =>{
    const inputRef = React.useRef() // [] 엘리먼트를 넣을 준비가 되어있다 input 박스가 (ref={inputRef}) 가 실행되는 순간에 함께 실행됨
    const handleClick = () =>{
        console.log(inputRef.current)
        inputRef.current.focus()
        if(inputRef.current.style.display == ''){
            inputRef.current.style.display = 'none'
        }else{
            inputRef.current.style.display = ''
        }
    }
    return(
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button 
                    style={ButtonStyle}
                    onClick={handleClick}    
                >
                    hi
                </button>
                <Button>
                    dsadmls
                </Button>
                <Button>
                    dsadmls
                </Button>

                <ButtonHover onClick={handleClick}>
                    das
                </ButtonHover >

            </div>
        </>
    )
}

export default Index