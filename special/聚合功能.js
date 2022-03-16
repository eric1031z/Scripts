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


/////////////////////////////////////// icon區
var midText = "#fEffect/ItemEff/112810/0/1#";
var icon1 = "#fEffect/ItemEff/112809/0/0#";


///////////////////////////////////////

/*
   
在線點數  
贊助兌換
*/
var menuList = [
    [icon1 + "#e 功能#n#k","功能專區"],
    [icon1 + "#e 獎勵#n#k","獎勵專區"],
	[icon1 + "#e 贊助#n#k","購買專區"],
	[icon1 + "#e 兌換#n#k","兌換專區"],
	[icon1 + "#e 活動#n#k","活動專區"],
	[icon1 + " #e造型#n#k","造型專區"],
	[icon1 + " #e回饋#n#k","補償專區"],

];







function start() {
	var onlinenumber = cm.getTotalOnline() + 2;
	var info = [
		
		["            "+ midText + " #b#e當前線上人數#n#k  : #r#e ", parseInt(cm.getTotalOnline()*1.9)+21, "#k #b人#k#n\r\n"],
		["            "+ midText + " #b#e當前紅利點數#n#k  : #r#e ", cm.getPlayer().getPoints(), "#k #b點#k#n\r\n"],

	];

	var msg = "";
    msg += "                " + imageicon + "\r\n\r\n";
	
	for (var i = 0; i < info.length; i++) {
		msg += info[i][0];
		msg += FormatString(" ", 4, info[i][1].toString());
		//msg += info[i][1];
		msg += info[i][2];
	}
	msg += "\r\n";
	msg += "   " + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText + "" + midText+ "" + midText + "" + midText + "" + midText + "" + midText +  "  " ;
	msg += "\r\n";
	var x = 0;
	for (var i = 0; i < menuList.length; i++) {
		
		x++;
		
		msg +=   (x%3 == 1  ? "  " : " ") +  "#L   " + i + "#"  + " " +  menuList[i][0] + "#l";
		if (x % 3 == 0){
			msg += "\r\n\r\n";
			
		} else {
			msg +=  "";
		}

	}
	
	msg += "\r\n ";
    
	cm.sendSimple(cm.getPlayer().getLevel() >= 8 ? msg : "#d#r8等以上才能使用拍賣#k");
	
}

function action(mode, type, selection) {
	var onlinenumber = cm.getTotalOnline() + 2;
	if (select === -1) {
		select = selection;
	}
	
	if (select == -1){
		cm.dispose();
		//cm.openNpc(9010000,"聚合功能");		
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
