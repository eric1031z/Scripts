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


//
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時


//
/*
   
在線點數  
贊助兌換
*/
var menuList = [
    ["全服蒐集","蒐集GM"],
	["更改WZ用","更改xml"],
	["商城新增","商城新增"],
	["組隊控制","組隊頁面"],
	["野怪新增","野怪(GM)"],
	["全服掉落","全服掉落"],
	["釣魚系統","釣魚系統"],
	["更改潛能","更改潛能"],
	["test","test"],
	

];




 



function start() {
	var onlinenumber = cm.getTotalOnline() + 2;
	var info = [
		
		

	];

	var msg = " 　　　　　　　      " + icon5 + " #d管理員面板#k";
	msg += "\r\n";
	for (var i = 0; i < info.length; i++) {
		msg += info[i][0];
		msg += FormatString(" ", 4, info[i][1].toString());
		//msg += info[i][1];
		msg += info[i][2];
	}
	msg += "\r\n";
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
    
	cm.sendSimple(cm.getPlayer().isGM() ? msg : "#d[拍賣功能]#k #r10等以上才能使用拍賣喔!#k");
}

function action(mode, type, selection) {
	var onlinenumber = cm.getTotalOnline() + 2;
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
