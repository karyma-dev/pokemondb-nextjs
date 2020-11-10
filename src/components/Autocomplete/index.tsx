import React from 'react'
import Downshift from 'downshift'

import Data from '../../assets/data/Pokemons'

const Autocomplete = () => {
    return (
        <div>
            <Downshift>
                {({
                    getLabelProps,
                    getInputProps,
                    getMenuProps,
                    getItemProps,

                    isOpen,
                    highlightedIndex
                }) => {
                    return (
                        <div style={{ position: 'relative' }}>
                            <label {...getLabelProps()}></label>
                            <input {...getInputProps()} />
                            <ul
                                {...getMenuProps({
                                    style: {
                                        height: '300px',
                                        width: '100%',
                                        position: 'absolute',
                                        overflowY: 'scroll'
                                    }
                                })}>
                                {isOpen
                                    ? Data.map((item, i) => (
                                          <li
                                              key={i}
                                              {...getItemProps({
                                                  item,
                                                  style: {
                                                      backgroundColor:
                                                          i === highlightedIndex ? 'gray' : 'none'
                                                  }
                                              })}>
                                              {item}
                                          </li>
                                      ))
                                    : null}
                            </ul>
                        </div>
                    )
                }}
            </Downshift>
        </div>
    )
}

export default Autocomplete
