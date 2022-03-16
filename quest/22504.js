/*
Description: 	Quest - Tasty Milk 1
 */

var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 2) {
			qm.sendNext("不要使用，試圖想一個辦法 我自認為 #b有人比老師聰明#k");
			qm.dispose();
			return;
		}
		status--;
	}
    if (status == 0) {
        qm.sendNext("噁！我要別的，不要植物，不要肉。什麼，你沒有想法？可是你是主人，人家是龍耶，生氣，你應該要幫人家找好東西啊！");
    } else if (status == 1) {
        qm.sendNextPrevS("#b可是我就是不知道啊，而且這跟龍有啥關係？", 2);
    } else if (status == 2) {
        qm.askAcceptDecline("我可是龍耶，你就應該要好好照顧人家啊，這不是理所當然的事情嗎？好吧，問問看其他人好了。");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.sendOkS("#b(你問過爸爸一次，可是沒有更好的活動，問一次不夠，那是不是要問兩次呢？就像老師說的，一個便當吃不飽，是不是要吃兩個呢？)#k", 2);
        qm.dispose();
    }
}

function end(mode, type, selection) {}
