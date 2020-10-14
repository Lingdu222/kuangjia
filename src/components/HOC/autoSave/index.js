import React, { PureComponent } from 'react'

let timer
export default ({
  // 默认每一分钟自动保存
  interval = 60000
} = {}) => WrapComp => class extends PureComponent {
  componentDidMount () {
    this.onSave(true)
  }

  componentWillReceiveProps () {
    this.onSave(true)
  }

  componentWillUnmount () {
    clearTimeout(timer)
  }

    onSave = (isRefreshTimer) => {
      if (timer) {
        clearTimeout(timer)
      }
      if (!isRefreshTimer && this.wrapRef.onSave) {
        this.wrapRef.onSave()
      }
      timer = setTimeout(this.onSave, interval)
    }

    render () {
      return (
        <WrapComp {...this.props} ref={(ref) => { this.wrapRef = ref }} />
      )
    }
}
