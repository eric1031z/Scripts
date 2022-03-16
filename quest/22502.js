/*
Description: 	Quest - A Bite of Hay
 */

var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			qm.sendNext("不經一事不長一智，懂？沒試過怎知道那女的對你有沒有意思？哈哈看啊！");
			qm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		qm.askAcceptDecline("蜥蜴不是會哈#b草#k嗎？旁邊不是有一堆#b草#k，餵牠看看。");
	} else if (status == 1) {
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/12/0", 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {}
