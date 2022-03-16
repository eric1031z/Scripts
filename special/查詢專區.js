load('nashorn:mozilla_compat.js');
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);



var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var status = -1;


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		status = 0;
	}
	
    if (status == 0) {
		var msg = ""
		msg += icon5 + " #d【查詢專區】#k #b可使用代碼快速找到髮型/眼型#k\r\n";
		msg += "================================================\r\n"
		msg += "       #L999#" + icon1 + " #d離開頁面#k#l   #L9999#" + icon1 + " #d回造型區#k#l\r\n\r\n";
		msg += "================================================\r\n"
		msg += "#L0#" + icon3 + " #b查詢髮型/眼型#k#r(將自動開啟巴哈網頁)#k#l ";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. k = selection;
		if(k == 999){
			cm.dispose();
		}else if(k == 9999){
			cm.dispose();
			cm.openNpc(9010000,"造型專區");
		}else{
		    cm.openWindow("https://forum.gamer.com.tw/Co.php?bsn=07650&sn=6152110");
			cm.sendOk("#d已為您打開頁面#k\r\n#r請在此網頁搜尋後詳記代碼至髮型/眼型區域查詢#k");
			status = -1;
		}
	}
}
		