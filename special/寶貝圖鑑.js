/*
	Maple Administrator - Displays Battler Info
*/

load('nashorn:mozilla_compat.js');
importPackage(Packages.server.life);


var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

var status = -1;
var sel = 0;
var sec = 0;

function action(mode, type, selection) {
	var battlers = cm.getPlayer().getBoxed();
	if (mode != 1) {
    		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			if (battlers.size() <= 0) {
				cm.sendOk("#d您目前還沒有儲存的神奇寶貝喔!!#k");
				cm.dispose();
				return;
			}
			var selStr = icon5 + " #d想要查看哪一隻神奇寶貝呢?#k\r\n";
			for (var i = 0; i < battlers.size(); i++) {
				if (battlers.get(i) != null) {
					selStr += "#L" + i + "#" + icon3 + " #d" + battlers.get(i).getName() + "#k #r(" + MapleLifeFactory.getMonster(battlers.get(i).getMonsterId()).getStats().getName() + ")#k #d等級#k #r" + battlers.get(i).getLevel() + "#k #b" + battlers.get(i).getGenderString() + "#k#l\r\n";
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			if (battlers[0] == null) {	
				cm.getPlayer().makeBattler(0, defaul[selection]);
				cm.sendOk("#d恭喜您已經獲得第一隻神奇寶貝，想要訓練您的神奇寶貝或是跟玩家挑戰可以到「網咖」#k");
				cm.dispose();
				return;
			}
			if (selection < 0 || selection >= battlers.length || battlers[selection] == null) {
				cm.dispose();
				return;
			}
			sel = selection;
			var info = "#e#r" + battlers[selection].getName() + "#n#k#b (" + MapleLifeFactory.getMonster(battlers[selection].getMonsterId()).getStats().getName() + ")#k\r\n\r\n";
			info += icon3 + " #d等級#k " + battlers[selection].getLevel() + " " + battlers[selection].getGenderString() + "\r\n";
			info += icon3 + " #d經驗#k " + battlers[selection].getExp() + "/" + battlers[selection].getNextExp() + "\r\n";
			info += icon3 + " #dHP#k #B" + battlers[selection].getHPPercent() + "# - " + battlers[selection].getCurrentHP() + "/" + battlers[selection].calcHP() + "\r\n";
			info += icon3 + " #d攻擊力#k: " + battlers[selection].getATK(0) +  ", #d防禦力#k: " + battlers[selection].getDEF() + "%\r\n";
			info += icon3 + " #d特殊攻擊#k: " + battlers[selection].getSpATK(0) +  ", #d特殊防禦#k: " + battlers[selection].getSpDEF() + "%\r\n";
			info += icon3 + " #d速度#k: " + battlers[selection].getSpeed() +  ", #d迴避#k: " + battlers[selection].getEVA() + ", #d命中#k: " + battlers[selection].getACC() + "\r\n";
			info += icon3 + " #d狀態#k: " + battlers[selection].getStatusString() + "\r\n";
			info += icon3 + " #d品種#k: " + battlers[selection].getElementString() + "\r\n";
			info += icon3 + " #d屬性#k: " + battlers[selection].getNatureString() + "\r\n";
			info += icon3 + " #d物品#k: " + battlers[selection].getItemString() + "\r\n";
			info += icon3 + " #d能力#k: " + battlers[selection].getAbilityString() + "\r\n";
			info += "\r\n#b";
			if (cm.getPlayer().getBattle() != null) {
				info += "#L2#選擇上場!!#l\r\n";
			} else {
				info += "#L0#" + icon5 + " 我該如何進化呢?#l\r\n";
				info += "#L1#" + icon5 + " 釋放此神奇寶貝#l\r\n";
				info += "#L3#" + icon5 + " 為神奇寶貝改名#l\r\n";
				info += "#L4#" + icon5 + " 編輯隊伍順序#l\r\n";
				info += "#L5#" + icon5 + " 取出此神奇寶貝#l\r\n";
				info += "#L6#" + icon5 + " 給予/取下道具#l\r\n";
				info += "#L7#" + icon5 + " 評價此神奇寶貝#l\r\n\r\n  ";
			}
			cm.sendSimple(info + "\r\n");
		} else if (status == 2) {
			sec = selection;
			if (selection == 0) { //how i evolve
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				var evo = battlers[sel].getEvolutionType().value;
				if (evo == 0) {
					cm.sendOk("恭喜！你的神奇寶貝已完成最終進化");
					status = -1
				} else if (evo == 1) {
					cm.sendOk("你還差的遠呢，首先你必須好好提升等級");
					status = -1;
				} else if (evo == 2) {
					var selStr = icon1 + " #d需用特定的道具進化你的神奇寶貝:#k\r\n\r\n";
					if (cm.haveItem(battlers[sel].getFamily().evoItem.id)) {
						cm.sendSimple(selStr + "#L0#" + icon3 + " #b#v" + battlers[sel].getFamily().evoItem.id + "##z" + battlers[sel].getFamily().evoItem.id + "##k#l");
					} else {
						cm.sendOk(selStr + icon3 + " #b您並沒有進化所需的道具 #k: #r#v" + battlers[sel].getFamily().evoItem.id + "##z" + battlers[sel].getFamily().evoItem.id + "##k");
						status = -1;
						//cm.dispose();
					}
				}
				
			} else if (selection == 1) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				cm.sendYesNo("你確定你要釋放 " + battlers[sel].getName() + " #r(" + MapleLifeFactory.getMonster(battlers[sel].getMonsterId()).getStats().getName() + ")#k?");
			} else if (selection == 2) { //switch
				if (cm.getPlayer().getBattle() != null && !cm.getPlayer().getBattle().switchBattler(cm.getPlayer(), battlers[sel])) {
					cm.sendNext("已完成");
				}
				cm.dispose();
			} else if (selection == 3) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				cm.sendGetText("請輸入您喜歡的名字. (不得小於2字或大於20字)");
			} else if (selection == 4) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				if (cm.getPlayer().countBattlers() <= 1) {
					cm.sendOk("您只有一隻神奇寶貝喔");
					cm.dispose();
					return;
				}
				var selStr = "#d要讓#k #r" + battlers[sel].getName() + "#k #d與誰交換?#k\r\n\r\n#d";
				for (var i = 0; i < battlers.length; i++) {
					if (battlers[i] != null && i != sel) {
						selStr += "#L" + i + "#" + icon3 + " " + battlers[i].getName() + "#k #b(" + MapleLifeFactory.getMonster(battlers[i].getMonsterId()).getStats().getName() + ")#k #d等級#k #r" + battlers[i].getLevel() + "#k#l\r\n";
					}
				}
				cm.sendSimple(selStr);
			} else if (selection == 5) {
				if (cm.getPlayer().countBattlers() >= 6) {
					cm.sendOk("#d您隊伍裡面已經有6隻神奇寶貝囉!");
					cm.dispose();
					return;
				}
				var battt = cm.getPlayer().getBattlers();	
				for (var i = 0; i < battt.length; i++) {
					if (battt[i] != null && battlers.get(sel).getMonsterId() == battt[i].getMonsterId()) {
						cm.sendOk("#d您隊伍裡面已經有一隻一樣的神奇寶貝了!#k");
						status = -1;
						return;
					}
				}
				cm.getPlayer().getBattlers()[cm.getPlayer().countBattlers()] = battlers.get(sel);
				battlers.remove(sel);
				cm.getPlayer().changedBattler();
				cm.sendOk("#d成功取出此神奇寶貝#k");
				status = -1;
			} else if (selection == 6) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				if (battlers[sel].getItem() != null) {
					if (cm.canHold(battlers[sel].getItem().id, 1)) {
						cm.gainItem(battlers[sel].getItem().id, 1);	
						cm.sendOk("您已經從此神奇寶貝取下道具了");
						battlers[sel].setItem(0);
					} else {
						cm.sendOk("請擴充道具欄");
					}
					status = -1;
					return;
				}
				var selStr = "您想要給予#r" +  battlers[sel].getName() + " #k#d(" + MapleLifeFactory.getMonster(battlers[sel].getMonsterId()).getStats().getName() + ")#k 什麼裝備呢?#b\r\n";
				var hi = cm.getAllHoldItems();
				var pass = false;
				for (var i = 0; i < hi.length; i++) {
					if (cm.haveItem(hi[i].id, 1)) {
						pass = true;
						selStr += "#L" + i + "#" + icon3 +" #i" + hi[i].id + "#" + hi[i].customName + "#l\r\n";
					}
				}
				if (!pass) {
					cm.sendOk("您並沒有裝備");
					status = -1;
				} else {
					cm.sendSimple(selStr);
				}
			} else if (selection == 7) {
				if (cm.getPlayer().getBattle() != null) {
					status = -1;	
					return;
				}
				cm.sendOk(battlers[sel].getIVString());
				status = -1;
			}
		} else if (status == 3) {
			if (sec == 0) {
				if (cm.haveItem(battlers[sel].getFamily().evoItem.id)) {
					cm.gainItem(battlers[sel].getFamily().evoItem.id, -1);
					battlers[sel].evolve(true, cm.getPlayer());
					cm.getPlayer().changedBattler();
					cm.playSound(false, "5th_Maple/gaga");
					cm.sendNext("您的神奇寶貝進化了!!!");
				}
			} else if (sec == 1) {
				if (cm.getPlayer().removeBattler(sel)) {
					cm.sendOk("#d已經釋放您的神奇寶貝!#k");
				} else {
					cm.sendOk("#d你不能把所有神奇寶貝釋放光光喔#k");
				}
				status = -1;
			} else if (sec == 3) {
				if (cm.getText().length() < 2 || cm.getText().length() > 20) {
					cm.sendOk("#r" + cm.getText() + "#k #d此名稱不符合規定#k");
				} else {
					cm.getPlayer().changedBattler();
					battlers[sel].setName(cm.getText());
					cm.sendOk("#d已將此神奇寶貝名字更改為#k #r" + cm.getText() + "#k");
					status = -1;
				}
			} else if (sec == 4) {
				if (battlers[selection] != null) {
					var dummy = cm.getPlayer().getBattlers()[selection];
					cm.getPlayer().getBattlers()[selection] = cm.getPlayer().getBattlers()[sel];
					cm.getPlayer().getBattlers()[sel] = dummy;
					cm.getPlayer().changedBattler();
					cm.sendOk("成功編輯隊伍!!!");
					status = -1;
				}	
			} else if (sec == 6) {
				var hi = cm.getAllHoldItems()[selection];
				if (cm.haveItem(hi.id, 1)) {
					cm.gainItem(hi.id, -1);
					battlers[sel].setItem(hi.id);
					cm.sendOk("已為您裝備此道具");
					status = -1;
				}
			}
			//cm.dispose();
		}
	}
}