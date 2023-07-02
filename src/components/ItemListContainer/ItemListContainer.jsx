import Card from "./Card/Card";
import "./ItemListContainer.css";

function ItemListContainer({ cardItems,  }) {
  return (
    <main>
      <Card
        cardItems={cardItems}
        onAdd={(addData) => console.log("Cantidad agregada", addData.counter, " Item to add:", addData.itemId)}
      
      />
    </main>
  );
}

export default ItemListContainer;
