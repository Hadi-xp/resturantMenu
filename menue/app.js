class Order{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}
class Factor{
    constructor(order){
        this.order = [order];
        this.total = [order.price];
    }

    showOrder(){
        this.order.forEach((order) => {
            console.log(`food:${order.name} price:${order.price}`);
        });
    }
    add(name,price){
        this.order.push(new Order(name,price));
        this.total.push(price);
    }
    getTotal(){
        return this.total.reduce((a,b) => a + b);
    }

    deleteOrder(index){
        this.order.splice(index-1,1);
        this.total.splice(index-1,1);
    }
}




