'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import GithubSignInButton from './github-auth-button';
import GoogleSignInButton from './google-auth-button';

// 1. 为了拿到 password，需要在 zod schema 中添加
const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password length cannot be less than 8' })
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const [loading, startTransition] = useTransition();

  // 用于切换登录 / 注册
  const [isLogin, setIsLogin] = useState(false);

  // 默认值，仅作为示例
  const defaultValues = {
    email: '',
    password: ''
  };

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  // 提交表单，先调用我们自己的 /api/user 路由，再执行下一步
  const onSubmit = async (data: UserFormValue) => {
    startTransition(async () => {
      try {
        // ==============================================================================
        // 1. 调用本地 /api/user 路由，而不是直接请求 http://118.138.238.1:3000
        // const response = await fetch('/api/user', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     email: data.email,
        //     password: data.password,
        //     isLogin // 如果需要在后台区分 "登录"或"注册"，可传此值
        //   })
        // });

        // const resData = await response.json();

        // if (!resData.success) {
        //   throw new Error(resData.message || 'Backend error');
        // }
        // // 这里拿到了后端返回的 data: resData.data
        // console.log('Data from /api/user =>', resData.data);
        // ==============================================================================

        // 2. 当上面调用成功后，可以继续使用原有的 NextAuth signIn 逻辑
        await signIn('credentials', {
          email: data.email,
          callbackUrl: callbackUrl ?? '/dashboard'
        });

        // 3. 根据 isLogin 显示不同的提示
        if (isLogin) {
          toast.success('Logged in successfully!');
        } else {
          toast.success('Signed In Successfully!');
        }
      } catch (error: any) {
        console.error('Error in onSubmit:', error);
        toast.error(`Error: ${error?.message || 'Something went wrong!'}`);
      }
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 提交按钮 */}
          <Button disabled={loading} className="ml-auto w-full" type="submit">
            {isLogin ? 'Login with email' : 'Create an account with email'}
          </Button>
        </form>
      </Form>

      {/* 分隔符 */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {/* 其他登录方式：左右分布 */}
      <div className="flex w-full items-center justify-between space-x-2">
        <GoogleSignInButton />
        <GithubSignInButton />
      </div>

      {/* 切换登录/注册模式 */}
      <div className="mt-2 text-center">
        <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </Button>
      </div>
    </>
  );
}
