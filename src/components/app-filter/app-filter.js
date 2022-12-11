import './app-filter.css';

const AppFilter = () => {
    return (
            <button className="btn-group">
                <button 
                    type="button"
                    className="btn btn-light">
                    Все сотрудники
                </button>
                <button 
                    type="button"
                    className="btn btn-outline-light">
                    На повышение
                </button>
                <button
                    type="button" 
                    className="btn btn-outline-light">
                    З/П больше 45000р.
                </button>
            </button>
    )
}

export default AppFilter;