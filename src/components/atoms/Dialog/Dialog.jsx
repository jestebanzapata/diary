import React from 'react'
import { ModalContainer, StyledDialog, StyledDialogHeader } from './Dialog.styles'

function Dialog(props) {
  const {title, content, show} = props;
  return (
    <ModalContainer show={show}><StyledDialog show={show}>
      <StyledDialogHeader>{title}</StyledDialogHeader>
      <div className='dialogContent'>
        {content}
      </div>
    </StyledDialog></ModalContainer>
  )
}

export default Dialog
