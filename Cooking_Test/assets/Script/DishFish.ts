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
        var foodOrder = Char.instance.character.children[0].getChildByName("food").children[0].getChildByName("Fish-AddSource").name;
        if(this.foodDish = foodOrder) {
            console.log("hello");
        }
    }
}
