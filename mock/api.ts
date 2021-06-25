import mockjs from 'mockjs';
import Config from '../src/utils/config';

const { basePrefix } = Config;

export default {
  // 支持自定义函数，API 参考 express@4
  [`GET ${basePrefix}/get-yk-public-key`]: (req: any, res: any) => {
    const json = mockjs.mock({
      retCode: 0,
      retMsg: '',
      data: { ykPublicKey: mockjs.Random.string(3, 6) },
    });
    res.json(json);
  },
  // GET 可忽略 支持值为 Object 和 Array
  [`GET ${basePrefix}/get-yk-public-key11`]: {
    retCode: 0,
    data: { ykPublicKey: 'dddd' },
    retMsg: 'err',
  },
};
