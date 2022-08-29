import classes from './CounterBar.module.css';
import {selectTotal} from '../../../store/modules/shopping-cart';
import {useSelector} from "react-redux";

function CounterBar(props) {
    const total = useSelector(selectTotal);
    const list = useSelector(state => state.shoppingCart.list);
    const showShoppingCart = () => console.table(list);

    return (
        <div className={`${classes.counterBarWrap} ${props.className}`}>
            <div className={classes.paperbag}>{total.amount ?
                <span className={classes.badge}>{total.amount}</span> : ''}</div>
            <div className={classes.counterBarWrapBody}>
                {
                    total.amount ? <span className={classes.price}>￥ <span>{total.price}</span></span> : '未选购商品'
                }
            </div>
            <button className={classes.handleBtn} onClick={showShoppingCart}>去支付</button>
        </div>
    )
}

export default CounterBar;

