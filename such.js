function rename(nodes) {
    let names = nodes.names;

    // 步骤一：将倍率部分移动到节点名称后面
    names = $.replace(names, /^(\d+(\.\d+)?X)\s+([A-Z]+\s+)?([\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s+)?(.+)$/, "$5$1");

    // 步骤二：删除前面的无关信息（缩写、旗帜等）
    names = $.replace(names, /^[^a-zA-Z]*([\w\s]+)$/, "$1");

    // 步骤三：删除多余的空格
    names = $.trim(names);

    return names;
}
