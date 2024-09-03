function rename(nodes) {
    let names = nodes.names;

    // 步骤一：将倍率部分（如 2.0X、5X 等）移到节点名称后面
    names = names.map(name => {
        return name.replace(/^(\d+(\.\d+)?X)\s+([a-zA-Z]+\s+)?([\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s+)?(.+)$/, "$4$1");
    });

    // 步骤二：删除前面的无关信息（缩写、旗帜等）
    names = names.map(name => {
        return name.replace(/^.*?([\w\s]+)$/, "$1");
    });

    // 步骤三：删除多余的空格
    names = names.map(name => {
        return name.trim();
    });

    return names;
}
