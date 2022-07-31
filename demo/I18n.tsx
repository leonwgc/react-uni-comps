import React, { useEffect, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import {
  Input,
  InputNumber,
  Form,
  Button,
  useCountdown,
  Cell,
  RadioGroup,
  i18n,
  initI18n,
  useTranslation,
  useMount,
  Loading,
} from 'react-uni-comps';
import * as langs from './langs';

const defaultLang = 'zh';
const defaultNamespace = 'ns';

initI18n({
  debug: true,
  initImmediate: false, // fix mdx docs
});

export default function App() {
  const { countdown, isRunning, start, isReStarted } = useCountdown(60);
  const { t } = useTranslation(defaultNamespace);
  const [lang, setLang] = useState<any>(defaultLang);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useMount(() => {
    Loading.show('加载中...');

    // 模拟动态加载语言
    setTimeout(() => {
      i18n.addResources('zh', defaultNamespace, langs.zh);
      i18n.addResources('en', defaultNamespace, langs.en);
      setLang('zh');
      Loading.hide();
      setReady(true);
    }, 500);
  });

  return ready ? (
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
      <DemoBlock title={t('app.account.login')}>
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
                <Button as="a" onClick={isRunning ? undefined : start}>
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
            {t('app.account.login')}
          </Button>
        </Form>
      </DemoBlock>
    </PageWrap>
  ) : null;
}
