import React, { useState } from 'react'
import { Router, useRouter } from 'next/router'
import Downshift from 'downshift'
import { matchSorter } from 'match-sorter'

import Data from './Data'

const getItems = (value: string | null) =>
    value ? matchSorter(Data, value, { keys: ['name'] }) : null

const itemToString = (item) => (item ? item.name : '')

const Autocomplete = () => {
    const [pokemon, setPokemon] = useState('')
    const router = useRouter()

    const onSubmit = (e) => {
        e.preventDefault()

        router.push({
            pathname: `/pokedex/${pokemon}`
        })
    }

    const onChange = (e) => {
        setPokemon(e.name)
    }

    return (
        <div>
            <Downshift onChange={onChange} itemToString={itemToString}>
                {({
                    getInputProps,
                    getMenuProps,
                    getItemProps,
                    inputValue,
                    isOpen,
                    highlightedIndex
                }) => {
                    return (
                        <form style={{ position: 'relative' }} onSubmit={onSubmit}>
                            <input {...getInputProps({})} />
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
                        </form>
                    )
                }}
            </Downshift>
        </div>
    )
}

export default Autocomplete
