var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.sendOk("請去燃燒的神木村5...幫幫我..好嗎滅龍魔導士");
	qm.dispose();
}
function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
