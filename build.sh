#!/bin/bash
pid=$$

function make_output() {
    # 创建临时目录
    local tmp_output="/tmp/output.${pid}"
    local output="output"

    if [ -d $tmp_output ];then
        rm -rf $tmp_output
        ret=$?
        if [ $? -ne 0 ];then
            echo "====== Remove $tmp_output failure ======"
            exit $ret
        fi
    fi

    mkdir -p $tmp_output

    if [ -d $output ];then
        mv $output .${output}.old   #  备份workspace下老的output目录
    fi

    # 填充output目录, output的内容即为待部署内容
    (
        # 拷贝 必要的文件至临时output目录, 此处拷贝static目录下所有文件
        cp -rf ./static/* ${tmp_output}/ &&

        # 将临时output目录 移动到workspace, 此即为需要部署包内容
        mv ${tmp_output} $output &&

        echo -e "===== Generate output ok ====="

    ) || {

        # 填充output目录失败后, 退出码为 非0
        echo -e "===== Generate output failure ====="; exit 2;
    }
}

##########################################
## main
## 其中,
##
##      1.生成部署包output
##########################################
# 1.生成部署包output

make_output

# 编译成功

echo -e "build done"
exit 0
