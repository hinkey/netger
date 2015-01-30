var error_code = {
    //成功返回，不影响下一步操作的0-99
    0: { "message_en": "Success", "message_cn": "成功" },
    1: { "message_en": "The query result is empty", "message_cn": "查询结果为空" },
    //系统错误 100-999
    101: { "message_en": "page_no error", "message_cn": "输入参数page_no要大于等于1的整数" },
    102: { "message_en": "Appkey error", "message_cn": "无效的appkey" },
    103: { "message_en": "send the parameter error", "message_cn": "参数缺失或参数值错误" },
    //    104: {"message_en":"Logical error","message_cn":"mobile/group接口中数据逻辑错误，比如输入的手机号码能查出多个userId,定义只能用一个userId来查groupId"},
    //    105: {"message_en":"Logical error","message_cn":"GroupUserMaps表里没有找到groupId"},
    106: { "message_en": "Data type err", "message_cn": "日期类型错误" },
    107: { "message_en": "binary data err", "message_cn": "历史查询里data的二进制数据包错误" },
    108: { "message_en": "sign error or callseq error", "message_cn": "签名不一致或者时间戳错误" },
    109: { "message_en": "Verification code not found", "message_cn": "内存中没有找到验证码" },
    110: { "message_en": "user message error", "message_cn": "企业用户不存在" },
    111: { "message_en": "token timeout", "message_cn": "手机端令牌超时，超过了24小时" },
    112: { "message_en": "Parameter Lack", "message_cn": "缺少参数" },
    113: { "message_en": "token timeout", "message_cn": "企业用户查询不到" },
    114: { "message_en": "token Lack", "message_cn": "缺少令牌" },
    115: { "message_en": "Parameter validation", "message_cn": "参数验证错误" },
    118: { "message_en": "no find sign&cellseq", "message_cn": "手机端没有带入验证参数(sign参数)" },
    //    119:{"message_en":"user error","message_cn":"要删除的家庭组不是创建者或者提交要删除家庭组的用户信息错误"},
    120: { "message_en": "Parameter error", "message_cn": "参数错误" },
    121: { "message_en": "Token failure", "message_cn": "令牌失效！" },
    122: { "message_en": "Failed to delete", "message_cn": "删除失败！" },
    123: { "message_en": "Memory query is not", "message_cn": "内存查询不到企业用户" },
    124: { "message_en": "Individual user query", "message_cn": "个人用户查询不到" },
    125: { "message_en": "The server connection failed", "message_cn": "数据库连接失败" },
    126: { "message_en": "Without the user information", "message_cn": "该用户不属于公司客户" },
    127: { "message_en": "user message error", "message_cn": "个人用户不存在" },
    //用户错误，直接返回给客户查看的信息1000-9999
    //    1000: {"message_en":"User or password is err","message_cn":"帐号或密码错误"},
    1001: { "message_en": "Existing the record", "message_cn": "注册帐号已存在" },
    1002: { "message_en": "The account does not exist", "message_cn": "帐号不存在" },
    1003: { "message_en": "Enter the user format error", "message_cn": "输入用户格式错误" },
    1005: { "message_en": "password err", "message_cn": "输入的用户名或密码错误" },
    1006: { "message_en": "Not allowed to insert a null value", "message_cn": "请检查有必填项未填写" },
    1007: { "message_en": "Verification code error", "message_cn": "验证码错误" },
    1008: { "message_en": "Want to delete the user does not exist", "message_cn": "要删除的用户不存在" },
    1009: { "message_en": "The login timeout", "message_cn": "企业用户登入超时，请重新登入" },
    1010: { "message_en": "userid isn't register", "message_cn": "有用户id 没注册" },
    1011: { "message_en": "The old password is wrong", "message_cn": "原密码错误" },
    1012: { "message_en": "Save Success", "message_cn": "保存成功" },
    1013: { "message_en": "Existing the record", "message_cn": "设备已经注册" },
    1014: { "message_en": "The query is not the record", "message_cn": "查询不到该月数据" },
    1015: { "message_en": "The highest version", "message_cn": "False" }
};



exports.result = function (error_id, detail, message) {
    var result_data = {
        "error_code": error_id,
        "message_en": error_code[error_id]['message_en'],
        "message_cn": message || error_code[error_id]['message_cn'],
        "detail": detail
    };
    return result_data;
}
exports.error = error_code;