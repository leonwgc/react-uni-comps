import React, { useState } from 'react';
import { Avatar, Image } from 'antd';
import { Skeleton, Switch, Space, styled } from '../src';

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
    <StyledContent>
      <Space style={{ margin: 20 }}>
        <Switch checked={loading} onChange={setLoading} />
        loading
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
              src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
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
            <Avatar
              src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
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
    </StyledContent>
  );
}
