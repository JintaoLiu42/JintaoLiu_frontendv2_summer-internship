// app/api/user/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. 从前端获取表单提交的数据
    const { email, password, isLogin } = await req.json();

    // 2. 构造要发送到后端的 payload
    const payload = {
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
        name: 'John Doe',
        email: email,
        password: password,
        phone: '+12345678901',
        gender: 'Male',
        date_of_birth: '2000-01-01',
        profile_image: 'https://example.com/image.jpg',
        address: '123 Main Street, City, Country'
      }
    };
    console.log('38 payload test:', payload);

    // 3. 请求后端
    const res = await fetch('http://118.138.238.1:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const errorBody = await res.text(); // 读取错误的响应体
      console.error('Error response body:', errorBody);
      throw new Error(
        `Failed request, status: ${res.status}, body: ${errorBody}`
      );
    }
    // 解析后端返回结果
    const result = await res.json();

    // 4. 可以根据需要，对 result 做处理后再返回给前端
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
