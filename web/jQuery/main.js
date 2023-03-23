$(document).ready(function () {

    // 开始写 jQuery 代码...
    //防止文档在完全加载（就绪）之前运行 jQuery 代码

});
$(function () {
    // 开始写 jQuery 代码...
    //防止文档在完全加载（就绪）之前运行 jQuery 代码
})


//ajax 用jquery实现
$(selector).load("url", "data", function (response, status, request) {
    this; // dom element
    
});
$.get("url", data,
    function (data, textStatus, jqXHR) {
        
    },
    "dataType"
);
$.post("url", data,
    function (data, textStatus, jqXHR) {
        
    },
    "dataType"
);
