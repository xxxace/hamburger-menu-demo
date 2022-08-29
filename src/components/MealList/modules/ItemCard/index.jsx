import classes from './ItemCard.module.css';
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addMerchandise, removeMerchandise} from "../../../../store/modules/shopping-cart";

function ItemCard(props) {
    const {data, setMealList} = props;
    const dispatch = useDispatch();

    const add = (merchandise) => {
        dispatch(addMerchandise(merchandise));
        if (!merchandise.amount) merchandise.amount = 0;
        merchandise.amount += 1;
        setMealList(state => [...state]);
    };

    const remove = (merchandise) => {
        dispatch(removeMerchandise(merchandise.id));
        if (merchandise.amount > 0) merchandise.amount -= 1;
        setMealList(state => [...state]);
    };

    return (
        <div className={classes.itemcard}>
            <img className={classes.cover} src={data.img} alt={data.name}/>
            <div className={classes.body}>
                <h2 className={classes.name}>{data.name}</h2>
                <p className={classes.desc}>{data.desc}</p>
                <div className={classes.counterWrap}>
                    <span className={classes.price}><small style={{fontSize: '24rem'}}>￥</small>{data.price}</span>
                    <div className={classes.counter}>
                        {data.amount ? (<>
                            <button className={classes.minus} onClick={() => remove(data)}><FontAwesomeIcon
                                icon={faMinus}/></button>
                            <span>{data.amount}</span>
                        </>) : ''}
                        <button className={classes.plus} onClick={() => add(data)}><FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;
