var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.warp(102040200, 0);
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
