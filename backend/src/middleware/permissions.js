// myMiddleware.js
export default function(req, res, next) {
    console.log('Middleware được thực thi');
    next();
  };
  