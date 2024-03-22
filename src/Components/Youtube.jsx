import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

const Youtube = () => {
  return (
    <div>
    <Container>
      <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
</div>
</Container>
    </div>
  )
}

export default Youtube
