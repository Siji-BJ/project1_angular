import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
 private products: Array <Products> = [
    {
      // id: 1,
      name: 'Puma Hat',
      image: 'https://rukminim1.flixcart.com/image/800/960/cap/6/f/f/1-1-84344301-puma-free-original-imae63yzfk9bumvf.jpeg?q=50',
      description: ' Puma hat in black color ',
      imageAlt: 'unable to load',
      isAvailable: true,
      price: 5
    },
    {
     // id: 2,
      name: '1164-BR Brown Day and Date Unique New Analog Watch - For Men',
      image: 'https://rukminim1.flixcart.com/image/800/960/jr6o13k0/watch/w/q/z/1164-br-fogg-original-imaf9stmmgg2eq2f.jpeg?q=50',
      description: ' 1164-BR Brown Day and Date Unique New Analog Watch - For Men with gray color ',
      imageAlt: 'unable to load',
      isAvailable: false,
      price: 15
    },
    {
      // id: 3,
      name: 'Combo(BR)-1077-349 Sneakers For Men  (Red)',
      // tslint:disable-next-line: max-line-length
      image: 'https://rukminim1.flixcart.com/image/800/960/jnt7low0/shoe/b/7/u/combo-er-1077-349-10-earton-multicolor-original-imafaeq687rqwevd.jpeg?q=50',
      description: 'Combo(BR)-1077-349 Sneakers For Men  (Red)',
      imageAlt: 'unable to load',
      isAvailable: true,
      price: 10
    },
    {
     // id: 4,
      name: 'Women Printed A-line Kurta  (Black)',
      // tslint:disable-next-line: max-line-length
      image: 'https://rukminim1.flixcart.com/image/800/960/jyyqc280/kurta/d/w/j/xl-8461759-taavi-original-imafj2mfy6hjyzj9.jpeg?q=50',
      description: 'Women Printed A-line Kurta  (Black)',
      imageAlt: 'unable to load',
      isAvailable: true,
      price: 5
    },

    {
      // id: 5,
      name: 'Bharat Lifestyle Lexus Fabric 3 + 1 + 1 Dark Grey Sofa Set',
      // tslint:disable-next-line: max-line-length
      image: 'https://rukminim1.flixcart.com/image/416/416/jit64cw0/sofa-set/y/a/b/grey-jute-lexusdrgr311-3-1-1-bharat-lifestyle-dark-grey-original-imaf6gz2hjrbstgs.jpeg?q=70',
      description: ' Bharat Lifestyle Lexus Fabric 3 + 1 + 1 Dark Grey Sofa Set ',
      imageAlt: 'unable to load',
      isAvailable: false,
      price: 5
    },
    {
      // id: 6,
      name: 'Barbie 6 Pin Eflute MR Bowling',
      // tslint:disable-next-line: max-line-length
      image: 'https://rukminim1.flixcart.com/image/416/416/jiqb8nk0/toy-sport/y/e/h/mbe-sgl100-bowling-barbie-original-imaf6fkfqdzfvdfc.jpeg?q=70',
      description: ' Barbie 6 Pin Eflute MR Bowling ',
      imageAlt: 'unable to load',
      isAvailable: true,
      price: 15
    },
    {
      // id: 7,
      name: 'CELWARK Metal Bike Keyring For Royal Bikes & Cars Key Chain',
      // tslint:disable-next-line: max-line-length
      image: 'https://rukminim1.flixcart.com/image/416/416/jylvde80/key-chain/d/c/2/metal-bike-keyring-for-royal-bikes-cars-celwark-original-imafgsxkc5gat6mg.jpeg?q=70',
      description: 'CELWARK Metal Bike Keyring For Royal Bikes & Cars Key Chain',
      imageAlt: 'unable to load',
      isAvailable: true,
      price: 10
    },
    {
      // id: 8,
      name: 'Noise Shots X-Buds Truly Wireless Bluetooth Headset with Mic  (Teal Green, In the Ear)',
      // tslint:disable-next-line: max-line-length
      image: 'https://rukminim1.flixcart.com/image/416/416/k0e66q80/headphone/n/b/q/noise-shots-x-buds-truly-wireless-original-imafk5fwrfvzz7ux.jpeg?q=70',
      description: 'Noise Shots X-Buds Truly Wireless Bluetooth Headset with Mic',
      imageAlt: 'unable to load',
      isAvailable: false,
      price: 5
    },
    {      name: 'SG Musical Best Quality Tabla Set Tabla',
      // tslint:disable-next-line: max-line-length
      image: 'https://rukminim1.flixcart.com/image/416/416/jhjg13k0/tabla/r/h/n/best-quality-tabla-set-sg-musical-original-imaf5jdw9gdbgesw.jpeg?q=70',
      description: 'SG Musical Best Quality Tabla Set Tabla  (Dayan - 14, Bayan - 22)',
      imageAlt: 'unable to load',
      isAvailable: false,
      price: 5
    },
  ];
  getProducts() {
    return this.products;
  }
  addProducts(newProduct: Products) {
         console.log(newProduct);
         this.products.push(newProduct);
  }
}
