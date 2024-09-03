function rename(nodes) {
    let names = nodes.names;

    // 步骤一：将倍率部分（如 2.0X、5X 等）移到节点名称后面
    names = names.map(name => {
        return name.replace(/^(\d+(\.\d+)?X)\s+.*?([\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*)?(.*)$/, "$4$1");
    });

    // 步骤二：删除节点名称中的所有无关信息
    names = $.delete(names, /IPLC|IEPL|CMI|HKG|HGC/);

    // 新增步骤：将地名和数字提取出来并重新排列成“地名数字+倍率”的格式
    names = names.map(name => {
        return name.replace(/.*?([\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]?\s*[A-Za-z\s]+?\d+).*(\d+(\.\d+)?X)$/, "$1 $2");
    });

    // 步骤三：删除多余的空格
    names = $.trim(names);

    return names;
}
