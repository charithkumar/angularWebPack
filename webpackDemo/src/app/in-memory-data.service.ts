import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
 { productId: 101, productName: 'Washing Machine', price:12000 ,image:('../../assets/img/washingMachine.jpg') },
  { productId: 102, productName: 'Air Purifier', price:1200,image:('../../assets/img/airPurifier.jpg') },
{ productId: 103, productName: 'Vaccum Cleaner', price:4200,image:('../../assets/img/vaccumCleaner.jpg') },
{ productId: 104, productName: 'Refrigerator', price:22000,image:('../../assets/img/refrigerator.jpg') },
{ productId: 105, productName: 'Laptop', price:60000,image:('../../assets/img/laptop.jpg') }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.productId)) + 1 : 11;
  }
}

