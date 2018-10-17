export class Product {
  private id: string;
  public name: string;
  public price: number;

  public weightInGramm: number;
  public categories: string[];

  constructor(
      options: {
        id?: string,
        name?: string,
        price?: number,
        weightInGramm?: number,
        categories?: string[],
     } = {}
  ) {
    this.name = options.name || '';
    this.id = options.id || null;
    this.price = options.price || 0;
    this.weightInGramm = options.weightInGramm || 0;
    this.categories = options.categories || [];
  }

}
