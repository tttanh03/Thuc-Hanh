export interface IFood {
	id: String;
  name: String;
  price?: Number;
  cover: String;
	categories: [{
  	id: String;
    name: String;
  }]
}