import { Alert } from 'react-bootstrap';
// Components
import Header from '../components/Header';

const NotFound = () => {
    return(
    <div>
        <Header />
        <Alert variant="danger">
        <h2>404 Not Found</h2>
        <p>Lo sentimos, el contenido solicitado no se encontró.</p>
        </Alert>
    </div>
    );
}

export default NotFound;