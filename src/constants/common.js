export const NORMAL_STATUS = '1';
export const FREEZE_STATUS = '0';
export const NORMAL_TWO_STATUS = '2';
export const STORTUP_STATUS = '2';


export const EDIT_STATUS = '10';
export const APPROVAL_STATUS = '20';
export const APPROVAL_NO_STATUS = '21';

export const PADDING_STATUS = '30';
export const RESPLOVE_STATUS = '31';
export const SYNCHRO_STARUS_PDIING = '40';
export const SYNCHRO_STARUS_SUCECSS = '41';
export const SYNCHRO_STARUS_ERROR = '42';

export const STATUS_MAP = {
    [NORMAL_STATUS]: '正常',
    [FREEZE_STATUS]: '冻结'
};

export const RULR_STATUS_MAP = {
    [NORMAL_STATUS]: '合规',
    [FREEZE_STATUS]: '不合规'
};

export const NET_TRANS_MAP = {
    [NORMAL_STATUS]: '兼职',
    [NORMAL_TWO_STATUS]: '全职'
};


export const FORM_ITEM_LAYOUT = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 9 },
        md: { span: 9 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 12 }
    }
};

export const STATUS_CONFIG = {
    [NORMAL_STATUS]: '禁用',
    [STORTUP_STATUS]: '启用'
};
export const STATUS_CONFIG_PUBLIST = {
    [EDIT_STATUS]: '编辑中',
    [APPROVAL_STATUS]: '审批中',
    [APPROVAL_NO_STATUS]: '审批不通过',
    [PADDING_STATUS]: '待部署',
    [RESPLOVE_STATUS]: '已部署',
    [SYNCHRO_STARUS_PDIING]: '同步中',
    [SYNCHRO_STARUS_SUCECSS]: '同步成功',
    [SYNCHRO_STARUS_ERROR]: '同步失败'


};
