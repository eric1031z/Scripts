
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時



var topic = "道具兌換";

var pack = [

[
    [3010832,1], //太陽
	[3015565,1],
	[3015566,1], 
	[3015567,1], 		
	[3015568,1],
	[3015569,1], 
	[3015570,1],
    [4000019,1000], //嫩寶殼
    [4000000,1000], //藍寶殼		  
    [4000016,1000], //紅寶殼	
	[2250002,5], //5E楓票	
],

[
    [2049300,1], 
	[2430481,20], 
],


[
    [5064502,1], //高級附魔石
	[5064501,5], //一般附魔石
],

[
    [5220082,1], //高級附魔石
	[4001577,80], //一般附魔石
],

[
    [1142813,1], //高級附魔石
	[4001577,140], //一般附魔石
],


[
    [2340000,1], //祝福
    [4001577,10], //蛋糕果醬
],

[
    [2531000,1], //保護卷軸
    [4001577,15], //蛋糕果醬
],
    
[
    [5062000,10], //奇幻方塊
    [4001577,20], //蛋糕果醬
],

[
    [5062001,10], //超級奇幻方塊
    [4001577,30], //蛋糕果醬
],

[
    [5062002,10], //奇幻方塊
    [4001577,50], //蛋糕果醬
],

//不滅的傳說套裝
[
    [1003406,1], //帽子
    [4001577,50], //蛋糕果醬
],

[
    [1052420,1], //衣服
    [4001577,60], //蛋糕果醬
],

[
    [1072630,1], //鞋子
    [4001577,50], //蛋糕果醬
],

[
    [1102345,1], //翅膀
    [4001577,50], //蛋糕果醬
],

[
    [1082409,1], //手套
    [4001577,50], //蛋糕果醬
],

[
    [1152078,1], //肩膀
    [4001577,50], //蛋糕果醬
],

[
    [1132137,1], //鎖扣
    [4001577,50], //蛋糕果醬
],

//不滅的傳說武器
[
    [1302192,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1312098,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1322138,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1332168,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1372117,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1382142,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1402129,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1412087,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1422089,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1432117,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1442154,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1452147,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1462136,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1472159,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1482120,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1492119,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1522055,1], 
    [4001577,70], //蛋糕果醬
],

[
    [1532059,1], 
    [4001577,70], //蛋糕果醬
],





];



function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	
    if (status == 0) {
		var msg =  icon5 + " #d【" + topic + "】#k #r點擊下列物品查看合成規則#k\r\n";
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon3+"#b《兌換 #k#r#z" + pack[a][0][0] + "##r#b》#k #d 查看需要物品#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == -1){
			cm.dispose();
	    }else{
		    var memo = "#b【此兌換詳細需要內容物為】 :#k\r\n";
		    var needs = "";
		    for(var b = 1 ; b < pack[sel].length ; b++) {
			    needs += "#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k\r\n";
		    }
		    memo += needs;
		
		    memo += "#r可兌換  : #k#d#i" + pack[sel][0][0] + "# #z" + pack[sel][0][0] + "##k 共 : #r" + pack[sel][0][1] + " 個#k"; 

		
		    cm.sendYesNo(memo);
		}
	}else if(status == 2){
		cm.sendGetNumber("#d請輸入想兌換的組數 :#k",0,0,20);
	}else if(status == 3){
		var xx = selection;
		var checkitems = 1;
		var notice = "#b您欲兌換#k #r#i" + pack[sel][0][0] + " # #z" + pack[sel][0][0] + " #缺少以下材料 ：\r\n";
		for(var cc = 1 ; cc < pack[sel].length ; cc ++){
			if(!cm.haveItem(pack[sel][cc][0],pack[sel][cc][1]*xx)){
				checkitems ++;
				notice += "#b缺少材料#k :#i" + pack[sel][cc][0] + "# #z" + pack[sel][cc][0] + "# 共 #r " + pack[sel][cc][1]*xx + "個#k\r\n";
			}
		}
		if(checkitems > 1){
			cm.sendOk(notice);
			status = -1;
		}else {
			cm.getPlayer().gainItem(pack[sel][0][0],pack[sel][0][1]*xx);
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItem(pack[sel][c][0],-pack[sel][c][1]*xx);
			}
			
			cm.sendOk("謝謝您的兌換!");
			status = -1;
		}
    }
}

		