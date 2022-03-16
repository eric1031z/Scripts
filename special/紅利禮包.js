
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


var topic = "紅利禮包";



var pack = [

   [
    [150],
	[5220010,1],
	[5220000,20],
   ],
     
];



function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
	
	var points;
	var points2;
	
	
	
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
		cm.openNpc(9010000,"購買專區");
	}
	
    if (status == 0) {
		var msg =  icon3 + " #d【" + topic + "】#k\r\n#L9999#" + icon1 + "#b《關鍵字查詢》#k\r\n";
		
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon5+"#b《購買 #k#r#z" + pack[a][1][0] + "##k#b禮包》#k #d 查看購買資訊#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == -1){
			cm.dispose();
	    }else if(sel == 9999){
			cm.sendGetText("#r輸入您欲查詢物品關鍵字，我們將提供匹配結果");
		}else{
		var memo = "#b【此禮包內容物為】 :#k\r\n";
		var needs = "";
		for(var b = 1 ; b < pack[sel].length ; b++) {
			needs += "#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k\r\n";
		}
		memo += needs;
		memo += "\r\n#r需要  : #k#d" + pack[sel][0][0] + "#k #r 紅利#k"; 

		
		cm.sendYesNo(memo);
		}
	}else if(status == 2){
		if(sel == 9999){
			var jt = cm.getText();
			var cur = "";
			for(var ci = 0; ci < pack.length ; ci++){
				var itemname = MapleItemInformationProvider.getInstance().getName(pack[ci][1][0]);
				itemn = itemname.toString();
				if(itemn.match(jt.toString())){
					cur += "#L" + ci + "#"+icon5+"#b《購買 #k#r#z" + pack[ci][1][0] + "##k#b禮包》#k #d 查看購買資訊#k\r\n";
				}
			}
			cm.sendSimple("#r以下是進階查詢後的結果 :\r\n#b" + cur + "#k");
		}else{
			cm.sendGetNumber("#d請輸入欲購買組數 :",1,1,10000);
		}
	}else if(status == 3){
		var checkitems = 1;
		if(sel == 9999){
			this. sel1 = selection;
			var memo1 = "#b【此禮包內容物為】 :#k\r\n";
		    var needs1 = "";
		    for(var b1 = 1 ; b1 < pack[sel1].length ; b1++) {
			     needs1 += "#i" + pack[sel1][b1][0] + " # #z" + pack[sel1][b1][0] + "# 共 : #r" + pack[sel1][b1][1] + " 個#k\r\n";
		    }
		    memo1 += needs1;
		    memo1 += "\r\n#r需要  : #k#d" + pack[sel1][0][0] + "#k #r 紅利#k"; 

		
		    cm.sendYesNo(memo1);
		}else{
			var oii = selection;
		    var notice = "#b您欲購買#k #d#i" + pack[sel][1][0] + " # #z" + pack[sel][1][0] + " ##k#r 需要的紅利點數不足 #r" + (pack[sel][0][0]*oii - cm.getPlayer().getPoints()) + "#k 點";
		    if(cm.getPlayer().getPoints() < pack[sel][0][0]*oii){
			   cm.sendOk(notice);
			   cm.dispose();
		    }else {
			   cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (pack[sel][0][0]*oii));
			   for(var c = 1 ; c < pack[sel].length ; c++){
				   cm.gainItem(pack[sel][c][0],pack[sel][c][1]*oii);
			   }
			   
			   cm.sendOk("謝謝您的購買!");
			   cm.dispose();
		    }
		}
	}else if(status == 4){
		if(sel == 9999){
			cm.sendGetNumber("#d請輸入欲購買組數 :",1,1,10000);
		}else{
			cm.dispose();
		}
	}else if(status == 5){
		var checkitems1 = 1;
		var osy = selection;
		var notice1 = "#b您欲購買#k #d#i" + pack[sel1][1][0] + " # #z" + pack[sel1][1][0] + " ##k#r 需要的紅利點數不足 #r" + (pack[sel1][0][0]*osy - cm.getPlayer().getPoints()) + "#k 點";
		if(cm.getPlayer().getPoints() < pack[sel1][0][0]*osy){
			cm.sendOk(notice1);
			cm.dispose();
		}else {
			cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (pack[sel1][0][0]*osy));
			for(var c1 = 1 ; c1 < pack[sel1].length ; c1++){
				cm.gainItem(pack[sel1][c1][0],pack[sel1][c1][1]*osy);
			}
			
			
			cm.sendOk("謝謝您的購買!");
			cm.dispose();
		}
	}
}
		