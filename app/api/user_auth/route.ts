import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. 从前端获取表单提交的数据
    const { email, password, isLogin } = await req.json();

    // 2. 根据 isLogin 判断要调用登录还是注册接口
    const backendUrl = isLogin
      ? 'http://118.138.238.1:3000/auth/login'
      : 'http://118.138.238.1:3000/auth/register';

    // 后端 /auth/login 接口要求的请求体
    // {
    //   "email": "xxx",
    //   "password": "xxxx"
    // }
    //
    // 后端 /auth/register 接口要求的请求体结构可能不同，
    // 此处仅示例，具体以你的后端实际需求为准。
    const payload = isLogin
      ? {
          email,      // 登录时，后端需要字段 "email"
          password: password  // 登录时，后端需要字段 "password"
        }
      : {
          ts: [0],
          comm_spec: {
            comm_init_type: 'string',
            src_id: 'string',
            user_id: 'string',
            protocol: {
              type: 'string',
              token: 'string'
            },
            seq_num: 0
          },
          msg_type: 'string',
          msg_sub_type: '',
          body: {
            user_id: email,
            name: 'User',
            email: email,
            password: password,
            phone: '+12345678901',
            gender: '',
            date_of_birth: '2000-01-01',
            profile_image: '',
            address: ''
          }
        };

    console.log('Sending payload to backend =>', payload);

    // 3. 调用后端接口
    const res = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // 如果后端返回非 2xx 状态，抛出异常
    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Error response body:', errorBody);
      throw new Error(`Failed request, status: ${res.status}, body: ${errorBody}`);
    }

    // 解析后端返回结果
    const result = await res.json();
    console.log('Backend Result:', result)

    // 4. 返回给前端
    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error: any) {
    console.error('[API /api/user] Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Something went wrong'
      },
      { status: 500 }
    );
  }
}
