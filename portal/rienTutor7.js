function enter(pi) {
    if (pi.getQuestStatus(21014) == 2 || pi.getPlayer().getJob() != 2000) {
        pi.playPortalSE();
        pi.warp(140010100, 2);
    } else {
        pi.playerMessage(5, "�箦�����b�k��C�q�k�䪺�ǰe�I�i�J������A�h����Y�C");
    }
}