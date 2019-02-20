export interface IFood {
	id: String;
  name: String;
  price?: number;
  cover: String;
	categories: [{
  	id: String;
    name: String;
  }]
  orderNumber? : number;
}