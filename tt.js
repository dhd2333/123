function rename(nodes) {
    let names = nodes.names;

    // 步骤一：将倍率部分移到节点名称后面，并去掉标签
    names = names.map(name => {
        return name.replace(/^(\d+(\.\d+)?X)\s+(?:[A-Z]+\s+)?([\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s+)?(.+)$/, 
                            (match, multiplier, _, flag, rest) => {
                                return `${flag || ''}${rest.trim()} ${multiplier}`.trim();
                            });
    });

    // 步骤二：删除前面的无关信息，但保留国家/地区名称和数字
    names = names.map(name => {
        return name.replace(/^.*?([\w\s]+\d*\s+\d+(\.\d+)?X)$/, "$1");
    });

    // 步骤三：删除多余的空格
    names = names.map(name => name.trim());

    return names;
}
