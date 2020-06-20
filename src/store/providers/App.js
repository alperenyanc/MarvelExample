
import Store from "../Store";
import { action, observable } from "mobx"
 

export default class AppStore extends Store {
  @observable limit = 10;
  @observable data = [];
  @action setLimit = (count)=>{
    this.limit = this.limit+count
  }
  @action setData =(data)=>{
    this.data = data;
  }
   
   
  

   
  async setup() {
    // await this.hydrate("app", this);
    
  }
}