import React,{useState, useMemo, useCallback} from 'react'
// 비구조할당문으로 React내의 useState -> React.useState 를 가져옴

const Memo = () => {

    // 상태값 input, 내용 저장을 위해
    const [username, setUsername] = useState('')
    const [list, setList] = useState([])

    const change = e =>{
        let {value} = {...e.target}
        setUsername(value)
    }
    const submit = e =>{
        e.preventDefault()
        // const newList = list.slice()
        const newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
    }

    const submit2 = useCallback(()=>{
        e.preventDefault()
        // const newList = list.slice()
        const newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
        },[list, username]) 
        // list와 username이 바뀔 때만 함수를 재생성
        // 함수형 프로그래밍은 매실행마다 함수를 재생성한다
    

    

    const renderList = () =>{
        // let newArr = []
        // for(var i=0; i < list.length; i++){
        //     newArr.push(<li key={i}>{list[i]}</li>)
        // }
        // return newArr
        let newArr = list.map((v,k) =>{
            return <li key={k}>{v}</li>
            }
        )
        return newArr
        
    }

    const count = (arr) => {
        return arr.length
    }
    const userCount = useMemo(()=>{
        return count(list)
    },[list.length])

    // useMemo는 함수/리턴 값 , 상태값을 받아서 
    // 상태값이 변경되었을 때만 함수가 실행됨
    

    return(
        <>

            <h2>회원리스트({userCount})</h2>
            <form onSubmit={submit}>
                <input type="text" name="username" value={username}
                onChange={change}
                />
                <button type="submit">
                    추가
                </button>
            </form>
            <ol>
                {
                    renderList()
                    // jsx 문법에서는 return 배열 내에 담고만 있으면 하나씩 출력됨
                    // 각각 key 값 필요
                }
                
            </ol>
        </>
    )
}


export default Memo