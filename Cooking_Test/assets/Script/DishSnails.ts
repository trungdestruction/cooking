import CookingSnail from "./CookingSnail";
import Test from "./Test";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DishSnails extends cc.Component {

    @property(cc.Prefab)
    snailsDone: cc.Node = null!;

    @property(cc.SpriteFrame)
    snailsCheese: cc.SpriteFrame = null!;

    @property(cc.SpriteFrame)
    snailsAvo: cc.SpriteFrame = null!;

    @property(cc.Node)
    dish: cc.Node = null!;

    public food: boolean = false;
    public spice: boolean = false;
    private foodSpawn:cc.Node = null;

    public static instance: DishSnails;
    
    onLoad() {
        DishSnails.instance = this;
    }

    toDish() {
        this.food = true;
        let snailsDone = cc.instantiate(this.snailsDone);
        this.foodSpawn = snailsDone;
        snailsDone.parent = this.dish;
        cc.tween(this.dish.children[0]).to(0.2, {scale: 1.1})
        .call(() => {
            cc.tween(this.dish.children[0]).to(0.2, {scale: 1}).start();
        }).start();
    }

    addSpice(a) {
        this.spice = true;
        let array = this.foodSpawn.children;
        array.forEach(element => {
            if(a === 1){
                element.getComponent(cc.Sprite).spriteFrame = this.snailsCheese;
            }
            if(a === 2){
                element.getComponent(cc.Sprite).spriteFrame = this.snailsAvo;
            }
        });
    }
}
