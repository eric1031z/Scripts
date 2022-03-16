
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


var topic = "楓點/GASH商店";



var pack = [

   [
    [2000],
	[5220000,50],
   ],
      [
    [100],
	[5072000,10],
   ],
         [
    [200],
	[5076000,10],
   ],
            [
    [200],
	[1115086,1],
   ],
            [
    [200],
	[1115175,1],
   ],
     
 [
    [200],
	[5190001,1],
   ],
        
 [
    [200],
	[5190006,1],
   ],
        
 [
    [200],
	[5191001,1],
   ],
    [
    [200],
	[5190002,1],
   ],
    [
    [200],
	[5191002,1],
   ],
       [
    [200],
	[5190003,1],
   ],
          [
    [50],
	[5340001,1],
   ],
          [
    [30],
	[5350000,1],
   ],
             [
    [300],
	[2300001,1200],
   ],
                [
    [100],
	[2310000,10],
   ],
                   [
    [10],
	[1004109,1],
   ],
                      [
    [10],
	[1012289,1],
   ],
                      [
    [10],
	[1073423,1],
   ],
                      [
    [10],
	[1092056,1],
   ],
                           [
    [100],
	[5030000,1],
   ],
                              [
    [100],
	[5190010,1],
   ],
                              [
    [100],
	[5190009,1],
   ],
                               [
    [100],
	[5520001,1],
   ],
                                  [
    [100],
	[5073000,10],
   ],
                                     [
    [100],
	[5074000,10],
   ],
                                          [
    [100],
	[5076000,10],
   ],
                                        [
    [100],
	[5077000,10],
   ],
                                           [
    [100],
	[5370000,1],
   ],
                                              [
    [500],
	[5510000,10],
   ],
   
                                              [
    [50],
	[5140000,1],
   ],
         [
    [100],
	[5021000,1],
   ],
         [
    [100],
	[5021011,1],
   ],
               [
    [100],
	[5260000,1],
   ],
               [
    [100],
	[5260001,1],
   ],
               [
    [100],
	[5260002,1],
   ],
               [
    [100],
	[5260003,1],
   ],
               [
    [100],
	[5260004,1],
   ],
               [
    [100],
	[5260005,1],
   ],
               [
    [100],
	[5260006,1],
   ],
               [
    [100],
	[5260007,1],
   ],
               [
    [100],
	[5260008,1],
   ],
               [
    [100],
	[5260009,1],
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
		//cm.openNpc(9010000,"購買專區");
	
	}
	
    if (status == 0) {
		var msg =  icon3 + " #d【" + topic + "】#k\r\n";
		
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon5+"#b《購買 #k#r#z" + pack[a][1][0] + "##r#b》#k #d 查看購買資訊#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == -1){
			cm.dispose();
	    }else if(sel == 9999){
			cm.sendGetText("#r輸入您欲查詢物品關鍵字，我們將提供匹配結果");
		}else{
		var memo = "#b【此單品內容物為】 :#k\r\n";
		var needs = "";
		for(var b = 1 ; b < pack[sel].length ; b++) {
			needs += "#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k\r\n";
		}
		memo += needs;
		memo += "\r\n#r需要  : #k#d" + pack[sel][0][0] + "#k #r 楓點/GASH#k"; 

		
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
					cur += "#L" + ci + "#"+icon5+"#b《購買 #k#r#z" + pack[ci][1][0] + "##r#b》#k #d 查看購買資訊#k\r\n";
				}
			}
			cm.sendSimple("#r以下是進階查詢後的結果 :\r\n#b" + cur + "#k");
		}else{
			cm.sendSimple("#d請選擇付款方式 :#k\r\n#L0##bGASH\r\n#L1#楓點#k\r\n");
			//cm.sendGetNumber("#d請輸入欲購買組數 :",1,1,10000);
		}
	}else if(status == 3){
		this. xx = selection;
		var checkitems = 1;
		if(sel == 9999){
			this. sel1 = selection;
			var memo1 = "#b【此單品內容物為】 :#k\r\n";
		    var needs1 = "";
		    for(var b1 = 1 ; b1 < pack[sel1].length ; b1++) {
			     needs1 += "#i" + pack[sel1][b1][0] + " # #z" + pack[sel1][b1][0] + "# 共 : #r" + pack[sel1][b1][1] + " 個#k\r\n";
		    }
		    memo1 += needs1;
		    memo1 += "\r\n#r需要  : #k#d" + pack[sel1][0][0] + "#k #r 楓點/GASH#k"; 

		
		    cm.sendYesNo(memo1);
		}else{
			cm.sendGetNumber("#d請輸入欲購買組數 :",1,1,100);
		}
	}else if(status == 4){
		if(sel == 9999){
			cm.sendSimple("#d請選擇付款方式 :#k\r\n#L0##bGASH\r\n#L1#楓點#k\r\n");
			//cm.sendGetNumber("#d請輸入欲購買組數 :",1,1,10000);
		}else{
			var oii = selection;
		    var notice = "#b您欲購買#k #d#i" + pack[sel][1][0] + " # #z" + pack[sel][1][0] + " ##k#r 需要的楓點/GASH不足 #r" + (pack[sel][0][0]*oii - cm.getPlayer().getCSPoints(xx)) + "#k 點";
		    if(cm.getPlayer().getCSPoints(xx) < pack[sel][0][0]*oii){
			   cm.sendOk(notice);
			   cm.dispose();
		    }else {
			   cm.getPlayer().modifyCSPoints(xx,-pack[sel][0][0]*oii,true);
			   for(var c = 1 ; c < pack[sel].length ; c++){
				   cm.gainItem(pack[sel][c][0],pack[sel][c][1]*oii);
			   }
			   cm.sendOk("謝謝您的購買!");
			   cm.dispose();
		    }
		}
	}else if(status == 5){
		this. yy = selection;
		if(sel == 99999){
		    cm.sendGetNumber("#d請輸入欲購買組數 :",1,1,10000);
		}else{
			cm.dispose();
		}
	}else if(status == 6){
		if(sel == 99999){
			var oii = selection;
		    var notice = "#b您欲購買#k #d#i" + pack[sel][1][0] + " # #z" + pack[sel][1][0] + " ##k#r 需要的楓點/GASH不足 #r" + (pack[sel][0][0]*oii - cm.getPlayer().getCSPoints(yy)) + "#k 點";
		    if(cm.getPlayer().getCSPoints(yy) < pack[sel][0][0]*oii){
			   cm.sendOk(notice);
			   cm.dispose();
		    }else {
			   cm.getPlayer().modifyCSPoints(yy,-pack[sel][0][0]*oii,true);
			   for(var c = 1 ; c < pack[sel].length ; c++){
				   cm.gainItem(pack[sel][c][0],pack[sel][c][1]*oii);
			   }
			   cm.sendOk("謝謝您的購買!");
			   cm.dispose();
		    }
		}
	}
}
		