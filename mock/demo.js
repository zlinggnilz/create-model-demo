import mockjs from 'mockjs';
import { delay } from 'roadhog-api-doc';

const api = {
  'POST /api/list': (req, res) => {
    const body = req.body || {};
    const page = body.current || 1;
    const size = body.size || 20;
    const name = `list|${body.size || 20}`;
    const start = (page - 1) * size + 1;
    res.send(
      mockjs.mock({
        statusCode: '0',
        data: {
          [name]: [
            {
              name: '@name',
              title: '@title',
              email: '@email',
              datetime: '@datetime',
              'id|+1': start,
            },
          ],
          pager: {
            currentPage: page,
            pageSize: size,
            totalRows: 100,
          },
        },
      }),
    );
  },
};
export default delay(api, 1000);
