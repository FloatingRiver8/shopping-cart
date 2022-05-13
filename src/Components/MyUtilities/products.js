const products =  [{
        id: 1 ,
        name: 'Albahaca',
        price: '300',
        stock: 5,
        images: "https://www.clipartmax.com/png/small/197-1971578_maceta-de-la-planta-de-cono-jard%C3%ADn-flower-plants-in-pot.png"

    },
{
    id: 2,
    name: 'Palo de agua',
    price: '2000',
    stock: '3',
    images: "https://www.clipartmax.com/png/small/289-2892530_planta-de-maceta-de-bonsai-pot-plant-png.png" 
}

]

const oneProduct = {
    id: 1 ,
    name: 'Albahaca',
    price: '300',
    stock: 5,
    images: "https://www.clipartmax.com/png/small/197-1971578_maceta-de-la-planta-de-cono-jard%C3%ADn-flower-plants-in-pot.png"

};






export const getProduct = () => {
    return new Promise((resolve, reject) =>{
     setTimeout(() => {
         resolve(oneProduct);
     }, 2000);
    });
 };



export default products;