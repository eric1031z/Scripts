var status = 0;
var cost = 3000;

function start() {
    cm.sendYesNo("你好，我是鵜鶘鳥，你想回到#b西門町#k嗎？金額3000楓幣。");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
            cm.sendOk("如果你想要回到#b西門町#k，再告訴我哦。");
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
        if (cm.getMeso() < cost) {
            cm.sendOk("請檢查楓幣數量。");
            cm.dispose();
        } else {
            cm.gainMeso(-cost);
            cm.warp(740000000, 0);
            cm.dispose();
        }
    }
}