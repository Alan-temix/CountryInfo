import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return(
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <Spinner animation="border" />
            </div>
        </div>
    )
}

export default Loading;