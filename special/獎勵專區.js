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
var topic = "獎勵專區";

//
var icon1 = "#fEffect/ItemEff/1/9#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

var level = "#fEffect/ItemEff/00/0#";
var pp = "#fEffect/ItemEff/00/2#";
var share = "#fItem/Cash/0552/05521000/info/iconRaw#";
var out = "#fEffect/ItemEff/00/4#";
var friend = "#fItem/Install/0301/03015326/info/iconRaw#";
var revive = "#fEffect/ItemEff/00/1#";
var sign = "#fEffect/ItemEff/00/3#";
var hp = "#fItem/Consume/0200/02000000/info/iconRaw#";
var invite = "#fItem/Etc/0403/04032380/info/iconRaw#";
var cake = "#fEffect/ItemEff/0/9#";
var before = "#fCharacter/Accessory/01142991/info/iconRaw#";
var prize = "#fItem/Etc/0400/04000038/info/iconRaw#";
var head = "#fEffect/ItemEff/0/10#";

var menuList = [
    [level + " #e等級#n#k","等級獎勵"],

	//[share + " #d#eFB分享#n#k","推文獎勵"],
	//[before + "#d#e事前獎#n#k","事前"],
	//[invite + "#d#邀請獎#n#k","邀請好友"],
	[out + " #e推文#n#k","推文"],
//	[friend + "#d#e好友獎#n#k","好友獎勵"],
	[revive + "#e轉生#n#k","轉生獎勵"],
	[pp + " #e人數#n#k","人數獎勵"],	
	[sign + " #e簽到#n#k","簽到獎勵"],
	[sign + " #e轉獎#n#k","轉生"],
	//["血量戒指","血量戒指"],
	//[prize + "#d#e贊助王#n#k","每日贊助"],
	[icon1 + "#e#r上頁#n#k","回到拍賣"],
];




 



function start() {

	var msg = "                    " + head + " #b#e" + topic + "#n#k\r\n\r\n";
	msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
	var x = 0;
	for (var i = 0; i < menuList.length; i++) {
		x++;
		msg +=   (x%3 == 1 ? "    " : "  ") +  "#L   " + i + "#" + menuList[i][0] + "#l";
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
