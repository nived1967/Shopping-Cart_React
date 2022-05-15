import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 100000,
      name: "Samsung Galaxy S10",
      quantity: 0,
    },
    {
      price: 50000,
      name: "Redmi Noe 10 Pro",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);
  let [totalItem,settotalItem]=useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    let newTotalItem=totalItem;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    newTotalItem++;
    settotalAmount(newTotalAmount);
    settotalItem(newTotalItem);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    let newTotalItem=totalItem;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
      newTotalItem--;
    }
    settotalAmount(newTotalAmount);
    settotalItem(newTotalItem);
    setProductList(newProductList);
  };

  const resetq = () => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    let newTotalItem=totalItem;

    newProductList.map((products) => {
      products.quantity = 0;
    });
    newTotalAmount = 0;
    newTotalItem=0;

    settotalAmount(newTotalAmount);
    settotalItem(newTotalItem);
    setProductList(newProductList);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    let newTotalItem=totalItem;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newTotalItem-=newProductList[index].quantity;
    newProductList.splice(index, 1);

    settotalAmount(newTotalAmount);
    settotalItem(newTotalItem);
    setProductList(newProductList);
  };

  const addItem =(name,price) => {
    let newProductList = [...productList];
    newProductList.push(
      {
        price:price,
        name:name,
        quantity:0
      }
    )
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar totalItem={totalItem}/>
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetq={resetq} />
    </>
  );
}

export default App;
