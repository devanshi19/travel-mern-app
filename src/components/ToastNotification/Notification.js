import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (type, message) => {
    switch (type) {
        case 'info':
            toast.info(message);
            break;
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'warn':
            toast.warn(message);
            break;
        default:
            toast(message);
    }
    return

}

export default showToast;