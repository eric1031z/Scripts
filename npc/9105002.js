
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.tools.packet);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
;;!//錯誤


var item = [1004808,1004809,1004810,1004811,1004812,1053063,1053064,1053065,1053066,1053067,1073158,1073159,1073160,1073161,1073162,1082695,1082696,1082697,1082698,1082699,1102941,1102942,1102943,1102944,1102940,1152196,1152197,1152198,1152199,1152200,1302343,1312203,1322255,1332279,1342104,1372228,1382265,1402259,1412181,1422189,1432218,1442274,1452257,1462243,1472265,1482221,1492235,1522143,1532150,1102481,1102482,1102483,1102484,1102485,1082543,1082544,1082545,1082546,1082547,1072743,1072744,1072745,1072746,1072747,1122122,1122123,1122124,1122125,1122126,1052723,1142660];
var cost = 5540000;



    




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
		var msg = "";
		msg += icon5 + " #d【裝備強化系統】#k #r消耗一張 :#k #b#t" + cost + "##k\r\n";
		msg += "#L0#" + icon3 + " #b查看強化規則#k\r\n";
		msg += "#L1#" + icon3 + " #b我要強化裝備#k\r\n";
        cm.sendSimple(msg);		
	}else if(status == 1){
		this. s = selection;
		if(s < 0){
			cm.dispose();			
		}else if(s == 0){
			var msg = "";
			msg += icon5 + " #b強化規則簡介#k\r\n";
			msg += icon3 + " #d此強化系統僅適用暴君/神秘/楓心/滅龍/蛋糕之王 裝備#k\r\n";
			msg += icon3 + " #d每次強化皆可使裝備卷軸數提升#k #r1次#k #d全屬/AD/AP#k #r+4#k\r\n";
			msg += icon3 + " #d每個裝備強化次數上限為#k #r20次#k\r\n";
			msg += icon3 + " #d強化時請將欲強化裝備放置裝備欄第一格#k\r\n";
			msg += icon3 + " #d每次強化皆需消耗一張#k #r#z" + cost + "##k\r\n";
			cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			var eq = cm.getInventory(1).getItem(1);
		    if(eq != null){
		        var upgrade = eq.getSocket1() == -1 ? 0 : eq.getSocket1();
		    }
			if(eq == null){
				cm.sendOk("#d請確認裝備欄第一格有裝備#k");
				status = -1;
			}else if(item.indexOf(eq.getItemId()) == -1){
				cm.sendOk("#d您的裝備欄第一格裝備 :#k #r#t" + eq.getItemId() + "##k #d並非指定裝備#k");
				status = -1;
			}else if(upgrade >= 20){
				cm.sendOk("#d您的裝備欄第一格裝備 :#k #r#t" + eq.getItemId() + "##k #d已完成20次強化#k");
				status = -1;
			}else{
				var msg = "";
				msg += icon5 + " #b強化確認頁面#k\r\n";
				msg += icon3 + " #d欲強化裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
				msg += icon3 + " #d當前已強化次數 :#k #r" + upgrade + "#k\r\n";
				msg += icon1 + " #b是否確認要強化此裝備?#k\r\n";
				cm.sendYesNo(msg);
			}
		}
	}else if(status == 2){
		var eq = cm.getInventory(1).getItem(1);
		if(eq != null){
		    var upgrade = eq.getSocket1() == -1 ? 0 : eq.getSocket1();
		}
		if(cm.getPlayer().getItemQuantity(cost,false) < 1){
			cm.sendOk("#d您的身上並沒有#k #r#z" + cost + "##k");
			status = -1;
		}else{
			eq.setSocket1(upgrade + 1);
			eq.setStr(eq.getStr() + 4);
			eq.setDex(eq.getDex() + 4);
			eq.setInt(eq.getInt() + 4);
			eq.setLuk(eq.getLuk() + 4);
			eq.setWatk(eq.getWatk() + 4);
			eq.setMatk(eq.getMatk() + 4);
			eq.setUpgradeSlots(eq.getUpgradeSlots() + 1);
			cm.getPlayer().forceReAddItem_NoUpdate(eq, MapleInventoryType.EQUIP);
			cm.getPlayer().getClient().sendPacket(CWvsContext.InventoryPacket.updateSpecialItemUse(eq, MapleInventoryType.EQUIP.getType(), eq.getPosition(), true, cm.getPlayer()));
			cm.gainItem(cost,-1);
			cm.sendOk("#d恭喜您,強化完成#k");
			status = -1;
		}
	}
	
}

		