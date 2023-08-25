import React, { useMemo } from 'react';
import timg from '../assets/images/timg.jpg';
import './HomeHead.less';

export default function HomeHead(props) {
  let { date } = props;

  let time = useMemo(() => {
    let [, month, day] = date.match(/^\d{4}(\d{2})(\d{2})$/);
    let months = [
      '',
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ];
    return {
      day,
      month: months[+month],
    };
  }, [date]);

  return (
    <header className="home-head-box">
      <div className="info">
        <div className="date">
          <span>{time.day}</span>
          <span>{time.month}</span>
        </div>
        <h2 className="title">知乎日报</h2>
      </div>
      <div className="avatar">
        <img src={timg} alt="" />
      </div>
    </header>
  );
}
