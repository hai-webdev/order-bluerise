// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

var marker,
  map = new AMap.Map("container", {
    resizeEnable: true,
    center: [121.234476, 31.037134],
    zoom: 1,
    lang: "en",
  });

// 实例化点标记
addMarker()

function addMarker() {
    marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: [121.234476, 31.037134],
        offset: new AMap.Pixel(-13, -30)
    });
    marker.setMap(map);
}

AMap.plugin([
    'AMap.ToolBar',
], function(){
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar({
        // 简易缩放模式，默认为 false
        liteStyle: true
    }));
});