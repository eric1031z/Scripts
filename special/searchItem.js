var status = -1;
var onlyCash = true;
var onlyEquip = true;
var noStat = true;

function start() {
	action(1, 0, 0);
}

function action(m, t, s) {
	if (m == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		var msg = "請輸入要裝備的點裝名稱\r\n";
		cm.sendGetText(msg);
	} else if (status == 1) {
		cm.sendSimple(cm.searchItem(cm.getText(), onlyCash, onlyEquip));
	} else if (status == 2) {
		if (onlyCash && !cm.isCash(s)) {
			cm.sendNext("發生未知的錯誤1");
			cm.dispose();
			return;
		} else if (onlyEquip && s > 1999999) {
			cm.sendNext("發生未知的錯誤2");
			cm.dispose();
			return;
		} else if (!cm.canHold(s, 1)) {
			cm.sendNext("背包已滿, 無法獲得#v" + s + "##t" + s + "#");
			cm.dispose();
			return;
		} else {
			cm.sendNext("獲得了#v" + s + "##t" + s + "#");
			if (noStat) {
				cm.gainNoStatItem(s);
			} else {
				cm.gainItem(s, 1);
			}
			status = -1;
		}
	}
}
