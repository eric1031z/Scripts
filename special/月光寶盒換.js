
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Cash/0522/05222000/info/iconRaw#";; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時



var topic = "神秘冥界套裝兌換";

var pack = [

//帽子
[
    [1004808,1], 
	[5222000,1], 
],

[
    [1004809,1], 
	[5222000,1], 
],

[
    [1004810,1], 
	[5222000,1], 
],

[
    [1004811,1], 
	[5222000,1], 
],

[
    [1004812,1], 
	[5222000,1], 
],

//套服
[
    [1053063,1], 
	[5222000,1], 
],

[
    [1053064,1], 
	[5222000,1], 
],

[
    [1053065,1], 
	[5222000,1], 
],

[
    [1053066,1], 
	[5222000,1], 
],

[
    [1053067,1], 
	[5222000,1], 
],

//鞋子
[
    [1073158,1], 
	[5222000,1], 
],

[
    [1073159,1], 
	[5222000,1], 
],

[
    [1073160,1], 
	[5222000,1], 
],

[
    [1073161,1], 
	[5222000,1], 
],

[
    [1073162,1], 
	[5222000,1], 
],

//手套
[
    [1082695,1], 
	[5222000,1], 
],

[
    [1082696,1], 
	[5222000,1], 
],

[
    [1082697,1], 
	[5222000,1], 
],

[
    [1082698,1], 
	[5222000,1], 
],

[
    [1082699,1], 
	[5222000,1], 
],

//斗篷
[
    [1102940,1], 
	[5222000,1], 
],

[
    [1102941,1], 
	[5222000,1], 
],

[
    [1102942,1], 
	[5222000,1], 
],

[
    [1102943,1], 
	[5222000,1], 
],

[
    [1102944,1], 
	[5222000,1], 
],

//護肩
[
    [1152196,1], 
	[5222000,1], 
],

[
    [1152197,1], 
	[5222000,1], 
],

[
    [1152198,1], 
	[5222000,1], 
],

[
    [1152199,1], 
	[5222000,1], 
],

[
    [1152200,1], 
	[5222000,1], 
],

//武器
[
    [1302343,1], 
	[5222000,1], 
],

[
    [1312203,1], 
	[5222000,1], 
],

[
    [1322255,1], 
	[5222000,1], 
],

[
    [1332279,1], 
	[5222000,1], 
],

[
    [1342104,1], 
	[5222000,1], 
],

[
    [1372228,1], 
	[5222000,1], 
],

[
    [1382265,1], 
	[5222000,1], 
],

[
    [1402259,1], 
	[5222000,1], 
],

[
    [1412181,1], 
	[5222000,1], 
],

[
    [1422189,1], 
	[5222000,1], 
],

[
    [1432218,1], 
	[5222000,1], 
],

[
    [1442274,1], 
	[5222000,1], 
],

[
    [1452257,1], 
	[5222000,1], 
],

[
    [1462243,1], 
	[5222000,1], 
],

[
    [1472265,1], 
	[5222000,1], 
],

[
    [1482221,1], 
	[5222000,1], 
],

[
    [1492235,1], 
	[5222000,1], 
],

[
    [1522143,1], 
	[5222000,1], 
],

[
    [1532150,1], 
	[5222000,1], 
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
		cm.sendGetNumber("#d請輸入想兌換的組數 :#k",0,0,10);
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

		