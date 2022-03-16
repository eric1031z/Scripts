
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
     [1032129],
	 
	 [1032127,0,100,
	    [

		  [1032127,1],
		  [4460000,2],
		],1032127,1032128],
		
	 
	 [1032128,0,100,
	    [

		  [1032128,1],
		  [4460001,2],
		],1032129,1032129],
		

		

     
	 	
		
	 //初始道具代碼,道具合成模式,道具合成機率,合成材料[代碼,數量],失敗道具代碼,成品道具代碼;
   ],
      [
     [1122185],
   		 [1122183,0,100,
	    [

		  [1122183,1],
		  [4460000,2],
		],1122184,1122184],
		
		   		 [1122184,0,100,
	    [

		  [1122184,1],
		  [4460001,2],
		],1122184,1122185],





    ],
	      [
     [1132135],
   		 [1132133,0,100,
	    [
		  [1132133,1],
		  [4460000,2],
		],1132134,1132134],
		
		   		 [1132134,0,100,
	    [

		  [1132134,1],
		  [4460001,2],
		],1132134,1132135],
		




    ],
	  [
     [1152077],
   		 [1152075,0,100,
	    [

		  [1152075,1],
		  [4460000,2],
		],1152075,1152076],
		
		 		 [1152076,0,100,
	    [

		  [1152076,1],
		  [4460001,2],
		],1152076,1152077],
		

		




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
		if(s < 0){
			cm.dispose();
		}else{
		var msg = "";
		msg += icon5 + " #d#t" + item[s][0][0] + "##k #r合成專區#k\r\n";
        msg += icon1 + " #b請將合成道具放在裝備欄第一格#k\r\n";
        for(var i = 1 ; i < item[s].length ; i++){
			msg += "#L" + i + "# #d#t" + item[s][i][0] + "##k #b >> #k#d#t" + item[s][i][5] + "##k #r(點擊查看規則)#k\r\n";  
		}			
		cm.sendSimple(msg);
		}
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
		var b = 0;
		for(var u = 0 ; u < item[s][s2][3].length ; u++){
			if(item[s][s2][3][u][0] == item[s][s2][0]){
				b++;
			}
		}
		for(var x = 0 ; x < item[s][s2][3].length ; x++){
			
			if(cm.getPlayer().itemQuantity(item[s][s2][3][x][0]) < (item[s][s2][3][x][1] + (item[s][s2][3][x][0] == item[s][s2][0] ? b : 0))){
				check = false;
			}
		}
		
		
		if(cm.getInventory(1).getItem(1) == null){
			cm.sendOk("#d請確認您裝備欄第一格的道具為 :#k#r#t" + item[s][s2][0] + "##k");
			status = -1;
		}else if(cm.getInventory(1).getItem(1).getItemId() != item[s][s2][0]){
			cm.sendOk("#d請確認您裝備欄第一格的道具為 :#k#r#t" + item[s][s2][0] + "##k");
			status = -1;
		}else if(!check){
			cm.sendOk("#d請確認您有足夠的合成所需材料#k");
			status = -1;
		}else if(item[s][s2][2] < chance){
			
			
			
			if(item[s][s2][1] == 0){
				//cm.getInventory(1).removeItem(1);
				//MapleInventoryManipulator.removeById(cm.getPlayer().getClient(), 1, item[s][s2][0], -1, true, false);
				//cm.getPlayer().getClient().sendPacket(CWvsContext.InfoPacket.getShowItemGain(item[s][s2][0], -1, true));
				cm.gainItem(item[s][s2][0],-1);
				cm.sendOk("#d很可惜您合成失敗了#k #r#t" + item[s][s2][0]+ "##k #d因此而消失#k");

			}else if(item[s][s2][1] == 1){
				cm.gainItem(item[s][s2][0],-1);
				cm.gainItem(item[s][s2][4],1);
				cm.sendOk("#d很可惜您合成失敗了#k #r#t" + item[s][s2][0]+ "##k #d因此變回#k #r#t" + item[s][s2][4] + "##k");	

			}else if(item[s][s2][1] == 2){
				cm.sendOk("#d很可惜您合成失敗了#k #r#t" + item[s][s2][0]+ "##k #d並無任何改變#k");	

			}
			
			for(var i = 0 ; i < item[s][s2][3].length ; i++){
				cm.gainItem(item[s][s2][3][i][0],-item[s][s2][3][i][1]);
			}
			status = -1;
		}else{
			
			cm.gainItem(item[s][s2][0],-1);
			cm.gainItem(item[s][s2][5],1);
			for(var i = 0 ; i < item[s][s2][3].length ; i++){
				cm.gainItem(item[s][s2][3][i][0],-item[s][s2][3][i][1]);
			}
			cm.sendOk("#d合成成功!!#k #r#t" + item[s][s2][0]+ "##k #d升級成為#k #r#t" + item[s][s2][5] + "##k");	
			status = -1;
		}
	}else if(status == 4){
		
		
	}
}
		