##src/pages/index/index.tsx里
###这块代码开发运行报错
###SyntaxError: Cannot use import statement outside a module
```
import fetchCode from 'b2c-jssdk';


 fetchCode()
      .then((code: any) => {
        console.log('fetchCode code:',code);
      })
      .catch(() => {
        console.log('fetchCode err');
      });
     
```


