import Char from "./Char";
import CookingFish from "./CookingFish";
import CookingSnail from "./CookingSnail";
import DishFish from "./DishFish";
import DishSnails from "./DishSnails";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends cc.Component {
    
    //Snails-------------------------------------------------------------------------
    @property([CookingSnail])
    cookingSnail: CookingSnail[] = [];

    @property([DishSnails])
    dishSnails: DishSnails[] = [];

    @property([cc.Node])
    cookBtnSnails: [] = [];

    @property(cc.Node)
    cheeseBtnSnails: cc.Node = null!;

    @property(cc.Node)
    avocadoBtnSnails: cc.Node = null!;

    @property(cc.Node)
    toCharBtnSnails: cc.Node = null!;

    //Fish-------------------------------------------------------------------------
    @property([CookingFish])
    cookingFish: CookingFish[] = [];

    @property([DishFish])
    dishFish: DishFish[] = [];

    @property([cc.Node])
    cookBtnFish: cc.Node[] = [];

    @property(cc.Node)
    toCharBtnFish: cc.Node = null!;

    public static instance: Test;

    onLoad () {
        Test.instance = this;
    }

    start() {
        Char.instance.spawn();
    }

    //Snails-------------------------------------------------------------------------
    cookSnails() {
        for(var i=0; i<this.cookingSnail.length; i++){
            if(!this.cookingSnail[i].isCooking){
                this.cookingSnail[i].cook();
                break;
            }
        }
    }

    toDishSnails() {
        for(var i=0; i<this.dishSnails.length; i++){
            if(!this.dishSnails[i].food){
                this.dishSnails[i].toDish();
                break;
            }
        }
    }

    addCheese() {
        for(var i=0; i<this.dishSnails.length; i++){
            if(this.dishSnails[i].food){
                if(!this.dishSnails[i].spice){
                    this.dishSnails[i].addSpice(1);
                    this.dishSnails[i].name = "Snail-Cheese";
                    break;
                }
            }
        }
    }

    addAvo() {
        for(var i=0; i<this.dishSnails.length; i++){
            if(this.dishSnails[i].food){
                if(!this.dishSnails[i].spice){
                    this.dishSnails[i].addSpice(2);
                    this.dishSnails[i].name = "Snail-Avo";                
                    break;
                }
            }
        }
    }
    

    //Fish-------------------------------------------------------------------------
    cookFish() {
        for(var i=0; i<this.cookingFish.length; i++){
            if(!this.cookingFish[i].isCooking){
                this.cookingFish[i].cook();
                break;
            }
        }
    }

    toDishFish() {
        for(var i=0; i<this.dishFish.length; i++){
            if(!this.dishFish[i].food){
                this.dishFish[i].toDish();
                break;
            }
        }
    }

    //Char-------------------------------------------------------------------------
    toChar(){
        
    }
}
