export default class CartProduct {
  public quantity: number = 1;
  constructor(
    public id: string,
    public code: string,
    public name: string,
    public title: string,
    public description: string,
    public price: number,
    public category: string,
    public image: string,
    public createdAt: Date,
    public updatedAt: Date,
    public discount?: number
  ) {
    this.createdAt = new Date();
  }

  public updateQuantity(): void {
    this.quantity += 1;
    if (this.quantity > 10) this.quantity = 10;
  }
}


