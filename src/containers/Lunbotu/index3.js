import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Btn, Icon, Ipt } from 'nova';
import { Panel } from 'CC';
import { MATERIAL_CFG } from '../config';

export default class Material extends PureComponent {
    static propTypes = {
        mode: PropTypes.oneOf(['detail', 'audit', 'edit', 'editAfterReject']),
        formData: PropTypes.object,
        rejectItems: PropTypes.array,
        showItems: PropTypes.array,
        onChangeRejectInfo: PropTypes.func
    }

    static defaultProps = {
        mode: 'edit',
        formData: {},
        rejectItems: [],
        showItems: [
            'businessLicense', 'openingPermit', 'legalPerson',
            'houseCertificate', 'businessPlace', 'access',
            'taxCredit', 'authorization'
        ],
        onChangeRejectInfo: () => { }
    }


    constructor(props) {
        super(props);
        this.state = {
            rejectObj: _.mapValues(_.mapKeys(props.rejectItems, i => i), () => true),
            checkMsgMap: {}
        };
    }

    componentDidMount() {
        const { formData } = this.props;
        if (formData) {
            this.setFormData(formData);
        }
    }

    componentWillReceiveProps(next) {
        const { rejectItems } = this.props;
        if (!_.isEqual(next.rejectItems, rejectItems)) {
            this.setState({
                rejectObj: _.mapValues(_.mapKeys(next.rejectItems, i => i), () => true)
            });
        }
    }

    componentDidUpdate(prev) {
        const { formData } = this.props;
        if (formData !== prev.formData) {
            this.setFormData(formData);
        }
    }

    get isEditStatus() {
        const { mode } = this.props;
        return mode.match('edit');
    }

    get formConfig() {
        const { showItems } = this.props;
        return _.map(showItems, key => ({
            ...MATERIAL_CFG[key],
            key,
            iptKey: `ipt${key}`
        }));
    }

    get list() {
        const { mode, formData } = this.props;
        const { rejectObj, checkMsgMap } = this.state;
        return _.map(this.formConfig, (item) => {
            const {
                tip, title, iptKey, key, renderTip, ...others
            } = item;
            const checkMsg = _.get(checkMsgMap[key], 'msg');
            const isHide = item.fileType === 'pdf' && _.size(_.get(formData, key, [])) <= 0;
            return isHide ? null : (
                <section key={key}>
                    <Panel
                        title={title}
                        wrapClassName={rejectObj[key] || checkMsg ? 'is-error' : ''}
                    >
                        {item.fileType === 'pdf'
                            ? _.map(_.get(formData, key), url => (
                                <Btn
                                    key={url}
                                    type="link"
                                    color="primary"
                                    title="背景调查文件（点击查看）"
                                    onClick={() => window.open(url)}
                                />
                            ))
                            : (
                                <Ipt
                                    {...others}
                                    type="dmpipt-uploadimg"
                                    readonly={
                                        !this.isEditStatus
                                        || (mode === 'editAfterReject' && !rejectObj[key]
                                        )}
                                    onChange={this.checkFormData}
                                    ref={(ref) => {
                                        this[iptKey] = ref;
                                    }}
                                />
                            )
                        }
                    </Panel>
                    {this.isEditStatus && (tip || renderTip) && (
                        <aside className="dmp-company-material-tip">
                            <Icon icon="info" />
                            {tip}
                        </aside>
                    )}
                    {mode === 'audit' ? (
                        <aside className="dmp-company-material-operation">
                            {!rejectObj[key]
                                ? (
                                    <Btn
                                        title="驳回该信息"
                                        color="error"
                                        type="link"
                                        onClick={() => this.handleRejectInfo(key, true)}
                                    />
                                )
                                : (
                                    <Btn
                                        title="取消驳回"
                                        color="primary"
                                        type="link"
                                        onClick={() => this.handleRejectInfo(key, false)}
                                    />
                                )
                            }
                        </aside>
                    ) : null}
                </section>
            );
        });
    }

    handleRejectInfo = (key, value) => {
        const { onChangeRejectInfo } = this.props;

        this.setState((state) => {
            const rejectObj = {
                ...state.rejectObj,
                [key]: value
            };
            onChangeRejectInfo(_.keys(_.pickBy(rejectObj, i => i)));

            return {
                rejectObj
            };
        });
    }

    getRejectInfo = () => {
        const { rejectObj } = this.state;
        const obj = _.pickBy(rejectObj, i => i);
        return _.keys(obj);
    }

    setFormData = (data) => {
        _.forEach(this.formConfig, (i) => {
            if (this[i.iptKey]) {
                this[i.iptKey].setValue(_.get(data, i.key));
            }
        });
    }

    checkFormData = () => {
        const checkMsgMap = {};
        let isChecked = true;
        _.forEach(this.formConfig, (i) => {
            checkMsgMap[i.key] = this[i.iptKey] && this[i.iptKey].checkData();
            if (checkMsgMap[i.key] !== true) {
                isChecked = false;
            }
        });
        this.setState({
            checkMsgMap
        });
        return isChecked;
    }

    getFormData = ({ isChecked }) => {
        if (isChecked && this.checkFormData() !== true) {
            return false;
        }
        return _.mapValues(
            _.mapKeys(this.formConfig, i => i.key),
            i => this[i.iptKey] && this[i.iptKey].getValue()
        );
    }

    render() {
        return (
            <div className="dmp-company-material">
                <header>
                    <h3>图片信息</h3>
                </header>
                <section>
                    {this.list}
                </section>
            </div>
        );
    }
}
