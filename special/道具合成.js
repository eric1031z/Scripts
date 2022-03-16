
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);


var status;
var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var to = "#fEffect/ItemEff/004/6#";

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 


var item = [

//1.小筱兌換
[
     [1022215],
	 
	 [1022190,2,100,
	    [
		  [1022190,2],
          [4470004,30], //低王
		  [4470000,20], //金幣
		  [4001246,5000], //楓葉
		  [4470007,100], //組隊
		  
		],1122023,1022191],
		
      [1022191,2,100,
	    [
		  [1022191,1],
          [4470005,30], //低王
		  [4470000,60], //金幣
		  [4001246,7000], //楓葉
		  [4470007,150], //組隊
		  
		],1122023,1022192],
		
	  [1022192,2,100,
	    [
		  [1022192,1],
          [4470005,40], //低王
		  [4470000,100], //金幣
		  [4001246,8000], //楓葉
		  [4470007,200], //組隊
		  
		],1122023,1022193],	
		
	  [1022193,2,100,
	    [
		  [1022193,1],
          [4470006,50], //低王
		  [4470000,300], //金幣
		  [4001246,9000], //楓葉
		  [4470007,250], //組隊
		  
		],1122023,1022215],	
],

///神話

[
     [1032219],
	 
	 [1032205,2,100,
	    [
		  [1032205,2],
          [4470004,30], //低王
		  [4470000,20], //金幣
		  [4001246,5000], //楓葉
		  [4470007,100], //組隊
		  
		],1122023,1032206],
		
      [1032206,2,100,
	    [
		  [1032206,1],
          [4470005,30], //低王
		  [4470000,60], //金幣
		  [4001246,7000], //楓葉
		  [4470007,150], //組隊
		  
		],1122023,1032207],
		
	  [1032207,2,100,
	    [
		  [1032207,1],
          [4470005,40], //低王
		  [4470000,100], //金幣
		  [4001246,8000], //楓葉
		  [4470007,200], //組隊
		  
		],1122023,1032208],	
		
	  [1032208,2,100,
	    [
		  [1032208,1],
          [4470005,30], //低王
		  [4470000,300], //金幣
		  [4001246,9000], //楓葉
		  [4470007,250], //組隊
		  
		],1122023,1032209],	
		
	  [1032209,2,100,
	    [
		  [1032209,1],
          [4470006,50], //低王
		  [4470000,300], //金幣
		  [4001246,9000], //楓葉
		  [4470007,250], //組隊
		  
		],1122023,1032219],		
],
//陪羅德

[
     [1113075],
	 
	 [1113072,2,100,
	    [
		  [1113072,1],
          [4470004,30], //低王
		  [4470000,20], //金幣
		  [4001246,5000], //楓葉
		  [4470007,100], //組隊
		  
		],1122023,1113073],
		
      [1113073,2,100,
	    [
		  [1113073,1],
          [4470005,30], //低王
		  [4470000,20], //金幣
		  [4001246,5000], //楓葉
		  [4470007,100], //組隊
		  
		],1122023,1113074],
		
	  [1113074,2,100,
	    [
		  [1113074,1],
          [4470006,50], //低王
		  [4470000,20], //金幣
		  [4001246,5000], //楓葉
		  [4470007,100], //組隊
		  
		],1122023,1113075],	
		
	  
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
		msg += "     " + icon5 + " #e#d裝備升級#k #r點擊下列物品查看升級規則#k#n\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		for(var i = 0 ; i < item.length ; i++){
			msg += "#L" + i + "#" + icon3 + " #b#e#z" + item[i][0][0] + "##k#n\r\n"; 
		}
	    cm.sendSimple(msg);	
	}else if(status == 1){
		this. s = selection;
		if(s < 0){
			cm.dispose();
		}else{
		var msg = "";
		msg += icon5 + " #e#d#t" + item[s][0][0] + "##k #r升級專區#k#n\r\n";
        msg += icon1 + " #e#b請將欲升級裝備放在裝備欄第一格#k#n\r\n";
        for(var i = 1 ; i < item[s].length ; i++){
			msg += "#e#L" + i + "#" + need + "#d#z" + item[s][i][0] + "##k#b" + to + "#k#d#z" + item[s][i][5] + "##k#n #l\r\n";  
		}			
		cm.sendSimple(msg);
		}
	}else if(status == 2){
        this. s2 = selection;
		
		var msg = "";
		var memo = "";
		
		if(item[s][s2][1] == 0){
			memo = "#d失敗後#k #r#z" + item[s][s2][0] + "##k #d消失#k";
		}else if(item[s][s2][1] == 1){
			memo = "#d失敗後#k #r#z" + item[s][s2][0] + "##k #d退回#k #r#z" + item[s][s2][4] + "##k";
		}else if(item[s][s2][1] == 2){
			memo = "#d失敗後道具維持原樣#k";
		}
		
		var msg = "";
	    msg += icon5 + " #e#d【#z" + item[s][s2][0] + "#" + to + "#z" + item[s][s2][5] + "#】#k\r\n";
        msg += icon1 + " #b升級規則 :#k#r" + memo + "#k\r\n";
        msg += icon1 + " #b成功機率 :#k#r" + item[s][s2][2] + " %#k\r\n";
		msg += icon1 + " #b注意事項 :#k#r以下材料不包含本身(欲升級)物品#k\r\n";
		msg += "---------------------------------------------\r\n"
        for(var i = 0 ; i < item[s][s2][3].length ; i++){
			msg += need + " #b需要 #d#i" + item[s][s2][3][i][0] + "# #z" + item[s][s2][3][i][0] + "##k #r" +  item[s][s2][3][i][1] + "#k #d個#k\r\n";
		}
		msg += "---------------------------------------------\r\n"
        msg += icon1 + " #b確定要升級請點選#k#r「是」#k\r\n" + icon1 + " #d(請把升級道具放在裝備欄第一格)#k#n\r\n";
        cm.sendYesNo(msg);		
	}else if(status == 3){
		this. s3 = selection;
		var zzz = "";
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
			cm.sendOk("#d請確認您有足夠的升級所需材料#k");
			status = -1;
		}else if(item[s][s2][2] < chance){
			
			
			
			if(item[s][s2][1] == 0){
			
				cm.gainItem(item[s][s2][0],-1);
				cm.sendOk("#d很可惜您升級失敗了#k #r#t" + item[s][s2][0]+ "##k #d因此而消失#k");
				zzz = "升級" + item[s][s2][5] + "失敗 " + item[s][s2][0] + "消失 於" + todayp; 

			}else if(item[s][s2][1] == 1){
				cm.gainItem(item[s][s2][0],-1);
				cm.gainItem(item[s][s2][4],1);
				cm.sendOk("#d很可惜您升級失敗了#k #r#t" + item[s][s2][0]+ "##k #d因此變回#k #r#t" + item[s][s2][4] + "##k");	
                zzz = "升級" + item[s][s2][5] + "失敗 " + item[s][s2][0] + "退回" + item[s][s2][4] + " 於" + todayp; 
			}else if(item[s][s2][1] == 2){
				cm.sendOk("#d很可惜您升級失敗了#k #r#t" + item[s][s2][0]+ "##k #d並無任何改變#k");	
                zzz = "升級" + item[s][s2][5] + "失敗 " + item[s][s2][0] + "不變 於" + todayp; 
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
			cm.sendOk("#d升級成功!!#k #r#t" + item[s][s2][0]+ "##k #d升級成為#k #r#t" + item[s][s2][5] + "##k");	
			zzz = "升級" + item[s][s2][5] + "成功 於" + todayp; 
			status = -1;
		}
		FileoutputUtil.logToFile("logs/道具合成/" + cm.getPlayer().getName() + ".txt", zzz);
	}else if(status == 4){
		
		
	}
}
		