function fun() {
    //给获取到的DOM元素定义变量
    var pics = byId("banner").getElementsByTagName("div"),
    tips = byId("tipPoint").getElementsByTagName("span"),
    but_left = byId("pic_button_left"),
    but_right = byId("pic_button_right");
    //定义图片索引、图片数量
    var index = 0,
    size = pics.length;

    //封装获取DOM元素的函数
    const byId = function (id){
        return typeof(id) === "string"?document.getElementById(id):id;
    }


    //封装各浏览器兼容的事件方法
    const eventHandler = (element, type, handler)=>{
        if(element.addEventListener){
            element.addEventListener(type,handler,true);
        }else if(element.attachEvent){
            element.attachEvent("on" + type,handler,true);
        }else{
            element["on" + type] = handler;
        }
    }

    //上一张图片
    eventHandler(but_left, "click", function(){
        index --;
        if(index <= 0){
            index = size-1;
        }
        for(var i = 0; i < size; i++){
            pics[i].style.display = "none";
            tips[i].className = "";
        }
        pics[index].display = "block";
        tips[i].display = "block";
    })
    //下一张图片
    eventHandler(but_right, "click", function(){
        index ++;
        if(index >= size){
            index = 0;
        }
        for(var i = 0; i < size; i++){
            pics[i].style.display = "none";
            tips[i].className = "";
        }
        pics[index].display = "block";
        tips[i].display = "block";
    })
    return {
        eventHandler, byId
    }
}


export default{
    fun
}
