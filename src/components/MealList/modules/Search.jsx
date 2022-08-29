import classes from './Search.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function Search(props) {
    const {onFilter} = props;

    const handleInput = (e)=>{
        onFilter(e.target.value.trim());
    }
    return (
        <div className={classes.search}>
            <div className={classes.innerText}>
                <FontAwesomeIcon className={classes.icon} icon={faSearch}/>
                <input type="text" placeholder="请输入关键字查询" onInput={handleInput}/>
            </div>
        </div>
    )
}

export default Search;
