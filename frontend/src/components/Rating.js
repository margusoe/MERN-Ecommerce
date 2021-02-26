import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                <i
                    style={{ color }}
                    className={
                        value >= 1
                            ? 'fas fa-star'
                            : value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        value >= 2
                            ? 'fas fa-star'
                            : value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        value >= 3
                            ? 'fas fa-star'
                            : value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        value >= 4
                            ? 'fas fa-star'
                            : value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i
                    style={{ color }}
                    className={
                        value >= 5
                            ? 'fas fa-star'
                            : value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span
                style={{
                    color: '#828282',
                    fontSize: '13px',
                    paddingLeft: '20px',
                }}
            >
                {text && text}
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#fdcc0d',
}

Rating.propTypes = {
    value: PropTypes.number,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating
