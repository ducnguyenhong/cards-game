import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'antd/dist/antd.css'
import './index.css'

const Layout = props => {
  const { title } = props
  const [visible, setVisible] = useState(true)
  const handlePlayAgain = () => {
      window.location.reload()
  }

  const handleOk = () => {

  }

  const handleCancel = () => {}
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, zIndex: 10 }}>
      <Modal show={true} centered>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="title-play-again">
            {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Button className="btn btn-success btn-play-again" onClick={handlePlayAgain}>Chơi lại</Button>
      </Modal.Body>
        </Modal.Dialog>
        </Modal>
    </div>
  )
}

export default Layout