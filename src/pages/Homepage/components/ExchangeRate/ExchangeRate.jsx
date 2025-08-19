import { useEffect, useState, useMemo } from 'react';
import { SwapOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { selectCodes } from '../../../../feature/codeCurrency/codeSelectors';
import { selectExchangeRate } from '../../../../feature/exchangeRate/exchangeSelectors';

import * as CodeAction from '../../../../feature/codeCurrency/codeSlice'
import * as ExchangeAction from '../../../../feature/exchangeRate/exchangeSlice'


function ExchangeRate() {

  const dispatch = useDispatch()
  const codes = useSelector(selectCodes)
  const exchanges = useSelector(selectExchangeRate)

  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(0)

  useEffect(() => {
    dispatch(CodeAction.getRequest())
  }, [])

  const codeOptions = useMemo(() => codes.map(([code, name]) => ({ value: code, label: code })), [codes]);

  const baseOption = useMemo(() => {
    const found = codes.find(([code]) => code === exchanges.base_code);
    return found ? { value: found[0], label: found[1] } : { value: 'USD', label: 'United States Dollar' };
  }, [codes, exchanges.base_code]);

  const targetOption = useMemo(() => {
    const found = codes.find(([code]) => code === exchanges.target_code);
    return found ? { value: found[0], label: found[1] } : { value: 'VND', label: 'Vietnamese Đồng' };
  }, [codes, exchanges.target_code]);

  const lastUpdate = exchanges.time_last_update_utc 
  ? new Date(exchanges.time_last_update_utc).toLocaleString()
  : '';
  const nextUpdate = exchanges.time_next_update_utc
    ? new Date(exchanges.time_next_update_utc).toLocaleString()
    : '';



  useEffect(() => {
    if (exchanges.base_code && exchanges.target_code) {
      dispatch(ExchangeAction.getRequest({
        from: exchanges.base_code,
        to: exchanges.target_code,
      }))
    }
  }, [])


  useEffect(() => {
    setResult(amount * exchanges.conversion_rate)
  }, [amount, exchanges.conversion_rate])


  const onChangeFrom = (value) => {
    dispatch(ExchangeAction.getRequest({
      from: value,
      to: exchanges.target_code,
    }))
  };

  const onChangeTo = (value) => {
    dispatch(ExchangeAction.getRequest({
      from: exchanges.base_code,
      to: value,
    }))
  };
  
  const handleChangeInput = (e) => {
    setAmount(Number(e.target.value) || 0)
  }

  const handlerClickChange = () => {
    dispatch(ExchangeAction.getRequest({
      from: exchanges.target_code,
      to: exchanges.base_code,
    }))
  }

  const onSearch = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='exchange-rate'>
      <div className='exchange-rate__header'>
        <h2 className='exchange-rate__title'>
          {baseOption.label} to {targetOption.label} Historical Exchange Rates
        </h2>
        <p className='exchange-rate__description'>
          Welcome to the {baseOption.label} to {targetOption.label} history summary. This is the {baseOption.label} ({baseOption.value}) to {targetOption.label} ({targetOption.value}) exchange rate history summary page, detailing historical data from {lastUpdate} to {nextUpdate}.
        </p>
      </div>

      <div className='exchange-rate__card'>
        <div className='exchange-rate__card-header'>
          <p className='exchange-rate__card-label'>Mid-market exchange data</p>
          <p className='exchange-rate__card-value'>1 {baseOption.value} = {exchanges.conversion_rate} {targetOption.value}</p>
        </div>

        <div className='exchange-rate__card-body'>
          <div className='exchange-rate__card-amount'>
            <label className='exchange-rate__card-label'>Amount</label>
            <div className='exchange-rate__form'>
              <Input placeholder="Basic usage" type='number' className='exchange-rate__form-input' value={amount} onChange={(e) => handleChangeInput(e)} />
              <Select
                className='exchange-rate__form-select'
                showSearch
                value={exchanges.base_code}
                placeholder="Select code"
                optionFilterProp="label"
                onChange={onChangeFrom}
                onSearch={onSearch}
                options={codeOptions}
              />
            </div>
          </div>
          <span className='icon' onClick={() => handlerClickChange()}>
            <SwapOutlined />
          </span>
           <div className='exchange-rate__card-amount'>
            <label className='exchange-rate__card-label'>Concerted to</label>
            <div className='exchange-rate__form'>
                <Input placeholder="Basic usage" type='number' className='exchange-rate__form-input' value={result} readOnly/>
                <Select
                  className='exchange-rate__form-select'
                  showSearch
                  value={exchanges.target_code}
                  placeholder="Select code"
                  optionFilterProp="label"
                  onChange={onChangeTo}
                  onSearch={onSearch}
                  options={codeOptions}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeRate
