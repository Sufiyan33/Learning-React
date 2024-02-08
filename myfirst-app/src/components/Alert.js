import React from 'react'

export default function Alert(props) {
   
  return (
    <div>
        
        {/*props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            
            You can remove below line becasue we are going to set timing to end alert
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>*/ }

        {/*Since above tag is giving NullPointerException & right now I am not able to fix this issue, will tackle later.*/}

        <div className={`alert alert-${props.alert} alert-dismissible fade show`} role="alert">
            <strong>{props.alert}</strong>: {props.alert}
        </div>
    </div>
  )
}
