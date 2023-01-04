import Char from "./Char";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DishFish extends cc.Component {

    @property(cc.Node)
    dish: cc.Node = null!;

    @property(cc.Prefab)
    fishSpice: cc.Prefab = null!;

    public food: boolean = false;

    public foodDish: string = null!;
    
    public foodOrder: string = null!;

    toDish() {
        this.food = true;
        let fishDone = cc.instantiate(this.fishSpice);
        fishDone.parent = this.dish;
        this.foodDish = fishDone.name;
        cc.tween(fishDone).to(0.1, {scaleX: 1.1, scaleY: 0.93})
        .call(() => {
            cc.tween(fishDone).to(0.1, {scaleX: 1.131, scaleY: 0.968}).start();
        }).start();
    }

    toChar() {
        console.log(Char.instance.character.children[0].getChildByName("food").children[0].getChildByName("Fish-AddSauce"));
        console.log(this.foodDish);
        console.log(this.foodOrder);
        if(this.foodDish = this.foodOrder) {
            console.log("hello");
        }
    }
}
