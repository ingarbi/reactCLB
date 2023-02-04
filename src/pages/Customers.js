import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      <h1>Here are our customers</h1>
      <ul>
        {customers
          ? customers.map((customer) => {
              return (
                <li key={customer.id}>
                    <Link to={"/customers/" + customer.id}>
                      {customer.name}
                    </Link>
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
}
