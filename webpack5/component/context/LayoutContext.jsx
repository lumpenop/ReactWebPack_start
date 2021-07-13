import React from "react";

export const LayoutContext = React.createContext() // 하나의 Component

const LayoutStore = (props) =>{
    const user = {
        userid:'hi',
        username:'ho2',
        job:'null',
    }
    return(
        <> {/* LayoutContext 내의 속성으로 Provider가 있다 */}
        
            <LayoutContext.Provider value="user">
                {props.children}
            </LayoutContext.Provider>
 
            {/* <context>
                <h1>
                    layout
                    <div>
                        LoginBox
                        <ul>
                            <li>button</li>
                        </ul>
                    </div>    
                </h1>
            </context> */}
        </>
    )
}

export default LayoutStore

