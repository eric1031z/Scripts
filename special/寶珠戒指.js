
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時




var item = [

   [
     [1113231],
	 
	 [1113231,1,100,
	    [
		  [1112763,1],
		  [1112767,1],
		  [1112771,1],
		  [1112775,1],
		  [4440000,10],
		  [4441000,10],
		  [4442000,10],
		  [4443000,10],
		  [4000313,500],
		  [2250002,5],
		],1112763,1113231],
	 [1112766,1,70,
	    [
		  [1112766,1],
		  [4440000,10],
		  [4000313,30],
		  [2250001,5],
		],1112766,1112765],		
	 [1112765,1,70,
	    [
		  [1112765,1],
		  [4440000,10],
		  [4000313,30],
		  [2250001,5],
		],1112765,1112764],	
[1112764,1,70,
	    [
		  [1112764,1],
		  [4440000,10],
		  [4000313,30],
		  [2250001,5],
		],1112764,1112763],
	[1112770,1,70,
	    [
		  [1112770,1],
		  [4441000,10],
		  [4000313,30],
		  [2250001,5],
		],1112770,1112769],	
	[1112769,1,70,
	    [
		  [1112769,1],
		  [4441000,10],
		  [4000313,30],
		  [2250001,5],
		],1112769,1112768],		
	[1112768,1,70,
	    [
		  [1112768,1],
		  [4441000,10],
		  [4000313,30],
		  [2250001,5],
		],1112768,1112767],	
	[1112774,1,70,
	    [
		  [1112774,1],
		  [4442000,10],
		  [4000313,30],
		  [2250001,5],
		],1112774,1112773],	
	[1112773,1,70,
	    [
		  [1112773,1],
		  [4442000,10],
		  [4000313,30],
		  [2250001,5],
		],1112773,1112772],				
	[1112772,1,70,
	    [
		  [1112772,1],
		  [4442000,10],
		  [4000313,30],
		  [2250001,5],
		],1112772,1112771],	
	[1112778,1,70,
	    [
		  [1112778,1],
		  [4443000,10],
		  [4000313,30],
		  [2250001,5],
		],1112778,1112777],	
	[1112777,1,70,
	    [
		  [1112777,1],
		  [4443000,10],
		  [4000313,30],
		  [2250001,5],
		],1112777,1112776],		
	[1112776,1,70,
	    [
		  [1112776,1],
		  [4443000,10],
		  [4000313,30],
		  [2250001,5],
		],1112776,1112775],		
		
			
	


	 	
		
	 //初始道具代碼,道具合成模式,道具合成機率,合成材料[代碼,數量],失敗道具代碼,成品道具代碼;
   ],





]


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
		var msg = ""
		msg += icon5 + " #d道具合成#k #r點擊下列物品查看合成規則#k\r\n";
		for(var i = 0 ; i < item.length ; i++){
			msg += "#L" + i + "#" + icon3 + " #b#t" + item[i][0][0] + "##k\r\n"; 
		}
	    cm.sendSimple(msg);	
	}else if(status == 1){
		this. s = selection;
		var msg = "";
		msg += icon5 + " #d#t" + item[s][0][0] + "##k #r合成專區#k\r\n";
        msg += icon1 + " #b請將合成道具放在裝備欄第一格#k\r\n";
        for(var i = 1 ; i < item[s].length ; i++){
			msg += "#L" + i + "# #d#t" + item[s][i][0] + "##k #b >> #k#d#t" + item[s][i][5] + "##k #r(點擊查看規則)#k\r\n";  
		}			
		cm.sendSimple(msg);
	}else if(status == 2){
        this. s2 = selection;
		
		var msg = "";
		var memo = "";
		
		if(item[s][s2][1] == 0){
			memo = "#d失敗後#k #r#t" + item[s][s2][0] + "##k #d消失#k";
		}else if(item[s][s2][1] == 1){
			memo = "#d失敗後#k #r#t" + item[s][s2][0] + "##k #d退回#k #r#t" + item[s][s2][4] + "##k";
		}else if(item[s][s2][1] == 2){
			memo = "#d失敗後道具維持原樣#k";
		}
		
		var msg = "";
	    msg += icon5 + " #d【#t" + item[s][s2][0] + "# >> #t" + item[s][s2][5] + "#】 合成規則#k\r\n";
        msg += icon1 + " #b合成規則 :#k#r" + memo + "#k\r\n";
        msg += icon1 + " #b成功機率 :#k#r" + item[s][s2][2] + " %#k\r\n";
		msg += "---------------------------------------------------\r\n"
        for(var i = 0 ; i < item[s][s2][3].length ; i++){
			msg += icon3 + " #b需要 #d#i" + item[s][s2][3][i][0] + "# #z" + item[s][s2][3][i][0] + "##k #r" +  item[s][s2][3][i][1] + "#k #d個#k\r\n";
		}
		msg += "---------------------------------------------------\r\n"
        msg += icon1 + " #b確定要合成請點選#k#r「是」#k\r\n" + icon1 + " #d(請把合成道具放在裝備欄第一格)#k\r\n";
        cm.sendYesNo(msg);		
	}else if(status == 3){
		this. s3 = selection;
		var chance = Math.floor(Math.random() * 100);
		var check = true;
		for(var x = 0 ; x < item[s][s2][3].length ; x++){
			if(cm.getPlayer().itemQuantity(item[s][s2][3][x][0]) < item[s][s2][3][x][1]){
				check = false;
			}
		}
		
		if(cm.getInventory(1).getItem(1).getItemId() != item[s][s2][0]){
			cm.sendOk("#d請確認您裝備欄第一格的道具為 :#k#r#t" + item[s][s2][0] + "##k");
			status = -1;
		}else if(!check){
			cm.sendOk("#d請確認您有足夠的合成所需材料#k");
			status = -1;
		}else if(item[s][s2][2] < chance){
			
			for(var i = 0 ; i < item[s][s2][3].length ; i++){
				cm.gainItem(item[s][s2][3][i][0],-item[s][s2][3][i][1]);
			}
			
			if(item[s][s2][1] == 0){
				//cm.getInventory(1).removeItem(1);
				//MapleInventoryManipulator.removeById(cm.getPlayer().getClient(), 1, item[s][s2][0], -1, true, false);
				//cm.getPlayer().getClient().sendPacket(CWvsContext.InfoPacket.getShowItemGain(item[s][s2][0], -1, true));
				cm.gainItem(item[s][s2][0],-1);
				cm.sendOk("#d很可惜您合成失敗了#k #r#t" + item[s][s2][0]+ "##k #d因此而消失#k");
				status = -1;
			}else if(item[s][s2][1] == 1){
				cm.gainItem(item[s][s2][0],-1);
				cm.gainItem(item[s][s2][4],1);
				cm.sendOk("#d很可惜您合成失敗了#k #r#t" + item[s][s2][0]+ "##k #d因此變回#k #r#t" + item[s][s2][4] + "##k");	
				status = -1;
			}else if(item[s][s2][1] == 2){
				cm.sendOk("#d很可惜您合成失敗了#k #r#t" + item[s][s2][0]+ "##k #d並無任何改變#k");	
				status = -1;
			}
		}else{
			for(var i = 0 ; i < item[s][s2][3].length ; i++){
				cm.gainItem(item[s][s2][3][i][0],-item[s][s2][3][i][1]);
			}
			cm.gainItem(item[s][s2][0],-1);
			cm.gainItem(item[s][s2][5],1);
			cm.sendOk("#d合成成功!!#k #r#t" + item[s][s2][0]+ "##k #d升級成為#k #r#t" + item[s][s2][5] + "##k");	
			status = -1;
		}
	}else if(status == 4){
		
		
	}
}
		