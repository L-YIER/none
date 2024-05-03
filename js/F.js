(function() {
		    document.addEventListener("DOMContentLoaded", function() {
		        // 定义图片和描述数组
		         const images = ["../images/h.png", "../images/si.png", "../images/j.png"];
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