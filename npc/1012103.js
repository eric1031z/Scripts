﻿var status = 0;
var beauty = 0;
var mhair = Array(30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200);
var fhair = Array(31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070);
var hairnew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode < 1) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			if (cm.getQuestStatus(29020) == 0) {
				cm.dispose();
				cm.openNpc(1012103,1);
				return;
			}
			cm.sendSimple("您好，我是這間美髮店的老闆. 如果你有 #b#t5150001##k 或者有 #b#t5151001##k 請允許我把你的頭髮護理。請選擇一個你想要的.\r\n#L1#使用 #i5150001##t5150001##l\r\n#L2#使用 #i5151001##t5151001##l");
		} else if (status == 1) {
			if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getPlayer().getGender() == 0)
					for (var i = 0; i < mhair.length; i++)
						hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair() % 10));
				if (cm.getPlayer().getGender() == 1)
					for (var i = 0; i < fhair.length; i++)
						hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
				cm.sendStyle("選擇一個想要的.", hairnew);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getPlayer().getHair() / 10) * 10;
				for (var i = 0; i < 8; i++)
					haircolor.push(current + i);
				cm.sendStyle("選擇一個想要的", haircolor);
			}
		} else if (status == 2) {
			cm.dispose();
			if (beauty == 1) {
				if (cm.haveItem(5150001)) {
					cm.gainItem(5150001, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("享受!");
				} else
					cm.sendOk("您貌似沒有#b#t5150001##k..");
			}
			if (beauty == 2) {
				if (cm.haveItem(5151001)) {
					cm.gainItem(5151001, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("享受!");
				} else {
					cm.sendOk("您貌似沒有#b#t5151001##k..");
				}
			}
		}
	}
}
