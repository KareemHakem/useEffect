import React from "react";
import Item from "../../Components/Item/Item";
import items from "../../Data/items";

export default function ShopPage() {
  return (
    <div>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}
