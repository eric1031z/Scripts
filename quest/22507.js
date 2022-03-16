var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 14) {
            qm.sendNext("唉，我和你說這麼多你還拒絕我?");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("我就知道！我知道我們心有靈犀一點通，主人！當你變強的同時，我也會變強。我變強壯之後你就能用我的力量！這就是我們的契約，我就知道我找對人了。");
    } else if (status == 1) {
        qm.sendNextPrevS("#b嗯。我們怎麼樣才能結束這段關係呢？#k", 2);
    } else if (status == 2) {
        qm.sendNextPrev("啊災，我那時只是一顆蛋，我根本不記得了，我想我faintly recall you你主人走向我在迷霧森林我記得你看見我很驚訝我也呼喚著你");
    } else if (status == 3) {
        qm.sendNextPrevS("#b(等等！那不就是我作的夢嗎？難不成那個人不就是我夢裡那模糊的人？我們有同樣的默契？#k", 2);
    } else if (status == 4) {
        qm.sendNextPrev("用天線，用天線，排成愛你的形狀，喔喔… 主人，醒醒！當我第一眼看見你，我就選了你，而不是別人，你當然要為此付出代價。");
    } else if (status == 5) {
        qm.sendNextPrevS("#b付出代價？#k", 2);
    } else if (status == 6) {
        qm.sendNextPrev("你不記得了嗎？當你碰我的時候，就觸發了條件，你碰我的蛋，我們靈魂就會合而為一。");
    } else if (status == 7) {
        qm.sendNextPrevS("#b合而…為一？", 2);
    } else if (status == 8) {
        qm.sendNextPrev("沒錯！靈魂契約！你跟我用不同的身體，但是我們共用一個靈魂，這也是為什麼你變強我也會變強，反之亦然。超棒的不是嗎？至少我是這麼認為啦。");
    } else if (status == 9) {
        qm.sendNextPrevS("#b你在說什麼我根本不知道，不過聽起來是很重要的事情呢。#k", 2);
    } else if (status == 10) {
        qm.sendNextPrev("廢話當然是很重要的事，你以後再也不用擔心怪物來襲，你有我的保護，快用我看看！");
    } else if (status == 11) {
        qm.sendNextPrevS("#b可是待在這裡很安全，附近沒有危險的怪物啊。#k", 2);
    } else if (status == 12) {
        qm.sendNextPrev("什麼?這樣不好玩啦！你不喜歡冒險嗎？打擊怪物、保護人民、擊敗惡魔、救出無辜，你都不喜歡？");
    } else if (status == 13) {
        qm.sendNextPrevS("#b這不在我的五年五百億計畫之中耶，開玩笑的啦。不過，我只是一個農村長大的小孩…#k", 2);
    } else if (status == 14) {
        qm.askAcceptDecline("讓我好好教你，龍的主人是不可能有安詳的日子過的，我有百萬個讓你死的方法等你去挑戰，相信我，我們的人生會是一場冒險之旅。答應我你會跟著我，好嗎？");
    } else if (status == 15) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.sendNextS("喔耶，太棒了，我們出發吧！", 1);
    } else if (status == 16) {
        qm.sendNextPrevS("#b(雖然懵懵懂懂，但現在跟著龍去旅行，應該能像牠說的一起冒險吧？)#k", 3);
    } else if (status == 17) {
        qm.sendPrevS("#b(還有一件跑腿要做，爸爸正在等我回去。)#k", 2);
        qm.dispose();
    }
}

function end(mode, type, selection) {}