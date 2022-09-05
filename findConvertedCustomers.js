import customer from "./services/customer.js";
import sales from "./services/sales.js";


function getConvertedCustomers() {
    /*
        You are given an array of objects customers in the format
        [{'customer_id': int, 'name': 'String'} ... ]

        And another array of sales in the format
        [{'sales_id': int, 'customer_id': int} ... ]


        Return a list of all customers who has at least one sale recorded for

     */

    let allSales = sales.getAllSales()
    let customers = customer.getAllCustomers()

    console.log(allSales)
    console.log(customers)

    // TODO find all customers who at least one sale recorded for

}


// getConvertedCustomers()