import React, { useEffect, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import {
  Input,
  InputNumber,
  Form,
  Button,
  useCountdown,
  initI18n,
  Cell,
  RadioGroup,
  useTranslation,
} from 'react-uni-comps';
import * as langs from './langs';

const defaultLang = 'zh';

initI18n(
  {
    zh: {
      translation: langs.zh,
    },
    en: {
      translation: langs.en,
    },
  },
  defaultLang
);

export default function App() {
  const { countdown, isRunning, start, isReStarted } = useCountdown(60);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<any>(defaultLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <PageWrap>
      <Cell
        label={t('changeLang')}
        content={
          <RadioGroup
            options={[
              { label: '中文', value: 'zh' },
              { label: 'EN', value: 'en' },
            ]}
            value={lang}
            onChange={setLang}
          />
        }
      />
      <DemoBlock title={t('login')}>
        <Form toastError>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: t('inputTel') },
              {
                pattern: /^1\d{10}$/,
                message: t('inputTel'),
              },
            ]}
          >
            <InputNumber placeholder={t('inputTel')} clearable maxLength={11} />
          </Form.Item>

          <Form.Item name="code">
            <Input
              clearable
              placeholder={t('inputCode')}
              maxLength={6}
              suffix={
                <Button as="a" onClick={isRunning ? null : start}>
                  {isRunning
                    ? countdown + t('sec')
                    : `${isReStarted ? t('retry') : t('verifycode')}`}
                </Button>
              }
            />
          </Form.Item>

          <Button
            type="primary"
            block
            wait
            style={{
              borderRadius: 20,
              height: 36,
              margin: '20px auto',
            }}
          >
            {t('login')}
          </Button>
        </Form>
      </DemoBlock>
    </PageWrap>
  );
}
