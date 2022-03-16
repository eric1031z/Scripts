var status;
var icon6 = "#fEffect/CharacterEff/1112904/1/0#";
var icon1 = "#fEffect/CharacterEff/1112904/0/0#";
var icon2 = "#fEffect/CharacterEff/1003276/0/0#";
var icon3 = "#fEffect/CharacterEff/1042107/0/0#";

var pack = [
   [
	["主機升級",1],
	[2109018,2,-1],
	[2022179,3,-1],
	[2450000,2,-1],
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
		var msg =  "" + icon1+ "" + icon1 + "#d【補償專區】#k" + icon1 + "" + icon1 + "\r\n";
		for(var a = 0 ; a < pack.length ; a++){
			var no = pack[a][0][1] > 100 ? "無限" : pack[a][0][1];
			msg += "#L" + a + "#"+icon6+"#b《補償 " + a + "》#k #d原因 :#k" + "#r" + pack[a][0][0] + " #k #d可領 :#k#r" + no + " 次#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		var memo = "#r【此補償內容物為】 :#k\r\n\r\n";
		
		for(var b = 1 ; b < pack[sel].length ; b++){
			var date = pack[sel][b][2] == -1 ? "無期限" : (pack[sel][b][2] + "天");
			memo += "#d#i" + pack[sel][b][0] + "# #z" + pack[sel][b][0] + "##k 共 : #r" + pack[sel][b][1] + " 個#k 期限 : #b" + date + "\r\n"; 
		}
		var no2 = pack[sel][0][1] > 100 ? "無限" : pack[sel][0][1];
		memo += "\r\n#b原因 : #k #r" + pack[sel][0][0] + " #k ,#d能領取 :#k #r" + no2 + " 次#k";
		cm.sendYesNo(memo);
	}else if(status == 2){
		
		if(cm.getPlayer().getPrizeLog("補償禮包" + sel) >= pack[sel][0][1]){
			cm.sendOk("此補償的限制領取次數為 : #r" + pack[sel][0][1] + "#k 次");
			cm.dispose();
		} else {
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItemPeriod(pack[sel][c][0],pack[sel][c][1],pack[sel][c][2]);
			}
			cm.getPlayer().setPrizeLog("補償禮包" + sel);
			cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pack[sel][0][0]);
			cm.sendOk("非常抱歉,我們會更努力");
			cm.dispose();
		}
	}
}
		