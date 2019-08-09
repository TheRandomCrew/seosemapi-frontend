import React, { Fragment } from 'react';


const LogInWrapper = ({ ErrorMsg, InputEmail, InputPassword, RememberPassword, ConfirmButton }) => {
  return (
        <Fragment>
          {InputEmail}
          {InputPassword}
        </Fragment>
  )
}
export default LogInWrapper;