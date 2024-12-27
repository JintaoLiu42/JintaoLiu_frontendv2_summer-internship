// app/api/user/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. 从前端获取表单提交的数据
    const { email, password, isLogin } = await req.json();

    // 2. 构造要发送到后端的 payload
    const payload = {
      ts: [], // 如需固定四个字符串可自行添加
      comm_spec: {
        comm_init_type: '', // g:gateway, b:board, s:service
        src_id: '', // unique_id
        user_id: email, // 同 email
        protocol: ['oauth', 'jwt'], // 示例：长度为2
        seq_num: 0
      },
      msg_type: '',
      msg_sub_type: '-1',
      body: {
        user_id: email,
        name: '',
        email: email,
        password: password,
        phone: '',
        gender: '',
        'date of birth': '',
        'profile image': '',
        address: ''
      }
    };

    // 3. 请求后端
    const res = await fetch('http://118.138.238.1:3000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      throw new Error(`Failed request, status: ${res.status}`);
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
