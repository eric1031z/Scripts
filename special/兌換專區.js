/* global cm */
load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = -1;
var select = -1;

/* Clear inv */
var ClearText = "";
var ClearUp = 0;
var ClearTitle = Array("裝備欄", "消耗欄", "裝飾欄", "其他欄", "特殊欄");
var slot = Array();
var startnum = 0;
var endnum = 0;
var topic = "兌換專區";

//
var icon10 = "#fEffect/ItemEff/1/9#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

var cake = "#fEffect/ItemEff/0/9#";
var fl = "#fEffect/ItemEff/006/0#";
var re = "#fEffect/ItemEff/006/1#";
var fish = "#fEffect/ItemEff/005/0#";
var bs = "#fEffect/ItemEff/005/1#";
var up = "#fEffect/ItemEff/005/2#";
var pq = "#fEffect/ItemEff/005/3#";
var cc = "#fEffect/ItemEff/005/4#";
var ck = "#fEffect/ItemEff/005/5#";

var mon = "#fEffect/ItemEff/005/10#";
var bq = "#fEffect/ItemEff/005/11#";

var ch = "#fEffect/ItemEff/0/11#";
var head = "#fEffect/ItemEff/0/10#";

var menuList = [

	[fish + "#e釣魚#n#k","新魚"],
	[bs + "#e附魔#n#k","附魔換"],
	[bq + "#e硬幣#n#k","硬幣換"],
	[bq + "#e雪花#n#k","雪花換"],
	[bq + "#e碎片#n#k","碎片換"],
	[up + "#e組隊#n#k","組隊兌換"],
	[pq + "#e陽光#n#k","陽光兌換"],
	[fl + "#e櫻花#n#k","櫻花兌換"],
	[re + "#e轉生#n#k","轉生兌換"],
	[cc + "#e超轉#n#k","超轉兌換"],
	[mon + "#eBSPQ#n#k","BSPQ"],
	[bq + "#e幣轉#n#k","普轉兌換"],
//	["黃金楓葉","黃金楓葉"],
//    [bs + "#d#eBS兌換#n#k","BSPQ"],
	[ck + "#e升級#n#k","道具合成"],
//	[pq + " #d#e道具換#n#k","其他合成"],
//	[ck + " #d#e蛋糕換#n#k","切片兌換"],
//	[cc + " #d#e超轉換#n#k","超轉兌換"],


	[icon10 + "#r#e上頁#n#k","回到拍賣"],
	
];




 



function start() {

	var msg = "                    " + head + " #b#e" + topic + "#n#k\r\n\r\n";
	msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
	var x = 0;
	for (var i = 0; i < menuList.length; i++) {
		x++;
		msg +=   (x%3 == 1 ? "    " : "  ") +  "#L   " + i + "#"  + menuList[i][0] + "#l";
		if (x % 3 == 0){
			msg += "\r\n\r\n";
		} else {
			msg += "";
		}

	}
	
	msg += " ";
    if(menuList.length == 0){
		msg = "#d此專區尚無資料#k";
		cm.sendOk(msg);
		cm.dispose();
	}else{
	    cm.sendSimple(cm.getPlayer().getLevel() >= 10 ? msg : "#d[拍賣功能]#k #r10等以上才能使用拍賣喔!#k");
	}
}

function action(mode, type, selection) {

	if (select === -1) {
		select = selection;
	}
	
	if (select == -1){
		cm.dispose();
    }else if (select < menuList.length && select >= 0) {
		if (!isNaN(menuList[select][1])) {
			cm.dispose();
			cm.openNpc(menuList[select][1]);
			return;
		} else {
			cm.dispose();
			cm.openNpc(9010000, menuList[select][1]);
			return;
		}
	}

	
}



function openNpc(npcid) {
	openNpc(npcid, null);
}

function openNpc(npcid, script) {
	var mapid = cm.getMapId();
	cm.dispose();
	if (cm.getPlayerStat("LVL") < 10) {
		cm.sendOk("你的等級不能小於10等.");
	} else if (
		cm.hasSquadByMap() ||
		cm.hasEventInstance() ||
		cm.hasEMByMap() ||
		mapid >= 990000000 ||
		(mapid >= 680000210 && mapid <= 680000502) ||
		(mapid / 1000 === 980000 && mapid !== 980000000) ||
		mapid / 100 === 1030008 ||
		mapid / 100 === 922010 ||
		mapid / 10 === 13003000) {
		cm.sendOk("你不能在這裡使用這個功能.");
	} else {
		if (script == null) {
			cm.openNpc(npcid);
		} else {
			cm.openNpc(npcid, script);
		}
	}
}




function FormatString(fill, length, content) {
	var str = content;
	var time = length - content.length;
	while (time > 0) {
		str += fill;
		time--;
	}
	return str;
}

function getOnlineTime() {
	var sec = cm.getPlayer().getOnlineSeconds();
	//return + parseInt(sec / 60 / 60) + "#d時#k#r" + parseInt(sec / 60 % 60) + "#k#d分#k#r" + parseInt(sec % 60 % 60 ) + "#k#d秒#k";
	return parseInt(sec / 60) ;
}
