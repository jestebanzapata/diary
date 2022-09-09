import React from 'react'
import { ModalContainer, StyledDialog, StyledDialogHeader, StyledDialogContent } from './Dialog.styles'

function Dialog(props) {
  const {title, content, show} = props;
  return (
    show ? <ModalContainer><StyledDialog>
      <StyledDialogHeader>{title}</StyledDialogHeader>
      <StyledDialogContent>
        {content}
      </StyledDialogContent>
    </StyledDialog></ModalContainer>: null
  )
}

export default Dialog
