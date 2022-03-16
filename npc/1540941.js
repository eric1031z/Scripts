load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.handling.world);
importPackage(Packages.client.inventory);
importPackage(Packages.client);




var status = -1;

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var cash = "#fEffect/ItemEff/004/5#";

var log = "#fEffect/ItemEff/004/7#";
var con = "#fEffect/ItemEff/004/9#";

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	if (status == 0){
		var msg = "";
		msg += icon5 + " #e#d慎重的抉擇#k #r只有一次的決定機會!#k\r\n";
		msg += icon5 + " 要直接跳過新手階段達到10等前往#k #b自由市場#k 嗎?\r\n";
		msg += icon1 + " #r若不跳過則可獲得好禮 :#k #b#i5220040# #z5220040##k #r一張!#k\r\n";
		msg += icon1 + " #r若直接跳過的玩家一樣會得到49點能力值#k\r\n";
		msg += icon1 + " #r(以上獎勵只能獲得一次,下次創角並不會有任何獎勵)#k\r\n";
		msg += icon1 + " #r狂狼玩家若選擇跳過請務必重登#k\r\n";
		msg += "#L0#" + icon3 + " 帶我去自由市場!\r\n";
		msg += "#L1#" + icon3 + " 要挑戰新手任務!\r\n";
		if(cm.getPlayer().getMap().getId() != 105300000){
			cm.sendSimple(msg);
		}else{
			cm.sendOk("嗨");
			cm.dispose();
		}
		
	}else if(status == 1){
		var sel = selection;
		if(sel == 0){
			cm.getPlayer().setPrizeLog("新手任務");
			cm.getPlayer().cancelAllBuffs();
		    cm.getPlayer().setExp(0); //經驗設定為0
		    cm.getPlayer().setLevel(10); //等級設定為10
		    cm.getPlayer().setStr(4); //設定力量4
		    cm.getPlayer().setDex(4); //設定敏捷4
		    cm.getPlayer().setInt(4); //設定智力4
		    cm.getPlayer().setLuk(4); //設定幸運4
		    cm.getPlayer().setRemainingAp(49);
		    cm.getPlayer().saveToDB(false, false); //存檔
		    cm.getPlayer().reloadC(); //重新載入角色
		    cm.getPlayer().updateAP();
		    cm.getPlayer().levelUp();
		    cm.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.getPlayer().getRemainingAp());
		    cm.dispose();
			cm.warp(910000000);
			cm.openNpc(9010000,"快速轉職");
		}else if(sel == 1){
			if(cm.getPlayer().getPrizeLog("新手任務") == 0){
				cm.gainItem(5220040,1);
			}
			cm.sendOk("這絕對是個不會讓你後悔的選擇！");
			cm.getPlayer().setPrizeLog("新手任務");
			cm.dispose();
		}
	}
}