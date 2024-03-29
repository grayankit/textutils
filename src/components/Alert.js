import React from 'react'

export default function Alert(props) {
  return (
    <div>
        {props.alert &&
        <div style={{height: '50px'}}
        className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong>
        </div>}
    </div>
  )
}
