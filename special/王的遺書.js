
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時



var topic = "王的遺書";

var pack = [
   [
   [1102041,1],
    [4460002,1],
    [4460001,1],
	[4460000,1],
	[5800002,1],
	[5800001,1],
   ],
   [
   [2340000,2],
	[4460001,1],
   ],
      [
   [2340000,2],
	[4460002,1],
   ],
      [
   [2340000,2],
	[4460000,1],
   ],
      [
   [1102042,1],
    [4460002,1],
    [4460001,1],
	[4460000,1],
		[5800002,1],
	[5800001,1],
   ],

      [
    [2049700,1],
	[4460001,2],
   ],
        [
    [2531000,1],
	[4460002,2],
   ],
   [
      [5062000,8],
	[4460001,1],
   ],
      [
   [5062000,8],
	[4460002,1],
   ],
      [
   [5062000,8],
	[4460000,1],
   ],
   [
         [5062001,5],
	[4460001,1],
   ],
      [
   [5062001,5],
	[4460002,1],
   ],
      [
   [5062001,5],
	[4460000,1],
   ],
  
   

    
];



function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	
    if (status == 0) {
		var msg =  icon3 + " #d【" + topic + "】#k \r\n#L9999#" + icon3 + "#b《關鍵字查詢》#k\r\n";
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon5+"#b《兌換 #k#r#z" + pack[a][0][0] + "##r#b》#k #d 查看需要物品#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == -1){
			cm.dispose();
	    }else if(sel == 9999){
			cm.sendGetText("#r輸入您欲查詢物品關鍵字，我們將提供匹配結果");
		}else{
		var memo = "#b【此兌換詳細需要內容物為】 :#k\r\n";
		var needs = "";
		for(var b = 1 ; b < pack[sel].length ; b++) {
			needs += "#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k\r\n";
		}
		memo += needs;
		//var date = pack[sel][b][16] == -1 ? "無期限" : (pack[sel][b][16] + "天");
		memo += "#r可兌換  : #k#d#i" + pack[sel][0][0] + "# #z" + pack[sel][0][0] + "##k 共 : #r" + pack[sel][0][1] + " 個#k"; 

		
		cm.sendYesNo(memo);
		}
	}else if(status == 2){
		if(sel == 9999){
			var jt = cm.getText();
			var cur = "";
			for(var ci = 0; ci < pack.length ; ci++){
				var itemname = MapleItemInformationProvider.getInstance().getName(pack[ci][0][0]);
				itemn = itemname.toString();
				if(itemn.match(jt.toString())){
					cur += "#L" + ci + "#"+icon5+"#b《兌換 #k#r#z" + pack[ci][0][0] + "##r#b》#k #d 查看需要物品#k\r\n";
				}
			}
			cm.sendSimple(icon3 +" #d以下是進階查詢後的結果 :\r\n#b" + cur + "#k");
		}else{
		var checkitems = 1;
		var notice = "#b您欲兌換#k #r#i" + pack[sel][0][0] + " # #z" + pack[sel][0][0] + " #缺少以下材料 ：\r\n";
		for(var cc = 1 ; cc < pack[sel].length ; cc ++){
			if(!cm.haveItem(pack[sel][cc][0],pack[sel][cc][1])){
				checkitems ++;
				notice += "#b缺少材料#k :#i" + pack[sel][cc][0] + "# #z" + pack[sel][cc][0] + "# 共 #r " + pack[sel][cc][1] + "個#k\r\n";
			}
		}
		if(checkitems > 1){
			cm.sendOk(notice);
			cm.dispose();
		}else {
			cm.getPlayer().gainItem(pack[sel][0][0],pack[sel][0][1]);
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItem(pack[sel][c][0],-pack[sel][c][1]);
			}
			
			cm.sendOk("謝謝您的兌換!");
			cm.dispose();
		}
		}
	}else if(status == 3){
		if(sel == 9999){
			this. sel1 = selection;
			var memo1 = "#b【此兌換詳細需要內容物為】 :#k\r\n";
		    var needs1 = "";
		    for(var b1 = 1 ; b1 < pack[sel1].length ; b1++) {
			     needs1 += "#i" + pack[sel1][b1][0] + " # #z" + pack[sel1][b1][0] + "# 共 : #r" + pack[sel1][b1][1] + " 個#k\r\n";
		    }
		    memo1 += needs1;
		    memo1 += "#r可兌換  : #k#d#i" + pack[sel1][0][0] + "# #z" + pack[sel1][0][0] + "##k 共 : #r" + pack[sel1][0][1] + " 個#k"; 

		
		    cm.sendYesNo(memo1);
		}else{
			cm.dispose();
		}
	}else if(status == 4){
		var checkitems1 = 1;
		var notice1 = "#b您欲兌換#k #r#i" + pack[sel1][0][0] + " # #z" + pack[sel1][0][0] + " #缺少以下材料 ：\r\n";
		for(var cc1 = 1 ; cc1 < pack[sel1].length ; cc1 ++){
			if(!cm.haveItem(pack[sel1][cc1][0],pack[sel1][cc1][1])){
				checkitems1 ++;
				notice1 += "#b缺少材料#k :#i" + pack[sel1][cc1][0] + "# #z" + pack[sel1][cc1][0] + "# 共 #r " + pack[sel1][cc1][1] + "個#k\r\n";
			}
		}
		if(checkitems1 > 1){
			cm.sendOk(notice1);
			status = -1;
		}else {
			cm.getPlayer().gainItem(pack[sel1][0][0],pack[sel1][0][1]);
			for(var c1 = 1 ; c1 < pack[sel1].length ; c1++){
				cm.gainItem(pack[sel1][c1][0],-pack[sel1][c1][1]);
			}
			
			cm.sendOk("謝謝您的兌換!");
			status = -1;
		}
	}
}
		