type ModalWrapperProps = {
  children: React.ReactNode;
  modalId: string;
}

export const ModalWrapper = ({ children, modalId }: ModalWrapperProps) => {
  return (
    <div className="modal fade" id={modalId} tabIndex={-1} aria-labelledby={`${modalId}-label`} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  </div>
  )
}