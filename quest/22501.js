var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 3) {
			qm.sendNext("*唉* 你怎麼拒絕餵食...? 這是在虐待動物阿!");
			qm.dispose();
			return;
		}
		status--;
	}
    if (status == 0) {
        qm.sendNext("唷，主人，現在你已經看見我的能力了吧？現在換你證明…你找得到食物！我快餓死了，你會用我的能力了，現在你應該能照顧我。");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendNextPrevS("痾…我還是有點搞不清楚狀況，但我不能讓你這小隻馬挨餓對吧？食物？你要吃什麼？", 2);
    } else if (status == 2) {
        qm.sendNextPrev("喂，我幾分鐘前才剛出生，我怎知道我要吃什麼？我只知道我是隻龍…我是你的龍，你是我的主人r。你必須對我好一點！");
    } else if (status == 3) {
        qm.askAcceptDecline("我想我們還必須磨合，可是我現在很餓。主人，我要食物，記得我只是隻寶貝龍，我要哭哭了！");
    } else if (status == 4) {
        qm.forceStartQuest();
        qm.sendOkS("#b(額這寶貝龍好像餓爆了，你要趕快餵牠。你爸應該能給點建議。)", 2);
        qm.dispose();
    }
}

function end(mode, type, selection) {}
