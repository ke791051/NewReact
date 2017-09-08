import React, { PropTypes } from 'react'
// import PropTypes from 'prop-types'

const ListComponent = ({
  Lists,
  onDeleteData,
}) => (
  <div>
    <ul>
      {
        Lists.map((List, index) => (
          <li key={index}>
            {List.get('text')}
            <button onClick={onDeleteData(index)}>X</button>
          </li>
        )).toJS()
      }
    </ul>
  </div>
)

ListComponent.propTypes = {
  onDeleteData: PropTypes.func.isRequired,
  Lists: PropTypes.object.isRequired
}

export default ListComponent
