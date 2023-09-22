async function mineBlock(bot, name, count = 1) {
    if (typeof name !== "string") {
        throw new Error(`name for mineBlock must be a string`);
    }
    if (typeof count !== "number") {
        throw new Error(`count for mineBlock must be a number`);
    }
    const blockByName = mcData.blocksByName[name];  // 获取指定名字的block信息
    if (!blockByName) {
        throw new Error(`No block named ${name}`);
    }
    const blocks = bot.findBlocks({                // 找
        matching: [blockByName.id],
        maxDistance: 32,
        count: 1024,
    });
    if (blocks.length === 0) {
        bot.chat(`No ${name} nearby, please explore first`);
        _mineBlockFailCount++;
        if (_mineBlockFailCount > 10) {
            throw new Error(
                "mineBlock failed too many times, make sure you explore before calling mineBlock"
            );
        }
        return;
    }
    const targets = [];                            // 目标
    for (let i = 0; i < blocks.length; i++) {
        targets.push(bot.blockAt(blocks[i]));
    }
    await bot.collectBlock.collect(targets, {      // 采集
        ignoreNoPath: true,
        count: count,
    });
    bot.save(`${name}_mined`);
}
