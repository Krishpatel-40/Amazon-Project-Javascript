export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrders(order){
    orders.unshift(order);
    saveToLocalStorage();
}

function saveToLocalStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}


export function getOrderById(orderId){
    return orders.find((order) => order.id === orderId);
}