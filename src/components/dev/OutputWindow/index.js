import React from 'react'
import './style.css'

function OutputWindow({ outputDetails }) {

    function getOutputInfo(){
        const statusId = outputDetails?.status?.id;

        if(statusId===6){
            return(
                <pre className='red'>
                    {atob(outputDetails?.compile_output)}
                </pre>
            )
        }
        else if(statusId===3){
            return(
                <pre className='green'>
                    {
                    atob(outputDetails?.stdout)!==null?
                    `${atob(outputDetails?.stdout)}`:
                    null
                    }
                </pre>
            )
        }
        else if(statusId===5){
            return(
                <pre className='red'>
                    {`Time Limit Exceed!`}
                </pre>
            )
        }
        else{
            return(
                <pre className='red'>
                    {atob(outputDetails?.stderr)}
                </pre>
            ) 
        }
    }

    return (
        <>
        <h1 className='outputHeading'>Output</h1>
        <div className='outWin'>
            {outputDetails?<>{getOutputInfo()}</>:null}
        </div>
        </>
    )
}

export default OutputWindow