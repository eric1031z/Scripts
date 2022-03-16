var status = -1;

function start(mode, type, selection) {
	status++;
	if (mode != 1) {
		if (type == 1 && mode == 0)
			status -= 2;
		else {
			qm.sendNext("你不信我嗎?? 你讓我生氣了!");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("終於醒了！呼呼~ 這正是世上的空氣。呵呵，那正是太陽！那正是樹木！那是草！還有那裡是花！太棒了！比我在蛋裡面想像的還要棒！還有…咦？你是我的主人嗎？…怎麼長得這麼醜？");
	if (status == 1)
		qm.PlayerToNpc("#b哇，它正在說話！");
	if (status == 2)
		qm.sendNextPrev("#b(…我的主人是個好奇怪....)#k\r\n不是早就訂下契約了嗎？\r\n#b(唉…我想我大概沒辦法改變了，契約已經立下。)\r\n#k以 後 請 多 多 關 照，未來的路還很長呢。");
	if (status == 3)
		qm.PlayerToNpc("#b嗯?什麼意思?什麼契約?");
	if (status == 4)
		qm.sendNextPrev("什麼意思你把我從蛋裡面孵出來所以締結了契約！你就是我的主人。當然要好好照顧我，幫助我成為更強大的龍。不是嗎？");
	if (status == 5)
		qm.PlayerToNpc("#b啊啊啊？龍？你叫做龍嗎？我根本不知道什麼你在說什麼！契約又是什麼！主人又是什麼！");
	if (status == 6)
		qm.sendNextPrev("你在說什麼?你和我簽訂了龍與人類的靈魂合而為一的契約，不是嗎?因此你當然就成了我的主人。連這個也不懂還敢簽約?可是已經太遲了，我想解約也不行。");
	if (status == 7)
		qm.PlayerToNpc("#b等一下...等一下...讓我說清楚你的意思是說我沒有選擇的權利，只能幫助你?");
	if (status == 8)
		qm.sendNextPrev("欸! 嘿...! 臉上長了什麼?你是不是不想當我的主人...?");
	if (status == 9)
		qm.PlayerToNpc("#不是.....它不是 我只是不知道它是一隻寵物...");
	if (status == 10)
		qm.sendNextPrev("一隻寵....寵....寵物？那你為什麼要和我立下契約阿？好歹我也是世界動物的龍頭！");
	if (status == 11)
		qm.PlayerToNpc("#b...#b(我怎麼看都是蜥蜴啊！)#k");
	if (status == 12)
		qm.sendAcceptDecline("你那什麼臉啊？你當我是蜥蜴是不是啊？我忍無可忍了，我現在就給你點顏色瞧瞧！");
	if (status == 13) {
		qm.forceStartQuest();
		qm.sendNext("立刻攻擊#r#o1210100##k吧！我會喚醒你的魔力，證明我的能力！突擊！");
	}
	if (status == 14)
		qm.sendNextPrev("等等，不對，在那之前你也分配一下AP吧？我的魔力會被你那可悲的#bINT和LUK#k影響！給我確實分配AP、裝備#b魔法師裝備#k後再戰鬥！");
	if (status == 15) {
		qm.evanTutorial("UI/tutorial/evan/11/0", -1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	if (mode != 1) {
		if (type == 1 && mode == 0)
			status -= 2;
		else {
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendOk("哈！你覺得怎麼樣?我的能力很強大吧??請您盡情使用它們，這就是我的要求而已。");
	if (status == 1) {
		qm.forceCompleteQuest();
		qm.gainExp(1270);
		qm.getPlayer().gainSP(1, 0);
		qm.sendOk("哦，不我餓了...使用過度的能量讓我覺得飢餓!");
		qm.dispose();
	}
}
