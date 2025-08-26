import './TaskFilter.css'
export default function TaskFilter(props) 
{
    const dropDownHandler = (event) =>
    {
        props.filterTask(event.target.value);
    }
    return(
        <div className="task-filter">
            <label>Filter :   </label>
            <select className = "filter-select" value = {props.selected} onChange = {dropDownHandler}>
                <option value ="true">Completed</option>
                <option value ="false">Pending</option>
                <option value="all">All</option>
            </select>
        </div>
    )
}