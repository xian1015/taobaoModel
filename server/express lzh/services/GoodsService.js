//引入模块
let GoodsModel = require("../model/GoodsModel");

class GoodsService {
  constructor() {}
  getGoods(callback) {
    let goodsModel = new GoodsModel();
  
    //获得数据
    goodsModel.getAllGoods(function(goods) {
      //获得每个课程
            callback(goods); 
    });
  }
}
module.exports = GoodsService;
