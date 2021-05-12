//封装获取DOM元素的函数
function byId(id){
    return typeof(id) === "string"?document.getElementById(id):id;
}

//给获取到的DOM元素定义变量
var pics = byId("banner").getElementsbyTagName("div"),
    tips = byId("tipPoint").getElementsbyTagName("span"),
    but_left = byId("pic_button_left"),
    but_right = byId("pic_button_right");
//定义图片索引、图片数量
var index = 0,
    size = pics.length;

//定义各浏览器兼容的事件
 function eventHandler(element, type, handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,true);
    }else if(element.attachEvent){
        element.attachEvent("on" + type,handler,true);
    }else{
        element["on" + type] = handler;
    }
}

//为图片左右按钮添加点击事件
//上一张
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
//下一张
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

