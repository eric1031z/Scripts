/*
Description: 	Quest - A Bite of Pork
 */

var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 2) {
			qm.sendNext("你怎麼能這樣對我？我要打家暴專線！");
			qm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
        qm.sendNext("不要不要不要不要不要，這不是肯德基，有沒有更營養一點的東西啊，主人？");
    } else if (status == 1) {
        qm.sendNextPrevS("#b嗯…所以你不是草食性動物，那你應該是肉食性囉！豬肉怎麼樣？#k", 2);
    } else if (status == 2) {
        qm.askAcceptDecline("豬肉…是什麼？從來沒聽過，不過如果美味的話我就接受。餵我好吃的，不要植物就好。");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.sendOkS("#b(工欲善其事，必先利其器。要當野豬騎士囉。去打10片豬肉吧。)#k", 2);
		qm.dispose();
	}
}

function end(mode, type, selection) {}
