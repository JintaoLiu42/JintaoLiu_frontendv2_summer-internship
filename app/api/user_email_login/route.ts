// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. 从前端获取表单提交的数据
    // 假设前端传过来的是 { email, password }, 你也可以直接叫 password -> pwd
    const { email, password } = await req.json();

    // 2. 构造要发送到后端的 payload
    // 注意，这里后端接口需要是 { "email": "...", "pwd": "..." }
    const payload = {
      email,
      pwd: password
    };

    console.log('构造的 payload:', payload);

    // 3. 请求后端
    const res = await fetch('http://118.138.238.1:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      // 如果返回非 2xx，读取错误的响应体
      const errorBody = await res.text();
      console.error('后端错误响应体:', errorBody);
      throw new Error(`请求失败, 状态码: ${res.status}, body: ${errorBody}`);
    }

    // 解析后端返回结果（比如里边包含 accessToken 等）
    const result = await res.json();

    // 4. 返回给前端
    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error: any) {
    console.error('[API /api/login] Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Something went wrong'
      },
      { status: 500 }
    );
  }
}
