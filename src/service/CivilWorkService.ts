let cement = 330;
let msandR = 45;
let msandN = 46;
let brick = 6.5;
let steel = 45;
let blueMetel = 30;

export const getRBCMethodCost = (area: number) => {
    let cwcm: number = 0.141631663;
    let tempc = cement / 350;
    let tempCmCost = area * 1238.18276 * cwcm;
    let cmCost = tempCmCost - tempCmCost * tempc;
    return cmCost;
};