(function ($) {
  $(document).ready(function () {
    "use strict";


    var allPanels = $('.accordion > dd').hide();
    $('.accordion > dt > a').click(function () {
      $(this).parent().next().slideToggle();
      return false;
    });


    /* 左边框框 */
    $('.lift').on('click', function () {
      $(".lift").toggleClass("active")
      $(".side-widget").toggleClass("active")
      $(".section-wrapper").toggleClass("no-transform")
    })

    /* 搜索框 */
    $('.search-button').on('click', function () {
      $(".search-box").toggleClass("active")
      $(".section-wrapper").toggleClass("no-transform")
    })


    // 页面过度动画
    $('body a').on('click', function (e) {

      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);

        }
      }
    });


    $(".tab-nav li").on('click', function (e) {
      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      $(this).addClass("active");
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });


  });



  // 数据图片
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", "url(" + $(this).data("background") + ")");
    }
  });


  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", $(this).data("background"));
    }
  });




  // 滑动
  var sliderimages = new Swiper('.slider-images', {
    spaceBetween: 0,
    direction: 'vertical',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    touchRatio: 0,

    pagination: {
      el: '.swiper-fraction',
      type: 'fraction',
    },


    loop: true,
    loopedSlides: 1,
    thumbs: {
      swiper: slidertexts
    }
  });


  // 滑块
  var slidertexts = new Swiper('.slider-texts', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: false,
    loop: true,
    loopedSlides: 1,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

  });

  if ($(".slider-images")[0]) {
    sliderimages.controller.control = slidertexts;
    slidertexts.controller.control = sliderimages;
  } else {

  }


  // 动态文字
  var slidertexts = new Swiper('.kinetic-texts', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0,
    slideToClickedSlide: false,
    loop: true,
    loopedSlides: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

  });




  var artsliderimages = new Swiper('.art-slider-images', {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 4,
    thumbs: {
      swiper: artslidercontent
    },
    breakpoints: {
      1024: {
        loopedSlides: 3,
      },
      768: {
        loopedSlides: 2,
      },
      640: {
        loopedSlides: 1
      },
      320: {
        loopedSlides: 1
      }
    }
  });


  var artslidercontent = new Swiper('.art-slider-content', {
    spaceBetween: 30,
    direction: 'vertical',
    slidesPerView: 4,
    loop: true,
    loopedSlides: 4,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });

  if ($(".art-slider-images")[0]) {
    artsliderimages.controller.control = artslidercontent;
    artslidercontent.controller.control = artsliderimages;
  } else {

  }


  // 页面加载过度动画
  let settings = {
    progressSize: 320, // 进度条尺寸
    progressColor: '#ffffff',// 进度条颜色
    lineWidth: 2,// 进度条线宽
    lineCap: 'round',// 进度条线端样式
    ksanAnimationDuration: 800,// 进度条线端样式
    startDegree: -90,// 进度条线端样式
    finalDegree: 270//结束角度
  }

  function setAttributes(elem, attrs) {

    for (let key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }

  }
// 创建进度条容器元素和 Canvas 元素
  let ksan = document.createElement('div'),
    canvas = document.createElement('canvas'),
    size;
// 根据视口大小调整进度条尺寸
  (function () {

    let width = window.innerWidth,
      height = window.innerHeight;

    if (width > height) {

      size = Math.min(settings.progressSize, height / 2);

    } else {

      size = Math.min(settings.progressSize, width - 50);

    }

  })();
// 设置进度条容器元素的属性和样式
  setAttributes(ksan, {
    class: "ksan",
    id: 'ksan',
    style: 'transition: opacity ' + settings.ksanAnimationDuration / 1000 + 's'
  });
  setAttributes(canvas, {
    class: 'jind',
    id: 'jind',
    width: settings.progressSize,
    height: settings.progressSize
  });


  ksan = document.getElementById('ksan');
// 进度条
  let progressBar = document.getElementById('jind'),
    images = document.images,
    imagesAmount = images.length,
    imagesLoaded = 0,
    barCtx = progressBar.getContext('2d'),
    circleCenterX = progressBar.width / 2,
    circleCenterY = progressBar.height / 2,
    circleRadius = circleCenterX - settings.lineWidth,
    degreesPerPercent = 3.6,
    currentProgress = 0,
    showedProgress = 0,
    progressStep = 0,
    progressDelta = 0,
    startTime = null,
    running;

  (function () {

    return requestAnimationFrame
      || mozRequestAnimationFrame
      || webkitRequestAnimationFrame
      || oRequestAnimationFrame
      || msRequestAnimationFrame
      || function (callback) {
        setTimeout(callback, 1000 / 60);
      };

  })();
// 将角度转换为弧度
  Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
  };


  progressBar.style.opacity = settings.progressOpacity;
  barCtx.strokeStyle = settings.progressColor;
  barCtx.lineWidth = settings.lineWidth;
  barCtx.lineCap = settings.lineCap;
  let angleMultiplier = (Math.abs(settings.startDegree) + Math.abs(settings.finalDegree)) / 360;
  let startAngle = Math.radians(settings.startDegree);
  document.body.style.overflowY = 'hidden';
  ksan.style.backgroundColor = settings.ksanBackground;


  for (let i = 0; i < imagesAmount; i++) {

    let imageClone = new Image();
    imageClone.onload = onImageLoad;
    imageClone.onerror = onImageLoad;
    imageClone.src = images[i].src;

  }

  function onImageLoad() {

    if (running === true) running = false;

    imagesLoaded++;

    if (imagesLoaded >= imagesAmount) hideksan();

    progressStep = showedProgress;
    currentProgress = ((100 / imagesAmount) * imagesLoaded) << 0;
    progressDelta = currentProgress - showedProgress;

    setTimeout(function () {

      if (startTime === null) startTime = performance.now();
      running = true;
      animate();

    }, 10);

  }

  function animate() {

    if (running === false) {
      startTime = null;
      return;
    }

    let timeDelta = Math.min(1, (performance.now() - startTime) / settings.ksanAnimationDuration);
    showedProgress = progressStep + (progressDelta * timeDelta);

    if (timeDelta <= 1) {


      barCtx.clearRect(0, 0, progressBar.width, progressBar.height);
      barCtx.beginPath();
      barCtx.arc(circleCenterX, circleCenterY, circleRadius, startAngle, (Math.radians(showedProgress * degreesPerPercent) * angleMultiplier) + startAngle);
      barCtx.stroke();
      requestAnimationFrame(animate);

    } else {
      startTime = null;
    }

  }

  function hideksan() {
    setTimeout(function () {
      $("body").addClass("page-loaded");
      document.body.style.overflowY = '';
    }, settings.ksanAnimationDuration + 100);
  }
  var resizeTimer;


  // 滑动
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    class: 'is-inview'
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();


  // 进度
	
	$(".odometer").each(function(){
          $(this).html($(this).data('count'));
        
    });
	
	
	
	
 
	
	
})(jQuery);
// 侧边栏随机
(function() {
		    document.addEventListener("DOMContentLoaded", function() {
		        // 定义图片和描述数组
		         const images = ["images/h.png", "images/si.png", "images/j.png"];
		        const descriptions = ["司母戊鼎（后母戊鼎）商代 最重的青铜器.1939年出土于河南安阳殷墟的一座商代古墓中，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作，现藏于中国国家博物馆。"
		        , "四羊方尊 商代 最大的商代青铜方尊.1938年出土于湖南宁乡县黄材镇月山铺转耳仑的山腰上，是商朝晚期青铜礼器，祭祀用品。位列十大传世国宝之一，收藏于中国国家博物馆。"
		        , "越王勾践剑，春秋晚期越国青铜器，出土于湖北江陵马山5号楚墓出土。被称为“天下第一剑”，收藏于湖北省博物馆。"
		        ,""];
		        		
		        // 生成随机索引
		        function getRandomIndex(max) {
		            return Math.floor(Math.random() * max);
		        }
		
		        // 随机选择图片和描述
		        const randomIndex = getRandomIndex(images.length);
		        const randomImage = images[randomIndex];
		        const randomDescription = descriptions[randomIndex];
		
		        // 更新侧边栏中的图片和描述
		        const imageElement = document.getElementById('rd');
		        imageElement.src = randomImage;
		        const descriptionElement = document.getElementById('rp');
		        descriptionElement.textContent = randomDescription;
		    });
		})();
		
function search() {
		         // 获取输入框的值
		         var keyword = document.getElementById('keyword').value;
		         
		         // 静态搜索结果数据
		         var staticResults = [
		             "后母戊鼎",
		             "四羊方尊",
		             "越王勾践剑",
					 "曾侯乙编钟",
					 "莲鹤方壶",
					 "毛公鼎",
					 "秦始皇陵铜车马",
					 "青铜大立人像",
					 "长信宫灯",
					 
		         ];
		 
		         // 根据关键字过滤搜索结果
		         var filteredResults = staticResults.filter(function(result) {
		             return result.includes(keyword);
		         });
		 
		         // 清空搜索结果容器
		         var searchResultsDiv = document.getElementById('searchResults');
		         searchResultsDiv.innerHTML = '';
		 
		         // 创建列表
		         if (filteredResults.length > 0) {
		             var resultList = document.createElement('ul');
		             for (var i = 0; i < filteredResults.length; i++) {
		                 var listItem = document.createElement('li');
		                 var link = document.createElement('a');
		                 link.textContent = filteredResults[i];
		                 // 设置跳转到 HTML 文件
		                 link.href = 'EJ/'+filteredResults[i] + '.html';
		                 listItem.appendChild(link);
		                 resultList.appendChild(listItem);
		             }
		             searchResultsDiv.appendChild(resultList); // 将结果列表添加到页面中
		         } else {
		             searchResultsDiv.textContent = "未找到匹配的结果。";
		         }
		     }