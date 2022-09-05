
function getAllCustomers() {
    return [{'customer_id': '100', 'name': 'Michael'},
            {'customer_id': '88', 'name': 'Noah'},
            {'customer_id': '4', 'name': 'James'},
            {'customer_id': '90', 'name': 'Carla'},
            {'customer_id': '8', 'name': 'Noah'},
            {'customer_id': '90', 'name': 'John'}]
}

async function getAllCustomersAsync() {

        return new Promise(resolve => {
    setTimeout(() => {
      resolve([{'customer_id': 100, 'name': 'Michael'},
            {'customer_id': 88, 'name': 'Noah'},
            {'customer_id': 4, 'name': 'James'},
            {'customer_id': 90, 'name': 'Carla'},
            {'customer_id': 8, 'name': 'Noah'}]);
    }, 2000);
  });
}



export default {getAllCustomers, getAllCustomersAsync}