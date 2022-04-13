import React, { useEffect, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Popover, Button, Avatar, AutoCenter, Tooltip, Space } from 'react-uni-comps';

export default function App() {
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    document.addEventListener('click', () => {
      Popover.hide();
    });
  }, []);

  return (
    <PageWrap>
      <DemoBlock>
        <Tooltip title="点击会在(120px,300px)显示弹框" placement="bottom-left">
          <Avatar
            ref={ref1}
            onClick={(e) => {
              e.stopPropagation();
              Popover.show({
                placement: 'right',
                left: 120,
                top: 300,
                content: 'step2',
                mask: true,
              });
            }}
          />
        </Tooltip>
      </DemoBlock>

      <DemoBlock>
        <AutoCenter>
          <Avatar ref={ref2}>w</Avatar>
        </AutoCenter>
      </DemoBlock>

      <AutoCenter>
        <Button
          outlined
          onClick={(e) => {
            e.stopPropagation();
            Popover.show({
              placement: 'top',
              anchor: ref2,
              mask: true,
              content: 'step1',
            });
          }}
        >
          show
        </Button>
      </AutoCenter>
    </PageWrap>
  );
}
