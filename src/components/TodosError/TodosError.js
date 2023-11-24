import React from 'react'
import { TbFaceIdError } from "react-icons/tb"

export default function TodosError(){
    return (
        <div style={{ 'display':'flex', 'alignItems':'center', 'flexDirection':'column', 'gap':'1em' }}>
            {/* <span class="material-icons">hotel</span> */}
            {/* <GiNightSleep style={{ 'fontSize':'20vh', 'color':'#ededed' }}/> */}
            <TbFaceIdError style={{ 'fontSize':'20vh', 'color':'#ededed' }} />
            <p style={{ 'color':'#bababa', 'fontWeight':'600', 'fontSize':'1.2em' }}>Algo salio mal, contacta a Yisus.</p>
        </div>
    )
}