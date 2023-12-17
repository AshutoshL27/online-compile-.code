import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context/Provider'


function Result() {

    const [source, setSource] = useState('');
    const { html, css, js } = useContext(Context)

    const sourceCode = `<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setSource(sourceCode)
        }, 600)

        return ()=>clearTimeout(timeoutId)
    }, [html, css, js])

    return (
        <>
            <iframe
                srcDoc={source}
                sandbox='allow-scripts'
                title="result"
                width='100%'
                height='100%'
                frameBorder={0}
            />

        </>
    )
}

export default Result