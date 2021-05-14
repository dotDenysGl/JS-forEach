const products = [
    {name:'Iphone',price:200},
    {name:'Motorola',price:70},
    {name:'Samsung',price:150},
    {name:'Sony',price:98},
    {name:'Windows pone',price:10}
 ],

price = document.querySelector(".price"),
name = document.querySelector(".name");

let productInfo = '';  // Важно! Пустая строка не позволит элементу отобразится на странице!

products.forEach((item) => {

    const onSale = () => {
        if(item.price < 100){
            return `<span class='onSale'>On sale !!</span>`;
        } else if (item.price > 100) {
           return ''
        }
    }

 productInfo += `
  <div class="product">
     <h1>${item.name}</h1>
     <strong>Price: $ 
       <span class="price">${item.price}</span>
       ${onSale()}
      </strong>
    
   
 </div>`
} );

document.body.insertAdjacentHTML("afterbegin", productInfo);