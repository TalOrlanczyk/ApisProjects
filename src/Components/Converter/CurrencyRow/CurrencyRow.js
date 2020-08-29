import 'date-fns';
import React, { useState, useRef, memo } from 'react';
import styles from './CurrencyRow.module.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useOutsideClick from '../../../Utils/useOutsideClick/useOutsideClick';
import ListItems from '../../../Containers/ListItems/ListItems';
import ListItem from '../../../Containers/ListItem/ListItem';

const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount, compereCurreny }) => {
    console.log('[CurrencyRow.js] rerender')
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useOutsideClick(wrapperRef, () => {
        if (open)
            setOpen(false)
    });

    return (
        <div className={styles.Currecy}>
            <ListItems open={open} setOpen={()=> setOpen(!open)}>
                <div className={[styles.MoneyValue,styles.listItem].join(" ")} >{selectedCurrency}<ArrowDownwardIcon className={styles.arrowdown} /></div>
                <ul className={styles.list} ref={open ? wrapperRef : null} >
                    {currencyOptions
                        .filter(currency => currency !== compereCurreny)
                        .map((option) =>
                            <ListItem key={option} option={option}  selectedCurrency={selectedCurrency}  onChangeCurrency={(e) => onChangeCurrency(option)}>
                                <span>{option}</span>
                            </ListItem>
                        )
                    }
                </ul>
                </ListItems>
            <input type="number" className={styles.moneyConver} value={amount} onChange={onChangeAmount} />
        </div>
    )
}
export default CurrencyRow;