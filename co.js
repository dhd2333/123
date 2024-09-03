function rename(nodes) {
    let names = nodes.names;

    // 将倍率部分移动到节点名称后面
    names = $.replace(names, /^(\d+(\.\d+)?X)\s+([a-zA-Z]+\s+)?([\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s+)?(.+)$/, "$4$1");

    // 删除所有不需要的部分
    names = $.delete(names, /IPLC|IEPL/i, /HULU|HBO|动画疯/i, /\d+(GBPS|MBPS)/i, /洛杉矶|圣塔克拉利塔|萨克拉门托|帕罗奥图/);

    // 删除多余的空格
    names = $.trim(names);

    return names;
}
