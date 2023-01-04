import Test from "./Test";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CookingSnail extends cc.Component {

    @property(cc.Node)
    cooker: cc.Node = null!;

    @property(cc.Prefab)
    snailsCook: cc.Node = null!;

    @property(cc.SpriteFrame)
    snailsRipe: cc.SpriteFrame = null!;
    
    public isCooking: boolean = false;

    public static instance: CookingSnail;

    onLoad() {
        CookingSnail.instance = this;
        this.getComponent(cc.Button).interactable = false;
    }

    cook() {
        this.isCooking = true;
        let snailsCook = cc.instantiate(this.snailsCook);
        snailsCook.parent = this.cooker;
        let childNode = this.cooker.children[0].children;
        for(var i=0; i<childNode.length; i++){
            let child = childNode[i];
            var seq = cc.repeatForever(
                cc.sequence(
                    cc.scaleTo(0.5, child.scale + 0.02),
                    cc.scaleTo(0.5, child.scale - 0.02)
                )
            );
            setTimeout(() => {
                child.getComponent(cc.Sprite).spriteFrame = this.snailsRipe;
                this.getComponent(cc.Button).interactable = true;
            }, 2000);
            child.runAction(seq);
        }
    }

    toDish() {
        for(var i=0; i<Test.instance.dishSnails.length; i++){
            if(!Test.instance.dishSnails[i].food){
                this.isCooking = false;
                this.getComponent(cc.Button).interactable = false;
                this.cooker.destroyAllChildren();
            }
        }
    }
}
