import React, { PropTypes } from 'react'

// 無狀態組件
const HeaderComponent = ({
  onChangeText,
  onCreateData,
  List,
}) => (
  <div>
    <h1>Header</h1>
    <input type="text" value={List.get('text')} onChange={onChangeText} />
    <button onClick={onCreateData}>送出</button>
  </div>
)

HeaderComponent.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onCreateData: PropTypes.func.isRequired,
  List: PropTypes.object.isRequired
}

export default HeaderComponent
