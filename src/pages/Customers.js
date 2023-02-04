import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { baseUrl } from "../shared";

export default function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    fetch(baseUrl + "api/customers/")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);

  function newCustomer(name, industry) {
    const data = { name: name, industry: industry };
    const url = baseUrl + "api/customers/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res)=>{
        if(!res.ok){
          throw new Error('Smth went wrong')
        }
        return res.json()
      })
      .then((data) => {

      }).catch((e) => {
        console.log(e)
      });
  }

  return (
    <>
      <h1>Here are our customers:</h1>
      <ul>
        {customers
          ? customers.map((customer) => {
              return (
                <li key={customer.id}>
                  <Link to={"/customers/" + customer.id}>{customer.name}</Link>
                </li>
              );
            })
          : null}
      </ul>
      <AddCustomer newCustomer={newCustomer} />
    </>
  );
}
