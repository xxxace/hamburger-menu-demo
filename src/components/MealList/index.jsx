import React, {useState} from "react";
import Search from "./modules/Search";
import MList from "./modules/MList";
import CounterBar from "./modules/CounterBar";
import classes from './MealList.module.css';

const listData = [{
    id: 1,
    name: '麦辣鸡腿堡',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 15,
    img: 'static/img/hamburger.webp'
}, {
    id: 2,
    name: '板烧鸡腿堡',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 18,
    img: 'static/img/hamburger.webp'
}, {
    id: 3,
    name: '蟹黄堡',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 24,
    img: 'static/img/hamburger.webp'
}, {
    id: 4,
    name: '香辣鸡腿堡',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 18,
    img: 'static/img/hamburger.webp'
}, {
    id: 5,
    name: '鲜虾堡',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 16,
    img: 'static/img/hamburger.webp'
}, {
    id: 6,
    name: '安格斯牛肉堡',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 32,
    img: 'static/img/hamburger.webp'
}, {
    id: 7,
    name: '巨无霸',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 20,
    img: 'static/img/hamburger.webp'
}, {
    id: 8,
    name: '双层芝士汉堡',
    desc: '百分百纯牛肉配搭爽脆酸黄瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 23,
    img: 'static/img/hamburger.webp'
}]

function MealList() {

    const [mealList, setMealList] = useState(listData);

    const onFilter = (keyword) => {
        if (!keyword) {
            setMealList(listData);
        } else {
            const result = listData.filter(l => l.name.indexOf(keyword) !== -1);
            setMealList(result);
        }
    };

    return (
        <div className={classes.MList}>
            <Search onFilter={onFilter}></Search>
            <MList className={classes.list} dataSource={mealList} setMealList={setMealList}></MList>
            <CounterBar className={classes.counterBar}></CounterBar>
        </div>
    )
}

export default MealList;
