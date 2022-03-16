var status = -1;
var partycheck = false;
var selectedBuff;
var sel;

function start() {
	if (cm.getMapId() == 925020001) {
		cm.sendOk("讓我休息一下");
		cm.dispose();
		//cm.sendSimple("師父是這裡的第一強者。像你這種傢伙也敢挑戰？你會後悔的！\r\n#b#L0#我要挑戰武陵道場。#l\r\n#L2#兌換腰帶\r\n#L3#我想查看武陵道場可以拿到的獎勵.\r\n#L4#武陵道場是什麼？\r\n#L5#我想確認今天還能打幾次.#l\r\n#b#L6##b我想查看自己的道場點數。");
	} else if (isRestingSpot(cm.getMapId())) {
		var dojoTime = Packages.tools.StringUtil.getReadableMillis(cm.getPlayer().dojoStartTime, cm.getPlayer().dojoMapEndTime);
		cm.sendSimple("沒想到你能平安來到這裡，真讓人吃驚。但是接下去可沒那麼容易。怎麼樣？你想繼續挑戰嗎?" + (cm.getPlayer().getDojoMode() == Packages.client.MapleCharacter.DojoMode.RANKED ? "\r\n#r目前為止消耗時間：" + dojoTime : "") + (cm.getPlayer().getInfoQuest(7218).equals("1") ? "" : "") + "#b\r\n#L1#要繼續挑戰。#l\r\n#L2#離開。#l");
	} else {
		cm.sendYesNo("你要放棄?現在只要通過下一階段就能大功告成了.你真的要放棄並離開嗎?");
	}
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (cm.getMapId() == 925020001) {
		if (status == 0) {
			sel = selection;
			if (selection == 0) {
				status = 4;
				cm.sendSimple("歡迎挑戰武陵道場#b\r\r\n\n#L0#挑戰簡單模式(#r130等#b)#l\r\n#L1#挑戰普通模式(#r150等#b)#l\r\n#L2##b挑戰困難模式(#r160等#b)#l\r\n#L3##b挑戰排名模式(#r130等#b)#l");
			} else if (selection == 2) {
				cm.sendSimple("如果有#b#i4001620# #t4001620##k, 就給你#b腰帶#k。不過，這個腰帶在 #r#e15天#k#n 之後會消失，如果還想要就再收集武功的證物吧。\r\n\r\n你想領取什麼腰帶呢？\r\n#b#L0##i1132112:# #t1132112# #r(需要武公的證物25個)#b#l\r\n#L1##i1132113:# #t1132113# #r(需要武公的證物50個)#b#l\r\n#L2##i1132114:# #t1132114# #r(需要武公的證物100個)#b#l\r\n#L3##i1132115:# #t1132115# #r(需要武公的證物125個)#b#l");
			} else if (selection == 3) {
				status = 5;
				cm.sendSimple("武陵道場裡,不管是哪個難度模式,只要收集到#t4001620#就能獲得#b武公的腰帶#k。如果你挑戰#b困難模式#k或#b排名模式#k，還可以獲得特殊獎勵。當然，能不能拿得到還得看你自己的實力。\r\n#b\r\n#L0#武公的腰帶都有什麼樣的？#l\r\n#L1#怎麼做才能在排名模式中獲得獎勵？#l");
			} else if (selection == 4) {
				cm.sendNext("我們師傅是武陵最強的人。武陵道場是師父建造的地方。武陵道場非常高，有多種難度任你挑戰，當然沒有一定實力是不可能挑戰成功的!");
				cm.dispose();
			} else if (selection == 5) {
				var ndojo = cm.getPlayer().getBossLog("武陵道場普");
				var rdojo = cm.getPlayer().getBossLog("武陵道場排");
				cm.sendNext("以下是您今天可以挑戰的次數:\r\n" + (3 - ndojo) + "次[簡單、普通、困難]模式, " + (1 - rdojo) + "次排行模式");
				cm.dispose();
			} else if (selection == 6) {
				cm.sendOk("您目前的道場點數為 #b" + cm.getDojoPoints() + "#k 點。請繼續努力.");
				cm.dispose();
			}
		} else if (status == 1) {
			var cost,
			itemID = 1132112 + selection;
			switch (selection) {
			case 0:
				cost = 25;
				break;
			case 1:
				cost = 50;
				break;
			case 2:
				cost = 100;
				break;
			case 3:
				cost = 125;
				break;
			}
			if (cm.haveItem(4001620, cost)) {
				if (cm.canHold(itemID)) {
					cm.gainItem(4001620, -cost);
					cm.gainItem(itemID, 1);
					cm.sendOk("兌換好了，如果有能力，可以在130級之後參加 #b排名模式#k！");
				} else {
					cm.sendOk("背包空間不足,請整理下你的裝備欄空間!");
				}
			} else {
				cm.sendOk("你不要騙我了,你確定你有#r" + cost + "#k個#b#i4001620# #t4001620##k嗎??");
			}
			cm.dispose();
		} else if (status == 5) {
			var reqLevel = selection == 0 ? 130 : selection == 1 ? 150 : 160;
			if (selection == 3) {
				if (cm.getParty() != null) {
					cm.sendNext("要挑戰排名模式前，請先退出組隊。");
					cm.dispose();
					return;
				}
				if (cm.getPlayer().getBossLog("武陵道場排") >= 100) {
					cm.sendNext("今天已經挑戰過排行模式了。");
					cm.dispose();
					return;
				}
				partycheck = false;
			} else {
				if (cm.getParty() != null) {
					if (!cm.isLeader()) { // 不是隊長
						cm.sendOk("隊長必須在這裡，請隊長跟我對話。");
						cm.dispose();
						return;
					} else if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
						cm.sendOk("隊長必須在這裡，請隊長跟我對話。");
						cm.dispose();
						return;
					} else if (!cm.isAllPartyMembersAllowedLevel(reqLevel, 255)) {
						cm.sendNext("組隊成員等級必須全 #r" + reqLevel + " 以上 #k才可以入場。");
						cm.dispose();
						return;
					} else if (!cm.allMembersHere()) {
						cm.sendOk("您的部分組員不在此地圖,請召集完畢後重新嘗試");
						cm.dispose();
						return;
					} else if (cm.getPlayer().getBossLog("武陵道場普") >= 3) {
						cm.sendOk("您的部分組員已經到達上限次數。");
						cm.dispose();
						return;
					}
					partycheck = true;
				}
			}
			switch (selection) {
				case 0:
				if (cm.getChar().getLevel() >= 130) {
				cm.setDojoMode(0);
				cm.getPlayer().setBossLog("武陵道場普");
				cm.start_DojoAgent(true, partycheck);
				cm.dispose();
				} else {
				cm.sendOk("要參與簡單難度須達 #b130 #k等.");
				}
				break;
				case 1:
				if (cm.getChar().getLevel() >= 150) {
				cm.setDojoMode(1);
				cm.getPlayer().setBossLog("武陵道場普");
				cm.start_DojoAgent(true, partycheck);
				cm.dispose()
				} else {
				cm.sendOk("要參與普通難度須達 #b150 #k等.");
				}
				break;
				case 2:
				if (cm.getChar().getLevel() >= 160) {
				cm.setDojoMode(2);
				cm.getPlayer().setBossLog("武陵道場普");
				cm.start_DojoAgent(true, partycheck);
				cm.dispose();
				} else {
				cm.sendOk("要參與困難難度須達 #b160 #k等.");
				}
				break;
				case 3:
				if (cm.getChar().getLevel() >= 130) {
				cm.setDojoMode(3);
				cm.getPlayer().setBossLog("武陵道場排");
				cm.startDojoRank();
				cm.start_DojoAgent(true, partycheck);
				cm.dispose();
				} else {
				cm.sendOk("要參與挑戰排名模式須達 #b130 #k等.");
				}
				break;
			}

		} else if (status == 6) {
			switch (selection) {
			case 0:
				cm.sendOk("你只要在武陵道場中蒐集到#i4001620# #t4001620#就能獲得#b武公的腰帶#k。武陵道場中偶爾會掉落#b腰帶專用捲軸#k，用它可以給腰帶升級，你別忘了好好蒐集一些。 \r\n#e <武公的證物獎勵：有效期15日>#n#b\r\n#i1132112:# #t1132112# #r(需要#t4001620#25個)#b\r\n#i1132113:# #t1132113# #r(需要#t4001620#50個)#b\r\n#i1132114:# #t1132114# #r(需要#t4001620#100個)#b\r\n#i1132115:# #t1132115# #r(需要#t4001620#125個)#k");
				break;
			case 1:
				cm.sendOk("挑戰排名模式，排名靠前，你就能獲得特別的獎勵。\r\n#e < 排名模式獎勵 >#n#b\r\n#i1082392:# #t1082392# #r(排名第1名)\r\n#b#i1082393:# #t1082393##r(排名第2~10名)\r\n#b#i1082394:# #t1082394# #r(排名第11~50名)");
				break;
			}
			cm.dispose();
		}
	} else if (isRestingSpot(cm.getMapId())) {
		if (status == 0) {
			if (selection == 0) {
				var text = "";
				potions = [[2022855, "HP恢復50%"], [2022856, "HP恢復100%"], [2022857, "最大HP + 10000 (持續時間: 10分鐘)"], [2022858, "攻擊力/魔法攻擊力+30 (持續時間: 10分鐘)"], [2022859, "攻擊力/魔法攻擊力+60 (持續時間: 10分鐘)"], [2022860, "物理/魔法防禦力+2500 (持續時間: 10分鐘)"], [2022861, "物理/魔法防禦力+4000 (持續時間: 10分鐘)"], [2022862, "命中值/迴避值 + 2000 (持續時間: 10分鐘)"], [2022863, "移動速度/跳躍力最大 (持續時間: 10分鐘)"], [2022864, "攻擊速度+1 (持續時間: 10 分鐘)"]];
				for (var i = 0; i < potions.length; text += "#" + i + "# " + potions[i][1] + "", i++);
				cm.askBuffSelection(text);
			} else if (selection == 1) {
				if (cm.getParty() == null || cm.isLeader()) {
					cm.dojoAgent_NextMap(true, true);
					cm.getPlayer().updateInfoQuest(7218, "1");
				} else {
					cm.sendOk("請组隊長跟我對話.");
				}
				cm.dispose();
			} else if (selection == 2) {
				status = 3;
				cm.askAcceptDecline("最後還是要放棄了嗎?真的想退出嗎?");
			}
		} else if (status == 1) {
			selectedBuff = 2022856 - 1 + selection;
			cm.sendYesNo("#i" + selectedBuff + "# #t" + selectedBuff + "#你要使用嗎？每個休息階段只能選擇一次，要慎重考慮！");
		} else if (status == 2) {
			cm.getPlayer().updateInfoQuest(7218, "0");
			cm.useItem(selectedBuff);
			cm.dispose();
		} else if (status == 4) {
			if (cm.isLeader()) {
				cm.warpParty(925020002);
			} else {
				cm.warp(925020002);
			}
			cm.dispose();
		}
	} else {
		if (mode == 1) {
			if (cm.isLeader()) {
				cm.warpParty(925020002);
			} else {
				cm.warp(925020002);
			}
		}
		cm.dispose();
	}
}

function getStageId(mapid) {
	if (mapid >= 925020600 && mapid <= 925020614) {
		return 1;
	} else if (mapid >= 925021200 && mapid <= 925021214) {
		return 2;
	} else if (mapid >= 925021800 && mapid <= 925021814) {
		return 3;
	} else if (mapid >= 925022400 && mapid <= 925022414) {
		return 4;
	} else if (mapid >= 925023000 && mapid <= 925023014) {
		return 5;
	} else if (mapid >= 925023600 && mapid <= 925023614) {
		return 6;
	}
	return 0;
}

function isRestingSpot(id) {
	return (getStageId(id) > 0);
}
