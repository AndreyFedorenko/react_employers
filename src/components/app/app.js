import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {

    const data = [
        {name: 'Алексей Семизаров', salary: 38500, increase: false},
        {name: 'Константин Булашов', salary: 43800, increase: false},
        {name: 'Андрей Федоренко', salary: 59600, increase: true}
    ]

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>

    );
}

export default App;