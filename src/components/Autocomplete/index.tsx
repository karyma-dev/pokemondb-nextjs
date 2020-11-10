import React from 'react'
import Downshift from 'downshift'
import { matchSorter } from 'match-sorter'

import Data from './Data'

const getItems = (value: string | null) =>
    value ? matchSorter(Data, value, { keys: ['name'] }) : null

const Autocomplete = () => {
    return (
        <div>
            <Downshift>
                {({
                    getLabelProps,
                    getInputProps,
                    getMenuProps,
                    getItemProps,
                    inputValue,
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
                                {isOpen && getItems(inputValue)
                                    ? getItems(inputValue).map((item, i) => (
                                          <li
                                              key={`${item.name}_${i}`}
                                              {...getItemProps({
                                                  item,
                                                  style: {
                                                      backgroundColor:
                                                          i === highlightedIndex
                                                              ? 'gray'
                                                              : 'transparent'
                                                  }
                                              })}>
                                              {item.name}
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
