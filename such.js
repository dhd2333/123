function rename(nodes) {
    let names = nodes.names;

    // 步骤一：将倍率部分（如 3.0X、5X 等）移到节点名称后面
    names = names.map(name => {
        // 匹配倍率部分（如 3.0X 或 5X 等）
        let match = name.match(/(\d+(\.\d+)?X)\s*/);
        if (match) {
            // 提取倍率
            let rate = match[1];
            // 删除倍率部分并将其添加到名称的末尾
            name = name.replace(rate, '').trim() + rate;
        }
        return name;
    });

    // 步骤二：删除节点名称前面的所有不相关部分
    names = names.map(name => {
        // 删除前面的所有非字母字符，保留节点名称和倍率
        name = name.replace(/^[^a-zA-Z]*([\w\s]+)$/, '$1');
        // 去掉名称中的多余空格
        return name.trim();
    });

    return names;
}
