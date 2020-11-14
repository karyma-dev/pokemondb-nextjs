import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Downshift from 'downshift'
import { matchSorter } from 'match-sorter'

import Data from './Data'
import logo from '../../assets/img/icons/search.svg'
import styles from './index.module.css'

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
        <div className={styles.div}>
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
                        <form className={styles.form} onSubmit={onSubmit}>
                            <input className={styles.input} {...getInputProps()} />
                            <ul className={styles.ul} {...getMenuProps()}>
                                {isOpen && getItems(inputValue)
                                    ? getItems(inputValue).map((item, i) => (
                                          <li
                                              key={`${item.name}_${i}`}
                                              {...getItemProps({
                                                  item,
                                                  style: {
                                                      padding: '5px',
                                                      backgroundColor:
                                                          i === highlightedIndex
                                                              ? 'gainsboro'
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

            <img className={styles.icon} src={logo} />
        </div>
    )
}

export default Autocomplete
