import {
    NavLink,
    Outlet,
    useSearchParams,
  } from "react-router-dom";
import { getInvoices } from "../data";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import GenerateUrl from "./GenerateUrl"



export default function Invoice() {
    let params = useParams();
    let invoices = getInvoices();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    let [searchParams, setSearchParams] = useSearchParams();
    let CustomUrl = console.log("http://localhost:3000/invoices/RuniGud")
    console.log(params.invoiceId)
  return (
    <div style={{ display: "flex" }}>
      <GenerateUrl/>
      
        <h2>Invoice: {params.invoiceId}</h2>;
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
                <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices.filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"}
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/invoices/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}