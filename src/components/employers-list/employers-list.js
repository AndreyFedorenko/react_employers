import EmployersListItem from '../employers-list-item/employers-list-item';
import './emplouers-list.css';

const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem />
            <EmployersListItem />
            <EmployersListItem />
        </ul>
    )
}

export default EmployersList;