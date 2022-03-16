var status;
var icon1 = "#fEffect/CharacterEff/forceAtom/atom/1/parentAtom/0#";
var icon2 = "#fEffect/CharacterEff/forceAtom/atom/2/endEff/0#";
var icon3 = "#fEffect/CharacterEff/1112908/0/0#";
var icon4 = "#fEffect/CharacterEff/1102232/0/0#";
var icon5 = "#fEffect/BasicEff/AdventureRush/0/0#"; //衝刺
var icon6 = "#fEffect/ItemEff/1112810/0/2#";
var icon7 = "#fEffect/ItemEff/1112314/0/1#";
var icon8 = "#fEffect/CharacterEff/1112904/0/0#";
var icon9 = "#fUI/UIWindow/Quest/icon6/0#";

var topic = "老二"; //新增啥名字的裡包

var pack = [
	[
	  [1000,99999],
	  ["深淵禮包"],
	  [1003797,1,-1],
	  [1005352,1,-1],
	  [5062002,20,-1],
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
		var msg =  "                " + icon1+"#d" + topic + "紅利專區#k" +"\r\n";
		for(var a = 0 ; a < pack.length ; a++){
			var canbuy = pack[a][0][1] > 200 ? "無限制" :  pack[a][0][1];
			msg += "#L" + a + "#"+icon6+"#b" + pack[a][1][0] + "#k #d需要 :#k#r" + pack[a][0][0] + " 紅利#k  #d可購 :" + canbuy + " 次#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		var memo = topic + "紅利內容物為以下 :\r\n\r\n";
		
		for(var b = 1 ; b < pack[sel].length ; b++){
			var date = pack[sel][b][2] == -1 ? "無期限" : (pack[sel][b][2] + "天");
			memo += "#d#i" + pack[sel][b][0] + "# #z" + pack[sel][b][0] + "##k 共 : #r" + pack[sel][b][1] + " 個#k 期限 : #b" + date + "\r\n"; 
		}
		var deal = pack[sel][0][1] > 200 ? "無限制" :  pack[sel][0][1];
		memo += "\r\n#b需要 : #k #r" + pack[sel][0][0] + " #k #b點 " + "紅利" + " ,購買次數 :#k #r" + deal + " 次#k";
		cm.sendYesNo(memo);
	}else if(status == 2){
		
		if(cm.getPlayer().getPrizeLog(topic + "禮包" + sel) >= pack[sel][0][1]){
			cm.sendOk(topic + "禮包的限制購買次數為 : #r" + pack[sel][0][1] + "#k 次");
			cm.dispose();
		}else if(cm.getPlayer().getPoints() < pack[sel][0][0]){
			cm.sendOk("購買" + topic + "紅利禮包需要 :#r" + pack[sel][0][0] + "#k " + "紅利");
			cm.dispose();
		}else {
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItemPeriod(pack[sel][c][0],pack[sel][c][1],pack[sel][c][2]);
			}
			cm.getPlayer().setPrizeLog(topic + "禮包" + sel);
			cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pack[sel][0][0]);
			cm.sendOk("非常感謝您的購買!");
			cm.dispose();
		}
	}
}
		