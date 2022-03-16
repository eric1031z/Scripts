load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);

function start(){
	status = -1
	action(1,0,0);
}


function action(mode,type,selection){
	if(mode==1){
		status ++ ;
	}else {
		status --;
	}
	
	if(mode == 0){
		cm.dispose();
	}
	if(status == 0){
		cm.sendGetText("#d請輸入欲查詢更改的組隊名稱 :#k");
		//cm.dispose();
	}else if(status == 1){
		this. se = cm.getText();
		if(cm.getPQEventName(se) == ""){
			cm.sendOk("您輸入的組隊任務名稱有誤");
			status = -1;
		}else{
		    var msg = "";
		    msg += "---------------"+ se +"組隊控制面板---------------\r\n";
		    msg += "#dEvent : #k#r" + cm.getPQEventName(se) + "#k\r\n";
		    msg += "#L0# #b 限定最低等級 :#k #r" + cm.getPQPara(se,"lvlow") + " #k #b等#k\r\n";
		    msg += "#L1# #b 限定最高等級 :#k #r" + cm.getPQPara(se,"lvcap") + " #k #b等#k\r\n";
		    msg += "#L2# #b 獲得楓葉點數 :#k #r" + cm.getPQPara(se,"mpoint") + "#k #b點#k\r\n";
			msg += "#L3# #b 單日楓點上限 :#k #r" + cm.getPQPara(se,"mpointcap") + "#k #b點#k\r\n";
			msg += "#L4# #b 獲得GASH點數 :#k #r" + cm.getPQPara(se,"gash") + "#k #b點#k\r\n";
		    msg += "#L5# #b 單日GASH上限 :#k #r" + cm.getPQPara(se,"gashcap") + "#k #b點#k\r\n";
			msg += "#L6# #b 獲得紅利點數 :#k #r" + cm.getPQPara(se,"point") + "#k #b點#k\r\n";
			msg += "#L7# #b 單日紅利上限 :#k #r" + cm.getPQPara(se,"pointcap") + "#k #b點#k\r\n";
			msg += "#L8# #b 人數組隊加成 :#k #r" + cm.getPQPara(se,"partybonus") + "#k #b %#k\r\n";
			msg += "#L9# #b 組隊加成條件 :#k #r" + cm.getPQPara(se,"partycount") + "#k #b人#k\r\n";
			msg += "#L10# #b 第一獲得道具 :#k #r" + cm.getPQPara(se,"item1") + "#k #d(" + cm.getItemName(cm.getPQPara(se,"item1")) + ")#k\r\n";
			msg += "#L11# #b 第一道具數量 :#k #r" + cm.getPQPara(se,"item1count") + "#k #b個#k\r\n";
			msg += "#L12# #b 第二獲得道具 :#k #r" + cm.getPQPara(se,"item2") + "#k #d(" + cm.getItemName(cm.getPQPara(se,"item2")) + ")#k\r\n";
			msg += "#L13# #b 第二道具數量 :#k #r" + cm.getPQPara(se,"item2count") + "#k #b個#k\r\n";
			msg += "#L14# #b 第三獲得道具 :#k #r" + cm.getPQPara(se,"item3") + "#k #d(" + cm.getItemName(cm.getPQPara(se,"item3")) + ")#k\r\n";
			msg += "#L15# #b 第三道具數量 :#k #r" + cm.getPQPara(se,"item3count") + "#k #b個#k\r\n";

		    cm.sendYesNo(msg);
		}
	}else if(status == 2){
		this. sel = selection;
		if(sel == 0){
			cm.sendGetNumber("#b欲調整#k #r限定最低等級#k #d請輸入數值 :#k",0,0,250);
		}else if(sel == 1){
			cm.sendGetNumber("#b欲調整#k #r限定最高等級#k #d請輸入數值 :#k",0,0,250);
		}else if(sel == 2){
			cm.sendGetNumber("#b欲調整#k #r獲得楓葉點數#k #d請輸入數值 :#k",0,0,999);
		}else if(sel == 3){
			cm.sendGetNumber("#b欲調整#k #r單日楓點上限#k #d請輸入數值 :#k",0,0,9999);
		}else if(sel == 4){
			cm.sendGetNumber("#b欲調整#k #r獲得GASH點數#k #d請輸入數值 :#k",0,0,999);
		}else if(sel == 5){
			cm.sendGetNumber("#b欲調整#k #r單日GASH上限#k #d請輸入數值 :#k",0,0,9999);
		}else if(sel == 6){
			cm.sendGetNumber("#b欲調整#k #r獲得紅利點數#k #d請輸入數值 :#k",0,0,999);
		}else if(sel == 7){
			cm.sendGetNumber("#b欲調整#k #r單日紅利上限#k #d請輸入數值 :#k",0,0,9999);
		}else if(sel == 8){
			cm.sendGetNumber("#b欲調整#k #r人數組隊加成#k #d請輸入數值 :#k",0,0,100);
		}else if(sel == 9){
			cm.sendGetNumber("#b欲調整#k #r組隊加成條件#k #d請輸入數值 :#k",0,0,6);
		}else if(sel == 10){
			cm.sendGetNumber("#b欲調整#k #r第一獲得道具#k #d請輸入數值 :#k",0,0,9999999);
		}else if(sel == 11){
			cm.sendGetNumber("#b欲調整#k #r第一道具數量#k #d請輸入數值 :#k",0,0,999);
		}else if(sel == 12){
			cm.sendGetNumber("#b欲調整#k #r第二獲得道具#k #d請輸入數值 :#k",0,0,9999999);
		}else if(sel == 13){
			cm.sendGetNumber("#b欲調整#k #r第二道具數量#k #d請輸入數值 :#k",0,0,999);
		}else if(sel == 14){
			cm.sendGetNumber("#b欲調整#k #r第三獲得道具#k #d請輸入數值 :#k",0,0,9999999);
		}else if(sel == 15){
			cm.sendGetNumber("#b欲調整#k #r第三道具數量#k #d請輸入數值 :#k",0,0,999);
		}
          
		
    }else if(status == 3){
		var sel2 = selection;
		if(sel == 0){
		   cm.setPQPara(se,"lvlow",sel2);
		   cm.sendOk("#b限定最低等級#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 1){
			cm.setPQPara(se,"lvcap",sel2);
		   cm.sendOk("#b限定最高等級#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 2){
			cm.setPQPara(se,"mpoint",sel2);
		   cm.sendOk("#b獲得楓葉點數#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 3){
			cm.setPQPara(se,"mpointcap",sel2);
		   cm.sendOk("#b單日楓點上限#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 4){
			cm.setPQPara(se,"gash",sel2);
		   cm.sendOk("#b獲得GASH點數#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 5){
			cm.setPQPara(se,"gashcap",sel2);
		   cm.sendOk("#b單日GASH上限#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 6){
			cm.setPQPara(se,"point",sel2);
		   cm.sendOk("#b獲得紅利點數#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 7){
			cm.setPQPara(se,"pointcap",sel2);
		   cm.sendOk("#b單日紅利上限#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 8){
			cm.setPQPara(se,"partybonus",sel2);
		   cm.sendOk("#b人數組隊加成#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 9){
			cm.setPQPara(se,"partycount",sel2);
		   cm.sendOk("#b組隊加成條件#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 10){
			cm.setPQPara(se,"item1",sel2);
		   cm.sendOk("#b第一獲得道具#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 11){
			cm.setPQPara(se,"item1count",sel2);
		   cm.sendOk("#b第一道具數量#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 12){
			cm.setPQPara(se,"item2",sel2);
		   cm.sendOk("#b第二獲得道具#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 13){
			cm.setPQPara(se,"item2count",sel2);
		   cm.sendOk("#b第二道具數量#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 14){
			cm.setPQPara(se,"item3",sel2);
		   cm.sendOk("#b第三獲得道具#k #d已調整至 :#k -- #r" + sel2);
		}else if(sel == 15){
			cm.setPQPara(se,"item3count",sel2);
		   cm.sendOk("#b第三道具數量#k #d已調整至 :#k -- #r" + sel2);
		}
		
		status = 0;
	}
		
}
			