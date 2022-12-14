import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {

    const data = [
        {name: 'Алексей Семизаров', salary: 38500, increase: false, id: 3},
        {name: 'Константин Булашов', salary: 43800, increase: false, id: 2},
        {name: 'Андрей Федоренко', salary: 59600, increase: true, id: 1}
    ];

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