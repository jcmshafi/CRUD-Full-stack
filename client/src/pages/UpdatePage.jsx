
import NavBar from '../components/NavBar';
import UpdateForm from './../components/UpdateForm';
import{useParams} from 'react-router'
const UpdatePage = () => {
    const params = useParams ()
    return (
        <div>
            <NavBar/>
            <UpdateForm id={params['id']}/>
        </div>
    );
};

export default UpdatePage;