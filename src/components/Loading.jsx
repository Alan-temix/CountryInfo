import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return(
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <h1 className="d-sm-inline">Loading </h1><Spinner animation="border" /> <Spinner animation="border" /> <Spinner animation="border" />
            </div>
        </div>
    )
}

export default Loading;