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
var topic = "單人考驗";

//
var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var cash = "#fEffect/ItemEff/004/5#";



var menuList = [
    ["初級","初PQ"], 
	["中級","中PQ"],
	["高級","高PQ"],
	
	
];




 



function start() {

	var msg = "#e                 " + icon5 + " #b" + topic + "#k\r\n\r\n";
	var x = 0;
	for (var i = 0; i < menuList.length; i++) {
		x++;
		msg +=   (x%3 == 1 ? "   " : "  ") +  "#L   " + i + "#" + icon3 + " " + menuList[i][0] + "#l";
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
