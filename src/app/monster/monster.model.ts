export class Monster {
  public name: string;
  public description: string;
  public favorite: boolean;

  constructor(name: string, desc: string, favorite: boolean) {
    this.name = name;
    this.description = desc;
    this.favorite = favorite;
  }
}
