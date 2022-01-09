import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Skeleton, Switch, Space, styled, Avatar, Spin } from 'react-uni-comps';

const StyledContent = styled.div`
  .article {
    margin-top: 20px;
    display: flex;
    .l {
      flex: 0;
    }
    .r {
      flex: 1;
      margin-left: 16px;
      padding-top: 8px;
    }
  }

  .check {
    .uc-checkbox {
      margin: 0 8px;
    }
  }
`;

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <StyledContent>
          <Space>
            <Switch checked={loading} onChange={setLoading} />
            {loading && <Spin />}加载中...
          </Space>

          <Skeleton
            avatar
            avatarSize={60}
            row={3}
            rowWidth={['38%', '50%']}
            rowHeight={12}
            loading={loading}
            style={{ margin: '24px 20px' }}
          >
            <div className="article">
              <div className="l">
                <Avatar
                  src={
                    <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                />
              </div>
              <div className="r">
                <div> 自 2017 年以来，暴雪的每月平均活跃用户基数从 4600 万降至 2600 万</div>
                <div>
                  最近几周，许多《魔兽世界》的玩家离开游戏转而加入《最终幻想 14》，这使得《最终幻想
                  14》打破了 Steam 最高同时在线人数的记录。
                </div>
              </div>
            </div>
          </Skeleton>
          <Skeleton
            loading={loading}
            avatar
            row={2}
            rowWidth={['38%', '50%', '70%', '70%', '90%']}
            style={{ margin: '24px 20px' }}
          >
            <div className="article">
              <div className="l">
                <Avatar>
                  <img src="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF" />
                </Avatar>
              </div>
              <div className="r">
                <div> 自 2017 年以来，暴雪的每月平均活跃用户基数从 4600 万降至 2600 万</div>
                <div>
                  最近几周，许多《魔兽世界》的玩家离开游戏转而加入《最终幻想 14》，这使得《最终幻想
                  14》打破了 Steam 最高同时在线人数的记录。
                </div>
              </div>
            </div>
          </Skeleton>
        </StyledContent>
      </DemoBlock>
    </PageWrap>
  );
}
