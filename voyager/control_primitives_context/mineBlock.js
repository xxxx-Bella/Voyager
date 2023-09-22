// Mine 3 cobblestone: mineBlock(bot, "stone", 3);
// 让一个机器人（bot）采矿
async function mineBlock(bot, name, count = 1) {
    // 1.查找满足指定条件的方块
    const blocks = bot.findBlocks({
        matching: (block) => {
            return block.name === name;
        },
        maxDistance: 32,               // 搜索的最大距离
        count: count,                  // 要找到的方块数量
    });
    // 2.将查到的方块设定为要采集的目标
    const targets = [];
    for (let i = 0; i < Math.min(blocks.length, count); i++) {  // 可能在限定搜索范围内找到的方块数达不到 count
        targets.push(bot.blockAt(blocks[i]));   // 将找到的方块添加到 targets 数组中, blockAt()将方块位置转化为方块对象
    }
    // 3.采集 targets 中的方块
    await bot.collectBlock.collect(targets, { ignoreNoPath: true });  // 等待一个异步操作
}
