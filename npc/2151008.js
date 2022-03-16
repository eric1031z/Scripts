var status = -1;
var map = 931000500;
var num = 10;
var maxp = 1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status <= 1) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "你想要進入美洲豹棲息地嗎？";
        for (var i = 0; i < num; i++) {
            selStr += "\r\n#b#L" + i + "#美洲豹棲息地 " + (i + 1) + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        if (selection < 0 || selection >= num) {
            cm.dispose();
        } else if (cm.getPlayerCount(map + selection) >= maxp) {
            cm.sendNext("目前有玩家正在捕捉美洲豹，請稍候再試。");
            status = -1;
        } else {
            cm.warp(map + selection, 0);
            cm.dispose();
        }
    }
}