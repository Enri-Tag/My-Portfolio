import React from 'react'

function Modal() {
    return (
        <div>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}>
                <div className={classes.paper}>
                    <h2 id="server-modal-title">Site under maintenance</h2>
                     <p id="server-modal-description">The site is not currently visible. We apologize for the inconvenience</p>
                </div>
            </Modal>
        </div>
    )
}

export default Modal
