1. Oauth Login:
   1. Don't modify anything in route.ts
   2. add domain in the google console: https://console.cloud.google.com/apis/credentials?hl=zh-cn&project=monashk8s
   3. Add what you want in auth.config.ts
   4. Add environment stuff in local env and vercel env

2. Normal Login
   1. The auth and registration process is in backend, we interact with nextjs api, because it is http for servers, so we can not use react request from the frontend, we need to re-route the request somehow
   2. The auth.config.ts handles the config of access token stuff, and it hardcodes one user to pass the check, if you want to modify anything, restart the whole process after your modification, otherwise it breaks.


3. How to add new page?
   1. add new variable in /constants/data.ts "navItems"
   2. add path in navItems
   3. build your page with /app/dashboard


4. 