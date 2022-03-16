/*
	Maple Administrator - Displays Battler Info
*/

load('nashorn:mozilla_compat.js');
importPackage(Packages.server.life);
;; //錯誤
var status = -1;
var sel = 0;
var sec = 0;
var defaul = new Array(1210102, 1210100, 210100);

var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

function action(mode, type, selection) {
	var battlers = cm.getPlayer().getBattlers();
	if (mode != 1) {
    		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			if (battlers[0] == null) {
				if (cm.getPlayer().getLevel() < 30) {
					cm.sendOk("30等以後才能成為訓練家喔");
					cm.dispose();
				} else if (cm.getPlayer().getBoxed().size() > 0) {
					cm.sendOk("您已經有尚未取得的神奇寶貝了");
					cm.dispose();
				} else {
					var selStr = icon5 + " #d【神奇寶貝系統】#k\r\n";
					selStr += icon1 + " #b" + cm.getPlayer().getName() + "#k #d玩家您好!您貌似好像還沒有開始冒險的旅程!! 請選一隻您喜歡的神奇寶貝吧!\r\n#k#r";

					for (var i = 0; i < defaul.length; i++) {
						if (defaul[i] != null) {
							selStr += "#L" + i + "#" + icon3 + " " + MapleLifeFactory.getMonster(defaul[i]).getStats().getName() + "#l\r\n";
						}
					}
					cm.sendSimple(selStr);
				}
				return;
			}
			var selStr = icon3 + " #d目前勝利 : #k#r" + cm.getPlayer().getTotalWins() + "#k " + icon3 + " #d目前失敗 : #k#r" + cm.getPlayer().getTotalLosses() + "#k\r\n" + icon1 + " #b想要查看哪一隻神奇寶貝的素質呢?#k\r\n\r\n#d";
			for (var i = 0; i < battlers.length; i++) {
				if (battlers[i] != null) {
					try {
						selStr += "#L" + i + "#" + icon5  + " #r" + battlers[i].getName() + "#k#d (" + MapleLifeFactory.getMonster(battlers[i].getMonsterId()).getStats().getName() + ")#k\r\n";
						//selStr += "#L" + i + "#" + icon5  + " #d" + battlers[i].getName() + "#k#b (#o" + battlers[i].getMonsterId() + "#)#k#r 等級 " + battlers[i].getLevel() + "#k #d" + battlers[i].getGenderString() + "#k\r\n   HP " + battlers[i].getCurrentHP() + "/" + battlers[i].calcHP() + " #b 狀態: " + battlers[i].getStatusString() + "#k#l\r\n\r\n";
					} catch (e) {
						cm.sendOk("錯誤: " + e);
						cm.dispose();
						cm.outputFileError(e);
						return;
					}
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
				info += "#L5#" + icon5 + " 儲存此神奇寶貝#l\r\n";
				info += "#L6#" + icon5 + " 給予/取下道具#l\r\n";
				info += "#L7#" + icon5 + " 評價此神奇寶貝#l\r\n";
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
					cm.sendNext("恭喜！你的神奇寶貝已完成最終進化");
					cm.dispose();
				} else if (evo == 1) {
					cm.sendNext("你還差的遠呢，首先你必須好好提升等級");
					cm.dispose();
				} else if (evo == 2) {
					var selStr = "你只能使用特定的道具進化你的神奇寶貝，當然我這邊也能協助你，來看看吧 :\r\n\r\n";
					if (cm.haveItem(battlers[sel].getFamily().evoItem.id)) {
						cm.sendSimple(selStr + "#L0##v" + battlers[sel].getFamily().evoItem.id + "##z" + battlers[sel].getFamily().evoItem.id + "##l");
					} else {
						cm.sendNext(selStr + "您並沒有進化所需的道具 : #v" + battlers[sel].getFamily().evoItem.id + "##z" + battlers[sel].getFamily().evoItem.id + "#");
						cm.dispose();
					}
				}
				
			} else if (selection == 1) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				cm.sendYesNo("你確定你要釋放 " + battlers[sel].getName() + " (#o" + battlers[sel].getMonsterId() + "#)?");
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
				var selStr = "要讓 " + battlers[sel].getName() + " 與誰交換?\r\n\r\n#b";
				for (var i = 0; i < battlers.length; i++) {
					if (battlers[i] != null && i != sel) {
						selStr += "#L" + i + "#" + battlers[i].getName() + " (#o" + battlers[i].getMonsterId() + "#) 等級 " + battlers[i].getLevel() + " " + battlers[i].getGenderString() + ", HP #B" + battlers[i].getHPPercent() + "# - " + battlers[i].getCurrentHP() + "/" + battlers[i].calcHP() + ", 狀態: " + battlers[i].getStatusString() + "#l\r\n";
					}
				}
				cm.sendSimple(selStr);
			} else if (selection == 5) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				if (cm.getPlayer().countBattlers() <= 1) {
					cm.sendOk("您只有一隻神奇寶貝喔");
					cm.dispose();
					return;
				}
				cm.getPlayer().getBoxed().add(battlers[sel]);
				for (var i = sel; i < battlers.length; i++) {
					cm.getPlayer().getBattlers()[i] = ((i + 1) == battlers.length ? null : cm.getPlayer().getBattlers()[i + 1]);
				}
				cm.getPlayer().changedBattler();
				cm.sendOk("此神奇寶貝已經儲存完成");
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
					cm.dispose();
					return;
				}
				var selStr = "您想要給予#r" +  battlers[sel].getName() + " #k#d(#o" + battlers[sel].getMonsterId() + "#)#k 什麼裝備呢?#b\r\n";
				var hi = cm.getAllHoldItems();
				var pass = false;
				for (var i = 0; i < hi.length; i++) {
					if (cm.haveItem(hi[i].id, 1)) {
						pass = true;
						selStr += "#L" + i + "##i" + hi[i].id + "#" + hi[i].customName + "#l\r\n";
					}
				}
				if (!pass) {
					cm.sendNext("您並沒有裝備");
					cm.dispose();
				} else {
					cm.sendSimple(selStr);
				}
			} else if (selection == 7) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				cm.sendNext(battlers[sel].getIVString());
				cm.dispose();
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
					cm.sendNext("已經釋放您的神奇寶貝!");
				} else {
					cm.sendOk("你不能把所有神奇寶貝釋放光光喔!");
				}
			} else if (sec == 3) {
				if (cm.getText().length() < 2 || cm.getText().length() > 20) {
					cm.sendOk(cm.getText() + " 此名稱不符合規定.");
				} else {
					cm.getPlayer().changedBattler();
					battlers[sel].setName(cm.getText());
				}
			} else if (sec == 4) {
				if (battlers[selection] != null) {
					var dummy = cm.getPlayer().getBattlers()[selection];
					cm.getPlayer().getBattlers()[selection] = cm.getPlayer().getBattlers()[sel];
					cm.getPlayer().getBattlers()[sel] = dummy;
					cm.getPlayer().changedBattler();
				}	
			} else if (sec == 6) {
				var hi = cm.getAllHoldItems()[selection];
				if (cm.haveItem(hi.id, 1)) {
					cm.gainItem(hi.id, -1);
					battlers[sel].setItem(hi.id);
					cm.sendOk("已為您裝備此道具.");
				}
			}
			cm.dispose();
		}
	}
}