import React, { useState } from 'react';
import { WaterMark, Button, Space } from '../src';

const textProps = {
  content: 'react-uni-comps',
  fontSize: 16,
};

const imageProps = {
  image: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K`,
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
  rotate: 0,
};

export default function App() {
  const [props, setProps] = useState(textProps);

  return (
    <div style={{ padding: 20 }}>
      <Space>
        <Button onClick={() => setProps(textProps)}>普通水印</Button>
        <Button type="primary" onClick={() => setProps(imageProps)}>
          图片水印
        </Button>
      </Space>

      <WaterMark {...props} />
    </div>
  );
}
