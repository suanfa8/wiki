### 集成webhook实现自动刷新

```markdown
# 1.配置webhooks
- 添加webhooks
- 在webhooks中添加刷新配置接口
```

![image-20200723120419412](https://tva1.sinaimg.cn/large/008i3skNgy1gvu8966kr8j32580i4djb.jpg)

![image-20200723120947229](https://tva1.sinaimg.cn/large/008i3skNgy1gvu89ambuyj31j90u00ya.jpg)

```markdown
# 2.解决400错误问题
- 在配置中心服务端加入过滤器进行解决(springcloud中一个坑)
```

```java
@Component
public class UrlFilter  implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
 
    }
 
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest)request;
        HttpServletResponse httpServletResponse = (HttpServletResponse)response;
 
        String url = new String(httpServletRequest.getRequestURI());
 
        //只过滤/actuator/bus-refresh请求
        if (!url.endsWith("/bus-refresh")) {
            chain.doFilter(request, response);
            return;
        }
 
        //获取原始的body
        String body = readAsChars(httpServletRequest);
 
        System.out.println("original body:   "+ body);
 
        //使用HttpServletRequest包装原始请求达到修改post请求中body内容的目的
        CustometRequestWrapper requestWrapper = new CustometRequestWrapper(httpServletRequest);
 
        chain.doFilter(requestWrapper, response);
 
    }
 
    @Override
    public void destroy() {
 
    }
 
    private class CustometRequestWrapper extends HttpServletRequestWrapper {
        public CustometRequestWrapper(HttpServletRequest request) {
            super(request);
        }
 
        @Override
        public ServletInputStream getInputStream() throws IOException {
            byte[] bytes = new byte[0];
            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bytes);
 
            return new ServletInputStream() {
                @Override
                public boolean isFinished() {
                    return byteArrayInputStream.read() == -1 ? true:false;
                }
 
                @Override
                public boolean isReady() {
                    return false;
                }
 
                @Override
                public void setReadListener(ReadListener readListener) {
 
                }
 
                @Override
                public int read() throws IOException {
                    return byteArrayInputStream.read();
                }
            };
        }
    }
 
    public static String readAsChars(HttpServletRequest request)
    {
 
        BufferedReader br = null;
        StringBuilder sb = new StringBuilder("");
        try
        {
            br = request.getReader();
            String str;
            while ((str = br.readLine()) != null)
            {
                sb.append(str);
            }
            br.close();
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        finally
        {
            if (null != br)
            {
                try
                {
                    br.close();
                }
                catch (IOException e)
                {
                    e.printStackTrace();
                }
            }
        }
        return sb.toString();
    }
}
```

![image-20200723121203864](https://tva1.sinaimg.cn/large/008i3skNgy1gvu89qd9crj328s09cadm.jpg)

