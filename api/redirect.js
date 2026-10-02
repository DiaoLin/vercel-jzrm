export default function handler(req, res) {
  // 从请求头中获取当前路径
  const path = req.url || '/';
  
  // 构建目标 URL，包含非标准端口 555
  const destination = `https://cloud.jzrm.us.ci:555${path}`;
  
  // 返回 301 永久重定向
  res.writeHead(301, {
    Location: destination
  });
  res.end();
}
