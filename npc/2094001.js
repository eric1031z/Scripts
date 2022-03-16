var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.removeAll(4001117);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.sendSimple("#b#L0#Get me out of here.#l\r\n#L1#Give me Pirate Hat.#l#k");
    } else if (status == 1) {
	if (selection == 0) {
		if (!cm.canHold(4001455, 1)) {
			cm.sendOk("Please make room in ETC.");
			cm.dispose();
			return;
		}
		cm.gainItem(4001455, 1);
	    cm.addTrait("will", 15);
	    cm.gainExp_PQ(120, 2.0);
	    cm.getPlayer().endPartyQuest(1204);
		
	    cm.warp(251010404,0);
		getPrize();
	} else { //TODO JUMP
		if (cm.haveItem(1003267, 1)) {
			cm.sendOk("You have the best hat.");
		} else if (cm.haveItem(1002573, 1)) {
		    if (cm.haveItem(4001455, 20)) {	
				if (cm.canHold(1003267,1)) {
					cm.gainItem(1002573, -1);
					cm.gainItem(4001455, -20);
		    	    cm.gainItem(1003267,1);
					cm.sendOk("I have given you the hat.");
		    	} else {
					cm.sendOk("Please make room.");
		        } 
		    } else {
				cm.sendOk("You need 20 Pirate PQ to get the next hat.");
		    }
		} else if (cm.haveItem(1002572, 1)) {
		    if (cm.haveItem(4001455, 20)) {	
				if (cm.canHold(1002573,1)) {
					cm.gainItem(1002572, -1);
					cm.gainItem(4001455, -20);
		    	    cm.gainItem(1002573,1);
					cm.sendOk("I have given you the hat.");
		    	} else {
					cm.sendOk("Please make room.");
		        } 
		    } else {
				cm.sendOk("You need 20 Pirate PQ to get the next hat.");
		    }
		} else {
		    if (cm.haveItem(4001455, 20)) {	
				if (cm.canHold(1002572,1)) {
					cm.gainItem(4001455, -20);
		    	    cm.gainItem(1002572,1);
					cm.sendOk("I have given you the hat.");
		    	} else {
					cm.sendOk("Please make room.");
		        } 
		    } else {
				cm.sendOk("You need 20 Pirate PQ to get the next hat.");
		    }
		}
	}
	cm.dispose();
    }
}

function getPrize(){
	
	var msg = "";
	var today = new Date();
    var todayp = (today.getMonth()+1) + "/" + today.getDate(); 
	var logname = cm.getPQName("Pirate") + "" + todayp;
	var name = cm.getPQName("Pirate");
	var mpoint = cm.getPQPara(name,"mpoint");
	var mcap = cm.getPQPara(name,"mpointcap");
	var gash = cm.getPQPara(name,"gash");
	var gcap = cm.getPQPara(name,"gashcap");
	var point = cm.getPQPara(name,"point");
	var pcap = cm.getPQPara(name,"pointcap");
	var item1 = cm.getPQPara(name,"item1");
	var citem1 = cm.getPQPara(name,"item1count");
	var item2 = cm.getPQPara(name,"item2");
	var citem2 = cm.getPQPara(name,"item2count");
	var item3 = cm.getPQPara(name,"item3");
	var citem3 = cm.getPQPara(name,"item3count");
	var party = 0;
	var low = cm.getPQPara(name, "lvlow");
	var high = cm.getPQPara(name, "lvcap");
	var bonus = 0;
	var bb = false;
	
	if(cm.getPQPoints(logname,"mpoint") >= mcap){
	   mpoint = 0;
	}
	
	if(cm.getPQPoints(logname,"gash") >= gcap){
	   gash = 0;
	}
	
	if(cm.getPQPoints(logname,"point") >= pcap){
	   point = 0;
	}
	
	if(cm.getPlayer().getLevel() >= low && cm.getPlayer().getLevel() <= high){
	   party = cm.getPQPara(name, "partybonus");;  
	   bb = true;
	}
	
	cm.getPlayer().modifyCSPoints(0,parseInt(mpoint*(100+party)/100),true);
	cm.getPlayer().modifyCSPoints(1,parseInt(gash*(100+party)/100),true);
	cm.getPlayer().setPoints(cm.getPlayer().getPoints() + parseInt(point*(100+party)/100));
	cm.gainItem(item1,citem1);
	cm.gainItem(item2,citem2);
	cm.gainItem(item3,citem3);
	
	cm.setPQLog(name,logname,parseInt(mpoint*(100+party)/100),parseInt(gash*(100+party)/100),parseInt(point*(100+party)/100));
	
	msg += "#d---------------#k#r" + name + "組隊結算#k#d---------------#k\r\n";
    msg += "#b日期 :#k #r" + todayp + "#k\r\n";
	msg += "#b是否符合加成 :#k #r" + bb + " #k\r\n";
    msg += "#b今日完成次數 :#k #r" + cm.getPQLog(logname) + "#k\r\n";
	msg += "#b此場獲得點數(楓點/GASH/紅利) :#k #r" + "(" + parseInt(mpoint*(100+party)/100) + "/" + parseInt(gash*(100+party)/100) + "/" + parseInt(point*(100+party)/100) + ")#k \r\n";
    msg += "#b今日獲取點數(楓點/GASH/紅利) :#k #r" + "(" + cm.getPQPoints(logname,"mpoint") + "/" + cm.getPQPoints(logname,"gash") + "/" + cm.getPQPoints(logname,"point") + ")#k \r\n";
	var canm = 0;
	var cang = 0;
	var canp = 0;
	if((mcap - cm.getPQPoints(logname,"mpoint")) > 0){
		canm = (mcap - cm.getPQPoints(logname,"mpoint"));
	}
	if((gcap - cm.getPQPoints(logname,"gash")) > 0){
		cang = (gcap - cm.getPQPoints(logname,"gash"));
	}
	if((pcap - cm.getPQPoints(logname,"point")) > 0){
		canp = (pcap - cm.getPQPoints(logname,"point"));
	}
	msg += "#b尚可獲取點數(楓點/GASH/紅利) :#k #r" + "(" + canm + "/" + cang + "/" + canp + ")#k \r\n";
	if(item1 != 0){
        msg += "#b獲得道具一 :#k #d#i" + item1 	+ "# #t" + item1 + "# 共#k#r" + citem1 + "#d個#k\r\n";
	}
	
	if(item2 != 0){
        msg += "#b獲得道具二 :#k #d#i" + item2 	+ "# #t" + item2 + "# 共#k#r" + citem2 + "#d個#k\r\n";
	}
	
	if(item3 != 0){
        msg += "#b獲得道具三 :#k #d#i" + item3	+ "# #t" + item3 + "# 共#k#r" + citem3 + "#d個#k\r\n";
	}
	cm.sendOk(msg);
}