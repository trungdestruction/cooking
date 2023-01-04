import Test from "./Test";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CookingFish extends cc.Component {

    @property(cc.Node)
    pan: cc.Node = null!;

    @property(cc.Prefab)
    oil: cc.Prefab = null!;

    @property(cc.Prefab)
    fishCook: cc.Node = null!;

    @property(cc.SpriteFrame)
    fishRipe: cc.SpriteFrame = null!;

    public isCooking: boolean = false;

    public static instance: CookingFish;

    onLoad() {
        CookingFish.instance = this;
        this.getComponent(cc.Button).interactable = false;
    }

    cook() {
        this.isCooking = true;
        let oil = cc.instantiate(this.oil);
        oil.parent = this.pan;
        let fishCook = cc.instantiate(this.fishCook);
        fishCook.parent = this.pan;
        
        let child = this.pan.getChildByName("Fish - Cook");
            var seq = cc.repeatForever(
                cc.sequence(
                    cc.scaleTo(0.5, child.scale + 0.02),
                    cc.scaleTo(0.5, child.scale - 0.02)
                )
            );
            setTimeout(() => {
                child.getComponent(cc.Sprite).spriteFrame = this.fishRipe;
                this.getComponent(cc.Button).interactable = true;
            }, 2000);
            child.runAction(seq);
    }

    toDish() {
        for(var i=0; i<Test.instance.dishFish.length; i++){
            if(!Test.instance.dishFish[i].food){
                this.isCooking = false;
                this.getComponent(cc.Button).interactable = false;
                this.pan.destroyAllChildren();
                return;
            }
        }
    }
}
