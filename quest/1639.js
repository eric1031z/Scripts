var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}
function end(mode, type, selection) {
    qm.forceCompleteQuest();
	qm.warp(270000000,0);
    qm.dispose();
}
