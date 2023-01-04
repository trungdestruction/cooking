const {ccclass, property} = cc._decorator;

@ccclass
export default class Char extends cc.Component {

    @property(cc.Node)
    character: cc.Node = null!;

    @property([cc.Prefab])
    char: cc.Prefab[] = [];

    @property([cc.Prefab])
    ordering: cc.Prefab[] = [];

    private _frame: cc.Node = null!;

    private _order: cc.Node = null!;
    
    private _getAnimation: any = null!;

    public static instance: Char;

    onLoad () {
        Char.instance = this;
    }

    spawn() {
        let char = cc.instantiate(this.char[this.getRandom(0, 2)]);
        char.parent = this.character;

        this._getAnimation = char.children[0].getComponent(sp.Skeleton);
        this._frame = char.getChildByName("frame");
        this._order = char.getChildByName("food");

        this._frame.active = false;
        this._getAnimation.setAnimation(0, "move", true);
        char.position = cc.v3(-1200, 10, 0);
        cc.tween(char).to(2.5, {position: cc.v3(-430, 10, 0)})
        .call(() => {
            this._getAnimation.setAnimation(0, "idle", true);
            this._frame.active = true;
            this.order(this._order);
        }).start();
    }

    order(parent) {
        let order = cc.instantiate(this.ordering[this.getRandom(0, 2)]);
        console.log(order.children[0].name);
        if(order.childrenCount > 1)
        console.log(order.children[1].name);
        order.parent = parent;
    }

    getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
}
