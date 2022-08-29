import ItemCard from "./ItemCard";

function MList(props) {
    const renderItems = () => {
        return props.dataSource.map((item, i) => <ItemCard key={item.id} data={item} setMealList={props.setMealList}></ItemCard>)
    }
    return (
        <div className={props.className}>
            {renderItems()}
        </div>
    )
}

export default MList;
