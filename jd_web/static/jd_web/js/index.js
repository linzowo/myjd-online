// 顶部导航栏==========================
$(function() {/* // 头部导航栏==fl===省份选择=== */
  function setSelected(index) {
    //设置省份下拉类别中的某个对象为选中状态===排他功能
    $(".ui-areamini-content-wrap a").removeClass("selected");
    $(".ui-areamini-content-wrap a:eq(" + index + ")").addClass("selected");
    // 修改展示区的内容为当前所选择的内容
    $(".ui-areamini-text>span").text(
      $(".ui-areamini-content-wrap a:eq(" + index + ")").text()
    );
  }

  (function() {/* // 动态生成省份列表================ */
    var provinceList = [
      "北京",
      "上海",
      "天津",
      "重庆",
      "河北",
      "山西",
      "河南",
      "辽宁",
      "吉林",
      "黑龙江",
      "内蒙古",
      "江苏",
      "山东",
      "安徽",
      "浙江",
      "福建",
      "湖北",
      "湖南",
      "广东",
      "广西",
      "江西",
      "四川",
      "海南",
      "贵州",
      "云南",
      "西藏",
      "陕西",
      "甘肃",
      "青海",
      "宁夏",
      "新疆",
      "港澳",
      "台湾",
      "钓鱼岛",
      "海外"
    ];
    var len = provinceList.length;
    var fatherObj = $(".ui-areamini-content-wrap");
    for (var i = 0; i < len; i++) {
      $(
        "<div><a href='javascript:void(0);'>" + provinceList[i] + "</a></div>"
      ).appendTo(fatherObj);
    }
    // 将第一个子元素设置为选中状态
    $(".ui-areamini-content-wrap>div")
      .eq(0)
      .children()
      .addClass("selected");
  })();

  // 注册鼠标进入事件=================
  // 当鼠标进入省份区域时显示省份选择下拉列表
  dropDownLayer(".shortcut .fl");

  // 注册鼠标点击事件===================
  $(".shortcut .fl a").click(function() {
    //用户点击了某个省份
    /* 
            // 重新选择地区数据并重新加载网页====》重定向至对应地区的主业
            // 如果用户点击的是【中国大陆省份】===》为当前区域的添加selected样式，并取消其他区域的selected样式===》页面重新加载
            // 如果用户点击的是【港澳台地区】选项===》改变页面的字体为 zh-hk ，
                    并刷新页面为新的地区内容===》修改a标签内的内容为【中文主站】===》为港澳地区添加selected样式
            // 如果用户点击的是【国外区域】===》直接跳转至国外版主页，本区域不做操作 
            */

    if (/^[\u4E00-\u9FA5]{2,4}$/.test($(this).text())) {
      if (
        $(this)
          .parent()
          .siblings("p")
          .text() == "地区专享版本"
      ) {
        //用户选择港澳地区版主页
        // 重定向到港澳版主页
        // 修改内容为中文主站
        if ($(this).text() == "中文主站") {
          //如果已经跳转至港澳地区
          // 其实这里应该返回大陆版主页，但是现在只有一个主页所以这里，使用一些演示效果代替实际的跳转动作
          $(".dropdown-layer>div:eq(1) a").text("中國港澳"); //改变该链接名称，及连接地址（暂时不改变）
          //返回到默认省份
          setSelected(21);
        } else {
          // 如果还没跳转，就跳转到该网页===》跳转之后的页面中再选择其他地区也还是会继续显示繁体字版本
          $(".dropdown-layer>div:eq(1) a").text("中文主站");
          // 将标签转换到对应的位置==港澳标签
          setSelected(31);
        }
      } else {
        //用户没有选择港澳版本
        // 修改数据包为所选择的区域的数据===》重新加载页面
        // 下拉列表修改为当前所选的区域
        var index = $(this)
          .parent()
          .index();
        setSelected(index);
      } //end if
    } else {
      //国外地区
      alert("跳转到：" + $(this).text() + "版本主页");
    } //end if
  });
});

$(function() {/* // 头部导航栏===fr===各种按钮 */
  //我的京东========
  setDropDownLayer("#ttbar-myjd");
  //企业采购===========
  setDropDownLayer(".shortcut_btn_company");
  //客户服务=========
  ((function() {// 动态生成按钮列表
    var list = [
      [
        "客户",
        "帮助中心",
        "售后服务",
        "在线客服",
        "意见建议",
        "电话客服",
        "客服邮箱",
        "金融咨询",
        "全球售客服"
      ],
      [
        "商户",
        "合作招商",
        "成长中心",
        "商家后台",
        "京麦工作台",
        "商家帮助",
        "规则平台"
      ]
    ];
    var ulObj = $("#ttbar-serv>.dd>ul");
    for (var i = 0; i < 2; i++) {
      var itemList = list[i];
      for (var j = 0; j < itemList.length; j++) {
        if (i == 0 && j == 0) {
          $("<li  class = 'item-client'>" + itemList[j] + "</li>").appendTo(
            ulObj
          );
        } else if (i == 1 && j == 0) {
          $("<li  class = 'item-business'>" + itemList[j] + "</li>").appendTo(
            ulObj
          );
        } else {
          $(
            "<li><a href='javascript:void(0);'>" + itemList[j] + "</a></li>"
          ).appendTo(ulObj);
        }
      }
    }
  })());
  // 注册下拉列表事件
  setDropDownLayer("#ttbar-serv");
  // 网站导航===================
  ((function(){// 动态生成列表
    var list = [
[
"特色主题",
"京东试用",
"京东金融",
"全球售国际站",
"京东会员",
"京东预售",
"买什么",
"俄语站",
"装机大师",
"0元评测",
"港澳售",
"优惠券",
"秒杀",
"闪购",
"印尼站",
"京东金融科技",
"陪伴计划",
"出海招商",
"拍拍二手"
],
[
"行业频道",
"手机",
"智能数码",
"玩3C",
"电脑办公",
"家用电器",
"京鱼座智能",
"服装城",
"京东生鲜",
"家装城",
"母婴食品",
"农资频道",
"整车",
"图书",
"劳动防护"
],
[
"生活服务",
"京东众筹",
"白条",
"京东金融App",
"京东小金库",
"理财",
"话费",
"水电煤",
"彩票",
"旅行",
"机票酒店",
"电影票",
"京东到家",
"游戏",
"拍拍回收"
],
[
"更多精选",
"合作招商",
"京东通信",
"京东E卡",
"企业采购",
"服务市场",
"办公生活馆",
"乡村招募",
"校园加盟",
"京东社区",
"游戏社区",
"知识产权维权"
]
];
    for(var i=0;i<list.length;i++){
      var dlObj = $("<dl class='fore"+(i+1)+"'></dl>").appendTo("#ttbar-navs>.dd");
      var itemList = list[i];
      for(var j=0;j<itemList.length;j++){
        if(j==0){
        $("<dt>"+itemList[j]+"</dt>").appendTo(dlObj);
        }else{
          $("<dd><a href='javascript:void(0);'>"+itemList[j]+"</a></dd>").appendTo(dlObj);
        }//end if
      }// end for
    }// end for
  })());
  // 生成下拉列表
  setDropDownLayer("#ttbar-navs");
  // 手机京东========================
  // 显示下拉菜单
  $("#J_mobile")
    .children()
    .mouseenter(function() {
      $("#J_mobile>.dropdown-layer").show();
    })
    .mouseleave(function() {
      $("#J_mobile>.dropdown-layer").hide();
    });
    // 注册连接跳转
    setLink("#J_mobile");
});

// main================================================
$(function() {// 左侧侧边导航栏=======
  // 侧边导航栏内容列表
  var navItemList = [
    ["家用电器"],
    ["手机", "运营商", "数码"],
    ["电脑", "办公"],
    ["家居", "家具", "家装", "厨具"],
    ["男装", "女装", "童装", "内衣"],
    ["美妆", "个护清洁", "宠物"],
    ["女鞋", "箱包", "钟表", "珠宝"],
    ["男鞋", "运动", "户外"],
    ["房产", "汽车", "汽车用品"],
    ["母婴", "玩具乐器"],
    ["食品", "酒类", "生鲜", "特产"],
    ["艺术", "礼品鲜花", "农资绿植"],
    ["医药保健", "计生情趣"],
    ["图书", "文娱", "电子书"],
    ["机票", "酒店", "旅游", "生活"],
    ["理财", "众筹", "白条", "保险"],
    ["安装", "维修", "清洗", "二手"],
    ["工业品"]
  ];
  // 动态生成侧边导航栏======
  var ulObj = $(".jd-col1>ul");
  var len = navItemList.length;
  for (var i = 0; i < len; i++) {
    // 根据数组中的数据长度确定要生成多少组标签
    var list = navItemList[i];
    if (list.length == 1) {
      //如果这个一组分类中只有一个标签
      $("<li><a href='#'>" + list[0] + "</a></li>").appendTo(ulObj);
    } else {
      //一组中有多个标签的情况
      var li = $("<li></li>").appendTo(ulObj);
      for (var j = 0; j < list.length; j++) {
        if (j != 0) {
          // 如果不是第一个a标签就在其前面加上span的横线
          $("<span> / </span>").appendTo(li);
        } //end if
        $("<a href='#'>" + list[j] + "</a>").appendTo(li);
      } // end for
    } // end if
  } // end for
});

$(function() {// 轮播图===============
  // 动态生成轮播图列表
  var ulObj = $(".jd-col2>ul");
  // 动态生成轮播图下方的小圆点
  var olObj = $(".jd-col2>ol");
  for (var i = 1; i <= 8; i++) {
    // 生成轮播图图片
    $(
      "<li><a href='javascript:void(0)'><img src='/static/jd_web/images/lunBoTu/" +
        i +
        ".jpg'/></a></li>"
    ).appendTo(ulObj);
    // 生成小圆点
    $("<li><a href='javascript:void(0)'></a></li>").appendTo(olObj);
  }
  // 为第一个小圆点添加类样式
  $(".jd-col2>ol>li:eq(0)").addClass("current");

  // 为轮播图添加功能
  // 点击右键处理函数
  function clickRight() {
    //右箭头效果
    // 清理定时器
    clearInterval(timeID);
    // 使当前图片隐藏的同时，显示下一个索引值的图片并改变小圆点的样式
    if (index == 7) {
      index = 0;
      $(".jd-col2>ul>li")
        .eq(7)
        .fadeOut(500);
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeIn(500);
      setButtonFllow(index);
    } else {
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeOut(500)
        .next()
        .fadeIn(500);
      index++;
      setButtonFllow(index);
    }
    // 开始新的自动播放
    timeID = setInterval(clickRight, 3000);
  }
  // 小圆点跟随图片的处理函数
  function setButtonFllow(index) {
    $(".jd-col2>ol>li")
      .eq(index)
      .addClass("current")
      .siblings("li")
      .removeClass("current");
  }
  // 自动播放效果
  var timeID = setInterval(clickRight, 3000);
  // 图片索引值
  var index = 0;
  // 点击左箭头
  $(".arr-l").click(function() {
    // 清理定时器
    clearInterval(timeID);
    // 使当前图片隐藏的同时，显示下一个索引值的图片并改变小圆点的样式
    if (index == 0) {
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeOut(500);
      index = 7;
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeIn(500);
      setButtonFllow(index);
    } else {
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeOut(500)
        .prev()
        .fadeIn(500);
      index--;
      setButtonFllow(index);
    }
    // 开始新的自动播放
    timeID = setInterval(clickRight, 3000);
  });
  // 点击右箭头
  $(".arr-r").click(clickRight);
  // 进入轮播图下方的小点
  $(".jd-col2>ol>li").mouseenter(function() {
    // 清理定时器
    clearInterval(timeID);
    // 获取当前的索引值
    $(".jd-col2>ul>li")
      .eq(index)
      .fadeOut(500);
    index = $(this).index();
    setButtonFllow(index);
    $(".jd-col2>ul>li")
      .eq(index)
      .fadeIn(500);
    // 开始新的自动播放
    timeID = setInterval(clickRight, 3000);
  });
  // 鼠标进入离开图片
  $(".jd-col2>ul>li")
    .mouseenter(function() {
      //进入
      // 清理定时器
      clearInterval(timeID);
    })
    .mouseleave(function() {
      //离开
      // 设置定时器
      timeID = setInterval(clickRight, 3000);
    });
});

// 公共函数====================================

function setDropDownLayer(selecter) {//将显示下拉列表与设置跳转链接封装在此
  dropDownLayer(selecter);
  setLink(selecter);
}

function setLink(selecter) {/* 设置跳转链接 */
  var linkList = $(selecter + " a");
  for (var i = 0; i < linkList.length; i++) {
    $(linkList[i]).click(function() {
      alert("跳转到：" + $(this).text());
    });
  }
}
function dropDownLayer(selecter) {/* 下拉列表处理函数 */
  $(selecter)
    .children()
    .mouseenter(function() {
      // 改变该区域背景颜色
      $(selecter + ">.dt").addClass("hover");
      $(selecter + ">.dropdown-layer").show();
    })
    .mouseleave(function() {
      $(selecter + ">.dt").removeClass("hover");
      $(selecter + ">.dropdown-layer").hide();
    });
}