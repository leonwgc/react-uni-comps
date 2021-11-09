import React, { useState, useLayoutEffect } from 'react';
import { Input, Icon, Button, throttle, styled, clsx } from '../src';

Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2878668_3svlljpx94y.js');

const StyledPage = styled.div`
  transition: all 0.3s ease-in-out;
  &.mobile {
    padding: 20px 27px;
  }

  &.pc {
    padding: 46px 40px 40px;
    background-color: #fff;
    margin: 150px auto 0;
    width: 419px;
    border-radius: 12px;
    box-sizing: border-box;
  }
`;

const StyledVa = styled.div`
  .title {
    height: 34px;
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #000000;
    line-height: 34px;
  }

  .desc {
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #8c8c8c;
    line-height: 18px;
    letter-spacing: 0px;
    margin: 8px 0 30px;
  }

  .user {
    display: flex;
    font-size: 15px;
    height: 16px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #8c8c8c;
    line-height: 16px;
    .icon {
      margin-right: 4px;
    }
  }

  &.pc {
    .desc {
      margin: 16px auto 34px;
    }
    .user {
      height: 36px;
      background: #f7f7f7;
      border-radius: 6px;
      line-height: 36px;
      padding: 0 12px;
      .icon {
        font-size: 18px;
        margin-right: 10px;
        line-height: 40px;
      }
    }
  }
`;

const StyledInput = styled(Input)`
  &.pc {
    height: 36px;
    font-size: 14px;
    margin: 18px auto;
  }
  line-height: 45px;
  background: #f7f7f7;
  border-radius: 23px;
  margin: 12px 0;

  &.mobile {
    height: 45px;
    padding: 0 24px;

    input {
      line-height: 24px;
      height: 24px;
      font-size: 17px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #000000;
    }

    .suffix,
    .prefix {
      font-size: 21px;
      line-height: 21px;
    }

    .prefix {
      color: #8c8c8c;
      margin-right: 9px;
    }
  }

  &.pc {
    .suffix,
    .prefix {
      font-size: 18px;
      line-height: 18px;
    }
  }
`;

export default function App() {
  const [data, setData] = useState({ account: '', pwd: '', eyeOn: false });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
  const { account = '', pwd = '', eyeOn } = data;

  useLayoutEffect(() => {
    const handler = throttle(() => {
      setIsMobile(window.innerWidth < 450);
    });
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isMobile) {
      document.body.style.background = 'linear-gradient(144deg,#fff6e8 4%, #fff4ea 98%)';
    } else {
      document.body.style.background = '#fff';
    }
  }, [isMobile]);

  const onFieldChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  return (
    <StyledPage className={clsx('page', { pc: !isMobile, mobile: isMobile })}>
      <StyledVa className={clsx('container', { pc: !isMobile, mobile: isMobile })}>
        <StyledInput
          placeholder="请输入真实账号"
          value={account}
          onChange={onFieldChange('account')}
          prefix={!isMobile && <Icon type="icon-yonghu" onClick={() => onFieldChange('pwd')('')} />}
        />
        <StyledInput
          placeholder="请输入密码"
          value={pwd}
          type={eyeOn ? 'text' : 'password'}
          onChange={onFieldChange('pwd')}
          prefix={
            !isMobile && (
              <Icon type="icon-lock_filled_regular" onClick={() => onFieldChange('pwd')('')} />
            )
          }
          suffix={
            <>
              {pwd.length > 0 && (
                <Icon
                  type="icon-error_filled_regular"
                  className="icon"
                  onClick={() => onFieldChange('pwd')('')}
                />
              )}
              <Icon
                style={{ marginLeft: 8 }}
                className="icon"
                onClick={() => onFieldChange('eyeOn')(!eyeOn)}
                type={eyeOn ? 'icon-display_outlined_regular' : 'icon-hide_outlined_regular'}
              />
            </>
          }
        />
        <Button block type="primary" style={{ marginTop: 60 }}>
          登录
        </Button>
      </StyledVa>
    </StyledPage>
  );
}
