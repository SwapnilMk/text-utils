import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
     {props.alert.type} : <strong>{props.alert.msg}</strong>
    </div>
  )
}
export default Alert

