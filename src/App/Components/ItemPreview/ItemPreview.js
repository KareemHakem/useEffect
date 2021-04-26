import React from "react";

export default function ItemPreview({ item }) {
  return (
    <div style={{margin: '0px 30px', width: '24%'}}>
      <img src={item.imageUrl} alt="images" className="item_img"></img>
      <div className="item_container">
        <p>{item.name}</p>
        <p>$ {item.price}</p>
      </div>
    </div>
  );
}
