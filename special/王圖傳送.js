var status = -1;
//依序添加地圖代碼
var mapid = [
	800040410,541020800,702070400,800040206,801040003,741020100,230040420,211042300,270050000,220080000,501030104,551030100,240050400,
];
var isMap;
var maptype;
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			var map = "看一下你想去挑戰什麼BOSS呢#b";
			maptype = selection;
			for (var i = 0; i < mapid.length; i++) {
				map += "\r\n#L" + i + "##m" + mapid[i] + "#";
			}
			cm.sendOk(map);
		} else if (status == 1) {
			isMap = mapid[selection];
			cm.sendYesNo("你確定要去#m" + isMap + "#嗎?");
		} else if (status == 2) {
			cm.warp(isMap, 0);
			cm.dispose();
		}
	}
}
	