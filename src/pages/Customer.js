import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          // navigate('/404')
          setNotFound(true);
        }
        return res.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);

  return (
    <>
      {notFound ? <NotFound /> : null}
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <button
        onClick={(e) => {
          const url = baseUrl + "api/customers/" + id;
          fetch(url, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error("Smth went wrong");
              }
              navigate("/customers");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Delete
      </button>
      <br />
      <Link to="/customers">Go Back</Link>
    </>
  );
}
